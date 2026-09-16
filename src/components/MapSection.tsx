import React from 'react';

export const MapSection = () => {
  return (
    <section className="relative w-full bg-[#0A0D14] py-32 overflow-hidden border-t border-[rgba(255,255,255,0.05)]">
      
      {/* Background Graphic: Understated WA Abstraction */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
        {/* A simple, highly understated geometric approximation / bounding box of WA to serve as a high-end placeholder until the exact vector is provided */}
        <svg viewBox="0 0 100 100" className="w-full h-full" stroke="var(--color-accent-blue)" strokeWidth="0.5" fill="none">
          <path d="M40,10 L80,10 L80,90 L20,90 L20,50 L10,40 Z" />
          {/* Perth Highlight */}
          <circle cx="22" cy="78" r="1" fill="var(--color-accent-gold)" />
          <circle cx="22" cy="78" r="4" stroke="var(--color-accent-gold)" strokeWidth="0.2" className="animate-pulse" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Headlines */}
          <div>
            <p className="tech-label text-[var(--color-accent-blue)] mb-4">WESTERN AUSTRALIA</p>
            <h2 className="display leading-tight text-[var(--color-text-primary)] mb-8">
              BUILT IN WA.<br />
              WORKING ACROSS WA.
            </h2>
            
            <p className="body text-gray-400 max-w-md mb-8">
              Grade X is a Western Australian owned and operated company. We understand the specific regulatory requirements and logistical realities of operating across this state.
            </p>

            {/* Perth Focus */}
            <div className="border-l-2 border-[var(--color-accent-gold)] pl-6 mb-12">
              <h3 className="tech-label text-white mb-2">HEADQUARTERED IN PERTH</h3>
              <p className="font-mono text-sm text-gray-500">
                Centralized dispatch and specialized equipment staging.
              </p>
            </div>
          </div>

          {/* Right Column: Emergency Response */}
          <div className="flex flex-col justify-center">
            <div className="bg-[#111520] border border-[rgba(255,255,255,0.05)] p-8 md:p-12 relative overflow-hidden">
              
              {/* Subtle emergency hazard striping */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--color-accent-gold)_10px,var(--color-accent-gold)_20px)] opacity-30"></div>

              <h3 className="h2 text-[var(--color-text-primary)] mb-4">EMERGENCY RESPONSE</h3>
              <p className="body text-gray-400 mb-8">
                Kitchen exhaust fires and severe compliance breaches require immediate, specialized intervention. Grade X provides dedicated emergency recovery services.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,0.05)] pb-4">
                  <span className="font-mono text-xs text-[var(--color-accent-blue)] w-24">CAPABILITY</span>
                  <span className="text-sm text-gray-300">Rapid deployment for critical hazard mitigation.</span>
                </div>
                <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,0.05)] pb-4">
                  <span className="font-mono text-xs text-[var(--color-accent-blue)] w-24">COVERAGE</span>
                  <span className="text-sm text-gray-300">Greater Perth Metropolitan and surrounding regions.</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[var(--color-accent-blue)] w-24">ACTION</span>
                  <a href="#quote" className="text-sm text-[var(--color-accent-gold)] font-bold hover:underline tracking-widest">
                    CONTACT DISPATCH →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
