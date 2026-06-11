import { motion } from "framer-motion";
import Image from "../ui/Image";

export default function ValueCard({ title, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-500"
    >
      {/* Image section */}
      <div className="relative h-56 overflow-hidden bg-[#f0ede8]">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          fetchPriority="low"
        />
      </div>

      {/* Content */}
      <div className="px-6 py-5 border-t border-border/40">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
          {title}
        </h3>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}