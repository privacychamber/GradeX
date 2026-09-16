import React from 'react';
import { PerformanceCanvas } from '../3d/components/PerformanceCanvas';
import { SteamScene } from '../3d/scenes/SteamScene';

export const SteamCleaning = () => {
  return (
    // A standard 150vh section for a prolonged cinematic moment
    <section className="relative w-full h-[150vh] bg-[#0A0D14]">
      
      {/* Sticky container to lock the canvas in view while the user scrolls past */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Background 3D Canvas */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <PerformanceCanvas 
            shadows
            camera={{ position: [0, 0, 6], fov: 50 }}
          >
            <SteamScene />
          </PerformanceCanvas>
        </div>

        {/* Foreground Editorial Typography */}
        <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
          <div className="container grid-editorial">
            <div className="col-span-12 md:col-span-8 lg:col-span-6 lg:col-start-7 text-right">
              <h2 className="display-lg leading-[1.05] text-[var(--color-text-primary)] mb-6 drop-shadow-2xl">
                DEEP CLEAN.
              </h2>
              <p className="tech-label text-[var(--color-accent-blue)] mb-4">
                LESS RELIANCE ON HARSH CHEMICALS.
              </p>
              <p className="body ml-auto max-w-sm text-gray-300">
                Our specialized high-pressure steam eradication process strips heavy grease back to bare metal without damaging your system infrastructure.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
