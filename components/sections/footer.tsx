"use client";

import { motion } from "motion/react";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="py-24 border-t border-[var(--glass-border)] relative z-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-red-600/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                    <div className="relative w-64 h-16">
                        <Image src={logoImg} alt="Kraken Logo" fill className="object-contain object-left" />
                    </div>
                </div>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest max-w-xs leading-relaxed">
                    Engineering scalable enterprise systems and next-generation AI platforms.
                </p>
            </div>

            <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Intel</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Manifesto</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Architecture</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Career</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Directives</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Privacy Grid</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-red-500 font-mono text-xs uppercase tracking-widest transition-colors">Security Protocol</a></li>
                </ul>
            </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-600">
          <p>© 2026 KRAKEN ENTERPRISE SYSTEMS. ALL PROTOCOLS ACTIVE.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <div className="w-2 h-2 rounded-full bg-[var(--color-red)] animate-ping" />
             <span>SECURE NODE 190.286.21.89</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
