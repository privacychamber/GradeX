"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import CinematicCamera from "./canvas/CinematicCamera";
import DuctSequence from "./canvas/DuctSequence";
import { EffectComposer, DepthOfField, Bloom } from "@react-three/postprocessing";
import { useEffect, useState } from "react";

export default function GlobalScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Basic mobile detection for performance
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 bg-[#020202]">
      <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: false }}>
        {/* Subtle dark fog for depth */}
        <fog attach="fog" args={["#020202", 10, 100]} />
        
        {/* Minimal ambient light - most lighting comes from RectAreaLights */}
        <ambientLight intensity={0.1} />
        
        <CinematicCamera />
        <DuctSequence />
        
        {/* Environment map for realistic metal reflections without blooming */}
        <Environment preset="city" background={false} blur={0.8} />

        {/* Cinematic Post-Processing */}
        <EffectComposer>
          {/* Depth of Field only on Desktop for performance */}
          {!isMobile && (
            <DepthOfField 
              target={[0, 0, -30]} // Focus on the robot
              focalLength={0.5} 
              bokehScale={4} 
              height={480} 
            />
          )}
          {/* Micro bloom for specular highlights */}
          <Bloom luminanceThreshold={1.5} luminanceSmoothing={0.9} height={300} opacity={0.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
