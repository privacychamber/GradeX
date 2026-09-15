"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function RobotPlaceholder() {
  const armRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    // Subtle mechanical scanning movement for the robot arm
    if (armRef.current) {
      armRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.3;
      armRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 1.5) * 0.1;
    }
  });

  return (
    <group position={[0, -0.5, 0]}>
      {/* Heavy Machinery Chassis */}
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.8, 2.5]} />
        <meshStandardMaterial color="#0A0A0A" metalness={0.9} roughness={0.4} />
      </mesh>
      
      {/* Tank Tracks (Left and Right) */}
      <mesh receiveShadow castShadow position={[-0.85, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.6, 2.8]} />
        <meshStandardMaterial color="#050505" roughness={0.9} />
      </mesh>
      <mesh receiveShadow castShadow position={[0.85, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.6, 2.8]} />
        <meshStandardMaterial color="#050505" roughness={0.9} />
      </mesh>
      
      {/* Mechanical Base Joint */}
      <mesh position={[0, 0.5, -0.5]} castShadow>
        <cylinderGeometry args={[0.4, 0.5, 0.4, 16]} />
        <meshStandardMaterial color="#222" metalness={0.8} />
      </mesh>
      
      {/* Articulated Inspection/Cleaning Arm */}
      <group ref={armRef} position={[0, 0.7, -0.5]}>
        <mesh castShadow position={[0, 0.5, 0]}>
          <boxGeometry args={[0.2, 1.2, 0.2]} />
          <meshStandardMaterial color="#333" metalness={0.7} />
        </mesh>
        
        {/* Cleaning Head / Camera Array */}
        <mesh castShadow position={[0, 1.2, 0.2]}>
          <boxGeometry args={[0.8, 0.4, 0.6]} />
          <meshStandardMaterial color="#111" metalness={0.9} />
        </mesh>
        
        {/* Inspection Lens */}
        <mesh position={[0, 1.2, 0.52]}>
          <circleGeometry args={[0.12, 16]} />
          <meshBasicMaterial color="#00E5FF" />
        </mesh>
      </group>
    </group>
  );
}
