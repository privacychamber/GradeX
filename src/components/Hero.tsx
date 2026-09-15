"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Wrench, Clock, CheckCircle } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Environment, ContactShadows, PresentationControls, Float } from "@react-three/drei";
import * as THREE from "three";

// A minimal, clean placeholder robot built natively so we don't block on GLB loading yet
function CleanRobotPlaceholder() {
  const armRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (armRef.current) {
      armRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group position={[0, -1, 0]}>
      {/* Sleek white chassis */}
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.6, 2.2]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.2} metalness={0.1} clearcoat={1} />
      </mesh>
      
      {/* Matte black tracks */}
      <mesh receiveShadow castShadow position={[-0.85, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.4, 2.4]} />
        <meshStandardMaterial color="#111111" roughness={0.9} />
      </mesh>
      <mesh receiveShadow castShadow position={[0.85, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.4, 2.4]} />
        <meshStandardMaterial color="#111111" roughness={0.9} />
      </mesh>
      
      {/* Articulated Arm */}
      <group ref={armRef} position={[0, 0.4, -0.5]}>
        <mesh castShadow position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1.2]} />
          <meshPhysicalMaterial color="#cccccc" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Cleaning Head / Camera */}
        <mesh castShadow position={[0, 1.3, 0.2]}>
          <boxGeometry args={[0.6, 0.3, 0.5]} />
          <meshStandardMaterial color="#0A1016" />
        </mesh>
        
        <mesh position={[0, 1.3, 0.46]}>
          <circleGeometry args={[0.08, 32]} />
          <meshBasicMaterial color="#00E5FF" />
        </mesh>
      </group>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-[70px] bg-[#F8FAFC] flex flex-col justify-between overflow-hidden">
      
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left: Editorial Typography */}
        <div className="lg:col-span-5 flex flex-col pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0A1016] leading-[1.05] mb-6">
              A deeper clean<br />
              <span className="text-gray-400">for a safer</span><br />
              tomorrow.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              Robotic exhaust cleaning for commercial kitchens. Technology, measurable results, and full compliance documentation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white bg-brand-blue px-6 py-3.5 rounded hover:bg-blue-700 transition-colors">
                Request a Quote <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#0A1016] px-6 py-3.5 rounded hover:bg-gray-100 transition-colors">
                <Play size={16} className="fill-current" /> Watch Video
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: 3D Product Showcase (Isolated) */}
        <div className="lg:col-span-7 h-[50vh] lg:h-[80vh] w-full relative">
          
          {/* Subtle Technical Annotation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-1/4 right-0 bg-white/80 backdrop-blur border border-gray-200 shadow-sm p-3 rounded text-[10px] uppercase font-bold tracking-widest text-gray-800 z-20 flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
            Precision Cleaning System
          </motion.div>

          <Canvas shadows dpr={[1, 2]} camera={{ position: [3, 2, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-bias={-0.0001} />
              
              <PresentationControls 
                global 
                rotation={[0, -Math.PI / 4, 0]} 
                polar={[-0.1, Math.PI / 4]} 
                azimuth={[-Math.PI / 2, Math.PI / 2]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
              >
                <Float rotationIntensity={0.2} floatIntensity={0.5} speed={2}>
                  <CleanRobotPlaceholder />
                </Float>
              </PresentationControls>

              <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
              <Environment preset="studio" />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Bottom: Trust Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full bg-white border-t border-gray-200 py-6 px-6 md:px-12 z-20 relative"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-3">
            <Wrench className="text-brand-blue" size={24} strokeWidth={1.5} />
            <span className="text-xs font-bold uppercase tracking-wide text-gray-800">WA's Only Robotic Exhaust Cleaning</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Shield className="text-brand-blue" size={24} strokeWidth={1.5} />
            <span className="text-xs font-bold uppercase tracking-wide text-gray-800">Fully Insured & Certified</span>
          </div>
          
          <div className="flex items-center gap-3">
            <CheckCircle className="text-brand-blue" size={24} strokeWidth={1.5} />
            <span className="text-xs font-bold uppercase tracking-wide text-gray-800">Food-Safe Practices</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="text-brand-blue" size={24} strokeWidth={1.5} />
            <span className="text-xs font-bold uppercase tracking-wide text-gray-800">24/7 Emergency Response</span>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
