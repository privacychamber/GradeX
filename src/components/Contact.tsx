import React, { useState } from 'react';

const SERVICES = [
  'Kitchen Exhaust Cleaning',
  'Canopy Cleaning',
  'Robotic Exhaust Cleaning Technology',
  'Steam Cleaning',
  'Kitchen Equipment Hygiene',
  'Grill Recovery',
  'Fryer Vat Boil-Outs',
  'Shake Machine Cleaning',
  'Cool Room Cleaning',
  'Nightly Kitchen Maintenance',
  'Monthly Kitchen Deep Cleaning',
  'Lobby Cleaning',
  'Monthly Lobby Deep Cleaning',
  'Play Place Cleaning',
  'Floor Detailing & Scrubbing',
  'Exterior High-Pressure Washing',
  'Building & Drive-Thru Pressure Cleaning',
  'Window Cleaning',
  'Line Marking',
  'General Commercial Cleaning'
];

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // We are instructed NEVER to display a fake success state.
      // Since there is no backend configured, this will explicitly fail.
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Backend endpoint not configured.');
      }
      
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Form submission failed: Server endpoint is not yet configured. Please use the phone number provided.');
    }
  };

  return (
    <section id="quote" className="relative w-full bg-[#0A0D14] py-24 md:py-32 border-t border-[rgba(255,255,255,0.05)]">
      <div className="container px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Context & Contact Info */}
          <div>
            <h2 className="display-sm text-[var(--color-text-primary)] leading-tight mb-8">
              LET'S MAKE THE UNSEEN VISIBLE.
            </h2>
            
            <div className="bg-[#111520] border border-[rgba(255,255,255,0.05)] p-8 font-mono text-sm text-gray-400 mb-8">
              <strong className="text-white block mb-4 text-base">Grade X Commercial Solutions Pty Ltd</strong>
              <div className="space-y-2">
                <div className="flex"><span className="w-24 shrink-0 text-gray-500">ABN</span> 45 684 073 345</div>
                <div className="flex"><span className="w-24 shrink-0 text-gray-500">ADDR</span> 5 Elward Way, Balga WA 6061</div>
                <div className="flex"><span className="w-24 shrink-0 text-gray-500">EMAIL</span> <a href="mailto:gradex.perth@gmail.com" className="text-[var(--color-accent-blue)] hover:underline">gradex.perth@gmail.com</a></div>
                <div className="flex"><span className="w-24 shrink-0 text-gray-500">PHONE</span> <a href="tel:0430360162" className="text-[var(--color-accent-gold)] hover:underline">0430 360 162</a></div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <a href="tel:0430360162" className="tech-label text-xl hover:text-[var(--color-accent-gold)] transition-colors">
                CALL 0430 360 162
              </a>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="tech-label text-xs text-gray-500">NAME *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="bg-transparent border border-[rgba(255,255,255,0.1)] p-4 text-white focus:border-[var(--color-accent-blue)] focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="tech-label text-xs text-gray-500">COMPANY</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="bg-transparent border border-[rgba(255,255,255,0.1)] p-4 text-white focus:border-[var(--color-accent-blue)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="tech-label text-xs text-gray-500">PHONE *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="bg-transparent border border-[rgba(255,255,255,0.1)] p-4 text-white focus:border-[var(--color-accent-blue)] focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="tech-label text-xs text-gray-500">EMAIL *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="bg-transparent border border-[rgba(255,255,255,0.1)] p-4 text-white focus:border-[var(--color-accent-blue)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="location" className="tech-label text-xs text-gray-500">SITE / LOCATION *</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  required 
                  value={formData.location}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="bg-transparent border border-[rgba(255,255,255,0.1)] p-4 text-white focus:border-[var(--color-accent-blue)] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="tech-label text-xs text-gray-500">SERVICE REQUIRED *</label>
                <select 
                  id="service" 
                  name="service" 
                  required 
                  value={formData.service}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="bg-transparent border border-[rgba(255,255,255,0.1)] p-4 text-white focus:border-[var(--color-accent-blue)] focus:outline-none transition-colors appearance-none rounded-none"
                >
                  <option value="" disabled className="bg-[#111520] text-gray-500">Select a service...</option>
                  {SERVICES.map((srv) => (
                    <option key={srv} value={srv} className="bg-[#111520] text-white">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="tech-label text-xs text-gray-500">MESSAGE</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="bg-transparent border border-[rgba(255,255,255,0.1)] p-4 text-white focus:border-[var(--color-accent-blue)] focus:outline-none transition-colors resize-y"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'error' && (
                <div className="p-4 border border-red-500/50 bg-red-900/20 text-red-400 text-sm font-mono" role="alert">
                  {errorMessage}
                </div>
              )}

              {/* Submit CTA */}
              <div className="mt-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn-tactile bg-white text-black px-8 py-4 font-bold tracking-widest hover:bg-[var(--color-accent-blue)] hover:text-white flex items-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                      PROCESSING...
                    </>
                  ) : (
                    <>REQUEST A QUOTE →</>
                  )}
                </button>
                
                <div className="mt-6 lg:hidden">
                  <a href="tel:0430360162" className="tech-label text-sm text-[var(--color-accent-gold)]">
                    OR CALL 0430 360 162
                  </a>
                </div>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
