import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DigitalEvidence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for the sequential assembly elements
  const headerRef = useRef<HTMLDivElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);
  const measurementRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const complianceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Use matchMedia to respect prefers-reduced-motion
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Create a timeline bound to the scroll of the container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Smooth scrub for the assembly
        }
      });

      // Initial state: Document looks like a blank grid
      const elements = [
        metadataRef.current, 
        measurementRef.current, 
        photosRef.current, 
        areasRef.current, 
        complianceRef.current
      ];
      
      gsap.set(elements, { autoAlpha: 0, y: 20 });
      gsap.set(headerRef.current, { autoAlpha: 0 });

      // 1. Header appears
      tl.to(headerRef.current, { autoAlpha: 1, duration: 0.5 });
      
      // 2. Metadata types in
      tl.to(metadataRef.current, { autoAlpha: 1, y: 0, duration: 0.5 });
      
      // 3. Grasmeter measurement pops in (with numeric transition)
      tl.to(measurementRef.current, { autoAlpha: 1, y: 0, duration: 0.5 })
        .to({ valBefore: 0, valAfter: 4.2 }, {
          valBefore: 4.2,
          valAfter: 0.0,
          duration: 1,
          ease: "none",
          onUpdate: function() {
            const elBefore = document.getElementById('de-measure-before');
            const elAfter = document.getElementById('de-measure-after');
            if(elBefore) elBefore.innerText = this.targets()[0].valBefore.toFixed(1) + 'mm';
            if(elAfter) elAfter.innerText = this.targets()[0].valAfter.toFixed(1) + 'mm';
          }
        }, "<");
      
      // 4. Photos load
      tl.to(photosRef.current, { autoAlpha: 1, y: 0, duration: 0.5 });
      
      // 5. Areas logged
      tl.to(areasRef.current, { autoAlpha: 1, y: 0, duration: 0.5 });
      
      // 6. Compliance & Sign-off completes the document
      tl.to(complianceRef.current, { autoAlpha: 1, y: 0, duration: 0.5 });

      // Hold at the end
      tl.to({}, { duration: 1 });

      return () => {
        tl.kill();
      };
    });

    // Fallback for prefers-reduced-motion (snap to fully visible)
    mm.add("(prefers-reduced-motion: reduce)", () => {
      const elements = [
        metadataRef.current, 
        measurementRef.current, 
        photosRef.current, 
        areasRef.current, 
        complianceRef.current
      ];
      gsap.set(elements, { autoAlpha: 1, y: 0 });
      gsap.set(headerRef.current, { autoAlpha: 1 });
      
      const elBefore = document.getElementById('de-measure-before');
      const elAfter = document.getElementById('de-measure-after');
      if(elBefore) elBefore.innerText = '4.2mm';
      if(elAfter) elAfter.innerText = '0.0mm';
    });

    return () => mm.revert();
  }, []);

  return (
    // 300vh allows enough scroll time for the document to build
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[var(--color-primary-surface)]">
      
      {/* Sticky view */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-center p-6 md:p-12">
        
        {/* Left Side: Headline */}
        <div className="w-full lg:w-1/3 mb-12 lg:mb-0 lg:pr-12 text-center lg:text-left z-10">
          <p className="tech-label text-[var(--color-accent-gold)] mb-4">DIGITAL EVIDENCE</p>
          <h2 className="display leading-[1.05] text-[var(--color-text-primary)]">
            DON'T JUST CLEAN IT.<br/>
            SHOW IT.
          </h2>
        </div>

        {/* Right Side: The Document Stage */}
        <div className="w-full lg:w-2/3 max-w-4xl h-full max-h-[85vh] bg-white text-black p-6 md:p-12 shadow-2xl flex flex-col relative border border-gray-300 mx-auto overflow-y-auto hide-scrollbar">
          
          {/* Static Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none transform -rotate-45">
            <span className="text-8xl font-bold font-mono tracking-widest">GRADE X</span>
          </div>

          {/* Assembly Element 1: Header */}
          <div ref={headerRef} className="border-b-2 border-black pb-6 mb-8 flex justify-between items-start">
            <div>
              <h3 className="font-bold text-3xl tracking-tight leading-none mb-2">SERVICE REPORT</h3>
              <p className="font-mono text-sm text-gray-500">ID: [PLACEHOLDER_49201]</p>
            </div>
            <div className="text-right">
              <div className="font-bold text-xl tracking-widest">GRADE X</div>
              <p className="font-mono text-sm">ISO CERTIFIED</p>
            </div>
          </div>

          {/* Assembly Element 2: Metadata */}
          <div ref={metadataRef} className="grid grid-cols-3 gap-6 font-mono text-sm mb-12">
            <div>
              <span className="text-gray-500 block mb-1">SITE</span>
              <strong>[PLACEHOLDER_LOCATION]</strong>
            </div>
            <div>
              <span className="text-gray-500 block mb-1">SERVICE</span>
              <strong>EXHAUST DEEP CLEAN</strong>
            </div>
            <div>
              <span className="text-gray-500 block mb-1">DATE</span>
              <strong>[PLACEHOLDER_DATE]</strong>
            </div>
          </div>

          {/* Assembly Element 3: Grasmeter Measurements */}
          <div ref={measurementRef} className="mb-12">
            <h4 className="font-bold border-b border-gray-300 pb-2 mb-4 tracking-wider">GREASE THICKNESS (GRASMETER)</h4>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 border border-red-200">
                <span className="tech-label text-red-600 block mb-2">BEFORE (CRITICAL)</span>
                <span id="de-measure-before" className="text-4xl font-mono font-bold text-red-600">[PLACEHOLDER]</span>
              </div>
              <div className="bg-blue-50 p-6 border border-blue-200">
                <span className="tech-label text-[var(--color-accent-blue)] block mb-2">AFTER (BARE METAL)</span>
                <span id="de-measure-after" className="text-4xl font-mono font-bold text-[var(--color-accent-blue)]">[PLACEHOLDER]</span>
              </div>
            </div>
          </div>

          {/* Assembly Element 4: Photos */}
          <div ref={photosRef} className="mb-12">
            <h4 className="font-bold border-b border-gray-300 pb-2 mb-4 tracking-wider">BEFORE / AFTER PHOTOS</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video bg-gray-100 border border-gray-300 flex items-center justify-center">
                <span className="font-mono text-sm text-gray-400">[PLACEHOLDER_PRE_PHOTO]</span>
              </div>
              <div className="aspect-video bg-gray-100 border border-gray-300 flex items-center justify-center relative">
                <span className="font-mono text-sm text-gray-400">[PLACEHOLDER_POST_PHOTO]</span>
                <div className="absolute top-2 right-2 bg-[var(--color-accent-blue)] text-white text-[10px] px-2 py-1 font-bold">VERIFIED</div>
              </div>
            </div>
          </div>

          {/* Assembly Element 5: Areas */}
          <div ref={areasRef} className="grid grid-cols-2 gap-12 font-mono text-sm mb-12">
            <div>
              <h4 className="font-bold border-b border-gray-300 pb-2 mb-4 tracking-wider font-sans">AREAS INSPECTED</h4>
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                <li>[PLACEHOLDER_AREA_1]</li>
                <li>[PLACEHOLDER_AREA_2]</li>
                <li>[PLACEHOLDER_AREA_3]</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold border-b border-gray-300 pb-2 mb-4 tracking-wider font-sans">AREAS CLEANED</h4>
              <ul className="list-disc pl-4 space-y-2 text-[var(--color-accent-blue)] font-bold">
                <li>[PLACEHOLDER_AREA_1]</li>
                <li>[PLACEHOLDER_AREA_2]</li>
                <li>[PLACEHOLDER_AREA_3]</li>
              </ul>
            </div>
          </div>

          {/* Assembly Element 6: Compliance & Recommendations */}
          <div ref={complianceRef} className="mt-auto pt-8 border-t-2 border-black">
            <h4 className="font-bold mb-2 tracking-wider">COMPLIANCE DOCUMENTATION</h4>
            <p className="body text-sm text-gray-600 mb-6">
              System has been cleaned to bare metal in accordance with [PLACEHOLDER_STANDARD]. Certificate of compliance issued.
            </p>
            
            <h4 className="font-bold mb-2 tracking-wider">FUTURE MAINTENANCE RECOMMENDATIONS</h4>
            <p className="body text-sm text-gray-600 mb-8">
              [PLACEHOLDER_MAINTENANCE_ADVICE]
            </p>

            <div className="flex justify-between items-end border-t border-gray-300 pt-6">
              <div className="font-mono text-xs text-gray-500">
                GENERATED: {new Date().toISOString().split('T')[0]}
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-gray-500 mb-2">INSPECTOR SIGNATURE</p>
                <div className="w-48 h-10 border-b border-black"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
