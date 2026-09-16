import React from 'react';

const COMPLIANCE_ITEMS = [
  { title: 'Public Liability Insurance', tag: '[VERIFIED]' },
  { title: 'Workers Compensation Insurance', tag: '[ACTIVE]' },
  { title: 'Food-safe cleaning practices', tag: '[STANDARD]' },
  { title: 'WHS compliance', tag: '[MANDATORY]' },
  { title: 'Safe work practices', tag: '[STANDARD]' },
  { title: 'SWMS (Safe Work Method Statements)', tag: '[DOCUMENTED]' },
  { title: 'Site-specific safety procedures where required', tag: '[ENFORCED]' },
  { title: 'Quality inspections', tag: '[ROUTINE]' },
  { title: 'Service records', tag: '[ARCHIVED]' },
  { title: 'Continuous improvement', tag: '[ONGOING]' },
];

export const Compliance = () => {
  return (
    <section className="relative w-full bg-[#050A10] py-24 md:py-32 border-t border-b border-[rgba(255,255,255,0.05)]">
      <div className="container px-6 md:px-12 lg:px-24">
        
        {/* Editorial Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <p className="tech-label text-[var(--color-accent-blue)] mb-4">COMPLIANCE & WHS</p>
          <h2 className="display leading-tight text-[var(--color-text-primary)]">
            FULLY DOCUMENTED.<br />
            BUILT FOR COMPLIANCE.
          </h2>
        </div>

        {/* Legal Ledger Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 border-t border-[rgba(255,255,255,0.1)]">
          {COMPLIANCE_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center py-6 border-b border-[rgba(255,255,255,0.1)] group hover:bg-[rgba(255,255,255,0.02)] transition-colors px-4 -mx-4"
            >
              <h3 className="text-lg md:text-xl font-medium text-gray-300 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <span className="font-mono text-xs md:text-sm text-gray-600 group-hover:text-[var(--color-accent-gold)] transition-colors tracking-widest shrink-0 ml-4">
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Standard Disclaimer (no fake claims) */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.05)] flex justify-between items-start flex-col md:flex-row gap-6">
          <p className="font-mono text-xs text-gray-500 max-w-xl">
            Grade X maintains strict adherence to occupational health and safety standards. All insurance certificates, SWMS, and site-specific risk assessments are securely documented and available upon request prior to commencement of works.
          </p>
          <div className="font-mono text-xs text-gray-600 shrink-0">
            [OPERATIONAL REGISTRY OPEN]
          </div>
        </div>

      </div>
    </section>
  );
};
