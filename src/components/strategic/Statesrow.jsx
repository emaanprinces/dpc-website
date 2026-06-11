import { motion } from "framer-motion";

const stats = [
  { value: "6", label: "Strategic Pillars", sub: "Defining our mandate" },
  { value: "2027", label: "Target Horizon", sub: "Long-term roadmap" },
  { value: "100%", label: "Depositor Coverage", sub: "Full protection goal" },
];

export default function StatsRow() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16 border-t border-b border-foreground/8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.12 }}
            className="flex flex-col items-start"
          >
            <p className="font-serif text-5xl md:text-6xl text-primary mb-2 leading-none">
              {stat.value}
            </p>
            <p className="text-foreground text-sm md:text-base font-semibold mb-1 tracking-wide">
              {stat.label}
            </p>
            <p className="text-muted-foreground text-xs md:text-sm font-light">
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}