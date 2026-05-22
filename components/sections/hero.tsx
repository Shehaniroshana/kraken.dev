"use client";

import { motion } from "motion/react";
import { MagnetButton } from "@/components/ui/magnet-button";
import dynamic from "next/dynamic";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full flex flex-col p-12 overflow-hidden z-10 pt-32">
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-[var(--bg-dark)] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10 pointer-events-none" />

      <div className="flex-1 flex flex-col justify-center relative z-20 w-full max-w-7xl mx-auto">
        <div className="z-10 w-full md:w-1/2">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="flex items-center space-x-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-red-600"></div>
            <span className="text-red-500 text-xs font-bold uppercase tracking-[0.3em]">Engineering the Future of Digital Power</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="massive-text mb-6 text-white"
          >
            KRAKEN
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-xl text-gray-400 leading-relaxed text-sm uppercase tracking-wide opacity-80"
          >
            KRAKEN builds scalable enterprise systems, immersive digital experiences, and next-generation AI-powered platforms.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <MagnetButton variant="primary">
              Start a Project
            </MagnetButton>
            <MagnetButton variant="glass">
              Explore Vision
            </MagnetButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
