"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import EvilEye from "@/components/ui/evil-eye/EvilEye";

export function VisionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const yCards = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="vision" className="relative min-h-screen bg-black overflow-hidden z-20 flex items-center pt-32 pb-0">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="max-w-6xl mx-auto flex flex-col"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div style={{ y }}>
              <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] mb-6 block">Vision // Protocol</span>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase leading-[0.9] tracking-tighter mb-10">
                Engineering the <br />
                <span className="premium-gradient-text">
                  Future
                </span>
              </h2>
              
              <div className="relative border-l border-red-600/30 pl-10 space-y-8">
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed uppercase tracking-[0.2em] font-medium max-w-md">
                  Engineering the future of immersive digital experiences.
                </p>
                
                <div className="glass-panel p-8 bg-red-600/5 border-red-600/20 backdrop-blur-3xl rounded-[24px]">
                  <span className="text-red-600 text-[9px] font-display font-black uppercase tracking-widest block mb-4">Core Mission</span>
                  <p className="text-white text-xs md:text-sm font-display font-black uppercase tracking-widest leading-relaxed">
                    To create visually striking and deeply interactive digital experiences that redefine how users engage with technology.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div style={{ y: yCards }} className="grid grid-cols-1 gap-6">
              <div className="glass-panel p-10 bg-white/5 border-white/5 backdrop-blur-2xl rounded-[32px] group hover:border-red-600/30 transition-all duration-700">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                    <div className="text-red-600 font-display font-black text-[10px] uppercase tracking-widest">01. Interaction</div>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold leading-relaxed">
                  Moving beyond static interfaces into digital dimensions that respond, adapt, and evolve.
                </p>
              </div>

              <div className="glass-panel p-10 bg-white/5 border-white/5 backdrop-blur-2xl rounded-[32px] group hover:border-red-600/30 transition-all duration-700">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                    <div className="text-red-600 font-display font-black text-[10px] uppercase tracking-widest">02. Aesthetics</div>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold leading-relaxed">
                  Where engineering precision meets the soul of craftsmanship to build &quot;visually striking&quot; systems.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom HUD - Slogan Integration */}
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-6 text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                <span>Experience the Next Dimension</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-12 text-[8px] font-mono text-white/10 uppercase tracking-[0.4em]">
              <span>STR_INT: ACTIVE</span>
              <span>VIS_LAYER: RENDERED</span>
              <span>CORE_UNIT: ONLINE</span>
            </div>
          </div>

          {/* Evil Eye at the bottom of content - Massive Size restored */}
          <div className="mt-20 w-full h-[500px] md:h-[800px] flex items-center justify-center overflow-visible">
            <div className="w-full h-full">
                <EvilEye 
                eyeColor="#8b0000"
                intensity={0.7}
                glowIntensity={0.3}
                scale={0.8}
                pupilFollow={1}
                flameSpeed={0.12}
                />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
