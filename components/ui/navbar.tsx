"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import iconImg from "@/app/icon.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { Target, Zap, Code2, Mail, Shield } from "lucide-react";

const navLinks = [
  { href: "#vision", label: "Vision", Icon: Target },
  { href: "#why-us", label: "Why Us", Icon: Shield },
  { href: "#services", label: "Services", Icon: Zap },
  { href: "#tech", label: "Technology", Icon: Code2 },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on your layout needs
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      if (!current && window.scrollY < 100) {
        current = "hero"; // Or whatever top section ID is
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex justify-between items-center relative h-12">
          <a href="#hero" className="flex items-center group cursor-pointer h-full">
            {/* Spacer to maintain layout */}
            <div className="hidden md:block w-64 h-1" />
            
            {/* Absolute Logo */}
              <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 flex items-center group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                  <Image
                    src={iconImg}
                    alt="Kraken Icon"
                    fill
                    sizes="(max-width: 640px) 48px, 64px"
                    className="object-contain drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]"
                  />
                </div>
              </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className={`transition-colors relative group ${isActive ? "text-white" : "hover:text-white"}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 h-[2px] bg-red-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </a>
              );
            })}
          </nav>
          
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else window.location.href = "#contact";
            }}
            className="hidden md:inline-block px-6 py-2 border border-red-600/30 bg-red-600/10 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all"
          >
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
                      const isActive = activeSection === link.href.substring(1);
                      return (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08, duration: 0.4 }}
                          whileHover={{ x: 8 }}
                          className={`group flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-red-600/20 hover:to-red-600/5 hover:border-red-600/30 ${
                            isActive ? "bg-gradient-to-r from-red-600/20 to-red-600/5 border-red-600/30" : "border-transparent"
                          } border`}
                        >
                          <IconComponent className={`w-6 h-6 transition-all duration-300 group-hover:text-red-400 group-hover:scale-110 ${isActive ? "text-red-400" : "text-red-500"}`} />
                          <div className="flex-1">
                            <span className={`text-sm font-bold tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-red-400 ${isActive ? "text-red-400" : "text-gray-300"}`}>
                              {link.label}
                            </span>
                          </div>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className={`text-red-600 ${isActive ? "block" : "hidden group-hover:block"}`}
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
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      else window.location.href = "#contact";
                    }}
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
