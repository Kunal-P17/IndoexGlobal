import React from "react";
import logo from "../assets/logo.png";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="indoex-logo-svg"
    >
      <defs>
        {/* Globe Gradient */}
        <linearGradient
          id="globeGrad"
          x1="100"
          y1="40"
          x2="300"
          y2="340"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="40%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#0B1E5B" />
        </linearGradient>

        {/* Orange Swoosh Gradient */}
        <linearGradient
          id="orangeSwoosh"
          x1="100"
          y1="280"
          x2="320"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="60%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>

        {/* Silver Swoosh Gradient */}
        <linearGradient
          id="silverSwoosh"
          x1="200"
          y1="280"
          x2="340"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="50%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>

        {/* Container Gradients */}
        <linearGradient id="containerRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="containerBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="containerYellow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>

        {/* Shadow filter */}
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* 1. Base Globe Sphere */}
      <circle cx="200" cy="200" r="110" fill="url(#globeGrad)" />

      {/* Grid Lines (Latitude/Longitude for depth) */}
      <ellipse
        cx="200"
        cy="200"
        rx="110"
        ry="40"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="2"
        fill="none"
        transform="rotate(-15 200 200)"
      />
      <ellipse
        cx="200"
        cy="200"
        rx="110"
        ry="75"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(-15 200 200)"
      />
      <ellipse
        cx="200"
        cy="200"
        rx="40"
        ry="110"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="2"
        fill="none"
        transform="rotate(-15 200 200)"
      />

      {/* Landmass shapes (Stylized Green Continents) */}
      {/* North America / Asia outline */}
      <path
        d="M 130 140 C 135 120, 155 110, 170 120 C 185 130, 190 110, 205 115 C 220 120, 230 100, 245 110 C 260 120, 265 140, 255 155 C 245 170, 220 170, 205 185 C 190 200, 180 220, 160 215 C 140 210, 125 190, 120 170 Z"
        fill="#10B981"
        opacity="0.85"
      />
      {/* Australia / Southeast Asia outline */}
      <path
        d="M 210 230 C 220 220, 240 215, 250 225 C 260 235, 275 220, 285 235 C 295 250, 280 270, 265 280 C 250 290, 230 295, 215 280 C 200 265, 200 240, 210 230 Z"
        fill="#10B981"
        opacity="0.85"
      />
      {/* Europe / Africa outline */}
      <path
        d="M 110 200 C 105 210, 115 230, 110 245 C 105 260, 120 280, 135 285 C 150 290, 160 275, 175 270 C 190 265, 185 240, 170 230 C 155 220, 145 205, 130 200 Z"
        fill="#059669"
        opacity="0.8"
      />

      {/* 2. Container Terminal Stack (On left side of globe) */}
      <g transform="translate(10, -5)" filter="url(#shadow)">
        {/* Row 1 */}
        <rect
          x="110"
          y="160"
          width="34"
          height="20"
          rx="2"
          fill="url(#containerRed)"
          stroke="#7F1D1D"
          strokeWidth="0.5"
        />
        <line
          x1="117"
          y1="160"
          x2="117"
          y2="180"
          stroke="#7F1D1D"
          strokeWidth="0.5"
        />
        <line
          x1="124"
          y1="160"
          x2="124"
          y2="180"
          stroke="#7F1D1D"
          strokeWidth="0.5"
        />
        <line
          x1="131"
          y1="160"
          x2="131"
          y2="180"
          stroke="#7F1D1D"
          strokeWidth="0.5"
        />
        <line
          x1="138"
          y1="160"
          x2="138"
          y2="180"
          stroke="#7F1D1D"
          strokeWidth="0.5"
        />

        <rect
          x="145"
          y="152"
          width="34"
          height="20"
          rx="2"
          fill="url(#containerYellow)"
          stroke="#78350F"
          strokeWidth="0.5"
        />
        <line
          x1="152"
          y1="152"
          x2="152"
          y2="172"
          stroke="#78350F"
          strokeWidth="0.5"
        />
        <line
          x1="159"
          y1="152"
          x2="159"
          y2="172"
          stroke="#78350F"
          strokeWidth="0.5"
        />
        <line
          x1="166"
          y1="152"
          x2="166"
          y2="172"
          stroke="#78350F"
          strokeWidth="0.5"
        />
        <line
          x1="173"
          y1="152"
          x2="173"
          y2="172"
          stroke="#78350F"
          strokeWidth="0.5"
        />

        {/* Row 2 */}
        <rect
          x="116"
          y="141"
          width="34"
          height="20"
          rx="2"
          fill="url(#containerBlue)"
          stroke="#1E3A8A"
          strokeWidth="0.5"
        />
        <line
          x1="123"
          y1="141"
          x2="123"
          y2="161"
          stroke="#1E3A8A"
          strokeWidth="0.5"
        />
        <line
          x1="130"
          y1="141"
          x2="130"
          y2="161"
          stroke="#1E3A8A"
          strokeWidth="0.5"
        />
        <line
          x1="137"
          y1="141"
          x2="137"
          y2="161"
          stroke="#1E3A8A"
          strokeWidth="0.5"
        />
        <line
          x1="144"
          y1="141"
          x2="144"
          y2="161"
          stroke="#1E3A8A"
          strokeWidth="0.5"
        />

        <rect
          x="151"
          y="133"
          width="34"
          height="20"
          rx="2"
          fill="url(#containerRed)"
          stroke="#7F1D1D"
          strokeWidth="0.5"
        />
        <line
          x1="158"
          y1="133"
          x2="158"
          y2="153"
          stroke="#7F1D1D"
          strokeWidth="0.5"
        />
        <line
          x1="165"
          y1="133"
          x2="165"
          y2="153"
          stroke="#7F1D1D"
          strokeWidth="0.5"
        />
        <line
          x1="172"
          y1="133"
          x2="172"
          y2="153"
          stroke="#7F1D1D"
          strokeWidth="0.5"
        />
        <line
          x1="179"
          y1="133"
          x2="179"
          y2="153"
          stroke="#7F1D1D"
          strokeWidth="0.5"
        />

        {/* Row 3 */}
        <rect
          x="135"
          y="114"
          width="34"
          height="20"
          rx="2"
          fill="url(#containerBlue)"
          stroke="#1E3A8A"
          strokeWidth="0.5"
        />
        <line
          x1="142"
          y1="114"
          x2="142"
          y2="134"
          stroke="#1E3A8A"
          strokeWidth="0.5"
        />
        <line
          x1="149"
          y1="114"
          x2="149"
          y2="134"
          stroke="#1E3A8A"
          strokeWidth="0.5"
        />
        <line
          x1="156"
          y1="114"
          x2="156"
          y2="134"
          stroke="#1E3A8A"
          strokeWidth="0.5"
        />
        <line
          x1="163"
          y1="114"
          x2="163"
          y2="134"
          stroke="#1E3A8A"
          strokeWidth="0.5"
        />
      </g>

      {/* 3. Silver Swoosh wrapping behind */}
      <path
        d="M 100 240 C 130 180, 240 120, 310 110 C 330 107, 340 115, 330 128 C 300 155, 230 200, 120 255 Z"
        fill="url(#silverSwoosh)"
        opacity="0.85"
      />

      {/* 4. Orange dynamic arrow swooping around the globe (foreground) */}
      <path
        d="M 90 230 C 110 180, 190 125, 280 110 C 290 108, 295 109, 290 115 L 265 145 C 260 150, 255 145, 258 138 C 185 150, 125 190, 100 245 Z"
        fill="url(#orangeSwoosh)"
        filter="url(#shadow)"
      />
      {/* Larger Gold Arrow Head */}
      <path
        d="M 270 95 L 325 110 L 290 150 Z"
        fill="#FBBF24"
        filter="url(#shadow)"
      />

      {/* 5. Airplane soaring at the top left */}
      <g transform="translate(60, 60) rotate(-12)" filter="url(#shadow)">
        {/* Vapor trail */}
        <path
          d="M -50 40 Q -10 20, 10 10"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Airplane body */}
        <path
          d="M 0 15 C 5 13, 20 5, 45 3 C 55 2, 60 4, 62 7 C 63 9, 60 11, 55 12 C 40 14, 25 17, 15 20 Z"
          fill="#FFFFFF"
        />
        {/* Cockpit window */}
        <path d="M 48 5 Q 52 4, 53 6 Z" fill="#1E3A8A" />
        {/* Large Wing (Top/Main) */}
        <path
          d="M 20 8 L 8 -15 C 6 -18, 10 -18, 13 -15 L 30 5 Z"
          fill="#D1D5DB"
        />
        <path d="M 22 8 L 12 -12 L 15 -12 L 28 6 Z" fill="#3B82F6" />
        {/* Small Wing (Bottom) */}
        <path
          d="M 25 12 L 35 28 C 37 31, 40 31, 38 28 L 30 11 Z"
          fill="#9CA3AF"
        />
        {/* Tail fin */}
        <path
          d="M 3 -3 L -10 -22 C -12 -24, -8 -25, -6 -23 L 6 -1 Z"
          fill="#3B82F6"
        />
        {/* Engine cylinders */}
        <rect x="15" y="6" width="10" height="4" rx="1" fill="#4B5563" />
        <rect x="23" y="10" width="8" height="3" rx="1" fill="#4B5563" />
      </g>

      {/* 6. Cargo Ship sailing at the bottom-right */}
      <g transform="translate(160, 205)" filter="url(#shadow)">
        {/* Ship Hull */}
        <path
          d="M 10 32 L 140 32 C 155 32, 165 24, 172 15 C 160 16, 145 17, 135 17 L 30 17 L 15 17 C 8 17, 4 24, 10 32 Z"
          fill="#1E3A8A"
        />
        {/* Lower red hull bottom waterline */}
        <path
          d="M 10 32 L 140 32 C 145 32, 148 35, 140 36 L 25 36 C 15 36, 8 32, 10 32 Z"
          fill="#EF4444"
        />
        {/* Deck cabin structures */}
        <rect x="120" y="2" width="28" height="15" fill="#F3F4F6" />
        <rect x="128" y="-4" width="15" height="6" fill="#E5E7EB" />
        {/* Radar mast */}
        <line
          x1="135"
          y1="-4"
          x2="135"
          y2="-12"
          stroke="#374151"
          strokeWidth="1.5"
        />
        <line
          x1="131"
          y1="-8"
          x2="139"
          y2="-8"
          stroke="#374151"
          strokeWidth="1"
        />
        {/* Windows */}
        <rect x="124" y="6" width="4" height="3" fill="#1E3A8A" />
        <rect x="132" y="6" width="4" height="3" fill="#1E3A8A" />
        <rect x="140" y="6" width="4" height="3" fill="#1E3A8A" />

        {/* Ship Containers */}
        {/* Stack 1 */}
        <rect
          x="35"
          y="7"
          width="16"
          height="10"
          rx="1"
          fill="url(#containerRed)"
          stroke="#7F1D1D"
          strokeWidth="0.3"
        />
        <rect
          x="35"
          y="-3"
          width="16"
          height="10"
          rx="1"
          fill="url(#containerBlue)"
          stroke="#1E3A8A"
          strokeWidth="0.3"
        />
        {/* Stack 2 */}
        <rect
          x="52"
          y="7"
          width="16"
          height="10"
          rx="1"
          fill="url(#containerYellow)"
          stroke="#78350F"
          strokeWidth="0.3"
        />
        <rect
          x="52"
          y="-3"
          width="16"
          height="10"
          rx="1"
          fill="url(#containerRed)"
          stroke="#7F1D1D"
          strokeWidth="0.3"
        />
        {/* Stack 3 */}
        <rect
          x="69"
          y="7"
          width="16"
          height="10"
          rx="1"
          fill="url(#containerBlue)"
          stroke="#1E3A8A"
          strokeWidth="0.3"
        />
        <rect
          x="69"
          y="-3"
          width="16"
          height="10"
          rx="1"
          fill="url(#containerYellow)"
          stroke="#78350F"
          strokeWidth="0.3"
        />
        {/* Stack 4 */}
        <rect
          x="86"
          y="7"
          width="16"
          height="10"
          rx="1"
          fill="#10B981"
          stroke="#065F46"
          strokeWidth="0.3"
        />
        <rect
          x="86"
          y="-3"
          width="16"
          height="10"
          rx="1"
          fill="url(#containerRed)"
          stroke="#7F1D1D"
          strokeWidth="0.3"
        />
        {/* Stack 5 */}
        <rect
          x="103"
          y="7"
          width="15"
          height="10"
          rx="1"
          fill="url(#containerYellow)"
          stroke="#78350F"
          strokeWidth="0.3"
        />

        {/* Waves under the ship */}
        <path
          d="M 5 36 Q 25 34, 45 36 T 85 36 T 125 36 T 165 36"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 15 39 Q 40 37, 65 39 T 115 39 T 155 39"
          stroke="#60A5FA"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function Logo({
  className = "",
  iconOnly = false,
  theme = "light",
  size = "md",
}: LogoProps) {
  // Compute size classes
  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-11 w-11",
    lg: "h-14 w-14",
    xl: "h-24 w-24",
  };

  const textSizes = {
    sm: {
      brand: "text-[14px] sm:text-lg tracking-wider",
      tagline: "text-[6px] sm:text-[10px]",
    },
    md: {
      brand: "text-[20px] sm:text-2xl tracking-wider",
      tagline: "text-[8px] sm:text-[12px]",
    },
    lg: {
      brand: "text-[26px] sm:text-3xl tracking-widest",
      tagline: "text-[10px] sm:text-[14px]",
    },
    xl: {
      brand: "text-[44px] sm:text-5xl tracking-widest",
      tagline: "text-[14px] sm:text-[18px]",
    },
  };

  const isDark = theme === "dark";

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* 1. Logo Vector Graphic Icon */}
      <img
        src={logo}
        alt="Indoex Global Logo"
        className={`${iconSizes[size]} shrink-0 object-contain`}
      />

      {/* 2. Text Brand & Tagline Portion */}
      {!iconOnly && (
        <div className="flex flex-col items-start text-left select-none">
          {/* Brand Name "INDOEX GLOBAL" with styled gradient X */}
          <span
            className={`font-black uppercase leading-tight font-sans tracking-tight flex items-center ${
              textSizes[size].brand
            } ${isDark ? "text-white" : "text-[#0F3661]"}`}
          >
            INDO
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 font-extrabold relative">
              EX
            </span>
            <span
              className={`ml-1.5 font-bold ${isDark ? "text-slate-200" : "text-[#1E40AF]"}`}
            >
              GLOBAL
            </span>
          </span>

          {/* Subtitle Tagline: "Built on Trust. Driven by Trade" (with horizontal split design) */}
          <div className="flex items-center gap-1.5 mt-0.5 w-full">
            <span
              className={`h-[1px] bg-gradient-to-r ${isDark ? "from-white/20 to-transparent" : "from-slate-300 to-transparent"} flex-1`}
            />
            <span
              className={`italic font-medium shrink-0 tracking-wide font-sans ${
                textSizes[size].tagline
              } ${isDark ? "text-slate-300" : "text-slate-500"}`}
            >
              Built on Trust. Driven by Trade
            </span>
            <span
              className={`h-[1px] bg-gradient-to-l ${isDark ? "from-white/20 to-transparent" : "from-slate-300 to-transparent"} flex-1`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
