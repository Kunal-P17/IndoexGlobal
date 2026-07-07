import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareCode, X, Send, Bot, ShieldCheck, Sparkles, CornerDownLeft, RefreshCw } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "copilot";
  text: string;
}

export default function AICopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "copilot",
      text: "Hello! I am IndoEx Global's B2B AI Sourcing Copilot. I can assist you with global trade regulations, Harmonized System (HS) classifications, transit cargo requirements, and custom specifications drafting. How can I assist your import desk today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "HS Code for Arabica Coffee",
    "Explain irrevocable L/C at sight",
    "Outline wheat spec sheet",
    "Customs brokers at Rotterdam"
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: textToSend
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend })
      });
      const data = await response.json();

      if (data.success) {
        const copilotMsg: Message = {
  id: `cop-${Date.now()}`,
  sender: "copilot",
  text: data.reply
};
        setMessages((prev) => [...prev, copilotMsg]);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: "copilot",
          text: "I apologize, but I am experiencing temporary trade corridor connection issues. Please try re-sending or reach our physical desk at trade@indoexglobal.com."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const parseMessageText = (text: string) => {
    // Basic parser to handle markdown lists, bold headers and bullet structures inside Gemini responses
    return text.split("\n").map((line, idx) => {
      let cleaned = line.trim();
      if (!cleaned) return <div key={idx} className="h-2" />;

      // Headers like ### or ##
      if (cleaned.startsWith("###") || cleaned.startsWith("##")) {
        return (
          <h4 key={idx} className="text-sm font-extrabold text-[#0A0F1A] mt-3 mb-1.5 font-display flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-[#bda02a] shrink-0" />
            {cleaned.replace(/^[#\s]+/, "")}
          </h4>
        );
      }

      // Unordered list items like - or *
      if (cleaned.startsWith("-") || cleaned.startsWith("*")) {
        return (
          <div key={idx} className="flex gap-2 text-xs text-slate-600 ml-2 py-0.5 items-start">
            <span className="text-[#bda02a] shrink-0 mt-1">•</span>
            <span>{cleaned.replace(/^[-*\s]+/, "")}</span>
          </div>
        );
      }

      // Key terms matching double asterisks (e.g., **FOB**)
      if (cleaned.includes("**")) {
        // Simple bold highlight
        const parts = cleaned.split("**");
        return (
          <p key={idx} className="text-xs text-slate-600 leading-relaxed py-1">
            {parts.map((p, pIdx) => (pIdx % 2 === 1 ? <strong key={pIdx} className="text-[#bda02a] font-bold">{p}</strong> : p))}
          </p>
        );
      }

      return <p key={idx} className="text-xs text-slate-600 leading-relaxed py-1">{cleaned}</p>;
    });
  };

  return (
    <>
      {/* Floating Circle Button Trigger */}
      <button
        id="copilot-floating-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 p-4 rounded-full bg-[#0A0F1A] text-white hover:bg-slate-800 border border-slate-700 shadow-2xl transition-all duration-300 group scale-100 hover:scale-105 hover:rotate-3 cursor-pointer"
        title="Open Trade AI Copilot"
      >
        <MessageSquareCode className="h-6 w-6 text-[#d4af37]" />
        <span className="absolute right-12 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 bg-[#0A0F1A] border border-slate-700 px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider font-bold text-white uppercase transition-all duration-200">
          AI Sourcing Agent
        </span>
      </button>

      {/* Main Chat Overlay panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] sm:w-[420px] max-w-[calc(100vw-32px)] h-[580px] bg-white rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-100 text-[#bda02a] border border-slate-200">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-extrabold text-[#0A0F1A] leading-none flex items-center gap-1.5">
                    EXIM Sourcing Agent
                    <ShieldCheck className="h-4 w-4 text-green-600 shrink-0" />
                  </h3>
                  <span className="text-[10px] text-[#bda02a] font-mono uppercase tracking-widest block mt-1">
                    Online • IndoEx Global AI Copilot
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 scroll-smooth bg-white">
              {messages.map((msg) => {
                const isCopilot = msg.sender === "copilot";
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 max-w-[85%] text-left ${isCopilot ? "mr-auto" : "ml-auto flex-row-reverse"}`}
                  >
                    {isCopilot && (
                      <div className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 h-fit text-[#bda02a] shrink-0">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}
                    <div
                      className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                        isCopilot
                          ? "bg-slate-50 text-slate-800 border border-slate-200/50 rounded-tl-none"
                          : "bg-[#0A0F1A] text-white font-medium rounded-tr-none shadow-md shadow-slate-900/10"
                      }`}
                    >
                      {isCopilot ? parseMessageText(msg.text) : msg.text}
                    </div>
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {loading && (
                <div className="flex gap-3 max-w-[80%] text-left mr-auto">
                  <div className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 h-fit text-[#bda02a] shrink-0">
                    <RefreshCw className="h-4 w-4 animate-spin text-[#bda02a]" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 text-slate-500 border border-slate-200/50 rounded-tl-none text-xs flex items-center gap-1.5">
                    Analyzing custom B2B trade metrics...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Container (Only visible when thread is minimal) */}
            {messages.length === 1 && !loading && (
              <div className="p-3 bg-slate-50 border-t border-slate-100 text-left shrink-0">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mb-2 px-1">
                  SUGGESTED TRADE INQUIRIES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSend(prompt)}
                      className="px-2.5 py-1.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-[10px] text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-slate-50 border-t border-slate-200 flex gap-2 shrink-0 items-center"
            >
              <input
                type="text"
                required
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about HS codes, L/C, ocean slots..."
                className="flex-grow px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-3.5 rounded-xl bg-[#0A0F1A] text-white hover:bg-slate-800 disabled:opacity-40 transition-all flex items-center justify-center cursor-pointer shrink-0"
              >
                <Send className="h-4 w-4 text-[#d4af37]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
