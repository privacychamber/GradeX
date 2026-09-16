"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Environment, PresentationControls, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { ASSETS } from "@/config/assets";

function RealTechRobot() {
  const { scene } = useGLTF(ASSETS.models.technologyRobot);
  const modelRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={modelRef} dispose={null} scale={2} position={[0, -1, 0]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(ASSETS.models.technologyRobot);

const annotations = [
  { title: "HIGH-PRESSURE CLEANING SYSTEM", top: "15%", left: "10%", lottie: ASSETS.lottie.scanLine },
  { title: "LIVE CAMERA & LED LIGHTING", top: "25%", left: "65%", lottie: ASSETS.lottie.scanLine },
  { title: "REMOTE OPERATION", top: "65%", left: "15%", lottie: ASSETS.lottie.scanLine },
  { title: "PRECISION TRACK SYSTEM", top: "80%", left: "60%", lottie: ASSETS.lottie.scanLine },
];

export default function Technology() {
  return (
    <section id="technology" className="w-full bg-[#F5F7F8] py-24 md:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              Our Technology
            </div>
            <h2 className="text-[clamp(36px,4vw,64px)] font-bold tracking-tight text-[#0A1016] leading-[1.05]">
              Engineered for<br/>real results.
            </h2>
            <p className="text-gray-600 max-w-md leading-relaxed mt-2">
              Our robotic exhaust cleaning technology combines high-pressure cleaning, live camera inspection and precision measurement to deliver a deeper, more consistent clean.
            </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-blue group"
          >
            Explore the Technology <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </motion.button>
        </div>

        {/* Technical Showcase */}
        <div className="relative w-full h-[60vh] md:h-[80vh] bg-white rounded-xl border border-gray-100 shadow-[0_4px_40px_rgba(0,0,0,0.03)] overflow-hidden flex items-center justify-center">
          
          {/* Engineering Annotations Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {annotations.map((ann, i) => (
              <motion.div 
                key={ann.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.5 }}
                className="absolute flex items-center gap-3"
                style={{ top: ann.top, left: ann.left }}
              >
                <div className="w-6 h-6 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center relative overflow-hidden shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                </div>
                <div className="h-[1px] w-8 md:w-12 bg-gray-200 hidden md:block"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#071019] bg-white/90 backdrop-blur px-2.5 py-1.5 rounded border border-gray-100">
                  {ann.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Isolated 3D Canvas */}
          <div className="w-full h-full relative z-0">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [5, 2, 5], fov: 40 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={1.5} />
                <spotLight position={[5, 10, 5]} angle={0.4} penumbra={1} intensity={2} castShadow shadow-bias={-0.0001} />
                <directionalLight position={[-5, 5, -5]} intensity={1} color="#e0f2fe" />
                
                <PresentationControls 
                  global 
                  rotation={[0, -Math.PI / 6, 0]} 
                  polar={[-0.2, Math.PI / 4]} 
                  azimuth={[-Math.PI, Math.PI]}
                  snap
                >
                  <Float rotationIntensity={0.05} floatIntensity={0.1} speed={1}>
                    <RealTechRobot />
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
