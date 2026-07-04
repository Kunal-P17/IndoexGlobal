import React from "react";
import { motion } from "motion/react";
import { Scale, Milestone, BadgeCheck, FileText, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Ethical Sourcing Protocols",
      desc: "Every factory partner undergoes regular labor, safety, and chemical-use audits to guarantee complete compliance with global standards.",
      icon: Scale
    },
    {
      title: "Comprehensive Risk Mitigation",
      desc: "Through confirmed irrevocable Letters of Credit (L/C) and SGS audits, we eliminate transaction and quality mismatch risks.",
      icon: Milestone
    },
    {
      title: "Customs Clearance Brokerage",
      desc: "Our trade compliance desks classify your commodities with pristine accuracy, preventing expensive custom gridlocks.",
      icon: FileText
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-light dark:bg-transparent transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Collage / Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
                alt="Corporate strategic planners discussing international B2B trades"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/20" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#0A0F1A]/95 dark:bg-white/5 dark:backdrop-blur-md border border-slate-800 dark:border-white/10 text-left shadow-xl">
                <p className="text-brand-accent font-mono text-xs font-bold uppercase tracking-widest mb-1">
                  Established Integrity
                </p>
                <p className="text-white text-sm">
                  Connecting primary agricultural cooperatives and heavy industrial smelters directly with global importers.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Copy Description Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full mb-4">
              Corporate Profile
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white tracking-tight leading-tight mb-6">
              Global Sourcing, Logistics, and Regulatory Compliance.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Vanguard Global Trade solves international supply-chain issues for bulk buyers. We bridge geographic separations by acting as an authorized B2B trading broker, managing strict pre-shipment inspections (SGS/BV), arranging ocean container slot allocations, and executing fast-track customs filings.
            </p>

            {/* Core Values List */}
            <div className="space-y-6 w-full">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent shrink-0">
                    <val.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-primary dark:text-white mb-1">
                      {val.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Stats Counter Box */}
            <div className="grid grid-cols-3 gap-6 w-full border-t border-slate-200 dark:border-slate-800 mt-10 pt-8">
              <div>
                <p className="text-3xl font-extrabold text-brand-accent font-display">15+ Yrs</p>
                <p className="text-xs text-slate-400">Average Client Loyalty</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-brand-accent font-display">6 Conts</p>
                <p className="text-xs text-slate-400">Active Supply Channels</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-brand-accent font-display">Zero</p>
                <p className="text-xs text-slate-400">Customs Impound Delays</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
