import React, { useState } from "react";
import { Globe, ArrowUpRight, Check, Send, Linkedin, Twitter, Youtube, ShieldCheck } from "lucide-react";

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
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="p-2 rounded-lg bg-brand-accent/20">
                <Globe className="h-6 w-6 text-brand-accent animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white">
                  VANGUARD<span className="text-[#d4af37]">GLOBAL</span>
                </span>
                <span className="block text-[8px] font-mono tracking-widest text-slate-400 uppercase">
                  B2B Trade Brokerage S.A.
                </span>
              </div>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Vanguard Global Trade is an authorized international B2B trading conglomerate. We secure raw industrial metal, agricultural crop commodities, textiles, and hardware console slots across bilateral trade conduits.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-accent/20 text-slate-400 hover:text-brand-accent transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-accent/20 text-slate-400 hover:text-brand-accent transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-accent/20 text-slate-400 hover:text-brand-accent transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-brand-accent mb-6">
              Sourcing Desks
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Commodities Catalog</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">EXIM Trading Desk</a>
              </li>
              <li>
                <a href="#trade" className="hover:text-white transition-colors">Bilateral Corridors</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Contacts */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-brand-accent mb-6">
              Secure EXIM Desks
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex flex-col">
                <span className="font-semibold text-white">Central Operations Desk</span>
                <span className="mt-1">74 Trade Winds Blvd, NY 10005</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Direct Trade Queries</span>
                <a href="mailto:trade@vanguardglobal.com" className="text-brand-accent hover:underline mt-1 font-mono">
                  trade@vanguardglobal.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">SGS Audit Desk</span>
                <span className="mt-1">audit@vanguardglobal.com</span>
              </li>
            </ul>
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
            <span>© {new Date().getFullYear()} Vanguard Global Trade. All rights reserved.</span>
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
