
import { motion } from "framer-motion";
import Image from "../ui/Image";

export default function HeroSection({ heroImage }) {
  return (
    // Added border and explicit background color for the layout
    <section className="relative pt-20 pb-8 md:pt-32 md:pb-12 w-full flex items-end overflow-hidden border-b border-foreground/10 bg-background">
      
      {/* 1. Added Purple Glow Blobs (Shading) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-[#320d55]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-[-5%] w-[35vw] h-[35vw] rounded-full bg-[#5b21b6]/20 blur-[90px]" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={pct}
            className="absolute top-0 bottom-0 w-[0.5px] bg-foreground"
            style={{ left: `${pct}%` }}
          />
        ))}
        {[25, 50, 75].map((pct) => (
          <div
            key={pct}
            className="absolute left-0 right-0 h-[0.5px] bg-foreground"
            style={{ top: `${pct}%` }}
          />
        ))}
      </div>

      {/* 2. Image Container (Right Side) - Same as Strategic Goals */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute right-0 top-0 w-full md:w-[58%] h-full pointer-events-none"
      >
        <Image
          src="/building.jpg"
          alt="Abstract glass tectonic plates"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          fetchPriority="low"
        />
        {/* Strategic Goals Style Blends */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 md:via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-10 md:pb-12 pt-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px]" style={{ backgroundColor: '#320d55' }} />
              <p className="text-xs font-semibold tracking-[0.35em] uppercase font-sans" style={{ color: '#320d55' }}>
                Our Foundation
              </p>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-[0.95] tracking-tight">
              Core
              <br />
              <span className="italic font-normal" style={{ color: '#320d55' }}>Values</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-muted-foreground max-w-xl leading-relaxed text-base md:text-lg font-sans"
          >
            The principles that guide everything we do at the Deposit Protection Corporation.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
