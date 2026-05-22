"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const showcases = [
  {
    title: "Project Zero",
    category: "Neural Engine",
    imageInfo: "Holographic Interface Preview",
    type: "neural"
  },
  {
    title: "Quantum Ledger",
    category: "Distributed DB",
    imageInfo: "Data Visualization Matrix",
    type: "quantum"
  },
  {
    title: "Cyber Fabric",
    category: "Security Grid",
    imageInfo: "Real-time Threat Monitoring",
    type: "fabric"
  },
  {
    title: "Kraken OS",
    category: "Enterprise System",
    imageInfo: "Central Command Dashboard",
    type: "core"
  }
];

function ProjectVisualizer({ type }: { type: string }) {
  if (type === "neural") {
    return (
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 800 450">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={400 + Math.cos(i) * 150}
              cy={225 + Math.sin(i) * 100}
              r="2"
              fill="#DC2626"
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          <motion.path
            d="M 200,225 Q 400,50 600,225 T 800,225"
            fill="none"
            stroke="#DC2626"
            strokeWidth="1"
            strokeDasharray="10 20"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    );
  }

  if (type === "quantum") {
    return (
      <div className="absolute inset-0 opacity-30 grid grid-cols-10 gap-2 p-4">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="aspect-square border border-white/5 bg-white/2"
            animate={{
              backgroundColor: Math.random() > 0.8 ? ["rgba(255,255,255,0.05)", "rgba(220,38,38,0.2)", "rgba(255,255,255,0.05)"] : "rgba(255,255,255,0.02)",
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "fabric") {
    return (
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-6 transform rotate-45 scale-150">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-full border-r border-white/5"
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-64 h-64 border border-red-600/20 rounded-full flex items-center justify-center"
      >
        <div className="w-48 h-48 border border-white/5 rounded-full animate-pulse" />
        <div className="absolute w-1 h-32 bg-gradient-to-t from-transparent via-red-600 to-transparent opacity-50" />
      </motion.div>
    </div>
  );
}

export function ShowcaseSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (triggerRef.current && scrollContainerRef.current) {
        const sections = gsap.utils.toArray(scrollContainerRef.current.children);
        
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + scrollContainerRef.current!.offsetWidth
            }
        });
    }

    return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={triggerRef} id="showcase" className="relative h-screen bg-black overflow-hidden z-20 border-y border-white/5">
        <div className="absolute top-12 left-12 z-30">
            <h2 className="text-[10px] font-mono tracking-[0.4em] text-red-500 uppercase">Deployed Experiences</h2>
        </div>
        
        <div ref={scrollContainerRef} className="flex h-full w-[400vw]">
            {showcases.map((item, index) => (
                <div key={index} className="w-[100vw] h-full flex flex-col justify-center items-center relative px-12 md:px-20">
                    <div className="w-full max-w-6xl aspect-video glass-panel relative overflow-hidden group border border-white/5 hover:border-red-600/30 transition-colors duration-700">
                        
                        {/* Interactive Visualizer */}
                        <div className="absolute inset-0 bg-[#030303] z-0">
                            <ProjectVisualizer type={item.type} />
                            
                            {/* Scanning Line Overlay */}
                            <motion.div 
                              animate={{ top: ["-10%", "110%"] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent z-10 opacity-30"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end z-20">
                             <motion.div
                               initial={{ opacity: 0, y: 20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               viewport={{ once: true }}
                               transition={{ delay: 0.3 }}
                             >
                               <span className="text-[10px] font-mono text-red-500 tracking-[0.3em] uppercase mb-4 block">{item.category}</span>
                               <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase tracking-tighter leading-none mb-6">
                                 {item.title}
                               </h3>
                               
                               <div className="flex items-center space-x-6">
                                  <button className="px-6 py-2 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
                                    Analyze Case
                                  </button>
                                  <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">[ {item.imageInfo} ]</p>
                               </div>
                             </motion.div>
                        </div>
                        
                        {/* HUD Elements */}
                        <div className="absolute top-8 right-8 text-right font-mono text-[9px] text-gray-700 space-y-1 pointer-events-none opacity-50">
                            <div>PROJECT_ID: KRN-0{index + 1}</div>
                            <div>AUTH: SYSTEM_ROOT</div>
                            <div>DATE: 2026.05.22</div>
                        </div>

                        <div className="absolute inset-0 border border-white/10 scale-[0.99] group-hover:scale-100 transition-all duration-700 pointer-events-none"></div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}
