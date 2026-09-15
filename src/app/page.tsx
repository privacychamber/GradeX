"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Technology from "@/components/Technology";
import Process from "@/components/Process";
import DigitalEvidence from "@/components/DigitalEvidence";
import Services from "@/components/Services";
import WhyGradeX from "@/components/WhyGradeX";
import TrustCompliance from "@/components/TrustCompliance";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">
      <Navigation />
      <Hero />
      <BeforeAfter />
      <Technology />
      <Process />
      <DigitalEvidence />
      <Services />
      <WhyGradeX />
      <TrustCompliance />
      <FinalCTA />
      <Footer />
    </main>
  );
}
