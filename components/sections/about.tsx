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

  const y = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen py-32 z-20 overflow-hidden flex items-center bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#450a0a', '#991b1b', '#ef4444', '#000000']}
          mouseForce={25}
          cursorSize={100}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={4.5}
          className="opacity-90"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-12 bg-red-600"></div>
            <span className="text-red-500 text-xs font-bold uppercase tracking-[0.3em]">Our Origin</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight uppercase tracking-tighter mix-blend-difference mb-12">
            TWO LIFELONG FRIENDS, ONE SOFTWARE COMPANY BUILT FROM <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">TRUST, CREATIVITY, AND TIME</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-panel p-8 border-l-2 border-l-red-600 bg-black/40 backdrop-blur-xl">
              <h3 className="text-sm font-mono text-white mb-4 uppercase tracking-widest">The Beginning / 01</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                KRAKEN started with two friends who met in Grade 1 and carried different dreams for years. One quietly wanted to become a wood carver, creating meaningful work with precision and patience. The other dreamed of becoming a software engineer, focused on building systems, solving problems, and leading through technology.
              </p>
            </div>
            <div className="glass-panel p-8 border-l-2 border-l-red-600 bg-black/40 backdrop-blur-xl">
              <h3 className="text-sm font-mono text-white mb-4 uppercase tracking-widest">The Return / 02</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                After O/Ls, life sent us down separate paths. We learned from different experiences, discovered our strengths, and evolved into a software engineer passionate about backend systems and immersive design. KRAKEN is where those journeys meet again as a software company.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
