"use client";

import { useRef } from "react";
import * as THREE from "three";

export default function DuctEnvironment(props: any) {
  const steelMaterialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  return (
    <group {...props}>
      {/* 1. Extraction Canopy (The Flared Hood at the entrance) */}
      <mesh receiveShadow position={[0, -2, 5]}>
        <cylinderGeometry args={[4, 12, 10, 4, 1, true, Math.PI / 4]} />
        <meshPhysicalMaterial
          side={THREE.DoubleSide}
          color="#3a3f44"
          metalness={0.9}
          roughness={0.4}
          clearcoat={0.5}
          clearcoatRoughness={0.3}
        />
      </mesh>
      
      {/* Canopy Filters (Baffle Filters inside the hood) */}
      <group position={[0, -6, 5]} rotation={[-Math.PI / 8, 0, 0]}>
        {[...Array(6)].map((_, i) => (
          <mesh key={i} position={[-7.5 + i * 3, 0, 0]} receiveShadow>
            <boxGeometry args={[2.8, 6, 0.2]} />
            <meshStandardMaterial color="#222" metalness={0.8} roughness={0.7} />
          </mesh>
        ))}
      </group>

      {/* 2. Main Duct Tunnel (Double Sided) */}
      <mesh receiveShadow position={[0, 0, -30]}>
        {/* A much longer duct: 80 units long to fit the whole sequence */}
        <boxGeometry args={[8, 6, 80]} />
        <meshPhysicalMaterial
          ref={steelMaterialRef}
          side={THREE.BackSide}
          color="#8a929a"
          metalness={0.95}
          roughness={0.15}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* 3. Industrial Structural Flanges along the duct */}
      {[...Array(15)].map((_, i) => (
        <group key={i} position={[0, 0, -2 + i * -5]}>
          <mesh receiveShadow>
            <boxGeometry args={[7.9, 5.9, 0.1]} />
            <meshStandardMaterial 
              color="#1a1a1a" 
              metalness={0.8} 
              roughness={0.6} 
              side={THREE.DoubleSide}
            />
          </mesh>
          <mesh position={[0, -2.9, 0]} receiveShadow>
             <boxGeometry args={[7.8, 0.05, 0.2]} />
             <meshStandardMaterial color="#0a0a0a" metalness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
