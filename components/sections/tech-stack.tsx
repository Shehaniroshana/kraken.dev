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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative"
    >
      <div className="relative px-6 py-5 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md
        hover:border-white/10 hover:bg-white/5 transition-all duration-500 cursor-default shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-display font-black text-white uppercase tracking-[0.2em]">
            {tech.name}
          </span>
          <span className="text-[8px] font-display font-black text-red-600/50 uppercase tracking-[0.3em]">
            {tech.category}
          </span>
        </div>
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

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 30 });
  
  const y1 = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["5%", "-5%"]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="tech" 
      ref={containerRef} 
      className="relative h-[300vh] bg-black z-20 border-t border-white/5"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* CSS Background Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-900/5 rounded-full blur-[120px]" />
        </div>

        {/* Foreground Content Layers */}
        <motion.div 
          style={{ opacity }}
          className="container mx-auto px-6 relative z-10 w-full"
        >
          <div className="relative h-screen w-full flex flex-col justify-center">
            
            {/* Background Large Text */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-[0.02]"
            >
              <div className="text-[18vw] font-display font-black text-white leading-none whitespace-nowrap -ml-[10%] uppercase tracking-tighter">CREATIVITY</div>
              <div className="text-[18vw] font-display font-black text-white leading-none whitespace-nowrap ml-[15%] uppercase tracking-tighter">ENGINEERING</div>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              style={{ y: y2 }}
              className="max-w-6xl mx-auto text-center relative z-10"
            >
              <div className="flex flex-col items-center mb-12">
                <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] mb-4">The Stack</span>
                <div className="h-[1px] w-12 bg-red-600/30"></div>
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
                The Tools <br /> 
                <span className="premium-gradient-text">
                    Behind the Story
                </span>
              </h2>

              <p className="text-[10px] md:text-xs text-gray-500 font-display font-black max-w-xl mx-auto leading-relaxed mb-20 uppercase tracking-[0.2em]">
                From backend systems and AI to design and motion, we use modern tools to turn two separate strengths into one focused software company.
              </p>

              {/* Tech Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                {technologies.map((tech, i) => (
                  <TechNode key={tech.name} tech={tech} index={i} />
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>

        <div className="absolute bottom-12 left-12 z-20 hidden lg:block">
            <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-red-600/50" />
                <span className="text-[8px] font-display font-black text-white/20 uppercase tracking-[0.3em]">Scroll Through the Stack</span>
            </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none z-30" />
    </section>
  );
}
