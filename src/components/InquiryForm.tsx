import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Clock, MapPin, CheckCircle, AlertCircle, RefreshCw, Send } from "lucide-react";

interface InquiryFormProps {
  prefilledProductName: string;
  onClearPrefill: () => void;
}

export default function InquiryForm({ prefilledProductName, onClearPrefill }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "Agricultural Commodities",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; text: string }>({ type: null, text: "" });

  useEffect(() => {
    if (prefilledProductName) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiry regarding wholesale procurement of: ${prefilledProductName}\n\nPlease provide detailed freight logistics quotes, MOQ limits, and SGS testing protocols for our import desk.`
      }));
      onClearPrefill();
    }
  }, [prefilledProductName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API_URL = import.meta.env.VITE_API_URL;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "Please complete all required fields (Name, Email, and Message)." });
      return;
    }

    setLoading(true);
    setStatus({ type: null, text: "" });

    try {
      const response = await fetch(`${API_URL}/api/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", text: data.message });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          industry: "Agricultural Commodities",
          message: ""
        });
      } else {
        setStatus({ type: "error", text: data.error || "Something went wrong. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", text: "Unable to connect with the trade server. Please verify your connection." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-[#0A0F1A] relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Office Contacts + Google Map */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 px-3 py-1 rounded-full">
              Reach Our Trading Desk
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-4 tracking-tight uppercase">
              Global Headquarters
            </h2>
            <p className="text-sm text-slate-400 mt-4 mb-8 leading-relaxed">
              Contact our international representatives. Our centralized trade office handles bulk commercial slot reservations, customs clearances, and bank documentation routing.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-center">
                <div className="p-3.5 rounded-xl bg-slate-900/80 text-[#d4af37] shrink-0 border border-slate-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase leading-none">Central Desk Office</h4>
                  <p className="text-sm font-bold text-slate-200 mt-1.5">
                    1st Floor, Wing-A, Mudra Commercial Building, Office No. 08, Above P.N. Gadgil & Sons, Satara Road, Bibwewadi, Pune – 411037, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="p-3.5 rounded-xl bg-slate-900/80 text-[#d4af37] shrink-0 border border-slate-800">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase leading-none">B2B Trade Line</h4>
                  <p className="text-sm font-bold text-slate-200 mt-1.5">
                    +91 79728 75589
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="p-3.5 rounded-xl bg-slate-900/80 text-[#d4af37] shrink-0 border border-slate-800">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase leading-none">Operational Hours</h4>
                  <p className="text-sm font-bold text-slate-200 mt-1.5">
                    09:00 AM - 9:00 PM IST | Monday - Sunday
                  </p>
                </div>
              </div>
            </div>

            {/* Styled Google Maps iframe */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-xl h-72">
              <iframe
                title="IndoEx Global Central Trade Office HQ Location"
                src="https://maps.app.goo.gl/4LCQEtA126h25EfWA"
                className="w-full h-full border-0 grayscale invert-[0.9] hue-rotate-180"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 shadow-2xl text-left backdrop-blur-md">
              
              <AnimatePresence mode="wait">
                {status.type === "success" ? (
                  /* Success Screen */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-8 flex flex-col items-center text-center justify-center"
                  >
                    <div className="p-4 rounded-full bg-green-500/10 text-green-400 mb-6 border border-green-500/20">
                      <CheckCircle className="h-12 w-12" />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-white leading-tight mb-2 uppercase tracking-tight">
                      Trade Sourcing Request Logged
                    </h3>
                    <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-6">
                      {status.text}
                    </p>

                    <div className="px-6 py-4 rounded-2xl bg-slate-950 border border-slate-800 text-left w-full mb-8">
                      <div className="flex justify-between items-center text-xs font-mono text-slate-500 mb-1">
                        <span>Lead Tracking Number</span>
                        <span className="text-green-400 font-bold uppercase">ACTIVE</span>
                      </div>
                      <p className="text-base font-bold text-white font-mono">
                        {ticketId}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setStatus({ type: null, text: "" });
                        setTicketId(null);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-[#0A0F1A] hover:bg-[#e6c152] transition-colors"
                    >
                      <RefreshCw className="h-4 w-4" />
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  /* Active Form Screen */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-black text-white tracking-tight leading-tight mb-2 uppercase">
                      Secure B2B Sourcing Quote
                    </h3>
                    <p className="text-xs text-slate-400 leading-normal mb-8">
                      Fill out your commercial specifications below. Sourcing Desk Managers respond directly within 2-4 business hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Form Validation Errors */}
                      {status.type === "error" && (
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex gap-2.5 items-center">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          <span>{status.text}</span>
                        </div>
                      )}

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-slate-400 uppercase mb-2">
                            Contact Name <span className="text-[#d4af37]">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. John Doe"
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950/60 text-white text-sm outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all placeholder-slate-500"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-slate-400 uppercase mb-2">
                            Corporate Email <span className="text-[#d4af37]">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. procurement@company.com"
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950/60 text-white text-sm outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all placeholder-slate-500"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-slate-400 uppercase mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Apex Agri-Distributors"
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950/60 text-white text-sm outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all placeholder-slate-500"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-slate-400 uppercase mb-2">
                            Business Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. +1 (555) 123-4567"
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950/60 text-white text-sm outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all placeholder-slate-500"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-slate-400 uppercase mb-2">
                          Primary Sourcing Sector
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950/80 text-white text-sm outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all cursor-pointer"
                        >
                          <option value="Agricultural Commodities" className="bg-[#0A0F1A] text-white">Agricultural Commodities</option>
                          <option value="Industrial Raw Materials & Metals" className="bg-[#0A0F1A] text-white">Construction Material</option>
                        </select>
                      </div>

                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-slate-400 uppercase mb-2">
                          Sourcing Requirements & Specifications <span className="text-[#d4af37]">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Include custom grade requirements, tonnage volumes, desired Incoterm (FOB/CIF), and delivery port. (e.g. Sourcing 500 Metric Tons of non-GMO Milling Wheat, CIF Port of Rotterdam, SGS inspection mandatory)"
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950/60 text-white text-sm outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all resize-none placeholder-slate-500"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#d4af37] text-[#0A0F1A] hover:bg-[#e6c152] transition-all duration-300 shadow-lg shadow-[#d4af37]/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-black"
                      >
                        {loading ? (
                          <>
                            <RefreshCw className="h-4 w-4 animate-spin" />
                            Locking Slot...
                          </>
                        ) : (
                          <>
                            Submit Sourcing Request
                            <Send className="h-4 w-4 shrink-0" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
