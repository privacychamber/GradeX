"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function DuctEnvironment(props: any) {
  const ductRef = useRef<THREE.Mesh>(null);
  const scanLightRef = useRef<THREE.PointLight>(null);
  const scanPlaneRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    // Scanning line effect that loops
    const time = state.clock.elapsedTime;
    const scanZ = (time % 10) * -3; // Moves from 0 to -30
    
    if (scanLightRef.current) {
      scanLightRef.current.position.z = scanZ;
    }
    if (scanPlaneRef.current) {
      scanPlaneRef.current.position.z = scanZ;
    }
  });

  return (
    <group {...props}>
      {/* The main duct - a long rectangular or cylindrical tunnel */}
      <mesh ref={ductRef} position={[0, 0, -10]} receiveShadow>
        <boxGeometry args={[4, 3, 40]} />
        {/* We use DoubleSide so we can see the inside of the box */}
        <meshStandardMaterial 
          color="#333333" 
          metalness={0.7} 
          roughness={0.4} 
          side={THREE.BackSide} 
        />
      </mesh>

      {/* Internal Duct Lighting to give it depth and atmosphere */}
      <pointLight position={[0, 1, -5]} intensity={2} distance={10} color="#ffffff" />
      <pointLight position={[0, 1, -25]} intensity={2} distance={10} color="#ffffff" />

      {/* Inspection Scanning Light and Plane */}
      <pointLight ref={scanLightRef} position={[0, 0, 0]} intensity={3} distance={15} color="#00ffff" />
      <mesh ref={scanPlaneRef} position={[0, 0, 0]}>
        <planeGeometry args={[3.8, 2.8]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.15} side={THREE.DoubleSide} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* Ambient light for base visibility */}
      <ambientLight intensity={0.2} />
    </group>
  );
}
