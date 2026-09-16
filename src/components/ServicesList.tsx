import React, { useEffect, useRef, useState } from 'react';

const CATEGORIES = [
  {
    id: 'hygiene',
    title: 'KITCHEN EXHAUST & HYGIENE',
    services: [
      { title: 'Kitchen Exhaust Cleaning', desc: 'Comprehensive removal of grease throughout the entire exhaust system.' },
      { title: 'Canopy Cleaning', desc: 'Specialized deep cleaning of the primary extraction hood.' },
      { title: 'Robotic Exhaust Cleaning Technology', desc: 'Deployment of remote units for inaccessible ductwork.' },
      { title: 'Steam Cleaning', desc: 'High-pressure, chemical-free eradication of heavy deposits.' },
      { title: 'Kitchen Equipment Hygiene', desc: 'Sanitization and breakdown of core cooking hardware.' },
    ]
  },
  {
    id: 'equipment',
    title: 'KITCHEN EQUIPMENT CLEANING',
    services: [
      { title: 'Grill Recovery', desc: 'Restoration of heavy-use commercial grills to bare metal.' },
      { title: 'Fryer Vat Boil-Outs', desc: 'Carbon removal and deep sanitation of fryer units.' },
      { title: 'Shake Machine Cleaning', desc: 'Hygienic breakdown and sterilization of dairy equipment.' },
      { title: 'Cool Room Cleaning', desc: 'Mold mitigation and surface sanitation in cold storage.' },
      { title: 'Nightly Kitchen Maintenance', desc: 'Recurring surface-level operational cleaning.' },
      { title: 'Monthly Kitchen Deep Cleaning', desc: 'Rigorous periodic reset of the entire kitchen environment.' },
    ]
  },
  {
    id: 'lobby',
    title: 'LOBBY & FRONT-OF-HOUSE',
    services: [
      { title: 'Lobby Cleaning', desc: 'Daily presentation maintenance for high-traffic dining areas.' },
      { title: 'Monthly Lobby Deep Cleaning', desc: 'Intensive restoration of flooring, upholstery, and fixtures.' },
      { title: 'Play Place Cleaning', desc: 'Sanitization protocols for sensitive children\'s play areas.' },
    ]
  },
  {
    id: 'exterior',
    title: 'EXTERIOR & GENERAL',
    services: [
      { title: 'Floor Detailing & Scrubbing', desc: 'Industrial-grade surfacing recovery.' },
      { title: 'Exterior High-Pressure Washing', desc: 'Removal of environmental buildup from facades and walkways.' },
      { title: 'Building & Drive-Thru Pressure Cleaning', desc: 'Targeted grease and oil removal in high-traffic vehicle lanes.' },
      { title: 'Window Cleaning', desc: 'Streak-free clarity for large commercial glazing.' },
      { title: 'Line Marking', desc: 'Crisp, high-visibility restriping for parking and safety zones.' },
      { title: 'General Commercial Cleaning', desc: 'Scalable janitorial solutions for adjoining operational spaces.' },
      // Note: "Hygiene & Sanitation Services" was the 21st, but prompt asked for 20 distinct. 
      // Counting above: 5 + 6 + 3 + 6 = 20 distinct services. Perfect.
    ]
  }
];

export const ServicesList = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Intersection Observer to highlight the active category in the sticky sidebar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper middle of viewport
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[var(--color-primary-base)] py-24 md:py-32">
      <div className="container px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="mb-24 border-b border-[var(--color-border)] pb-8">
          <p className="tech-label text-[var(--color-accent-blue)] mb-4">COMPLETE SERVICES</p>
          <h2 className="display-lg leading-tight">
            BEYOND THE EXHAUST.
          </h2>
          <p className="body text-gray-400 mt-6 max-w-lg">
            Grade X applies the same rigorous, compliance-driven methodology to every aspect of your commercial environment.
          </p>
          
          {/* Discrepancy Flag as requested */}
          <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-700/50 inline-block">
            <p className="font-mono text-xs text-yellow-600 uppercase tracking-widest">
              [SYSTEM FLAG]: BRIEF CITED 21 SERVICES. 20 DISTINCT SERVICES ENUMERATED BELOW. PLEASE CONFIRM FINAL ROSTER.
            </p>
          </div>
        </div>

        {/* Split Screen Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Left Navigation (Desktop) */}
          <div className="hidden lg:block w-1/3 shrink-0">
            <div className="sticky top-32 flex flex-col gap-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`text-left text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
                    activeCategory === cat.id 
                      ? 'text-[var(--color-accent-blue)] pl-4 border-l-2 border-[var(--color-accent-blue)]' 
                      : 'text-gray-600 hover:text-gray-400'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Scrolling Right Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-32">
            {CATEGORIES.map((cat, index) => (
              <article 
                key={cat.id} 
                id={cat.id}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className="scroll-mt-32" // offset for sticky header if any
              >
                {/* Mobile Category Header */}
                <h3 className="lg:hidden tech-label text-[var(--color-accent-blue)] mb-8 border-b border-[var(--color-border)] pb-4">
                  {cat.title}
                </h3>
                
                <div className="flex flex-col">
                  {cat.services.map((service, sIndex) => (
                    <div 
                      key={sIndex}
                      className="group border-b border-[rgba(255,255,255,0.05)] py-8 first:pt-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-300 -mx-6 px-6"
                    >
                      <div className="flex justify-between items-start gap-8">
                        <div>
                          <h4 className="h2 text-xl md:text-2xl mb-2 group-hover:text-[var(--color-accent-blue)] transition-colors">
                            {service.title}
                          </h4>
                          <p className="body text-gray-400 max-w-md">
                            {service.desc}
                          </p>
                        </div>
                        {/* Optional detail indicator */}
                        <div className="shrink-0 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="tech-label text-xs">EXPLORE +</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
