import React from "react";
import Image from "../ui/Image";

export default function HeroSection() {
  return (
    // Reduced Padding (Smaller Height)
    <section className="relative pt-20 pb-8 md:pt-32 md:pb-12 w-full flex items-end overflow-hidden border-b border-foreground/10 bg-background">
      
      {/* 1. Purple Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-[#320d55]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-[-5%] w-[35vw] h-[35vw] rounded-full bg-[#5b21b6]/20 blur-[90px]" />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        {[20, 40, 60, 80].map((p) => (
          <div
            key={p}
            className="absolute top-0 bottom-0 w-px bg-foreground"
            style={{ left: `${p}%` }}
          />
        ))}
      </div>

      {/* Right Side Background (Using color instead of image to prevent errors) */}
      <div className="absolute right-0 top-0 w-full md:w-[58%] h-full pointer-events-none bg-gradient-to-l from-[#320d55]/10 to-transparent" />
      
      <div className="absolute right-0 top-0 w-full md:w-[58%] h-full pointer-events-none">
        <Image
          src="/building.jpg"
          alt="Building"
          className="w-full h-full object-cover"
          loading="lazy"
          fetchPriority="low"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* Text content — left side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pb-10 md:pb-12 pt-12">
        
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 flex items-center gap-3" style={{ color: '#320d55' }}>
            <span className="w-6 h-px inline-block" style={{ backgroundColor: '#320d55' }} />
            Protocol 2024–2027
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-foreground">
            Strategic
            <br />
            <span className="italic font-normal" style={{ color: '#320d55' }}>Goals</span>
          </h1>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <p className="mt-6 md:mt-8 text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed font-light">
            Architecting the pillars of a stronger, more resilient deposit
            protection framework for Pakistan's financial future.
          </p>
        </div>

        {/* Scroll cue */}
        <div className="mt-8 flex items-center gap-3 text-muted-foreground">
          <div className="w-px h-10 bg-gradient-to-b from-[#320d55] to-transparent origin-top" />
          <span className="text-[10px] tracking-[0.35em] uppercase font-semibold">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}