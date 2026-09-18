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
    <section id="contact" className="relative w-full bg-surface py-24 md:py-32 border-t border-white/5">
      <div className="container px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Context & Contact Info */}
          <div>
            <h2 className="display-sm text-white leading-tight mb-8">
              LET'S MAKE THE <span className="text-primary">UNSEEN VISIBLE.</span>
            </h2>
            
            <div className="glass-panel p-8 font-mono text-sm text-gray-400 mb-8 border-l-4 border-l-primary">
              <strong className="text-white block mb-4 text-base font-sans">Grade X Commercial Solutions Pty Ltd</strong>
              <div className="space-y-3">
                <div className="flex"><span className="w-24 shrink-0 text-gray-500 font-bold">ABN</span> 45 684 073 345</div>
                <div className="flex"><span className="w-24 shrink-0 text-gray-500 font-bold">ADDR</span> 5 Elward Way, Balga WA 6061</div>
                <div className="flex"><span className="w-24 shrink-0 text-gray-500 font-bold">EMAIL</span> <a href="mailto:gradex.perth@gmail.com" className="text-primary hover:underline">gradex.perth@gmail.com</a></div>
                <div className="flex"><span className="w-24 shrink-0 text-gray-500 font-bold">PHONE</span> <a href="tel:0430360162" className="text-secondary hover:underline">0430 360 162</a></div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <p className="text-gray-400 mb-2">Emergency Service Required?</p>
              <a href="tel:0430360162" className="inline-flex items-center gap-2 text-2xl font-bold text-secondary hover:text-white transition-colors">
                <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                CALL 0430 360 162
              </a>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="tech-label text-xs text-gray-400">NAME *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="bg-background/50 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="tech-label text-xs text-gray-400">COMPANY</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="bg-background/50 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="tech-label text-xs text-gray-400">PHONE *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="bg-background/50 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="tech-label text-xs text-gray-400">EMAIL *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="bg-background/50 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="location" className="tech-label text-xs text-gray-400">SITE / LOCATION *</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  required 
                  value={formData.location}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="bg-background/50 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="tech-label text-xs text-gray-400">SERVICE REQUIRED *</label>
                <select 
                  id="service" 
                  name="service" 
                  required 
                  value={formData.service}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="bg-background/50 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-500">Select a service...</option>
                  {SERVICES.map((srv) => (
                    <option key={srv} value={srv} className="bg-surface text-white">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="tech-label text-xs text-gray-400">MESSAGE</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="bg-background/50 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors resize-y"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'error' && (
                <div className="p-4 rounded-lg border border-red-500/50 bg-red-500/10 text-red-400 text-sm font-medium flex items-start gap-3" role="alert">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">!</span>
                  <p>{errorMessage}</p>
                </div>
              )}

              {/* Submit CTA */}
              <div className="mt-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="gx-button w-full sm:w-auto px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      PROCESSING...
                    </span>
                  ) : (
                    <span>REQUEST A QUOTE</span>
                  )}
                </button>
                
                <div className="mt-6 lg:hidden text-center">
                  <p className="text-gray-400 text-sm mb-2">Emergency Service Required?</p>
                  <a href="tel:0430360162" className="inline-flex items-center gap-2 text-xl font-bold text-secondary hover:text-white transition-colors">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    CALL 0430 360 162
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

