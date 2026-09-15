"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import RobotPlaceholder from "./RobotPlaceholder";
import DuctEnvironment from "./DuctEnvironment";
import { useScrollStore } from "@/store/scrollStore";
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

export default function DuctSequence() {
  const greaseMesh = useRef<THREE.Mesh>(null);
  const cleanEnvGroup = useRef<THREE.Group>(null);
  
  useEffect(() => {
    // Initialize RectAreaLight logic
    RectAreaLightUniformsLib.init();
  }, []);
  
  useFrame(() => {
    const t = useScrollStore.getState().progress;
    
    // Physical Grease Retreat
    // Instead of fading opacity, we shrink it along the Z axis to reveal clean metal behind it
    if (greaseMesh.current) {
      if (t < 0.2) {
        greaseMesh.current.scale.z = 1;
        greaseMesh.current.position.z = -15;
      } else if (t >= 0.2 && t < 0.45) {
        // Map 0.2-0.45 to scale Z 1 -> 0.01
        const progress = (t - 0.2) * 4; 
        const newZScale = Math.max(0.01, 1 - progress);
        greaseMesh.current.scale.z = newZScale;
        // Shift position so it retreats backwards rather than scaling from center
        greaseMesh.current.position.z = -15 - ((1 - newZScale) * 10);
      } else {
        greaseMesh.current.scale.z = 0.001;
      }
    }
  });

  return (
    <group>
      {/* Cinematic RectAreaLights for Automotive Reflections */}
      <rectAreaLight 
        width={10} 
        height={2} 
        color="#ffffff" 
        intensity={5} 
        position={[0, 2, 5]} 
        rotation={[-Math.PI / 2, 0, 0]} 
      />
      
      {/* 1. The Duct Environment spanning Z = 0 to -40 */}
      <DuctEnvironment position={[0, 0, 0]} scale={[2, 2, 8]} />
      
      {/* 2. The Physical Grease Layer */}
      <mesh ref={greaseMesh} position={[0, 0, -15]}>
        {/* Slightly smaller than duct to sit on walls */}
        <boxGeometry args={[7.8, 5.8, 20]} />
        <meshStandardMaterial 
          color="#0a0a0a" // Matte black/brown grease
          roughness={0.9} 
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3. The Robot waiting at Z = -30 */}
      <group position={[3, -2.5, -30]} rotation={[0, -Math.PI / 4, 0]} scale={[2, 2, 2]}>
        <RobotPlaceholder />
        
        {/* Precise Spotlights pointing from Robot Head */}
        <spotLight position={[0, 1, -2]} angle={0.2} penumbra={0.1} intensity={50} color="#00E5FF" distance={20} />
      </group>
      
      {/* 4. The Clean Architectural Environment at Z = -60 */}
      <group ref={cleanEnvGroup} position={[-10, 0, -60]}>
        {/* Sleek, deep space with polished floor */}
        <mesh receiveShadow position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[200, 200]} />
          <meshPhysicalMaterial 
            color="#020202" 
            roughness={0.05} 
            metalness={0.9} 
            clearcoat={1.0}
            clearcoatRoughness={0.05}
          />
        </mesh>

        <rectAreaLight width={50} height={10} color="#ffffff" intensity={2} position={[0, 20, 0]} rotation={[-Math.PI/2, 0, 0]} />
        <spotLight position={[0, 30, 0]} angle={0.8} penumbra={0.5} intensity={20} color="#ffffff" castShadow />
      </group>
    </group>
  );
}
