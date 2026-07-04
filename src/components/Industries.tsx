import React from "react";
import { motion } from "motion/react";
import { INDUSTRIES } from "../data";
import { Apple, Wrench, Shirt, MonitorPlay } from "lucide-react";

const iconMap: { [key: string]: any } = {
  Apple: Apple,
  Wrench: Wrench,
  Shirt: Shirt,
  MonitorPlay: MonitorPlay
};

export default function Industries() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-brand-light relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full">
            Market Sectors
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 sm:mt-4 tracking-tight uppercase">
            Industries Served Globally
          </h2>
          <p className="text-sm text-slate-500 mt-3 sm:mt-4 leading-relaxed">
            Our trade brokers hold deep specialization across major commercial categories, ensuring compliance with strict sector-specific packaging and transit mandates.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {INDUSTRIES.map((ind, idx) => {
            const IconComponent = iconMap[ind.icon] || Wrench;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group h-72 sm:h-80 rounded-3xl overflow-hidden shadow-md flex flex-col justify-end p-5 sm:p-6 border border-slate-200/50"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={ind.bgImage}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 filter grayscale group-hover:grayscale-0 dark:brightness-75"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/95 via-[#0A0F1A]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-left">
                  <div className="p-2.5 rounded-xl bg-brand-accent/20 text-brand-accent border border-brand-accent/30 w-fit mb-4">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    {ind.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
