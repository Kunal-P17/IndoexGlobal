import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";
import { Maximize2, X, Info, Search } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filters = ["all", "Logistics", "Warehousing", "Inspection", "Products"];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="gallery" className="py-24 bg-brand-light dark:bg-transparent transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full">
            Operations Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white mt-4 tracking-tight uppercase">
            Our Global Operations
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            Take a visual tour of our freight shipments, climate-regulated warehouse logistics depots, and pre-loading inspections.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeFilter.toLowerCase() === filter.toLowerCase()
                  ? "bg-brand-primary text-brand-accent dark:bg-[#d4af37] dark:text-[#0A0F1A] shadow-lg shadow-brand-accent/15"
                  : "bg-slate-200/40 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:border dark:border-white/5 dark:text-slate-400 dark:hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative group h-72 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/50 dark:border-white/10 cursor-pointer"
                onClick={() => setLightboxItem(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#0A0F1A]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" />

                {/* Hover details */}
                <div className="absolute inset-x-6 bottom-6 z-10 text-left opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2 leading-tight uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-normal">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-brand-accent uppercase tracking-wider">
                    <Search className="h-3.5 w-3.5" />
                    Inspect Closer
                  </span>
                </div>

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/40 backdrop-blur-sm text-white opacity-60 group-hover:opacity-0 transition-opacity">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
              onClick={() => setLightboxItem(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Lightbox Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl w-full bg-[#0A0F1A] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col text-left backdrop-blur-md"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video max-h-[60vh] bg-slate-900">
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Metas copy */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-[#d4af37]/15 px-2.5 py-1 rounded">
                      {lightboxItem.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Vanguard Verified Cargo</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight mb-3 uppercase">
                    {lightboxItem.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed flex items-start gap-2 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <Info className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                    <span>{lightboxItem.description}</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
