import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * CleaningEffect
 * Represents the robotic cleaning action (e.g. steam, spray, or brushing).
 * Using simple geometry to keep performance high (no complex particle systems).
 */
export const CleaningEffect = (props: any) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      // Rapid spinning to simulate mechanical brushing or spray dispersal
      ringRef.current.rotation.z += 0.2;
      // Pulsing scale
      const scale = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.1;
      ringRef.current.scale.set(scale, scale, 1);
    }
  });

  return (
    <group {...props}>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.02, 16, 32]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.6} />
      </mesh>
    </group>
  );
};
