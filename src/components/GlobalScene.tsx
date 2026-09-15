"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment, Preload } from "@react-three/drei";
import CinematicCamera from "./canvas/CinematicCamera";
import DuctSequence from "./canvas/DuctSequence";
import HtmlOverlays from "./HtmlOverlays";
import { Suspense } from "react";

export default function GlobalScene() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas shadows gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}>
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 5, 40]} />
        
        <Suspense fallback={null}>
          <ScrollControls pages={10} damping={0.2} distance={1.5}>
            {/* The Master Camera that drives the experience */}
            <CinematicCamera />
            
            {/* 3D Environments */}
            <DuctSequence />
            
            {/* HTML Layer synced to Scroll */}
            <Scroll html style={{ width: "100%" }}>
              <HtmlOverlays />
            </Scroll>
            
          </ScrollControls>
          <Environment preset="night" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
