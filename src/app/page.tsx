import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import Technology from "@/components/Technology";
import Methodology from "@/components/Methodology";
import DigitalEvidence from "@/components/DigitalEvidence";
import Services from "@/components/Services";
import WhyGradeX from "@/components/WhyGradeX";
import Compliance from "@/components/Compliance";
import ServiceArea from "@/components/ServiceArea";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-midnight text-brand-white selection:bg-brand-cyan selection:text-brand-midnight">
      <Navigation />
      <Hero />
      <TheProblem />
      <Technology />
      <Methodology />
      <DigitalEvidence />
      <Services />
      <WhyGradeX />
      <Compliance />
      <ServiceArea />
      <FinalCTA />
      <Footer />
    </main>
  );
}
