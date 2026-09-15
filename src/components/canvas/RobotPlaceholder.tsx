"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function RobotPlaceholder(props: any) {
  const group = useRef<THREE.Group>(null);
  
  // Subtle mechanical animation
  useFrame((state) => {
    if (group.current) {
      // Very subtle hover/vibration
      group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Main Body */}
      <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.3, 0.7]} />
        <meshStandardMaterial color="#444444" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Tracks / Wheels */}
      <mesh position={[-0.3, 0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.2, 0.8]} />
        <meshStandardMaterial color="#222222" roughness={0.9} />
      </mesh>
      <mesh position={[0.3, 0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.2, 0.8]} />
        <meshStandardMaterial color="#222222" roughness={0.9} />
      </mesh>

      {/* Cleaning Nozzle / Arm */}
      <mesh position={[0, 0.4, 0.3]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.4]} />
        <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Camera / Inspection Light */}
      <mesh position={[0, 0.5, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} toneMapped={false} />
      </mesh>
    </group>
  );
}
