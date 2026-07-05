import React, { useState, useEffect } from "react";
import { Globe, Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
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
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-4 shadow-md border-b border-slate-200/80"
          : "bg-white/75 backdrop-blur-md py-5 border-b border-slate-200/40 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-50">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Logo size="md" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-brand-accent transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0A0F1A] hover:bg-slate-800 text-white font-display transition-all duration-300 shadow-md hover:shadow-lg"
            >
              B2B Inquiry
              <ArrowUpRight className="h-4 w-4 text-brand-accent" />
            </a>
          </div>
        </div>

        {/* Mobile Action Controls */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-brand-accent transition-colors"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-xl z-40 transition-transform duration-300 transform lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10 justify-between">
          <ul className="flex flex-col gap-6 text-left">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-bold text-slate-800 hover:text-brand-accent transition-colors block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 text-left">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Trade Inquiries:</span>
              <a href="mailto:trade@indoexglobal.com" className="text-brand-accent font-mono font-semibold">
                info@indoexglobal.in
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-4 rounded-full font-bold uppercase tracking-wider bg-[#0A0F1A] hover:bg-slate-800 text-white transition-all duration-200 shadow-md"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
