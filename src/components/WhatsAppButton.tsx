import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+12125558290"; // Central exim trading desk number
  const initialText = "Hello IndoEx Trade Desk, I am interested in bulk B2B commodity sourcing. Please connect us with a Trade Specialist.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(initialText)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center hover:rotate-3 group"
      title="Direct EXIM Desk WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-white text-[#25D366]" />
      
      {/* Glow Beacon effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10" />
      
      {/* Hover tooltip */}
      <span className="absolute right-12 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 bg-[#25D366] text-white font-mono text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg transition-all duration-200 shadow-md">
        WhatsApp Desk
      </span>
    </a>
  );
}
