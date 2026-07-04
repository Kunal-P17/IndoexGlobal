import React, { useState, useEffect } from "react";
import { Globe, Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Global Trade", href: "#trade" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-primary/95 dark:bg-[#0A0F1A]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative p-2 rounded-lg bg-[#d4af37]/20 group-hover:bg-[#d4af37]/30 transition-colors shadow-lg">
            <Globe className="h-6 w-6 text-brand-accent animate-pulse" />
          </div>
          <div>
            <span className="text-xl md:text-2xl font-extrabold text-white tracking-wider">
              VANGUARD<span className="text-[#d4af37]">GLOBAL</span>
            </span>
            <span className="block text-[9px] font-mono tracking-widest text-slate-300 uppercase">
              International B2B Trading
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-200 hover:text-brand-accent transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-white/20 pl-6">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-300 hover:text-brand-accent hover:bg-white/5 transition-all"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#d4af37] hover:bg-[#f9e29f] text-[#0A0F1A] font-display transition-all duration-300 shadow-lg shadow-yellow-900/20 hover:shadow-yellow-600/35"
            >
              B2B Inquiry
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Mobile Action Controls */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-300 hover:text-brand-accent transition-colors"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-brand-accent transition-colors"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-brand-primary/98 dark:bg-[#0A0F1A]/98 z-40 transition-transform duration-300 transform lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10 justify-between">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-bold text-slate-100 hover:text-brand-accent transition-colors block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Trade Inquiries:</span>
              <a href="mailto:trade@vanguardglobal.com" className="text-brand-accent font-mono">
                trade@vanguardglobal.com
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-4 rounded-xl font-bold uppercase tracking-wider bg-brand-accent hover:bg-brand-accent-hover text-brand-primary transition-all duration-200"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
