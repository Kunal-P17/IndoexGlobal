import React from "react";
import { motion } from "motion/react";
import { Ship, ShieldCheck, BadgeCheck, Anchor, ArrowRight, FileSpreadsheet } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Bilateral Trade Hubs", value: "50+", icon: Ship },
    { label: "Annual Freight Capacity", value: "40,000+ TEUs", icon: Anchor },
    { label: "Third-Party Audited", value: "100%", icon: ShieldCheck },
    { label: "ISO Certifications", value: "Multi-Reg", icon: BadgeCheck }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F1A]">
      {/* Background Graphic Image with Premium Contrast Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920"
          alt="Logistics freighter container ship at twilight"
          className="w-full h-full object-cover opacity-20 transform scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Navy/Dark Slate Gradients to mask the bottom and sides for pristine typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1A]/95 via-[#0A0F1A]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-[#0A0F1A]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 mb-6"
            >
              <Anchor className="h-4 w-4 text-brand-accent" />
              <span className="text-xs font-mono font-semibold tracking-wider text-brand-accent uppercase">
                Premier International Trade Brokerage
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight font-display mb-6 uppercase"
            >
              Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f9e29f] text-glow">Global Markets</span> with Absolute Integrity.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              Vanguard Global Trade is a tier-1 international B2B operator, linking certified manufacturers with enterprise importers across 50+ countries. We handle multi-modal logistics, SGS pre-shipment inspections, and comprehensive custom clearances.
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#f9e29f] text-[#0A0F1A] transition-all duration-300 shadow-lg shadow-yellow-900/20 hover:shadow-yellow-600/30"
              >
                Our B2B Catalog
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider border border-white/10 text-white hover:bg-white/5 transition-all duration-200"
              >
                Inquire Sourcing Specs
              </a>
            </motion.div>
          </div>

          {/* Quick Stats Panel */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                <FileSpreadsheet className="h-5 w-5 text-[#d4af37]" />
                <h3 className="text-lg font-bold text-white tracking-tight">Active Trade Dashboard</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5">
                      <stat.icon className="h-4 w-4 text-[#d4af37]" />
                      <span className="text-2xl font-bold text-white tracking-tight font-display">{stat.value}</span>
                    </div>
                    <span className="text-xs text-slate-400 leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Verified Trust Statement */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-left">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Full Cargo Insurance Coverage</p>
                  <p className="text-[10px] text-slate-400">Every shipment backed by ICC-A Grade ocean transit marine insurance.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] text-brand-light dark:text-brand-dark transition-colors"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.52,113.13,121.21,170.51,108.55Z" />
        </svg>
      </div>
    </section>
  );
}
