import { motion } from "framer-motion";
import Image from "../ui/Image";

export default function GoalCard({ goal, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px -10% 0px" }}
      transition={{ duration: 0.75 }}
      className="group border-t border-foreground/10 pt-10 md:pt-14"
    >
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}>

        {/* 3D Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="w-full lg:w-[42%] flex-shrink-0 relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-primary/8 blur-2xl scale-90 pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/60 to-secondary/20 border border-foreground/6 shadow-xl shadow-foreground/4">
            <Image
              src={goal.image}
              alt={goal.title}
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              fetchPriority="low"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 py-2 lg:py-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif text-xs font-bold text-primary/50 tracking-[0.3em] uppercase">
              {goal.num}
            </span>
            <div className="w-px h-3 bg-foreground/20" />
            <span className="text-accent text-[10px] font-bold tracking-[0.25em] uppercase">
              {goal.timeline}
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.25rem] text-foreground leading-snug">
            {goal.title}
          </h3>
        </div>

      </div>
    </motion.div>
  );
}