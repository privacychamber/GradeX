"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DuctEnvironment from "./DuctEnvironment";
import RobotPlaceholder from "./RobotPlaceholder";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function SceneController() {
  const { camera } = useThree();
  const cameraGroupRef = useRef<THREE.Group>(null);
  const robotRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!cameraGroupRef.current || !robotRef.current) return;

    // Reset initial positions
    cameraGroupRef.current.position.set(0, 0, 5); // Start outside duct
    robotRef.current.position.set(0, -1, -5); // Robot inside

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "+=1500", // Scroll for 1500px to play this
          scrub: 1, // Smooth scrubbing
          pin: true, // Pin the hero section while animating the 3D scene
          pinType: "transform"
        },
      });

      // Camera moves into the duct
      tl.to(cameraGroupRef.current.position, {
        z: -15, // Move deep into the duct
        ease: "none",
      }, 0);

      // Robot moves forward as well but slightly slower to give a parallax feel
      tl.to(robotRef.current.position, {
        z: -25,
        ease: "none",
      }, 0);
    });

    return () => {
      ctx.revert(); // Properly clean up pin-spacers and GSAP state
    };
  }, [camera]);

  // Phase 5: Mouse Parallax
  useFrame((state) => {
    if (cameraGroupRef.current) {
      // Very subtle camera rotation based on pointer
      const targetX = (state.pointer.x * Math.PI) / 30;
      const targetY = (state.pointer.y * Math.PI) / 30;
      
      // Interpolate smoothly
      cameraGroupRef.current.rotation.y += (targetX - cameraGroupRef.current.rotation.y) * 0.05;
      cameraGroupRef.current.rotation.x += (-targetY - cameraGroupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <>
      <group ref={cameraGroupRef}>
        <primitive object={camera} />
      </group>
      
      <DuctEnvironment />
      
      <group ref={robotRef}>
        <RobotPlaceholder />
      </group>
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneController />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
