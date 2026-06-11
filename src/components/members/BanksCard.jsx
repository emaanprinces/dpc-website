import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react"; 

function BankLogo({ bank, isGrand }) {
  const [imgError, setImgError] = useState(false);
  const initials = bank.short.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase() || bank.short.slice(0, 3).toUpperCase();
  const bgColor = bank.color || "#3b2a6e";

  const boxClass = isGrand
    ? "w-24 h-24 md:w-28 md:h-28"
    : "w-16 h-16 md:w-20 md:h-20";

  if (!imgError) {
    return (
      <div className={`flex-shrink-0 ${boxClass} rounded-xl border border-border/30 overflow-hidden shadow-sm bg-white`}>
        <img
          src={bank.logo}
          alt={`${bank.name} logo`}
          className="w-full h-full object-contain p-1"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex-shrink-0 ${boxClass} rounded-xl overflow-hidden shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
      style={{ backgroundColor: bgColor }}
    >
      <span
        className="font-display font-bold text-white tracking-tight leading-none"
        style={{ fontSize: initials.length > 2 ? "0.8rem" : "1.1rem" }}
      >
        {initials}
      </span>
    </div>
  );
}

export default function BankCard({ bank, index, variant = "default" }) {
  const isGrand = variant === "grand";
  
  // 1. THEME COLOR DEFINITION
  const THEME_COLOR = "#320d55"; 

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className={`group relative bg-white rounded-lg transition-all duration-500
        shadow-[0_4px_24px_rgba(0,0,0,0.03)] 
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] 
        hover:border-primary/40 border border-transparent
        ${isGrand ? "p-8 md:p-10" : "p-5 md:p-6"}`}
      role="article"
      aria-label={`${bank.name} — Official Member Institution`}
    >
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-px h-8 bg-primary/40" />
        <div className="absolute top-0 right-0 h-px w-8 bg-primary/40" />
      </div>

      <div className={`flex ${isGrand ? "flex-row items-center gap-6 md:gap-8" : "flex-col items-center text-center gap-4"}`}>
        <BankLogo bank={bank} isGrand={isGrand} />

        {/* Info */}
        <div className={isGrand ? "flex-1" : ""}>
          <h3
            className={`font-display leading-snug text-foreground
              ${isGrand ? "text-xl md:text-2xl" : "text-sm md:text-base"}`}
          >
            {bank.name}
          </h3>
          <p className={`font-body text-muted-foreground mt-1 tracking-wider uppercase
            ${isGrand ? "text-xs" : "text-[10px]"}`}>
            {bank.short}
          </p>
        </div>
      </div>

      {/* View Website Button */}
      <div className={`mt-4 ${isGrand ? "" : "flex justify-center"}`}>
        <a
          href={bank.link} 
          target="_blank"     
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 bg-muted/40
            font-body text-[10px] tracking-wider uppercase text-muted-foreground
            transition-all duration-300 min-h-[44px] min-w-[44px]
            
            /* --- HOVER STYLES (Direct Color Code) --- */
            hover:bg-[#320d55] 
            hover:text-white 
            hover:border-[#320d55] 
            hover:shadow-md 
            
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#320d55] focus-visible:ring-offset-2"
          aria-label={`Visit website for ${bank.name}`}
        >
          <Globe className="w-3 h-3" />
          <span>View Website</span>
        </a>
      </div>

      {/* Bottom micro-rule on hover */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500" />
    </motion.div>
  );
}