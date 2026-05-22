"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { SecurityCore } from "@/components/three/security-core";
import { Suspense } from "react";
import SmoothScrolling from "@/components/smooth-scrolling";

export default function SecurityPage() {
  return (
    <SmoothScrolling>
      <Navbar />
      <main className="bg-black">
        <EcosystemSection 
          id="security"
          title="Security Protocol"
          subtitle="Quantum Protection"
          description="Advanced encryption and real-time threat detection built into every layer. Our security protocol ensures absolute data integrity and system resilience."
          tags={["Encryption", "Resilience", "Integrity", "Detection"]}
          background={<Suspense fallback={null}><SecurityCore /></Suspense>}
        />
      </main>
      <Footer />
    </SmoothScrolling>
  );
}
