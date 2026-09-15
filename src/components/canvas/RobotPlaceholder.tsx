"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function RobotPlaceholder(props: any) {
  const robotGroup = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (robotGroup.current) {
      // Subtle hovering effect
      robotGroup.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
    if (armRef.current) {
      // Arm scanning motion
      armRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
    if (headRef.current) {
      // Head looking around
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  // Materials
  const carbonMaterial = new THREE.MeshPhysicalMaterial({
    color: "#111",
    metalness: 0.9,
    roughness: 0.6,
    clearcoat: 0.8,
    clearcoatRoughness: 0.2
  });

  const steelMaterial = new THREE.MeshPhysicalMaterial({
    color: "#aaa",
    metalness: 0.8,
    roughness: 0.3,
  });

  return (
    <group ref={robotGroup} {...props}>
      {/* Base/Chassis */}
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.4, 2]} />
        <primitive object={carbonMaterial} attach="material" />
      </mesh>

      {/* Tracks (Left and Right) */}
      <mesh receiveShadow castShadow position={[-0.85, 0, 0]}>
        <boxGeometry args={[0.2, 0.45, 2.2]} />
        <primitive object={carbonMaterial} attach="material" />
      </mesh>
      <mesh receiveShadow castShadow position={[0.85, 0, 0]}>
        <boxGeometry args={[0.2, 0.45, 2.2]} />
        <primitive object={carbonMaterial} attach="material" />
      </mesh>

      {/* Central Pillar */}
      <mesh receiveShadow castShadow position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.6, 16]} />
        <primitive object={steelMaterial} attach="material" />
      </mesh>

      {/* Robotic Arm Assembly */}
      <group ref={armRef} position={[0, 0.8, 0]}>
        {/* Arm Base */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[0.4, 0.8, 0.4]} />
          <primitive object={carbonMaterial} attach="material" />
        </mesh>

        {/* Head/Scanner */}
        <group ref={headRef} position={[0, 0.5, 0.2]}>
          <mesh receiveShadow castShadow>
            <boxGeometry args={[0.8, 0.4, 0.6]} />
            <primitive object={steelMaterial} attach="material" />
          </mesh>
          {/* Laser Scanner Lens */}
          <mesh position={[0, 0, 0.35]}>
            <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
            <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={2} />
          </mesh>
        </group>
      </group>

      {/* Status LEDs */}
      <mesh position={[0.6, 0.25, 0.95]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} />
      </mesh>
      <mesh position={[-0.6, 0.25, 0.95]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}
