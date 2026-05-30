"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LiquidEther from "@/components/ui/liquid-ether/LiquidEther";

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen py-32 z-20 overflow-hidden flex items-center bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#1a0505', '#2d0a0a', '#450a0a', '#000000']}
          mouseForce={15}
          cursorSize={80}
          resolution={0.4}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={3}
          className="opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div style={{ y, opacity }} className="w-full">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] mb-4">Our Origin</span>
            <div className="h-[1px] w-12 bg-red-600/30"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1.1] uppercase tracking-tighter mb-20 text-center max-w-4xl mx-auto">
            Two lifelong friends, one software company built from <span className="premium-gradient-text">trust, creativity, and time</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="glass-panel p-10 bg-white/5 border-white/5 backdrop-blur-2xl">
              <span className="text-[10px] font-display font-black text-red-600 uppercase tracking-[0.3em] block mb-6">01 // The Beginning</span>
              <p className="text-gray-400 text-[10px] leading-relaxed uppercase tracking-widest font-medium">
                KRAKEN started with two friends who met in Grade 1 and carried different dreams for years. One quietly wanted to become a wood carver, creating meaningful work with precision and patience. The other dreamed of becoming a software engineer, focused on building systems, solving problems, and leading through technology.
              </p>
            </div>
            <div className="glass-panel p-10 bg-white/5 border-white/5 backdrop-blur-2xl">
              <span className="text-[10px] font-display font-black text-red-600 uppercase tracking-[0.3em] block mb-6">02 // The Return</span>
              <p className="text-gray-400 text-[10px] leading-relaxed uppercase tracking-widest font-medium">
                After years of separate growth, our paths merged again. KRAKEN is where the precision of craftsmanship meets the power of software engineering. We build with the same care and intent that a carver gives to wood, but with the scale and impact of modern technology.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
