"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Environment, PresentationControls, Float } from "@react-three/drei";
import * as THREE from "three";

// Reusing the clean placeholder robot
function TechRobotPlaceholder() {
  const armRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (armRef.current) {
      // Different idle animation
      armRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.5;
      armRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.2;
    }
  });

  return (
    <group position={[0, -1, 0]} scale={1.5}>
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.6, 2.2]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.1} metalness={0.2} clearcoat={1} />
      </mesh>
      
      <mesh receiveShadow castShadow position={[-0.85, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.4, 2.4]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
      <mesh receiveShadow castShadow position={[0.85, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.4, 2.4]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
      
      <group ref={armRef} position={[0, 0.4, -0.5]}>
        <mesh castShadow position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1.2]} />
          <meshPhysicalMaterial color="#ccc" metalness={0.9} roughness={0.2} />
        </mesh>
        
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

const annotations = [
  { title: "HIGH-PRESSURE CLEANING SYSTEM", top: "10%", left: "10%" },
  { title: "LIVE CAMERA & LED LIGHTING", top: "25%", left: "70%" },
  { title: "REMOTE OPERATION", top: "60%", left: "15%" },
  { title: "PRECISION TRACK SYSTEM", top: "80%", left: "65%" },
];

export default function Technology() {
  return (
    <section id="technology" className="w-full bg-[#F5F7F8] py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A1016]">
              Engineered for<br/>real results.
            </h2>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Our robotic exhaust cleaning technology combines high-pressure cleaning, live camera inspection and precision measurement to deliver a deeper, more consistent clean.
            </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-blue group"
          >
            Explore the Technology <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Technical Showcase */}
        <div className="relative w-full h-[60vh] md:h-[80vh] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center">
          
          {/* Engineering Annotations Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {annotations.map((ann, i) => (
              <motion.div 
                key={ann.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.5 }}
                className="absolute flex items-center gap-3"
                style={{ top: ann.top, left: ann.left }}
              >
                <div className="w-2 h-2 rounded-full bg-brand-blue shrink-0 relative">
                  <div className="absolute inset-0 rounded-full bg-brand-blue animate-ping opacity-50"></div>
                </div>
                <div className="h-[1px] w-8 md:w-16 bg-brand-blue/30 hidden md:block"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-800 bg-white/80 backdrop-blur px-2 py-1 rounded">
                  {ann.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Isolated 3D Canvas */}
          <div className="w-full h-full relative z-0">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [5, 3, 5], fov: 45 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={1.5} />
                <spotLight position={[5, 10, 5]} angle={0.4} penumbra={1} intensity={3} castShadow shadow-bias={-0.0001} />
                <directionalLight position={[-5, 5, -5]} intensity={1} color="#e0f2fe" />
                
                <PresentationControls 
                  global 
                  rotation={[0, -Math.PI / 6, 0]} 
                  polar={[-0.2, Math.PI / 4]} 
                  azimuth={[-Math.PI / 2, Math.PI / 2]}
                  config={{ mass: 2, tension: 400 }}
                  snap={{ mass: 4, tension: 400 }}
                >
                  <Float rotationIntensity={0.1} floatIntensity={0.2} speed={1}>
                    <TechRobotPlaceholder />
                  </Float>
                </PresentationControls>

                <Environment preset="studio" />
              </Suspense>
            </Canvas>
          </div>

        </div>

      </div>
    </section>
  );
}
