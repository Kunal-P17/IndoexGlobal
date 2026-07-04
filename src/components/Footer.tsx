import React, { useState } from "react";
import { Globe, ArrowUpRight, Check, Send, Linkedin, Instagram, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-[#0A0F1A] text-white border-t border-white/5 pt-20 pb-10 transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 items-start text-left">
          
          {/* Column 1: Brand & Licenses disclosures */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center mb-6 group">
              <Logo size="md" theme="dark" />
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              IndoEx Global is an authorized international B2B trading conglomerate. We secure raw industrial metal, agricultural crop commodities, textiles, and hardware console slots across bilateral trade conduits.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-accent/20 text-slate-400 hover:text-brand-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-accent/20 text-slate-400 hover:text-brand-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2 & 3: Corporate Headquarters */}
          <div className="lg:col-span-5">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-brand-accent mb-6">
              Corporate Headquarters
            </h4>
            <div className="space-y-4 text-xs text-slate-400">
              <div className="flex gap-2.5 items-start">
                <span className="text-base shrink-0 leading-none mt-0.5">📍</span>
                <p className="leading-relaxed text-slate-300">
                  1st Floor, Wing-A, Mudra Commercial Building, Office No. 08, Above P.N. Gadgil & Sons, Satara Road, Bibwewadi, Pune – 411037, Maharashtra, India
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="text-sm shrink-0 leading-none">📧</span>
                <p className="text-slate-300">
                  Email: <a href="mailto:info@indoexglobal.in" className="underline hover:text-brand-accent font-mono font-bold">info@indoexglobal.in</a>
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="text-sm shrink-0 leading-none">📞</span>
                <p className="text-slate-300">
                  Phone: <a href="tel:+917972875589" className="hover:text-brand-accent font-mono font-bold">+91 79728 75589</a>
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="text-sm shrink-0 leading-none">📋</span>
                <p className="text-slate-300">
                  IEC: <span className="font-mono bg-white/5 border border-white/10 px-2.5 py-0.5 rounded text-brand-accent text-xs font-bold">AAICI7881E</span>
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Sourcing Alerts */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-brand-accent mb-6">
              Sourcing Reports
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Subscribe to receive bi-weekly market intelligence briefs on cargo slot index shifts, freight rate averages, and tariff exemptions.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex gap-2 items-center">
                <Check className="h-4 w-4 shrink-0" />
                <span>Subscription active. Welcome!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Business Email"
                  className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs outline-none focus:border-brand-accent text-white placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="p-3.5 rounded-full bg-[#d4af37] text-[#0A0F1A] hover:bg-[#f9e29f] transition-opacity flex items-center justify-center cursor-pointer shrink-0"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>
        {/* Bottom Bar: disclosures and copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400">
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <span>© {new Date().getFullYear()} IndoEx Global. All rights reserved.</span>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Customs Tariffs Disclaimer</a>
          </div>

          <div className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded border border-white/10">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-accent shrink-0" />
            <span className="font-mono text-[9px] tracking-widest text-slate-300">SECURE EXIM CONNECTIONS VERIFIED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
