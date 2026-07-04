import React from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { SearchCode, ShieldCheck, FileCheck, Ship, ArrowRight, Check } from "lucide-react";

// Map lucide icons from strings
const iconMap: { [key: string]: any } = {
  SearchCode: SearchCode,
  ShieldCheck: ShieldCheck,
  FileCheck: FileCheck,
  Ship: Ship
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent text-white transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/15 border border-brand-accent/20 px-3 py-1 rounded-full">
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-none uppercase">
              End-to-End Trading Desk & Logistics
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md text-left">
            We operate as your primary representative on the ground. From verified factory audits to customs clearance, we eliminate supply chain bottlenecks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((serv, idx) => {
            const IconComponent = iconMap[serv.icon] || Ship;
            return (
              <motion.div
                key={serv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#d4af37]/35 hover:bg-white/10 transition-all duration-300 flex flex-col text-left group backdrop-blur-md"
              >
                {/* Header Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-brand-accent/15 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-tight uppercase">
                    {serv.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {serv.description}
                </p>

                {/* Technical Bullet Details */}
                <ul className="space-y-2.5 mt-auto pt-6 border-t border-white/5">
                  {serv.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-3 text-xs text-slate-400 items-start">
                      <div className="p-0.5 rounded bg-brand-accent/10 text-brand-accent shrink-0 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
