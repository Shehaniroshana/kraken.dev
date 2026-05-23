"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { ArchitectureGrid } from "@/components/three/architecture-grid";
import { Suspense } from "react";
import SmoothScrolling from "@/components/smooth-scrolling";

export default function ArchitecturePage() {
  return (
    <SmoothScrolling>
      <Navbar />
      <main className="bg-black">
        <EcosystemSection 
          id="architecture"
          title="System Architecture"
          subtitle="Structural Integrity"
          description="Engineered for maximum scalability and precision. We build modern digital platforms and software systems designed to handle complex logic while delivering immersive, future-driven user experiences."
          tags={["Scalable", "Modern", "Immersive", "Precise"]}
          background={<Suspense fallback={null}><ArchitectureGrid /></Suspense>}
        />
      </main>
      <Footer />
    </SmoothScrolling>
  );
}
