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
          description="Engineered for absolute performance. Our architecture utilizes a distributed, high-throughput core optimized for sub-millisecond latency and quantum-grade security protocols."
          tags={["Scalability", "Latency", "Security", "Distributed"]}
          background={<Suspense fallback={null}><ArchitectureGrid /></Suspense>}
        />
      </main>
      <Footer />
    </SmoothScrolling>
  );
}
