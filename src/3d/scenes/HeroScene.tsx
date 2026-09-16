import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PerformanceWrapper } from '../utils/PerformanceWrapper';
import { LightingRig } from './LightingRig';
import { DuctInterior } from '../components/DuctInterior';
import { Robot } from '../components/Robot';
import { scrollState } from '../../store/scrollState';

export const HeroScene = () => {
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 5));
  const robotRef = useRef<THREE.Group>(null);
  const ductRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    // scrollState.progress goes from 0 to 1
    const progress = scrollState.progress;

    // Camera Sequence
    // 0.0 - 0.2: Camera approaches duct entrance
    // 0.2 - 0.5: Camera enters duct
    // 0.5 - 1.0: Camera moves alongside robot
    
    // Z-axis movement through the duct (duct is 10 units long, centered at 0)
    // Entrance is at z = 5. Interior is z < 5.
    const startZ = 8;
    const endZ = -3;
    const currentZ = THREE.MathUtils.lerp(startZ, endZ, progress);
    
    cameraTarget.current.set(0, 0, currentZ);
    state.camera.position.lerp(cameraTarget.current, 0.05);

    // Look slightly downward/forward
    state.camera.lookAt(0, -0.5, currentZ - 5);

    // Move robot ahead of camera
    if (robotRef.current) {
      // Robot starts deep in the duct and moves slightly
      const robotStartZ = 2;
      const robotEndZ = -4;
      robotRef.current.position.z = THREE.MathUtils.lerp(robotStartZ, robotEndZ, progress);
      // Subtle hovering
      robotRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.02 - 0.2;
    }
  });

  return (
    <PerformanceWrapper>
      <LightingRig />
      
      <group ref={ductRef}>
        <DuctInterior />
      </group>

      <group ref={robotRef}>
        <Robot />
      </group>
      
      {/* Fallback dark fog to obscure the far end of the duct */}
      <fog attach="fog" args={['#0A0D14', 2, 10]} />
    </PerformanceWrapper>
  );
};
