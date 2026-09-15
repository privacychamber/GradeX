"use client";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import RobotPlaceholder from "./RobotPlaceholder";
import DuctEnvironment from "./DuctEnvironment";

export default function DuctSequence() {
  const scroll = useScroll();
  const greaseMesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    // Scroll offset controls the Dirty -> Clean cross section
    // Between page 2 and 4, we melt away the grease
    const t = scroll.offset;
    if (greaseMesh.current) {
      if (t > 0.2 && t < 0.4) {
        // Map 0.2-0.4 to opacity 1 -> 0
        const opacity = 1 - ((t - 0.2) * 5);
        (greaseMesh.current.material as THREE.MeshStandardMaterial).opacity = Math.max(0, opacity);
      } else if (t >= 0.4) {
        (greaseMesh.current.material as THREE.MeshStandardMaterial).opacity = 0;
      } else {
        (greaseMesh.current.material as THREE.MeshStandardMaterial).opacity = 1;
      }
    }
  });

  return (
    <group>
      {/* 1. The Duct Environment spanning Z = 0 to -80 */}
      <DuctEnvironment position={[0, 0, -30]} scale={[2, 2, 8]} />
      
      {/* 2. The Grease Layer (Fades out as camera passes) */}
      <mesh ref={greaseMesh} position={[0, 0, -40]}>
        <boxGeometry args={[7.8, 5.8, 30]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.9} 
          transparent 
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* 3. The Robot waiting at Z = -60 */}
      <group position={[3, -2.5, -60]} rotation={[0, -Math.PI / 4, 0]} scale={[2, 2, 2]}>
        <RobotPlaceholder />
        
        {/* Spotlights pointing from Robot */}
        <spotLight position={[0, 1, -2]} angle={0.3} penumbra={0.5} intensity={5} color="#00ffff" />
      </group>
      
      {/* 4. The Clean Architectural Environment at Z = -100 */}
      <group position={[-10, 0, -100]}>
        {/* A sleek, white/glass studio space */}
        <mesh receiveShadow position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
        </mesh>
        <pointLight position={[0, 10, 0]} intensity={2} color="#ffffff" />
      </group>
    </group>
  );
}
