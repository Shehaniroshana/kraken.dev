"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { ManifestoNeural } from "@/components/three/manifesto-neural";
import { Suspense } from "react";
import SmoothScrolling from "@/components/smooth-scrolling";

export default function ManifestoPage() {
  return (
    <SmoothScrolling>
      <Navbar />
      <main className="bg-black">
        <EcosystemSection 
          id="manifesto"
          title="The Core Manifesto"
          subtitle="Philosophical Foundation"
          description="We believe in the transcendence of digital interaction. Our goal is to build autonomous, neural-linked ecosystems that evolve with human intent, creating a seamless bridge between thought and execution."
          tags={["Autonomy", "Neural", "Transcendence", "Evolution"]}
          background={<Suspense fallback={null}><ManifestoNeural /></Suspense>}
        />
      </main>
      <Footer />
    </SmoothScrolling>
  );
}
