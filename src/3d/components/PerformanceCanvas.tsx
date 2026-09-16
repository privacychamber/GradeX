import React, { useRef, useState, useEffect } from 'react';
import { Canvas, CanvasProps } from '@react-three/fiber';

export const PerformanceCanvas: React.FC<CanvasProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile to cap DPR aggressively
    const mql = window.matchMedia('(max-width: 768px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);

    // IntersectionObserver to pause rendering when completely off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px 0px 100px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      mql.removeEventListener('change', handler);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {/* 
        We use frameloop="always" when visible for smooth GSAP scrub, 
        and frameloop="demand" when hidden to halt GPU overhead.
      */}
      <Canvas
        {...props}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        frameloop={isVisible ? 'always' : 'demand'}
        gl={{ 
          antialias: false, 
          powerPreference: 'high-performance', 
          alpha: true 
        }}
      >
        {isVisible && props.children}
      </Canvas>
    </div>
  );
};
