"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Canvas } from "@react-three/fiber";

interface EcosystemSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  background: ReactNode;
  tags: string[];
}

export function EcosystemSection({ id, title, subtitle, description, background, tags }: EcosystemSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const yContent = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const xTitle = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <section 
      id={id} 
      ref={containerRef} 
      className="relative h-[250vh] bg-black z-20"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background 3D Layer */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            {background}
          </Canvas>
        </div>

        {/* HUD Decoration */}
        <div className="absolute inset-0 z-10 pointer-events-none border-x border-white/5 mx-20">
          <div className="absolute top-10 left-10 flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Protocol: {id}_DIVE</span>
          </div>
          <div className="absolute bottom-10 right-10 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            {new Date().getFullYear()}.ARCH_V.2
          </div>
        </div>

        {/* Content Layer */}
        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-6 relative z-20"
        >
          <motion.div style={{ y: yContent }} className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                
                {/* Left Side: Title */}
                <div className="lg:col-span-8">
                  <motion.div style={{ x: xTitle }}>
                    <span className="text-red-500 font-mono text-xs tracking-[0.5em] uppercase mb-6 block">{subtitle}</span>
                    <h2 className="text-7xl md:text-9xl font-display font-black text-white uppercase leading-[0.8] tracking-tighter">
                      {title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? "text-transparent stroke-text" : ""}>
                          {word}<br />
                        </span>
                      ))}
                    </h2>
                  </motion.div>
                </div>

                {/* Right Side: Description */}
                <div className="lg:col-span-4 space-y-12">
                  <div className="h-[1px] w-20 bg-red-600" />
                  <p className="text-xl text-gray-400 font-light leading-relaxed">
                    {description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    {tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1 border border-white/10 rounded-full text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="group flex items-center space-x-4 text-xs font-bold text-white uppercase tracking-widest">
                    <span>Explore Protocol</span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </button>
                </div>

             </div>
          </motion.div>
        </motion.div>

      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
