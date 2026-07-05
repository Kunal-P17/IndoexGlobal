import React from "react";
import { motion } from "motion/react";
import { 
  Globe, 
  CircleDollarSign, 
  Clock, 
  PackageCheck, 
  FileText, 
  MapPin, 
  ShieldCheck 
} from "lucide-react";
import whyus from "../Imgs/why-us.jpeg";

export default function About() {
  const features = [
    {
      title: "Global Network",
      desc: "Strong global presence ensuring seamless trade across borders.",
      icon: Globe,
    },
    {
      title: "Cost Efficient",
      desc: "Optimized processes that deliver the best value for your business.",
      icon: CircleDollarSign,
    },
    {
      title: "On-Time Delivery",
      desc: "Timely and reliable shipments, every time, worldwide.",
      icon: Clock,
    },
    {
      title: "End-to-End Handling",
      desc: "Complete logistics support from pickup to final delivery.",
      icon: PackageCheck,
    },
    {
      title: "Customs Expertise",
      desc: "Expert handling of documentation and customs clearance.",
      icon: FileText,
    },
    {
      title: "Live Tracking",
      desc: "Real-time tracking for complete visibility and peace of mind.",
      icon: MapPin,
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-[#03111e] text-white relative overflow-hidden z-10">
      {/* Decorative ambient ocean glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid: Ship Banner + Pillars */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Massive Why Us Ship Banner */}
          <div className="lg:col-span-5 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/4] group"
            >
              {/* Ship Image */}
              <img
                src={whyus}
                alt="Aerial view of container ship at sea"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Deep Ocean Blue Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#03111e] via-[#03111e]/40 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-blue-950/20" />
              
              {/* Poster Typography Overlays */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 text-left">
                <h3 className="text-5xl sm:text-6xl font-black font-display tracking-tighter leading-none text-white mb-4">
                  WHY <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bda02a] to-[#d4af37] text-glow">US?</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed font-medium">
                  Delivering trust, value and excellence across every mile.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 6 Features Grid */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="mb-8 max-w-xl">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full mb-4 inline-block">
                Core Value Proposition
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 uppercase">
                Reliable Sourcing, Logistics, & Regulatory Compliance
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                IndoEx Global solves complex international supply-chain challenges for bulk buyers. We bridge global separations by arranging secure container allocations, ensuring quality inspections, and delivering complete B2B transactional safety.
              </p>
            </div>

            {/* 2x3 Grid of features */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 w-full">
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/40 hover:bg-white/[0.08] transition-all duration-300 group text-left flex flex-col h-full"
                >
                  <div className="p-2.5 rounded-xl bg-brand-accent/10 text-brand-accent shrink-0 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <feat.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5 font-display group-hover:text-brand-accent transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

        {/* Divider / Visual Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-16 sm:my-24" />

        {/* Section: Connecting India's Finest Products to Global Markets */}
        <div className="text-left">
          {/* Header */}
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#d4af37] uppercase bg-[#d4af37]/10 border border-[#d4af37]/20 px-3 py-1 rounded-full mb-4 inline-block">
              Sourcing Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight uppercase mb-6 text-white">
              Connecting India's Finest Products to Global Markets
            </h3>
          </div>

          {/* Editorial Content: 3-column paragraphs */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mb-14 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <p>
                <strong className="text-white font-extrabold tracking-wide">INDOEX GLOBAL PRIVATE LIMITED</strong> is a trusted Indian import-export company specializing in the export of premium-quality agricultural products and construction materials. We bridge the gap between reliable Indian manufacturers and international buyers by delivering products that consistently meet global quality standards.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <p>
                Our diverse portfolio includes spices, dehydrated products, rice, tiles, and granite, carefully sourced from trusted suppliers across India. Every product undergoes stringent quality checks to ensure consistency, freshness, and compliance with buyer specifications.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <p>
                Beyond product supply, we provide comprehensive export solutions including supplier sourcing, quality inspection, customized packaging, export documentation, and international logistics. Our end-to-end approach enables customers to source with confidence while ensuring efficient and timely deliveries.
              </p>
            </div>
          </div>

          {/* Mission and Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white/[0.03] border-t-4 border-t-[#d4af37] border-x border-b border-white/10 p-8 text-left hover:bg-white/[0.05] transition-all duration-300 shadow-xl"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                Our Mission
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To connect global markets with premium-quality products sourced from trusted Indian manufacturers by delivering reliable export solutions, competitive pricing, international quality standards, and timely deliveries.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white/[0.03] border-t-4 border-t-[#d4af37] border-x border-b border-white/10 p-8 text-left hover:bg-white/[0.05] transition-all duration-300 shadow-xl"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                Our Vision
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To become one of India's most trusted and respected global trading companies, recognized for quality products, dependable service, and long-term partnerships built on trust and excellence.
              </p>
            </motion.div>
          </div>

          {/* Export Documentation & Industries Served side-by-side lists */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 border-t border-white/10 pt-12 mb-6">
            {/* Export Documentation List */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#d4af37] mb-6 font-display tracking-wide uppercase flex items-center gap-2">
                Export Documentation
              </h4>
              <ul className="grid sm:grid-cols-1 gap-3 text-slate-300 text-sm sm:text-base">
                {[
                  "Commercial Invoice",
                  "Packing List",
                  "Certificate of Origin",
                  "Certificate of Analysis (COA)",
                  "Phytosanitary Certificate (Where Applicable)",
                  "Bill of Lading",
                  "Fumigation Certificate (Where Required)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="h-2 w-2 bg-[#d4af37] rotate-45 mt-2 shrink-0 rounded-[1px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries We Serve List */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#d4af37] mb-6 font-display tracking-wide uppercase flex items-center gap-2">
                Industries We Serve
              </h4>
              <ul className="grid sm:grid-cols-1 gap-3 text-slate-300 text-sm sm:text-base">
                {[
                  "Food Processing",
                  "Retail & Wholesale",
                  "Hotels & Restaurants",
                  "Food Manufacturers",
                  "Pharmaceutical Industry",
                  "Nutraceutical Industry",
                  "Construction & Infrastructure"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="h-2 w-2 bg-[#d4af37] rotate-45 mt-2 shrink-0 rounded-[1px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Brand Commitment Footer Banner */}
        <div className="w-full border-t border-white/10 mt-14 sm:mt-20 pt-8 flex flex-col items-center justify-center text-center">
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#d4af37] uppercase mb-1">
            Reliable. Efficient. Global.
          </p>
          <p className="text-base sm:text-lg font-bold font-sans text-slate-300 tracking-wide">
            Your Growth, Our Commitment.
          </p>
        </div>

      </div>
    </section>
  );
}
