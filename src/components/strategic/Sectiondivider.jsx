import { motion } from "framer-motion";

export default function SectionDivider({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-20 md:py-28 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {subtitle && (
          <p className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-accent inline-block" />
            {subtitle}
          </p>
        )}
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl max-w-2xl leading-tight text-foreground">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}