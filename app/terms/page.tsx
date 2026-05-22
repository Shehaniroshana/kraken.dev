"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { TermsBackground } from "@/components/three/terms-bg";
import { Suspense } from "react";
import SmoothScrolling from "@/components/smooth-scrolling";

export default function TermsPage() {
  return (
    <SmoothScrolling>
      <Navbar />
      <main className="bg-black">
        <EcosystemSection 
          id="terms"
          title="Terms of Service"
          subtitle="Digital Foundation"
          description="Transparent, fair, and technologically enforced agreements that define the relationship between the system and its users."
          tags={["Transparency", "Fairness", "Agreements", "Protocols"]}
          background={<Suspense fallback={null}><TermsBackground /></Suspense>}
        />
      </main>
      <Footer />
    </SmoothScrolling>
  );
}
