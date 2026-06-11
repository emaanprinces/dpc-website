import { motion } from "framer-motion";
import { Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  { day: "Day 1", label: "Bank Failure Declared" },
  { day: "Day 1–5", label: "Claims Process Initiated" },
  { day: "Day 5–15", label: "Verification & Processing" },
  { day: "Day 15–25", label: "Reimbursement Approved" },
  { day: "Day 30", label: "Depositors Reimbursed" },
];

export default function TimelineSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-4 h-4 text-primary" />
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase font-sans">
              30-Day Response
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
            Our Reimbursement Promise
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-border/50" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-gradient-to-r from-primary/80 via-primary/40 to-primary/80 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="relative flex md:flex-col items-start gap-4 md:items-center md:text-center"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border border-primary/30 shadow-sm flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: "0 0 15px rgba(30,90,160,0.1)" }}
                >
                  {i === steps.length - 1 ? (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  ) : (
                    <span className="text-xs font-semibold text-primary font-sans">{i + 1}</span>
                  )}
                </div>
                <div>
                  <p className="text-primary text-xs font-semibold font-sans mb-1">{step.day}</p>
                  <p className="text-sm text-muted-foreground font-sans">{step.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}