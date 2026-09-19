import React, { Suspense, lazy } from 'react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { CustomCursor } from './components/CustomCursor'

// Lazy load the rest to defer JavaScript parsing and execution
const UnseenProblem = lazy(() => import('./components/UnseenProblem').then(m => ({ default: m.UnseenProblem })))
const Technology = lazy(() => import('./components/Technology').then(m => ({ default: m.Technology })))
const Process = lazy(() => import('./components/Process').then(m => ({ default: m.Process })))
const DigitalEvidence = lazy(() => import('./components/DigitalEvidence').then(m => ({ default: m.DigitalEvidence })))
const ServicesList = lazy(() => import('./components/ServicesList').then(m => ({ default: m.ServicesList })))
const Compliance = lazy(() => import('./components/Compliance').then(m => ({ default: m.Compliance })))
const MapSection = lazy(() => import('./components/MapSection').then(m => ({ default: m.MapSection })))
const SupportingContent = lazy(() => import('./components/SupportingContent').then(m => ({ default: m.SupportingContent })))
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })))

// A minimalist loader that matches the industrial dark theme
const SectionLoader = () => (
  <div className="w-full py-32 flex justify-center items-center bg-background">
    <div className="w-8 h-8 border-2 border-white/10 border-t-primary rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <main className="bg-background min-h-screen text-white font-sans overflow-x-hidden selection:bg-primary selection:text-white cursor-none">
      <CustomCursor />
      <Header />
      
      {/* Hero is eager loaded to ensure fast LCP */}
      <Hero />
      
      {/* The rest are wrapped in Suspense boundaries */}
      <Suspense fallback={<SectionLoader />}>
        {/* The Problem / Why Grade X */}
        <div id="home" className="scroll-mt-24">
          <UnseenProblem />
        </div>
        
        {/* Core Differentiator */}
        <div id="technology" className="scroll-mt-24">
          <Technology />
        </div>
        
        {/* Services & Process */}
        <div id="services" className="scroll-mt-24">
          <ServicesList />
          <Process />
        </div>
        
        {/* Proof & Reporting */}
        <div id="evidence" className="scroll-mt-24">
          <DigitalEvidence />
        </div>
        
        {/* Compliance & Trust */}
        <div id="compliance" className="scroll-mt-24">
          <Compliance />
          <SupportingContent />
        </div>
        
        {/* Contact & Map */}
        <div id="contact" className="scroll-mt-24">
          <MapSection />
          <Contact />
        </div>
      </Suspense>
      
      <Footer />
    </main>
  )
}

export default App
