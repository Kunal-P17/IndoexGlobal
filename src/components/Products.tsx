import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCT_CATEGORIES } from "../data";
import { ProductItem } from "../types";
import { FileSpreadsheet, ChevronDown, ChevronUp, Quote, CheckCircle2, ArrowRight } from "lucide-react";

interface ProductsProps {
  onSelectProductForInquiry: (productName: string) => void;
}

export default function Products({ onSelectProductForInquiry }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedSpecsId, setExpandedSpecsId] = useState<string | null>(null);

  // Filter products based on selected tab
  const filteredProducts = PRODUCT_CATEGORIES.flatMap((category) => {
    if (activeCategory === "all" || category.id === activeCategory) {
      return category.items.map((item) => ({
        ...item,
        categoryName: category.name
      }));
    }
    return [];
  });

  const handleInquiry = (productName: string) => {
    onSelectProductForInquiry(productName);
    // Smooth scroll to the inquiry section
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-24 bg-brand-light dark:bg-transparent transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full">
            Wholesale Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white mt-4 tracking-tight leading-none uppercase">
            Corporate Trade Commodities
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            Browse our primary trade portfolio. Every commodity is accompanied by official third-party analysis certificates (SGS) and complete HS classification for seamless customs declarations.
          </p>
        </div>

        {/* Category Tab Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => {
              setActiveCategory("all");
              setExpandedSpecsId(null);
            }}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-brand-primary text-brand-accent dark:bg-[#d4af37] dark:text-[#0A0F1A] shadow-lg shadow-brand-accent/15"
                : "bg-slate-200/50 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:border dark:border-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            }`}
          >
            All Commodities
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedSpecsId(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-brand-primary text-brand-accent dark:bg-[#d4af37] dark:text-[#0A0F1A] shadow-lg shadow-brand-accent/15"
                  : "bg-slate-200/50 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:border dark:border-white/5 dark:text-slate-300 dark:hover:bg-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid of Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => {
              const isSpecsExpanded = expandedSpecsId === prod.id;
              return (
                <motion.div
                  layout
                  key={prod.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-md hover:shadow-2xl hover:border-slate-300 dark:hover:border-[#d4af37]/35 transition-all duration-300 flex flex-col text-left backdrop-blur-md"
                >
                  
                  {/* Image and overlays */}
                  <div className="relative h-56 overflow-hidden bg-slate-900 group shrink-0">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Badges */}
                    <span className="absolute top-4 left-4 bg-[#d4af37] text-[#0A0F1A] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md">
                      {prod.grade || "Premium Grade"}
                    </span>
                    <span className="absolute bottom-4 left-4 text-xs font-mono font-medium text-slate-300 uppercase">
                      HS Code: {prod.hsCode || "N/A"}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] font-mono font-semibold tracking-widest text-brand-accent uppercase block mb-1">
                        {prod.categoryName}
                      </span>
                      <h3 className="text-xl font-bold text-brand-primary dark:text-white leading-tight mb-3">
                        {prod.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-3">
                        {prod.description}
                      </p>
                    </div>

                    {/* Expanding Specifications Drawer */}
                    <div className="border-t border-slate-100 dark:border-white/10 pt-4 mt-auto">
                      <button
                        onClick={() => setExpandedSpecsId(isSpecsExpanded ? null : prod.id)}
                        className="w-full flex items-center justify-between text-xs font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300 hover:text-brand-accent transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <FileSpreadsheet className="h-4 w-4" />
                          Technical Specifications
                        </span>
                        {isSpecsExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>

                      <AnimatePresence initial={false}>
                        {isSpecsExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-3"
                          >
                            <ul className="space-y-1.5 p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                              {prod.specifications.map((spec, sidx) => (
                                <li key={sidx} className="flex gap-2 text-xs text-slate-600 dark:text-slate-400">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent shrink-0 mt-0.5" />
                                  <span>{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* CTA Actions */}
                    <div className="grid grid-cols-1 gap-2 mt-6">
                      <button
                        onClick={() => handleInquiry(prod.name)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary hover:bg-brand-primary/90 dark:bg-[#d4af37] dark:hover:bg-[#f9e29f] text-white dark:text-[#0A0F1A] transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        Inquire Cargo Specs
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
