import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCT_CATEGORIES } from "../data";
import { ProductItem } from "../types";
import { FileSpreadsheet, ChevronDown, ChevronUp, Quote, CheckCircle2, ArrowRight, X } from "lucide-react";

interface ProductsProps {
  onSelectProductForInquiry: (productName: string) => void;
}

export default function Products({ onSelectProductForInquiry }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeSubCategory, setActiveSubCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  // Filter products based on selected tab and subcategory
  const filteredProducts = PRODUCT_CATEGORIES.flatMap((category) => {
    if (activeCategory === "all" || category.id === activeCategory) {
      return category.items
        .filter((item) => {
          if (category.id === "agricultural-products" && activeSubCategory !== "all") {
            return item.subCategory === activeSubCategory;
          }
          return true;
        })
        .map((item) => ({
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

  // Helper to generate dynamic premium metadata for a product
  const getProductMetadata = (prod: any) => {
    if (!prod) return null;
    const isAgri = prod.categoryName === "Agricultural Products" || prod.subCategory;
    return isAgri ? {
      type: prod.subCategory || "Agricultural Commodity",
      shelfLife: "12–24 Months",
      origin: "India",
      packaging: prod.subCategory === "Dehydrated Powder" 
        ? "Hygienic 20kg/25kg Kraft Paper Bags with Inner Poly Liner" 
        : "Custom Multi-ply Export Jute/PP Bags (25kg / 50kg)",
      moq: prod.subCategory === "Cereals" ? "10 MT (1 FCL)" : "1 MT"
    } : {
      type: "Construction Material",
      shelfLife: "Permanent / Indefinite",
      origin: "India",
      packaging: prod.id.includes("tiles") 
        ? "Euro Pallets with Corrugated Box & Strapping" 
        : prod.id.includes("granite") 
        ? "Heavy-Duty Wooden Bundles / A-Frames" 
        : "Steel Banded Export Seaworthy Coils",
      moq: "1 FCL (Full Container Load)"
    };
  };

  return (
    <section id="products" className="py-14 sm:py-20 md:py-24 bg-brand-light relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full">
            Wholesale Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 sm:mt-4 tracking-tight leading-tight uppercase">
            Corporate Trade Commodities
          </h2>
          <p className="text-sm text-slate-500 mt-3 sm:mt-4 leading-relaxed">
            Browse our primary trade portfolio. Every commodity is accompanied by official third-party analysis certificates (SGS) and complete HS classification for seamless customs declarations.
          </p>
        </div>

        {/* Category Tab Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          <button
            onClick={() => {
              setActiveCategory("all");
              setActiveSubCategory("all");
            }}
            className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-brand-primary text-brand-accent shadow-lg shadow-brand-accent/15"
                : "bg-slate-200/50 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Commodities
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveSubCategory("all");
              }}
              className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-brand-primary text-brand-accent shadow-lg shadow-brand-accent/15"
                  : "bg-slate-200/50 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Subcategory Filter (Visible only when Agricultural Products is active) */}
        <AnimatePresence>
          {activeCategory === "agricultural-products" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-2 mb-10 -mt-4 sm:-mt-6"
            >
              <button
                onClick={() => {
                  setActiveSubCategory("all");
                }}
                className={`px-3 py-1.5 rounded-full text-[9px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-150 ${
                  activeSubCategory === "all"
                    ? "bg-[#d4af37] text-[#0A0F1A] shadow-md"
                    : "bg-slate-200/50 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Agriculture
              </button>
              {PRODUCT_CATEGORIES.find(c => c.id === "agricultural-products")?.subCategories?.map((sub) => (
                <button
                  key={sub}
                  onClick={() => {
                    setActiveSubCategory(sub);
                  }}
                  className={`px-3 py-1.5 rounded-full text-[9px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-150 ${
                    activeSubCategory === sub
                      ? "bg-[#d4af37] text-[#0A0F1A] shadow-md"
                      : "bg-slate-200/50 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid of Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => {
              return (
                <motion.div
                  layout
                  key={prod.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProduct(prod)}
                  className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col text-left cursor-pointer group"
                >
                  
                  {/* Image */}
                  <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-900 shrink-0">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Floating Grade Badge */}
                    <span className="absolute top-4 left-4 bg-[#0F3661] text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-md">
                      {prod.grade || "Premium Grade"}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow">
                    
                    {/* Category Label */}
                    <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block mb-1">
                      {prod.categoryName} {prod.subCategory ? `• ${prod.subCategory}` : ""}
                    </span>

                    {/* Product Title (Bold, Uppercase, Corporate Blue) */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F3661] tracking-tight uppercase font-sans leading-none mt-1 group-hover:text-[#d4af37] transition-colors">
                      {prod.name.replace("Premium ", "").replace("Double Charged ", "").replace("Polished Natural ", "").replace("Hot-Dipped ", "")}
                    </h3>

                    {/* Gold Divider Line (Matches User's Reference Image) */}
                    <div className="h-[2px] bg-[#d4af37]/70 w-full mt-3.5 mb-4" />

                    {/* First View: Only Name and HS Code are visible */}
                    <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-500 mt-auto">
                      <span className="font-semibold uppercase tracking-wide text-slate-400 text-[10px] sm:text-xs">HS Code</span>
                      <span className="font-mono font-bold text-[#0F3661] bg-slate-50 border border-slate-100 px-3 py-1 rounded-md text-xs sm:text-sm">
                        {prod.hsCode || "N/A"}
                      </span>
                    </div>

                    {/* Action Button Indicator */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand-accent gap-1.5 transition-colors">
                      <span>View Specifications</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Pop-up Modal Detail View */}
      <AnimatePresence>
        {selectedProduct && (() => {
          const prod = selectedProduct;
          const metadata = getProductMetadata(prod);
          return (
            <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:p-6 pb-6 sm:pb-8">
              
              {/* Blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-slate-900/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.98 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[78vh] sm:max-h-[82vh] overflow-y-auto shadow-2xl z-10 border border-slate-200 flex flex-col text-left"
              >
                
                {/* Sticky Header with Close Button */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 bg-slate-900/60 hover:bg-slate-900/90 text-white rounded-full transition-colors backdrop-blur-sm"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Hero Product Image */}
                <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-950 shrink-0">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Floating badges on top of image */}
                  <span className="absolute bottom-4 left-6 bg-[#d4af37] text-[#0A0F1A] text-[10px] sm:text-xs font-mono font-black tracking-widest uppercase px-3 py-1 rounded shadow-md">
                    {prod.grade || "Export Premium"}
                  </span>
                </div>

                {/* Modal Content Details */}
                <div className="p-6 sm:p-8 flex-grow">
                  
                  {/* Category breadcrumb */}
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-brand-accent uppercase block mb-1">
                    {prod.categoryName} {prod.subCategory ? `• ${prod.subCategory}` : ""}
                  </span>

                  {/* Main Product Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0F3661] tracking-tight uppercase leading-none mt-1.5">
                    {prod.name.replace("Premium ", "").replace("Double Charged ", "").replace("Polished Natural ", "").replace("Hot-Dipped ", "")}
                  </h3>

                  {/* Gold Divider (Matches image) */}
                  <div className="h-[2px] bg-[#d4af37]/80 w-full mt-4 mb-5" />

                  {/* Product Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  {/* Technical Specifications Table */}
                  <div className="border border-slate-150 rounded-2xl overflow-hidden mb-6 bg-white shadow-sm">
                    <table className="w-full text-xs sm:text-sm text-left border-collapse">
                      <tbody>
                        <tr className="border-b border-slate-100">
                          <td className="w-[35%] sm:w-[30%] bg-slate-50/80 p-3 sm:p-4 font-extrabold text-[#0F3661] border-r border-slate-100 uppercase tracking-wider text-[9px] sm:text-[10px]">HS Code</td>
                          <td className="p-3 sm:p-4 font-bold text-slate-800 font-mono text-xs sm:text-sm">{prod.hsCode || "N/A"}</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="w-[35%] sm:w-[30%] bg-slate-50/80 p-3 sm:p-4 font-extrabold text-[#0F3661] border-r border-slate-100 uppercase tracking-wider text-[9px] sm:text-[10px]">Product Type</td>
                          <td className="p-3 sm:p-4 font-semibold text-slate-800 text-xs sm:text-sm">{metadata?.type}</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="w-[35%] sm:w-[30%] bg-slate-50/80 p-3 sm:p-4 font-extrabold text-[#0F3661] border-r border-slate-100 uppercase tracking-wider text-[9px] sm:text-[10px]">Shelf Life</td>
                          <td className="p-3 sm:p-4 font-semibold text-slate-800 text-xs sm:text-sm">{metadata?.shelfLife}</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="w-[35%] sm:w-[30%] bg-slate-50/80 p-3 sm:p-4 font-extrabold text-[#0F3661] border-r border-slate-100 uppercase tracking-wider text-[9px] sm:text-[10px]">Origin</td>
                          <td className="p-3 sm:p-4 font-semibold text-slate-800 text-xs sm:text-sm">{metadata?.origin}</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="w-[35%] sm:w-[30%] bg-slate-50/80 p-3 sm:p-4 font-extrabold text-[#0F3661] border-r border-slate-100 uppercase tracking-wider text-[9px] sm:text-[10px]">Packaging</td>
                          <td className="p-3 sm:p-4 font-medium text-slate-600 leading-relaxed text-xs sm:text-sm">{metadata?.packaging}</td>
                        </tr>
                        <tr>
                          <td className="w-[35%] sm:w-[30%] bg-slate-50/80 p-3 sm:p-4 font-extrabold text-[#0F3661] border-r border-slate-100 uppercase tracking-wider text-[9px] sm:text-[10px]">MOQ</td>
                          <td className="p-3 sm:p-4 font-bold text-slate-800 text-xs sm:text-sm">{metadata?.moq}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Bulleted Quality Parameters */}
                  <div className="mb-8">
                    <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#d4af37]" />
                      Quality Parameters & Standards
                    </h4>
                    <ul className="space-y-2 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100">
                      {prod.specifications.map((spec: string, sidx: number) => (
                        <li key={sidx} className="flex gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <span className="h-1.5 w-1.5 bg-[#d4af37] rounded-full shrink-0 mt-2" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary Call To Action */}
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      handleInquiry(prod.name);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#0F3661] hover:bg-[#d4af37] hover:text-[#0A0F1A] text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/20"
                  >
                    Inquire Cargo Specs
                    <ArrowRight className="h-4 w-4" />
                  </button>

                </div>

              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

    </section>
  );
}
