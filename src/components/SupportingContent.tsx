import React, { useState } from 'react';

// --- DATA SCHEMA (Prepared for CMS Integration) ---

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  imageUrl?: string;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Data Arrays
const CASE_STUDIES: CaseStudy[] = [];
const TESTIMONIALS: Testimonial[] = [];

const FAQS: FAQItem[] = [
  {
    id: 'freq',
    question: 'How frequently should commercial kitchen exhaust systems be cleaned?',
    answer: 'Cleaning frequency is dictated by the volume and type of cooking performed, alongside strict compliance standards (e.g., AS 1851). High-volume environments utilizing solid fuels or deep fryers require more frequent servicing to mitigate fire risks. We assess each site individually to determine a compliant schedule.'
  },
  {
    id: 'robot',
    question: 'How does the robotic cleaning process differ from manual cleaning?',
    answer: 'Traditional manual cleaning is inherently limited by human reach and duct geometry. Our robotic platform provides high-definition visual access and applies high-pressure steam deep inside previously inaccessible horizontal runs and vertical risers, ensuring the entire system is stripped to bare metal.'
  },
  {
    id: 'urgent',
    question: 'Does Grade X provide urgent or emergency response services?',
    answer: 'Yes. We maintain centralized dispatch capabilities from our Perth headquarters to provide rapid deployment for critical hazard mitigation and severe compliance breaches across the Greater Perth Metropolitan area.'
  },
  {
    id: 'report',
    question: 'What evidence and reporting do I receive post-service?',
    answer: 'Every service concludes with a comprehensive Operational Report. This includes pre- and post-clean photographic evidence, objective grease thickness measurements (Grasmeter data), a breakdown of areas inspected/cleaned, and the necessary certification documentation for compliance.'
  },
  {
    id: 'scope',
    question: 'Do you only clean exhaust systems?',
    answer: 'No. While we specialize in exhaust systems, our rigorous methodology scales to include heavy kitchen equipment (grills, fryers, cool rooms), front-of-house areas (lobbies, play places), and exterior facilities (pressure washing, line marking). [PLACEHOLDER_DETAILS on specific scope limitations].'
  }
];


// --- COMPONENTS ---

export const SupportingContent = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[var(--color-primary-base)] py-24 md:py-32">
      <div className="container px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left Column: Case Studies & Feedback */}
          <div>
            <div className="mb-16">
              <p className="tech-label text-[var(--color-accent-blue)] mb-4">CASE STUDIES</p>
              <h2 className="display-sm text-[var(--color-text-primary)] mb-8">
                PROVEN IN THE FIELD.
              </h2>
              
              {CASE_STUDIES.length === 0 ? (
                <div className="bg-[#111520] border border-[rgba(255,255,255,0.05)] p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse"></span>
                  </div>
                  <h3 className="font-mono font-bold text-gray-400 mb-2">[AWAITING DECLASSIFICATION]</h3>
                  <p className="font-mono text-sm text-gray-600">
                    Operational data pending public release approval. All Grade X deployments remain strictly confidential until client authorization is granted.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* CMS Output will go here */}
                </div>
              )}
            </div>

            <div>
              <p className="tech-label text-[var(--color-accent-blue)] mb-4">CLIENT FEEDBACK</p>
              <h2 className="display-sm text-[var(--color-text-primary)] mb-8">
                OPERATIONAL TRUST.
              </h2>
              
              {TESTIMONIALS.length === 0 ? (
                <div className="bg-[#111520] border border-[rgba(255,255,255,0.05)] p-8">
                  <h3 className="font-mono font-bold text-gray-400 mb-2">[DATA LOCKED]</h3>
                  <p className="font-mono text-sm text-gray-600">
                    Client registry access restricted.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* CMS Output will go here */}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: FAQ */}
          <div>
            <p className="tech-label text-[var(--color-accent-blue)] mb-4">SYSTEM KNOWLEDGE</p>
            <h2 className="display-sm text-[var(--color-text-primary)] mb-8">
              FREQUENTLY ASKED QUESTIONS.
            </h2>

            <div className="border-t border-[rgba(255,255,255,0.1)]">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div key={faq.id} className="border-b border-[rgba(255,255,255,0.1)]">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left py-6 flex justify-between items-center group hover:text-[var(--color-accent-blue)] transition-colors focus:outline-none"
                    >
                      <span className="font-bold text-lg md:text-xl pr-8">{faq.question}</span>
                      <span className="font-mono text-xl shrink-0 transition-transform duration-300 transform">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="body text-gray-400 max-w-xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
