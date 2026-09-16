import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PerformanceWrapper } from '../utils/PerformanceWrapper';
import { LightingRig } from './LightingRig';
import { Robot } from '../components/Robot';
import { Duct } from '../components/Duct';
import { scrollState } from '../../store/scrollState';

export const TechnologyScene = () => {
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 5));
  const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));
  const ductGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    // scrollState.techProgress goes from 0 to 1 over the 4 sections
    const progress = scrollState.techProgress;

    // We have 4 phases mapped roughly to quarters of the progress:
    // 0.00 - 0.25: 01 ROBOTIC PLATFORM (Wide isometric)
    // 0.25 - 0.50: 02 INSPECTION (Zoom into camera array)
    // 0.50 - 0.75: 03 CLEANING (Orbit to cleaning mechanics/back)
    // 0.75 - 1.00: 04 EXHAUST SYSTEM (Duct model fades in, wide shot)

    let targetCamPos = new THREE.Vector3(3, 2, 4);
    let targetLookAt = new THREE.Vector3(0, 0, 0);
    let ductOpacity = 0;

    if (progress < 0.25) {
      // 01 PLATFORM
      const p = progress / 0.25;
      targetCamPos.set(4, 2, 5);
      targetLookAt.set(0, 0, 0);
    } else if (progress < 0.5) {
      // 02 INSPECTION (Front Camera)
      const p = (progress - 0.25) / 0.25;
      targetCamPos.set(0, 0.5, 2);
      targetLookAt.set(0, 0, 0.5); // Look at front lens
    } else if (progress < 0.75) {
      // 03 CLEANING (Back/Mechanics)
      const p = (progress - 0.5) / 0.25;
      targetCamPos.set(-3, 1, -3);
      targetLookAt.set(0, 0, -0.5); // Look at back mechanics
    } else {
      // 04 EXHAUST SYSTEM
      const p = (progress - 0.75) / 0.25;
      targetCamPos.set(6, 4, 6);
      targetLookAt.set(0, 0, 0);
      ductOpacity = p; // Fade in the duct
    }

    // Smoothly interpolate camera
    cameraTarget.current.lerp(targetCamPos, 0.05);
    state.camera.position.copy(cameraTarget.current);
    
    lookAtTarget.current.lerp(targetLookAt, 0.05);
    state.camera.lookAt(lookAtTarget.current);

    // Fade duct (placeholder material swap logic for opacity)
    if (ductGroupRef.current) {
      ductGroupRef.current.visible = progress >= 0.75;
      // Note: A true material fade requires traversing children and setting transparent=true, opacity=x
      // For performance in placeholder, we just toggle visibility.
    }
  });

  return (
    <PerformanceWrapper>
      <LightingRig />
      
      {/* Centerpiece Robot */}
      <Robot />
      
      {/* Contextual Duct that appears in Phase 4 */}
      <group ref={ductGroupRef} visible={false}>
        <Duct position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </PerformanceWrapper>
  );
};
