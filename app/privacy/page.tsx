"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { PrivacyGridBG } from "@/components/three/privacy-grid-bg";
import { Suspense } from "react";
import SmoothScrolling from "@/components/smooth-scrolling";

export default function PrivacyPage() {
  return (
    <SmoothScrolling>
      <Navbar />
      <main className="bg-black">
        <EcosystemSection 
          id="privacy"
          title="Privacy Grid"
          subtitle="Data Sovereignity"
          description="A decentralized privacy mesh that gives users complete control over their digital footprint. Encrypted at the source, verified at the edge."
          tags={["Privacy", "Decentralized", "Edge", "Sovereignity"]}
          background={<Suspense fallback={null}><PrivacyGridBG /></Suspense>}
        />
      </main>
      <Footer />
    </SmoothScrolling>
  );
}
