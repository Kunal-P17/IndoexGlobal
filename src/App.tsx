import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Industries from "./components/Industries";
import TradeMap from "./components/TradeMap";
import Certifications from "./components/Certifications";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";
import AICopilot from "./components/AICopilot";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Read initial theme preference from localStorage or fallback to dark mode for luxury branding
    const saved = localStorage.getItem("vanguard_theme");
    if (saved) {
      return saved === "dark";
    }
    return true; // Default to elegant dark theme
  });

  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<string>("");

  // Sync theme changes with the html document class list
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("vanguard_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("vanguard_theme", "light");
    }
  }, [darkMode]);

  const handleSelectProduct = (productName: string) => {
    setSelectedProductForInquiry(productName);
  };

  const handleClearPrefill = () => {
    setSelectedProductForInquiry("");
  };

  return (
    <div className="bg-brand-light dark:bg-[#0A0F1A] min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-x-hidden">
      {/* Background Atmospheric Elements (Immersive UI theme) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#d4af37] rounded-full blur-[150px] glow-gold"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] glow-blue"></div>
        <div className="absolute top-[35%] left-[10%] w-[450px] h-[450px] bg-blue-500 rounded-full blur-[130px] glow-blue"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#d4af37] rounded-full blur-[150px] glow-gold"></div>
      </div>

      {/* Structural Components */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Hero />
      
      <About />
      
      <Products onSelectProductForInquiry={handleSelectProduct} />
      
      <Services />
      
      <Industries />
      
      <TradeMap />
      
      <Certifications />
      
      <Gallery />
      
      <Testimonials />
      
      <FAQ />
      
      <InquiryForm 
        prefilledProductName={selectedProductForInquiry} 
        onClearPrefill={handleClearPrefill} 
      />
      
      <Footer />

      {/* Floating Interactive Utilities */}
      <WhatsAppButton />
      <AICopilot />
    </div>
  );
}
