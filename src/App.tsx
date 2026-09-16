import React, { Suspense, lazy } from 'react'

// Eager load the first visible component to prevent CLS above the fold
import { Hero } from './components/Hero'

// Lazy load the rest to defer JavaScript parsing and execution
const UnseenProblem = lazy(() => import('./components/UnseenProblem').then(m => ({ default: m.UnseenProblem })))
const ProofSystem = lazy(() => import('./components/ProofSystem').then(m => ({ default: m.ProofSystem })))
const Technology = lazy(() => import('./components/Technology').then(m => ({ default: m.Technology })))
const Process = lazy(() => import('./components/Process').then(m => ({ default: m.Process })))
const SteamCleaning = lazy(() => import('./components/SteamCleaning').then(m => ({ default: m.SteamCleaning })))
const DigitalEvidence = lazy(() => import('./components/DigitalEvidence').then(m => ({ default: m.DigitalEvidence })))
const ServicesList = lazy(() => import('./components/ServicesList').then(m => ({ default: m.ServicesList })))
const Compliance = lazy(() => import('./components/Compliance').then(m => ({ default: m.Compliance })))
const MapSection = lazy(() => import('./components/MapSection').then(m => ({ default: m.MapSection })))
const SupportingContent = lazy(() => import('./components/SupportingContent').then(m => ({ default: m.SupportingContent })))
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })))

// A minimalist loader that matches the industrial dark theme
const SectionLoader = () => (
  <div className="w-full py-32 flex justify-center items-center bg-[#0A0D14]">
    <div className="w-8 h-8 border-2 border-[rgba(255,255,255,0.1)] border-t-[var(--color-accent-blue)] rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <main>
      {/* Hero is eager loaded to ensure fast LCP */}
      <Hero />
      
      {/* The rest are wrapped in Suspense boundaries */}
      <Suspense fallback={<SectionLoader />}>
        <UnseenProblem />
        <ProofSystem />
        <Technology />
        <Process />
        <SteamCleaning />
        <DigitalEvidence />
        <ServicesList />
        <Compliance />
        <MapSection />
        <SupportingContent />
        <Contact />
      </Suspense>
      
      {/* 
        This div is just a temporary spacer to allow scrolling past the section 
        to test the fixed/sticky behavior during development.
      */}
      <div className="h-[20vh] bg-[#0A0D14] flex items-center justify-center border-t border-[rgba(255,255,255,0.1)]">
        <p className="tech-label">End of Sequence</p>
      </div>
    </main>
  )
}

export default App
