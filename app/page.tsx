import SmoothScrolling from "@/components/smooth-scrolling";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { VisionSection } from "@/components/sections/vision";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ShowcaseSection } from "@/components/sections/showcase";
import { StatsSection } from "@/components/sections/stats";
import { WhyUsSection } from "@/components/sections/why-us";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { SceneWrapper } from "@/components/three/scene-wrapper";

export default function Home() {
  return (
    <SmoothScrolling>
      <main className="relative bg-black min-h-screen flex flex-col">
        {/* Background Layers from Theme */}
        <div className="fixed inset-0 kraken-grid opacity-30 pointer-events-none z-0"></div>
        <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] kraken-glow pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] kraken-glow pointer-events-none z-0"></div>
        <SceneWrapper />
        
        <MouseSpotlight />
        <Navbar />
        
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <StatsSection />
        <WhyUsSection />
        <ServicesSection />
        <TechStackSection />
        <ShowcaseSection />
        <ContactSection />
        <Footer />
      </main>
    </SmoothScrolling>
  );
}

