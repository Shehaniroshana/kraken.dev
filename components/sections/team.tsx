"use client";

import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

const team = [
  {
    name: "Founder",
    role: "CEO & Lead Engineer",
    description: "I originally dreamed of being a wood carver, shaping raw materials into art. Life took a different path, but I brought that same obsession with craftsmanship to software engineering. Today, I carve code instead of wood to build premium digital experiences.",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Shehan&backgroundColor=b6e3f4", // Placeholder for actual image
    socials: [
      { icon: Github, href: "#" },
      { icon: Linkedin, href: "#" }
    ],
    accent: "from-red-500 to-red-900"
  },
  {
    name: "Co-Founder",
    role: "Marketing Director",
    description: "Driven by a lifelong dream of becoming a businessman, I turned my passion into a reality as a marketing expert. Currently an undergraduate at University of Sri Jayewardenepura (USJ), I blend academic insights with real-world growth strategies to scale brands.",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=CoFounder&backgroundColor=c0aede", // Placeholder for actual image
    socials: [
      { icon: Github, href: "#" },
      { icon: Linkedin, href: "#" }
    ],
    accent: "from-cyan-500 to-cyan-900"
  }
];

export function TeamSection() {
  return (
    <section id="team" className="relative py-24 sm:py-32 bg-black overflow-hidden z-30">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-red-600 block mb-4 opacity-80">
              The Architects
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-6">
              Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Are</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-mono uppercase tracking-widest max-w-xl mx-auto">
              Engineered by developers, for ambitious brands.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Glow effect behind card */}
              <div className={`absolute -inset-1 bg-gradient-to-b ${member.accent} rounded-[40px] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              
              <div className="relative h-full bg-black/50 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-[40px] flex flex-col items-center text-center transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-2">
                
                {/* Avatar */}
                <div className="relative w-32 h-32 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full animate-pulse" />
                  <div className="absolute inset-1 bg-black rounded-full overflow-hidden border border-white/20 z-10 p-2">
                     {/* Use dicebear placeholder or generic icon if no real photo */}
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full" 
                    />
                  </div>
                </div>

                <div className="mb-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono font-bold text-red-500 uppercase tracking-widest">
                        {member.role}
                    </span>
                </div>

                <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-4 mt-4">
                  {member.name}
                </h3>
                
                <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest leading-relaxed mb-8 flex-grow">
                  {member.description}
                </p>

                <div className="flex gap-4">
                  {member.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
