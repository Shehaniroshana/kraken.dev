"use client";

import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import SoftAurora from "@/components/ui/soft-aurora/SoftAurora";

const team = [
  {
    name: "Founder",
    role: "CEO & Lead Engineer",
    description: "I originally dreamed of being a wood carver, shaping raw materials into art. Life took a different path, but I brought that same obsession with craftsmanship to software engineering. Today, I carve code instead of wood to build premium digital experiences.",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Shehan&backgroundColor=b6e3f4",
    socials: [
      { icon: Github, href: "#" },
      { icon: Linkedin, href: "#" }
    ]
  },
  {
    name: "Co-Founder",
    role: "Marketing Director",
    description: "Driven by a lifelong dream of becoming a businessman, I turned my passion into a reality as a marketing expert. Currently an undergraduate at University of Sri Jayewardenepura (USJ), I blend academic insights with real-world growth strategies to scale brands.",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=CoFounder&backgroundColor=c0aede",
    socials: [
      { icon: Github, href: "#" },
      { icon: Linkedin, href: "#" }
    ]
  }
];

export function TeamSection() {
  return (
    <section id="team" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <SoftAurora 
          color1="#000000" 
          color2="#450a0a" 
          brightness={0.6}
          speed={0.3}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-600 text-[10px] font-display font-black uppercase tracking-[0.4em] block mb-6">The Architects</span>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white uppercase tracking-tighter leading-none mb-12">
              Who We <span className="premium-gradient-text">Are</span>
            </h2>
            <p className="text-[10px] md:text-xs text-gray-500 font-display font-black uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed">
              Engineered by developers, for ambitious brands. Two paths, one shared vision for digital excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-full bg-[#050505] border border-white/5 p-10 md:p-12 rounded-[32px] flex flex-col items-center text-center transition-all duration-700 hover:border-white/10 group shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
                
                {/* Avatar */}
                <div className="relative w-32 h-32 mb-10">
                  <div className="absolute inset-0 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-all duration-700" />
                  <div className="absolute inset-0 border border-white/5 rounded-full z-10" />
                  <div className="absolute inset-2 bg-black rounded-full overflow-hidden z-10 p-1">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    />
                  </div>
                </div>

                <div className="mb-6">
                    <span className="px-4 py-1.5 bg-red-600/5 border border-red-600/20 rounded-full text-[9px] font-display font-black text-red-600 uppercase tracking-[0.3em]">
                        {member.role}
                    </span>
                </div>

                <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter mb-6">
                  {member.name}
                </h3>
                
                <p className="text-gray-500 text-[10px] font-display font-black uppercase tracking-[0.2em] leading-relaxed mb-10 flex-grow">
                  {member.description}
                </p>

                <div className="flex gap-6">
                  {member.socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/20 hover:text-red-600 hover:border-red-600/30 transition-all duration-500"
                    >
                      <social.icon className="w-5 h-5" />
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
