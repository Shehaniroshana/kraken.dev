"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const showcases = [
  {
    title: "Project Zero",
    category: "Neural Engine",
    imageInfo: "Holographic Interface Preview",
  },
  {
    title: "Quantum Ledger",
    category: "Distributed DB",
    imageInfo: "Data Visualization Matrix",
  },
  {
    title: "Cyber Fabric",
    category: "Security Grid",
    imageInfo: "Real-time Threat Monitoring",
  },
  {
    title: "Kraken OS",
    category: "Enterprise System",
    imageInfo: "Central Command Dashboard",
  }
];

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
    <section ref={triggerRef} className="relative h-screen bg-black overflow-hidden z-20 border-y border-white/5">
        <div className="absolute top-12 left-12 z-30">
            <h2 className="text-sm font-mono tracking-widest text-red-500 uppercase">Deployed Experiences</h2>
        </div>
        
        <div ref={scrollContainerRef} className="flex h-full w-[400vw]">
            {showcases.map((item, index) => (
                <div key={index} className="w-[100vw] h-full flex flex-col justify-center items-center relative px-20">
                    <div className="w-full max-w-5xl aspect-video glass-panel relative overflow-hidden group">
                        {/* Background Noise Image/Placeholder */}
                        <div className="absolute inset-0 bg-[#050505] opacity-50 z-0 mix-blend-overlay">
                            {/* In a real project, this would be an image or video */}
                            <div className="w-full h-full kraken-grid absolute inset-0 opacity-20"></div>
                            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-red-900/20 blur-[100px]"></div>
                        </div>

                        <div className="absolute inset-0 p-12 flex flex-col justify-end z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                             <span className="text-xs font-mono text-red-500 tracking-widest mb-2">{item.category}</span>
                             <h3 className="text-5xl font-display font-black text-white uppercase tracking-tighter">{item.title}</h3>
                             <p className="mt-4 text-xs font-mono text-gray-500">[ {item.imageInfo} ]</p>
                        </div>
                        
                        <div className="absolute inset-0 border border-white/10 scale-[0.98] group-hover:scale-100 group-hover:border-red-500/50 transition-all duration-500 pointer-events-none"></div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}
