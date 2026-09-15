"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

interface ProblemCanvasProps {
  sliderPosition: number; // 0 to 100
}

function SceneController({ sliderPosition }: ProblemCanvasProps) {
  const dirtyGroup = useRef<THREE.Group>(null);
  const cleanGroup = useRef<THREE.Group>(null);

  // We use clipping planes to hide/reveal parts of the models based on the slider
  // The slider is 0 to 100. We map it to the 3D space X coordinate (-2 to +2 roughly)
  const clippingPlaneDirty = useMemo(() => new THREE.Plane(new THREE.Vector3(1, 0, 0), 0), []);
  const clippingPlaneClean = useMemo(() => new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0), []);

  useFrame(() => {
    // Convert 0-100 to a range like -3 to 3 for the 3D plane
    const xPos = ((sliderPosition / 100) * 6) - 3;
    clippingPlaneDirty.constant = xPos;
    clippingPlaneClean.constant = -xPos;
  });

  return (
    <>
      {/* Dirty Duct (Revealed on the left of the slider) */}
      <group ref={dirtyGroup}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[6, 3, 4]} />
          <meshStandardMaterial 
            color="#2A1D0D" 
            roughness={0.9} 
            metalness={0.1}
            clippingPlanes={[clippingPlaneDirty]}
            side={THREE.BackSide}
          />
        </mesh>
      </group>

      {/* Clean Duct (Revealed on the right of the slider) */}
      <group ref={cleanGroup}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[6, 3, 4]} />
          <meshStandardMaterial 
            color="#dddddd" 
            roughness={0.2} 
            metalness={0.8}
            clippingPlanes={[clippingPlaneClean]}
            side={THREE.BackSide}
          />
        </mesh>
      </group>

      <ambientLight intensity={0.5} />
      <pointLight position={[0, 1, 0]} intensity={2} color="#ffffff" />
    </>
  );
}

export default function ProblemCanvas({ sliderPosition }: ProblemCanvasProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 3], fov: 60 }}
        gl={{ localClippingEnabled: true, antialias: true }}
      >
        <SceneController sliderPosition={sliderPosition} />
        <Environment preset="warehouse" />
      </Canvas>
    </div>
  );
}
