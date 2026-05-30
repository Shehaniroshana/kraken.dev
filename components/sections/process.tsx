"use client";

import { motion } from "motion/react";
import { Radar, Layers, Terminal, Flame } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and technical requirements to define a robust architecture and project roadmap.",
    icon: Radar,
    color: "from-zinc-500 to-zinc-700",
    shadow: "shadow-zinc-500/20"
  },
  {
    id: "02",
    title: "UI/UX Architecture",
    description: "Crafting wireframes and high-fidelity prototypes. We focus on modern aesthetics, user psychology, and conversion-driven design.",
    icon: Layers,
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/20"
  },
  {
    id: "03",
    title: "Core Engineering",
    description: "Writing clean, scalable, and highly performant code. We build the frontend and backend using enterprise-grade technologies.",
    icon: Terminal,
    color: "from-red-500 to-red-700",
    shadow: "shadow-red-500/20"
  },
  {
    id: "04",
    title: "Deployment & Scale",
    description: "Rigorous testing, optimization, and seamless deployment to production. We ensure your platform is secure, fast, and ready to scale.",
    icon: Flame,
    color: "from-emerald-500 to-emerald-700",
    shadow: "shadow-emerald-500/20"
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-red-600 block mb-4 opacity-80">
              Our Methodology
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-6">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Execute</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-mono uppercase tracking-widest max-w-xl mx-auto">
              A structured, transparent, and highly technical approach to turning ideas into production-ready software.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Node on the line */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-red-500 transition-colors duration-500 z-10" />

                <div className="bg-black/40 backdrop-blur-md border border-white/5 hover:border-white/20 p-8 rounded-[30px] transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} ${step.shadow} shadow-lg`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-display font-black text-white/5 group-hover:text-white/10 transition-colors duration-500">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-4 group-hover:text-red-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
