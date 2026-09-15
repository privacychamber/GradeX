"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, Play, Shield, Wrench, Clock, CheckCircle } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, ContactShadows, PresentationControls, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from "@dotlottie/react-player";
import { ASSETS } from "@/config/assets";

gsap.registerPlugin(ScrollTrigger);

// Load the realistic GLB model
function RealRobotModel() {
  const { scene } = useGLTF(ASSETS.models.heroRobot);
  const modelRef = useRef<THREE.Group>(null);
  
  // Subtle idle animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={modelRef} dispose={null} scale={1.5} position={[0, -1, 0]}>
      <primitive object={scene} />
    </group>
  );
}

// Pre-load model to prevent waterfall
useGLTF.preload(ASSETS.models.heroRobot);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const annotationRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Simulate Logo & Nav Entrance (0.10s & 0.20s)
      tl.fromTo([logoRef.current, navRef.current],
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        0.1
      );

      // Headline Line-by-Line (0.30s - 0.50s)
      if (h1Ref.current) {
        const lines = h1Ref.current.children;
        tl.fromTo(lines,
          { opacity: 0, y: 20, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          { opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, stagger: 0.1 },
          0.3
        );
      }

      // Supporting Copy (0.70s)
      tl.fromTo(pRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        0.7
      );

      // CTA (0.85s)
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        0.85
      );

      // Robot (1.00s)
      tl.fromTo(robotRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
        1.0
      );

      // Technical Annotation (1.15s)
      tl.fromTo(annotationRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8 },
        1.15
      );

      // Trust Strip (1.30s)
      tl.fromTo(trustRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.3
      );
      
      // --- SCROLL ANIMATION ---
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        animation: gsap.to(robotRef.current, {
          scale: 1.1,
          y: -50,
          ease: "none"
        })
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] bg-[#F4F6F7] flex flex-col justify-between overflow-hidden pt-24 pb-8">
      
      {/* Invisible refs for simulating nav/logo entrance if needed, though actual Nav is in layout/page */}
      <div ref={logoRef} className="hidden" />
      <div ref={navRef} className="hidden" />

      <div className="flex-1 w-full max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT: EDITORIAL TYPOGRAPHY */}
        <div className="lg:col-span-6 flex flex-col pt-12 lg:pt-0 z-20">
          
          <div className="mb-4 text-[11px] font-bold tracking-[0.2em] text-brand-blue uppercase">
            Western Australia's Robotic Exhaust Cleaning Specialists
          </div>

          <h1 ref={h1Ref} className="text-[clamp(48px,5vw,84px)] font-bold tracking-tight text-[#071019] leading-[1.05] mb-6">
            <span className="block">A deeper clean</span>
            <span className="block text-gray-400">for a safer</span>
            <span className="block">tomorrow.</span>
          </h1>
          
          <p ref={pRef} className="text-lg text-[#66717B] mb-10 max-w-[480px] leading-relaxed">
            Advanced robotic technology and proven methodology for commercial kitchen exhaust cleaning, with measurable results and detailed documentation.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-white bg-brand-blue px-6 py-4 rounded-md hover:bg-blue-700 transition-all group">
              Request a Quote 
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-[#071019] bg-transparent border border-gray-300 px-6 py-4 rounded-md hover:bg-white hover:border-gray-400 transition-colors">
              <Play size={16} className="fill-current" /> Watch How it Works
            </button>
          </div>
        </div>

        {/* RIGHT: REALISTIC 3D PRESENTATION */}
        <div ref={robotRef} className="lg:col-span-6 h-[50vh] lg:h-[75vh] w-full relative z-10">
          
          {/* LOTTIE Technical Annotation */}
          <div ref={annotationRef} className="absolute top-[20%] left-0 bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm p-3 rounded-lg text-[10px] uppercase font-bold tracking-widest text-[#071019] z-20 flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center relative">
              <DotLottieReact 
                src={ASSETS.lottie.scanLine} 
                loop 
                autoplay 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-400">STATUS</span>
              <span>LIVE INSPECTION</span>
            </div>
          </div>

          <Canvas shadows dpr={[1, 2]} camera={{ position: [3, 1, 6], fov: 40 }}>
            <Suspense fallback={null}>
              {/* Studio Lighting */}
              <ambientLight intensity={1.5} />
              <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={2} castShadow shadow-bias={-0.0001} />
              <directionalLight position={[-5, 5, -5]} intensity={1} color="#e0f2fe" />
              <spotLight position={[0, -2, 5]} angle={0.8} penumbra={1} intensity={0.5} color="#00E5FF" />
              
              <PresentationControls 
                global 
                rotation={[0, -Math.PI / 4, 0]} 
                polar={[-0.1, Math.PI / 8]} 
                azimuth={[-Math.PI / 3, Math.PI / 3]}
                snap
              >
                <Float rotationIntensity={0.1} floatIntensity={0.2} speed={1.5}>
                  <RealRobotModel />
                </Float>
              </PresentationControls>

              <ContactShadows position={[0, -1.2, 0]} opacity={0.6} scale={10} blur={2} far={4} color="#071019" />
              <Environment preset="studio" />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* BOTTOM: TRUST STRIP */}
      <div ref={trustRef} className="w-full bg-white border-t border-gray-200 py-6 px-6 md:px-12 z-20 mt-8 relative">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-3">
            <Wrench className="text-brand-blue" size={20} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1117]">WA's Only Robotic Exhaust Cleaning</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Shield className="text-brand-blue" size={20} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1117]">Fully Insured & Certified</span>
          </div>
          
          <div className="flex items-center gap-3">
            <CheckCircle className="text-brand-blue" size={20} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1117]">Food-Safe Practices</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="text-brand-blue" size={20} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1117]">24/7 Emergency Response</span>
          </div>

        </div>
      </div>
    </section>
  );
}
