"use client";

import { Suspense, useRef, useEffect, useMemo } from "react";
import { ArrowRight, Play, Shield, Wrench, Clock, CheckCircle } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, PresentationControls, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSETS } from "@/config/assets";

gsap.registerPlugin(ScrollTrigger);

// Load the realistic GLB model
function RealRobotModel() {
  const { scene } = useGLTF(ASSETS.models.heroRobot);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const modelRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={modelRef} dispose={null} scale={1.5}>
      <primitive object={clonedScene} />
    </group>
  );
}


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
    <section ref={containerRef} className="relative w-full min-h-[90vh] bg-gradient-to-br from-[#050A10] via-[#0A101A] to-[#071019] flex flex-col justify-between overflow-hidden pt-24 pb-8">
      
      {/* Subtle glowing radial gradient behind the robot */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Invisible refs for simulating nav/logo entrance if needed, though actual Nav is in layout/page */}
      <div ref={logoRef} className="hidden" />
      <div ref={navRef} className="hidden" />

      <div className="flex-1 w-full max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT: EDITORIAL TYPOGRAPHY */}
        <div className="lg:col-span-6 flex flex-col pt-12 lg:pt-0 z-20">
          
          <div className="mb-4 text-[11px] font-bold tracking-[0.2em] text-brand-cyan uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
            Western Australia's Robotic Exhaust Cleaning Specialists
          </div>

          <h1 ref={h1Ref} className="text-[clamp(48px,5vw,84px)] font-bold tracking-tight text-white leading-[1.05] mb-6">
            <span className="block">Precision.</span>
            <span className="block text-gray-500">Technology.</span>
            <span className="block">Compliance.</span>
          </h1>
          
          <p ref={pRef} className="text-lg text-gray-400 mb-10 max-w-[480px] leading-relaxed">
            Advanced equipment and proven methodology for professional commercial kitchen exhaust cleaning.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="btn-uiverse flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-[#071019] bg-brand-cyan px-6 py-4 rounded-md">
              BOOK INSPECTION
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-white bg-transparent border border-white/20 px-6 py-4 rounded-md hover:bg-white/5 transition-colors">
              <Play size={16} className="fill-brand-cyan text-brand-cyan" /> Watch How it Works
            </button>
          </div>
        </div>

        {/* RIGHT: REALISTIC 3D PRESENTATION */}
        <div ref={robotRef} className="lg:col-span-6 h-[50vh] lg:h-[75vh] w-full relative z-10">
          
          {/* LOTTIE Technical Annotation */}
          <div ref={annotationRef} className="absolute top-[20%] left-0 glass-panel p-3 rounded-lg text-[10px] uppercase font-bold tracking-widest text-white z-20 flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center relative">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-[pulse_1.5s_ease-in-out_infinite]"></div>
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
      <div ref={trustRef} className="w-full glass-panel border-t border-white/5 py-6 px-6 md:px-12 z-20 mt-8 relative">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-3">
            <Wrench className="text-brand-cyan" size={20} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300">WA's Only Robotic Exhaust Cleaning</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Shield className="text-brand-cyan" size={20} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300">Fully Insured & Certified</span>
          </div>
          
          <div className="flex items-center gap-3">
            <CheckCircle className="text-brand-cyan" size={20} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300">Food-Safe Practices</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="text-brand-cyan" size={20} strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300">24/7 Emergency Response</span>
          </div>

        </div>
      </div>
    </section>
  );
}
