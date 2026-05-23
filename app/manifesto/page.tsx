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
          description="KRAKEN is a shared vision built on creativity, engineering, and strategy. We believe that different skills and different journeys can come together to build something powerful—creating scalable software and immersive experiences designed for the future."
          tags={["Creativity", "Engineering", "Strategy", "Innovation"]}
          background={<Suspense fallback={null}><ManifestoNeural /></Suspense>}
        />
      </main>
      <Footer />
    </SmoothScrolling>
  );
}
