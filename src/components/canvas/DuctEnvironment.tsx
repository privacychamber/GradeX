"use client";

import { useRef } from "react";
import * as THREE from "three";

export default function DuctEnvironment(props: any) {
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  // We build a cinematic, realistic duct segment.
  // Not just a box. It has ribs, flanges, and imperfections.
  
  return (
    <group {...props}>
      {/* Main Duct Tunnel (Double Sided) */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[8, 6, 40]} />
        {/* Cinematic Stainless Steel Material */}
        <meshPhysicalMaterial
          ref={materialRef}
          side={THREE.BackSide}
          color="#8a929a"
          metalness={0.95} // Highly metallic
          roughness={0.15} // Very polished but slightly diffuse
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* Industrial Structural Ribs (Flanges) */}
      {[...Array(12)].map((_, i) => (
        <group key={i} position={[0, 0, -18 + i * 3.5]}>
          <mesh receiveShadow castShadow>
             {/* A flange ringing the duct interior */}
            <boxGeometry args={[7.9, 5.9, 0.1]} />
            <meshStandardMaterial 
              color="#1a1a1a" 
              metalness={0.8} 
              roughness={0.6} 
              side={THREE.DoubleSide}
            />
          </mesh>
          {/* Subtle panel seam / rivet detail approximations */}
          <mesh position={[0, -2.9, 0]} receiveShadow>
             <boxGeometry args={[7.8, 0.05, 0.2]} />
             <meshStandardMaterial color="#111" metalness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
