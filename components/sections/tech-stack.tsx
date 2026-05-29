"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Three.js", category: "3D/WebGL" },
  { name: "WebGL", category: "Graphics" },
  { name: "GSAP", category: "Animation" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "NestJS", category: "Backend" },
  { name: "Spring Boot", category: "Enterprise" },
  { name: "Rust", category: "Systems" },
  { name: "Golang", category: "Performance" },
  { name: "Kubernetes", category: "Orchestration" },
];

function TechNode({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group relative"
    >
      <div className="relative px-6 py-4 bg-white/[0.02] border border-white/5 rounded-lg backdrop-blur-sm
        hover:border-red-600/40 hover:bg-red-600/5 transition-all duration-500 cursor-default">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
            {tech.name}
          </span>
          <span className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.2em] group-hover:text-red-500/60 transition-colors">
            {tech.category}
          </span>
        </div>
        {/* Glow line on hover */}
        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-red-600 to-transparent group-hover:w-full transition-all duration-700" />
      </div>
    </motion.div>
  );
}

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax transforms for text layers
  const y1 = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <section 
      id="tech" 
      ref={containerRef} 
      className="relative h-[300vh] bg-black z-20"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* CSS Background Effect - replaces heavy SoftAurora WebGL */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-red-950/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/8 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-900/10 rounded-full blur-[100px]" 
            style={{ animation: 'pulse 4s ease-in-out infinite alternate' }} />
        </div>

        {/* Foreground Content Layers */}
        <motion.div 
          style={{ opacity }}
          className="container mx-auto px-6 relative z-10 w-full"
        >
          <div className="relative h-screen w-full flex flex-col justify-center">
            
            {/* Background Large Text (Parallax Layer 1) */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-[0.03]"
            >
              <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap -ml-[20%] uppercase tracking-tighter">CREATIVITY</div>
              <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap ml-[10%] uppercase tracking-tighter">ENGINEERING</div>
              <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap -ml-[10%] uppercase tracking-tighter">GROWTH</div>
            </motion.div>

            {/* Main Content (Parallax Layer 2) */}
            <motion.div 
              style={{ y: y2, scale }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="inline-block px-3 py-1 border border-red-600/30 rounded-full bg-red-600/5 mb-8">
                <span className="text-[10px] font-mono tracking-[0.4em] text-red-500 uppercase">Shared Tools</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
                The Tools <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white">
                    Behind the Story
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-16">
                From backend systems and AI to design and motion, we use modern tools to turn two separate strengths into one focused software company.
              </p>

              {/* Tech Grid - replaces heavy 3D TechCloud */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
                {technologies.map((tech, i) => (
                  <TechNode key={tech.name} tech={tech} index={i} />
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Floating Interactive Elements */}
        <div className="absolute bottom-12 left-12 z-20 hidden lg:block">
            <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-[1px] bg-red-600 group-hover:w-20 transition-all duration-500" />
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Scroll through the stack</span>
            </div>
        </div>

        <div className="absolute top-1/2 right-12 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-8">
            {["SYSTEMS", "NETWORK", "CLOUD", "AI"].map((label, i) => (
                <div key={i} className="flex items-center space-x-4 justify-end">
                    <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">{label}</span>
                    <div className="w-1.5 h-1.5 rounded-full border border-red-600/50" />
                </div>
            ))}
        </div>

      </div>

      {/* Transitional Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none z-30" />
    </section>
  );
}
