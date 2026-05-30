"use client";

import { motion } from "motion/react";
import { MagnetButton } from "@/components/ui/magnet-button";
import dynamic from "next/dynamic";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.hash = sectionId;
  };

  return (
    <section id="hero" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-6 py-20 overflow-hidden z-10">
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />

      <div className="relative z-20 w-full max-w-5xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="flex flex-col items-center mb-8"
        >
          <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] mb-4">Grade 1 Friends. One Shared Future.</span>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="massive-text mb-8 premium-gradient-text"
        >
          KRAKEN
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-gray-400 leading-relaxed text-xs sm:text-sm uppercase tracking-[0.2em] font-medium"
        >
          Two lifelong friends, two childhood dreams, and one vision to build meaningful systems that redefine digital engagement.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
        >
          <MagnetButton variant="primary" onClick={() => scrollToSection("contact")}>
            Start a Project
          </MagnetButton>
          <MagnetButton variant="glass" onClick={() => scrollToSection("vision")}>
            Explore Vision
          </MagnetButton>
        </motion.div>
      </div>

      {/* Floating HUD Elements */}
      <div className="absolute bottom-12 left-12 hidden lg:block z-20">
          <div className="flex flex-col space-y-2">
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">EST. 2026</span>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">CORE_LINK: ACTIVE</span>
          </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block z-20 text-right">
          <div className="flex flex-col space-y-2">
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">LAT: 6.9271° N</span>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">LON: 79.8612° E</span>
          </div>
      </div>
    </section>
  );
}
