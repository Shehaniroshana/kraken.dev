"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { Target, Zap, Code2, Mail } from "lucide-react";

const navLinks = [
  { href: "#vision", label: "Vision", Icon: Target },
  { href: "#services", label: "Services", Icon: Zap },
  { href: "#tech", label: "Technology", Icon: Code2 },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [isMobile]);

  return (
    <>
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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <button className="hidden md:inline-block px-6 py-2 border border-red-600/30 bg-red-600/10 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all">
            Initialize Core
          </button>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center"
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow Background */}
            <motion.div
              animate={mobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-600/5 rounded-lg blur-md"
            />

            {/* Hamburger Icon */}
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gradient-to-r from-red-500 to-red-400 rounded-full origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                className="w-full h-0.5 bg-gradient-to-r from-white to-gray-300 rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gradient-to-r from-red-500 to-red-400 rounded-full origin-center"
              />
            </div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[70px] z-30 bg-gradient-to-b from-red-600/10 via-black/40 to-black/80 backdrop-blur-sm"
            />

            {/* Animated Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-[70px] left-0 right-0 z-40 md:hidden"
            >
              <div className="bg-gradient-to-b from-black/95 via-black/90 to-black/85 backdrop-blur-xl border-b border-red-600/20 shadow-2xl">
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                  {/* Menu Items */}
                  <nav className="space-y-2">
                    {navLinks.map((link, index) => {
                      const IconComponent = link.Icon;
                      return (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08, duration: 0.4 }}
                          whileHover={{ x: 8 }}
                          className="group flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-red-600/20 hover:to-red-600/5 border border-transparent hover:border-red-600/30"
                        >
                          <IconComponent className="w-6 h-6 text-red-500 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                          <div className="flex-1">
                            <span className="text-sm font-bold tracking-[0.15em] uppercase text-gray-300 group-hover:text-red-400 transition-colors duration-300">
                              {link.label}
                            </span>
                          </div>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="text-red-600 group-hover:block hidden"
                          >
                            →
                          </motion.span>
                        </motion.a>
                      );
                    })}
                  </nav>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent my-6" />

                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300 border border-red-500/50"
                  >
                    Initialize Core
                  </motion.button>

                  {/* Bottom Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.08 + 0.3 }}
                    className="mt-8 text-center text-xs text-gray-500 border-t border-gray-800/50 pt-6"
                  >
                    <p>Unleash the digital ocean</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
