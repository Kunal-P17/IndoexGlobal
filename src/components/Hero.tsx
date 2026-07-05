import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroimg from "../Imgs/hero-img.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Graphic Image with Light Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroimg}
          alt="Logistics freighter container ship"
          className="w-full h-full object-cover opacity-75 transform scale-100 transition-opacity duration-300"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to mask the bottom and sides for perfect legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-white/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-14 sm:pt-32 sm:pb-20 w-full flex justify-start">
        <div className="max-w-4xl text-left">
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0A0F1A] leading-tight tracking-tight font-display mb-4 sm:mb-6 uppercase"
          >
            Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bda02a] to-[#d4af37] text-glow">Global Markets</span> with Absolute Integrity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl"
          >
            IndoEx Global is a tier-1 international B2B operator, linking certified manufacturers with enterprise importers across 50+ countries. We handle multi-modal logistics, SGS pre-shipment inspections, and comprehensive custom clearances.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-[#0A0F1A] hover:bg-slate-800 text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Our B2B Catalog
              <ArrowRight className="h-4 w-4 text-brand-accent" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider border border-slate-300 text-slate-800 hover:bg-slate-50 transition-all duration-200"
            >
              Inquire Sourcing Specs
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] text-brand-light"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.52,113.13,121.21,170.51,108.55Z" />
        </svg>
      </div>
    </section>
  );
}
