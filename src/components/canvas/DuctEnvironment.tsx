"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function DuctEnvironment(props: any) {
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  useFrame((state) => {
    // Subtle environment map rotation for realism
    if (materialRef.current) {
      // Intentionally left blank for potential future shader updates
    }
  });

  return (
    <group {...props}>
      {/* Main Duct Tunnel */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[8, 6, 40]} />
        {/* Inside of the duct */}
        <meshPhysicalMaterial
          ref={materialRef}
          side={THREE.BackSide}
          color="#8a929a"
          metalness={0.8}
          roughness={0.2}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
          envMapIntensity={2.5}
        />
      </mesh>
      
      {/* Supporting structural ribs to make it look industrial */}
      {[...Array(8)].map((_, i) => (
        <group key={i} position={[0, 0, -15 + i * 5]}>
          <mesh receiveShadow castShadow>
            <boxGeometry args={[8.2, 6.2, 0.2]} />
            <meshStandardMaterial 
              color="#2a2a2a" 
              metalness={0.9} 
              roughness={0.5} 
              side={THREE.DoubleSide}
            />
          </mesh>
          {/* Subtle industrial warning lights on ribs */}
          {i % 2 === 0 && (
            <pointLight position={[3.5, 2.5, 0.2]} intensity={0.5} color="#ff3300" distance={2} />
          )}
        </group>
      ))}
    </group>
  );
}
