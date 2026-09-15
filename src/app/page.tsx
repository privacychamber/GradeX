import GlobalScene from "@/components/GlobalScene";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden bg-black selection:bg-brand-cyan selection:text-black">
      <Navigation />
      <GlobalScene />
    </main>
  );
}
