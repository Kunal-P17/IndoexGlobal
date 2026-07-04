import React from "react";
import { motion } from "motion/react";
import { CERTIFICATIONS } from "../data";
import { ShieldCheck, Award, FileSpreadsheet, KeyRound } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-16 bg-brand-light relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full">
            Verified Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-primary mt-4 tracking-tight uppercase">
            Compliance & Global Registrations
          </h2>
        </div>

        {/* Horizontal scrollable or rigid flex-grid of certificates */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#d4af37]/35 transition-all duration-300 text-left flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Decorative authority badge text */}
                  <span className="text-xs font-mono font-bold text-brand-accent px-2 py-1 rounded bg-brand-accent/10">
                    {cert.logoText}
                  </span>
                  <Award className="h-4 w-4 text-brand-accent opacity-60" />
                </div>
                
                <h3 className="text-base font-bold text-brand-primary mb-1.5 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-500 leading-normal mb-4">
                  {cert.authority}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3 mt-4 text-[10px] font-mono text-slate-400 flex flex-col gap-1">
                <span className="flex items-center gap-1.5">
                  <KeyRound className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  ID: {cert.number}
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-green-500 shrink-0" />
                  {cert.validity}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
