"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import RobotPlaceholder from "./RobotPlaceholder";
import DuctEnvironment from "./DuctEnvironment";
import { useScrollStore } from "@/store/scrollStore";
import { Text } from "@react-three/drei";

export default function DuctSequence() {
  const greaseMesh = useRef<THREE.Mesh>(null);
  const verifyText = useRef<THREE.Group>(null);
  
  // High-performance particle steam effect using InstancedMesh
  const particleCount = 100;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particlesRef = useRef<THREE.InstancedMesh>(null);
  
  useFrame((state, delta) => {
    const t = useScrollStore.getState().progress;
    
    // 1. Grease Retreat (Scrubbed with Scroll 0.4 to 0.7)
    if (greaseMesh.current) {
      if (t < 0.4) {
        greaseMesh.current.scale.z = 1;
        greaseMesh.current.position.z = -15; // Starting position
      } else if (t >= 0.4 && t < 0.7) {
        const progress = (t - 0.4) * (1 / 0.3); // Map 0.4-0.7 to 0-1
        const newZScale = Math.max(0.001, 1 - progress);
        greaseMesh.current.scale.z = newZScale;
        // Shift position backwards so the front edge physically retreats
        greaseMesh.current.position.z = -15 - ((1 - newZScale) * 10);
      } else {
        greaseMesh.current.scale.z = 0.001;
      }
    }
    
    // 2. Verified Text Reveal (0.7 to 0.8)
    if (verifyText.current) {
      if (t > 0.7 && t < 0.8) {
        const progress = (t - 0.7) * 10;
        verifyText.current.scale.setScalar(Math.min(1, progress));
        verifyText.current.visible = true;
      } else if (t >= 0.8) {
        verifyText.current.scale.setScalar(1);
        verifyText.current.visible = true;
      } else {
        verifyText.current.visible = false;
      }
    }

    // 3. Steam Particles (Active around 0.4 to 0.7)
    if (particlesRef.current) {
      const isCleaning = t >= 0.35 && t <= 0.75;
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.getMatrixAt(i, dummy.matrix);
        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
        
        if (isCleaning) {
          // Move particles backwards (simulating steam exhaust)
          dummy.position.z += delta * 2;
          dummy.position.y += delta * 0.5; // Rise slightly
          
          // Reset if they go too far
          if (dummy.position.z > -10) {
            dummy.position.set(
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 4,
              -25 - Math.random() * 5
            );
          }
          dummy.scale.setScalar(Math.min(3, dummy.scale.x + delta));
        } else {
          // Shrink and disappear when not cleaning
          dummy.scale.setScalar(Math.max(0.001, dummy.scale.x - delta * 5));
        }
        
        dummy.updateMatrix();
        particlesRef.current.setMatrixAt(i, dummy.matrix);
      }
      particlesRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Guaranteed Cinematic Lighting */}
      <ambientLight intensity={1.5} />
      
      {/* Forward pointing light into the canopy */}
      <directionalLight 
        position={[0, 0, 15]} 
        intensity={3} 
        color="#ffffff" 
        castShadow 
      />
      
      {/* Deep Duct Lighting */}
      <spotLight 
        position={[0, 4, 0]} 
        angle={0.8}
        penumbra={0.5}
        intensity={20} 
        color="#ffffff" 
        distance={60}
      />
      
      {/* 1. Extraction Canopy & Duct Environment */}
      <DuctEnvironment position={[0, 0, 0]} />
      
      {/* 2. The Physical Grease Layer */}
      <mesh ref={greaseMesh} position={[0, 0, -15]}>
        {/* Slightly smaller than duct to sit tightly on walls */}
        <boxGeometry args={[7.8, 5.8, 40]} />
        <meshStandardMaterial 
          color="#1a1512" // Dark brownish grease
          roughness={0.9} 
          metalness={0.1}
          side={THREE.BackSide} // CRITICAL: BackSide so we are INSIDE the grease tunnel
        />
      </mesh>

      {/* 3. The Cleaning Robot at Z = -25 */}
      <group position={[2.5, -2.8, -25]} rotation={[0, -Math.PI / 6, 0]}>
        <RobotPlaceholder />
        {/* Intense Inspection Light from Robot */}
        <spotLight position={[0, 1.5, 0.5]} angle={0.4} penumbra={0.2} intensity={60} color="#ffffff" distance={15} castShadow />
      </group>
      
      {/* 4. Steam Particles (Instanced for performance) */}
      <instancedMesh ref={particlesRef} args={[undefined, undefined, particleCount]} position={[0, 0, 0]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} depthWrite={false} side={THREE.DoubleSide} />
      </instancedMesh>
      
      {/* 5. Clean Metal Surface Reveal (Verification) */}
      <group ref={verifyText} position={[-2, 0, -18]} rotation={[0, Math.PI / 6, 0]} visible={false}>
        <Text
          fontSize={1.5}
          font="/fonts/Inter-Bold.ttf" // Assuming standard font fallback if missing
          color="#00E5FF"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.1}
        >
          VERIFIED
        </Text>
      </group>
      
    </group>
  );
}
