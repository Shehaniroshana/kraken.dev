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
          description="KRAKEN began with two lifelong friends in Grade 1, grew through separate dreams and separate paths, and became a software company where engineering, creativity, and strategy meet again. Today we build scalable systems, modern platforms, AI-powered solutions, and immersive digital experiences from that shared foundation."
          tags={["Grade 1", "Friendship", "Engineering", "Growth"]}
          background={<Suspense fallback={null}><ManifestoNeural /></Suspense>}
        />
      </main>
      <Footer />
    </SmoothScrolling>
  );
}
