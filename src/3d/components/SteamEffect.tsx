import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const SteamEffect = (props: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      // Slowly move the entire steam block forward
      groupRef.current.position.z = (state.clock.elapsedTime * 0.5) % 10 - 5;
      
      // Undulate individual rings to give a dynamic, volumetric feel
      ringRefs.current.forEach((ring, i) => {
        if (ring) {
          const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1;
          ring.scale.set(scale, scale, 1);
          // Slowly rotate to give a swirling effect
          ring.rotation.z = state.clock.elapsedTime * 0.5 * (i % 2 === 0 ? 1 : -1);
        }
      });
    }
  });

  // Create a series of semi-transparent planes/rings to simulate volumetric steam
  const ringCount = 8;
  const rings = Array.from({ length: ringCount }).map((_, i) => (
    <mesh 
      key={i} 
      ref={(el) => { if (el) ringRefs.current[i] = el; }}
      position={[0, 0, i * 0.2 - 1]} // spaced out along Z
    >
      <planeGeometry args={[1.8, 1.8]} />
      <meshBasicMaterial 
        color="#e0f0ff" 
        transparent 
        opacity={0.15 - (i * 0.01)} 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  ));

  return (
    <group ref={groupRef} {...props}>
      {rings}
    </group>
  );
};
