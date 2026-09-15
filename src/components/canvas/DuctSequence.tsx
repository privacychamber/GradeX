"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import RobotPlaceholder from "./RobotPlaceholder";
import DuctEnvironment from "./DuctEnvironment";
import { useScrollStore } from "@/store/scrollStore";

export default function DuctSequence() {
  const greaseMesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    // Scroll progress controls the Dirty -> Clean cross section
    // Between page 2 and 4, we melt away the grease
    const t = useScrollStore.getState().progress;
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
      {/* 1. The Duct Environment spanning Z = 0 to -40 */}
      <DuctEnvironment position={[0, 0, 0]} scale={[2, 2, 8]} />
      
      {/* Extra Spotlight at the entrance to highlight the PBR steel */}
      <spotLight position={[0, 0, 5]} angle={0.5} penumbra={0.5} intensity={5} color="#ffffff" castShadow />
      
      {/* 2. The Grease Layer (Fades out as camera passes) */}
      <mesh ref={greaseMesh} position={[0, 0, -15]}>
        <boxGeometry args={[7.8, 5.8, 20]} />
        {/* Switched to FrontSide and disabled depthWrite to prevent black boxes */}
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.9} 
          transparent 
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* 3. The Robot waiting at Z = -30 */}
      <group position={[3, -2.5, -30]} rotation={[0, -Math.PI / 4, 0]} scale={[2, 2, 2]}>
        <RobotPlaceholder />
        
        {/* Spotlights pointing from Robot */}
        <spotLight position={[0, 1, -2]} angle={0.3} penumbra={0.5} intensity={10} color="#00ffff" />
      </group>
      
      {/* 4. The Clean Architectural Environment at Z = -60 */}
      <group position={[-10, 0, -60]}>
        {/* A sleek, dark glass studio space instead of white */}
        <mesh receiveShadow position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[200, 200]} />
          <meshPhysicalMaterial 
            color="#050505" 
            roughness={0.1} 
            metalness={0.8} 
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        <mesh receiveShadow position={[-20, 0, -20]} rotation={[0, Math.PI / 4, 0]}>
           <boxGeometry args={[10, 20, 1]} />
           <meshStandardMaterial color="#111" metalness={0.5} roughness={0.5} />
        </mesh>

        <pointLight position={[0, 20, 0]} intensity={10} color="#ffffff" distance={100} />
        <spotLight position={[-10, 10, 10]} angle={0.5} penumbra={0.8} intensity={20} color="#00ffff" />
      </group>
    </group>
  );
}
