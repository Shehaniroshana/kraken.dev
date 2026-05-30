"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import LiquidEther from "@/components/ui/liquid-ether/LiquidEther";
import SoftAurora from "@/components/ui/soft-aurora/SoftAurora";

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen py-32 z-20 overflow-hidden flex items-center bg-black">
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0">
        <SoftAurora 
          color1="#8b0000" 
          color2="#450a0a" 
          brightness={1.0}
          speed={0.3}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Path 01: The Beginning */}
          <motion.div style={{ y }} className="space-y-12">
            <div className="flex flex-col items-start">
              <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] mb-4">Origin // Path_01</span>
              <div className="h-[1px] w-24 bg-gradient-to-r from-red-600 to-transparent"></div>
            </div>
            
            <div className="relative">
                <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[1] uppercase tracking-tighter mb-12">
                    The <span className="premium-gradient-text">Dreamers</span>
                </h2>
                
                <div className="glass-panel p-10 bg-white/5 border-white/5 backdrop-blur-3xl rounded-[32px] max-w-lg border-l-2 border-l-red-600/50">
                    <p className="text-gray-400 text-[10px] leading-relaxed uppercase tracking-widest font-medium">
                        It started in Grade 1. I dreamed of becoming a <span className="text-white">wood carver</span>, shaping raw material with <span className="text-red-600">precision and patience</span>. My friend dreamed of leading as a <span className="text-white">businessman</span>. We carried these separate ambitions for years, never knowing how life would eventually rewire our circuits.
                    </p>
                </div>
            </div>
          </motion.div>

          {/* Path 02: The Return */}
          <motion.div style={{ y: yFast }} className="space-y-12 lg:text-right flex flex-col lg:items-end">
            <div className="flex flex-col lg:items-end">
              <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] mb-4">Evolution // Path_02</span>
              <div className="h-[1px] w-24 bg-gradient-to-l from-red-600 to-transparent"></div>
            </div>
            
            <div className="relative">
                <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[1] uppercase tracking-tighter mb-12">
                    The <span className="premium-gradient-text">Engineers</span>
                </h2>
                
                <div className="glass-panel p-10 bg-white/5 border-white/5 backdrop-blur-3xl rounded-[32px] max-w-lg border-r-2 border-r-red-600/50 text-left lg:text-right">
                    <p className="text-gray-400 text-[10px] leading-relaxed uppercase tracking-widest font-medium">
                        Life shifted. I became a <span className="text-white">software engineer</span>, carving complex systems instead of wood. My friend became a <span className="text-red-600">marketing expert</span> and a student at the <span className="text-white">University of Sri Jayewardenepura</span>. Today, we merge digital engineering with strategic growth to create KRAKEN.
                    </p>
                </div>
            </div>
          </motion.div>

        </div>

        {/* Central Fluid Divider */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[60%] bg-gradient-to-b from-transparent via-red-600/20 to-transparent hidden lg:block z-0">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 -translate-x-1/2">
                    <LiquidEther
                        colors={['#1a0505', '#DC2626', '#450a0a', '#000000']}
                        mouseForce={15}
                        cursorSize={80}
                        resolution={0.4}
                        autoDemo={true}
                        autoSpeed={0.3}
                        autoIntensity={3}
                        className="opacity-40"
                    />
                </div>
            </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-32 text-center relative z-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block"
            >
                <div className="flex flex-col items-center">
                    <span className="text-white font-display font-black text-xs md:text-xl uppercase tracking-[0.8em]">BEYOND CODE. BEYOND DESIGN.</span>
                    <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                </div>
            </motion.div>
        </div>
      </div>

      <style jsx>{`
      `}</style>
    </section>
  );
}
