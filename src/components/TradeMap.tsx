import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TRADE_COUNTRIES } from "../data";
import { Globe2, Navigation, Ship, Anchor, MapPin, Layers } from "lucide-react";

export default function TradeMap() {
  const [selectedHub, setSelectedHub] = useState<string>(TRADE_COUNTRIES[0].name);

  const activeHubData = TRADE_COUNTRIES.find((c) => c.name === selectedHub) || TRADE_COUNTRIES[0];

  return (
    <section id="trade" className="py-24 bg-transparent text-white relative overflow-hidden transition-colors duration-300 relative z-10">
      {/* Abstract Background Grid Graphic */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/15 border border-brand-accent/20 px-3 py-1 rounded-full">
            Global Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight uppercase">
            Vanguard Trade Corridors
          </h2>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed">
            We link prime logistics terminals via bilateral shipping lanes. Click on any regional trade hub below to review annual shipping capacity metrics and sourcing desk operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Intersecting Hub Interactive Selector */}
          <div className="lg:col-span-7 flex flex-col items-stretch">
            
            {/* Custom stylized Map Board */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono text-slate-400">GLOBAL CORRIDOR TERMINALS</span>
                <Globe2 className="h-4 w-4 text-brand-accent animate-spin-slow" />
              </div>

              {/* Grid of Interactive Buttons simulating Map Pins */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative">
                {TRADE_COUNTRIES.map((country) => {
                  const isActive = country.name === selectedHub;
                  return (
                    <button
                      key={country.name}
                      onClick={() => setSelectedHub(country.name)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-28 relative overflow-hidden group ${
                        isActive
                          ? "bg-[#d4af37] border-[#d4af37] text-[#0A0F1A] shadow-lg shadow-yellow-600/30 font-bold"
                          : "bg-white/5 border-white/5 hover:border-[#d4af37]/35 text-white"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-2xl">{country.flag}</span>
                        <MapPin className={`h-4 w-4 ${isActive ? "text-brand-primary" : "text-brand-accent opacity-60 group-hover:opacity-100"}`} />
                      </div>
                      <div>
                        <span className="text-xs font-mono tracking-wider text-slate-400 uppercase block mb-1">
                          {country.region}
                        </span>
                        <span className="text-sm font-bold block truncate leading-none">
                          {country.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Graphic Visual Trade Lane */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Ship className="h-3.5 w-3.5 text-brand-accent" />
                  Freight Alliances: Maersk, MSC, CMA CGM
                </span>
                <span className="flex items-center gap-1.5">
                  <Anchor className="h-3.5 w-3.5 text-brand-accent" />
                  Global Slot Allocations Locked
                </span>
              </div>
            </div>

          </div>

          {/* Right: Active Hub Detail Presentation */}
          <div className="lg:col-span-5 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHubData.name}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl relative text-left backdrop-blur-md"
              >
                {/* Active Country Ribbon */}
                <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
                  <span className="text-4xl">{activeHubData.flag}</span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white leading-none uppercase">
                      {activeHubData.name}
                    </h3>
                    <span className="text-xs text-brand-accent font-mono tracking-wider uppercase block mt-1">
                      {activeHubData.region} Sector
                    </span>
                  </div>
                </div>

                {/* Hub Metrics Grid */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-1">
                      Bilateral Trade Role
                    </span>
                    <span className="text-base font-bold text-white flex items-center gap-2">
                      <Layers className="h-4 w-4 text-brand-accent" />
                      {activeHubData.role}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-1">
                      Estimated Sourcing Capacity
                    </span>
                    <span className="text-xl font-bold text-brand-accent font-display">
                      {activeHubData.volume}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
                    Vanguard operates native-speaking B2B logistics coordinators in this region, supervising loading inspections, negotiating local EXW prices, and executing fast-track export licensing filings.
                  </div>

                  {/* Micro-CTA link */}
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white transition-colors"
                  >
                    Inquire cargo from {activeHubData.name}
                    <Navigation className="h-3.5 w-3.5 text-brand-accent rotate-45" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
