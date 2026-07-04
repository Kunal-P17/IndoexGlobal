import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Certifications from "./components/Certifications";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";
import AICopilot from "./components/AICopilot";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<string>("");

  // Ensure the app is strictly in light mode by removing the dark class on mount
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    localStorage.setItem("indoex_theme", "light");
  }, []);

  const handleSelectProduct = (productName: string) => {
    setSelectedProductForInquiry(productName);
  };

  const handleClearPrefill = () => {
    setSelectedProductForInquiry("");
  };

  return (
    <div className="bg-brand-light min-h-screen text-slate-800 transition-colors duration-300 relative overflow-x-hidden">
      {/* Background Atmospheric Elements (Clean & high-contrast Light Theme) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#d4af37] rounded-full blur-[150px] glow-gold"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] glow-blue"></div>
        <div className="absolute top-[35%] left-[10%] w-[450px] h-[450px] bg-blue-500 rounded-full blur-[130px] glow-blue"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#d4af37] rounded-full blur-[150px] glow-gold"></div>
      </div>

      {/* Structural Components */}
      <Navbar />
      
      <Hero />
      
      <About />
      
      <Products onSelectProductForInquiry={handleSelectProduct} />
      
      <Services />
      
      <Industries />
      
      <Certifications />
      
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
