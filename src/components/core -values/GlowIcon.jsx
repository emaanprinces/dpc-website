import { motion } from "framer-motion";

export default function GlowIcon({ icon: Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, rotate: 5 }}
      className="relative p-3 rounded-full bg-primary border border-primary/30"
      style={{ boxShadow: "0 0 18px rgba(30,90,160,0.25)" }}
    >
      <Icon className="relative z-10 w-6 h-6 text-white" strokeWidth={1.5} />
    </motion.div>
  );
}