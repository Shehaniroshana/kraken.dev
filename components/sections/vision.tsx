"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function VisionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (textRef.current) {
        gsap.fromTo(
            textRef.current,
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "center center",
                    scrub: 1,
                }
            }
        );
    }
  }, []);

  return (
    <section ref={containerRef} id="vision" className="relative h-[150vh] bg-black z-20">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent animation-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-red-900/20 blur-[150px] mix-blend-screen mix-blend-color-dodge mix-blend-color-dodge"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-block mb-8">
                <span className="px-4 py-1 text-[10px] font-mono tracking-widest text-red-500 border border-red-500/30 rounded-full bg-red-500/10">VISION</span>
            </div>
            
            <h2 ref={textRef} className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase tracking-tighter leading-none mx-auto max-w-5xl">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-800">intelligent digital ecosystems</span> for the next generation.
            </h2>
        </div>
      </div>
    </section>
  );
}
