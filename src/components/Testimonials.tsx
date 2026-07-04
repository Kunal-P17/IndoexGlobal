import React from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent text-white transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/15 border border-brand-accent/20 px-3 py-1 rounded-full">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight uppercase">
            Trust From Sourcing Desks
          </h2>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed">
            Discover why global supply chain vice presidents and procurement officers select Vanguard for zero-delay compliance and bulk product trade cycles.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between text-left relative overflow-hidden group backdrop-blur-md"
            >
              {/* Quote Mark Decorator */}
              <Quote className="absolute top-6 right-8 h-12 w-12 text-white/5 pointer-events-none group-hover:text-brand-accent/5 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-5 text-brand-accent">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{test.content}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-brand-accent/20 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5 leading-none">
                    {test.name}
                    <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                  </h4>
                  <span className="text-xs text-slate-400 block mt-1">
                    {test.role}, {test.company}
                  </span>
                  <span className="text-[10px] font-mono font-medium tracking-wider text-brand-accent uppercase block mt-1">
                    {test.country}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
