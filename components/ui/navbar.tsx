"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/5 py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center relative h-12">
        <a href="#hero" className="flex items-center group cursor-pointer h-full">
          {/* Spacer to maintain layout */}
          <div className="w-64 h-1" />
          
          {/* Absolute Logo */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-72 h-28 group-hover:scale-105 transition-transform duration-300">
            <Image 
              src={logoImg} 
              alt="Kraken Logo" 
              fill 
              priority
              className="object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.4)] object-left" 
            />
          </div>
        </a>
        
        <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
          <a href="#vision" className="hover:text-white transition-colors relative group">
            Vision
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="hover:text-white transition-colors relative group">
            Services
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#tech" className="hover:text-white transition-colors relative group">
            Technology
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-white transition-colors relative group">
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        
        <button className="hidden md:inline-block px-6 py-2 border border-red-600/30 bg-red-600/10 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all">
          Initialize Core
        </button>
      </div>
    </motion.header>
  );
}
