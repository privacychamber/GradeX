"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlobalScene from "@/components/GlobalScene";
import Navigation from "@/components/Navigation";
import HtmlOverlays from "@/components/HtmlOverlays";
import { useScrollStore } from "@/store/scrollStore";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setProgress } = useScrollStore();

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [setProgress]);

  return (
    <main ref={containerRef} className="relative w-full bg-background selection:bg-brand-cyan selection:text-black">
      <Navigation />
      
      {/* 3D Canvas Fixed Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <GlobalScene />
      </div>

      {/* Native Scrollable DOM */}
      <div className="relative z-10 w-full pointer-events-none">
        <HtmlOverlays />
      </div>
    </main>
  );
}
