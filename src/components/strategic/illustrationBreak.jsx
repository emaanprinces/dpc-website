import { motion } from "framer-motion";
import Image from "../ui/Image";

const PILLARS_IMG = "https://media.base44.com/images/public/6a0b2a55851cdb4fe6f16cbb/69df61ee2_generated_image.png";

export default function IllustrationBreak() {
  return (
    <section className="relative overflow-hidden py-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[50vw] md:h-[38vw] max-h-[680px] min-h-[280px]"
      >
        <Image
          src={PILLARS_IMG}
          alt="Six strategic pillars visualization"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          fetchPriority="low"
        />
        {/* Top + bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        {/* Side fades */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

        {/* Floating label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase mb-2">
            The Six Pillars
          </p>
          <p className="font-serif text-foreground text-xl md:text-3xl italic">
            of Financial Sovereignty
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}