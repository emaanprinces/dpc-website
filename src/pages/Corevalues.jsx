import HeroSection from "../components/core -values/HeroSection";
import ValueCard from "../components/core -values/ValuesCard";
import TimelineSection from "../components/core -values/TimelineSection";
import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    desc: "We uphold the highest standards of ethical conduct in all our operations, ensuring transparency and accountability in every action we take.",
    image: "https://media.base44.com/images/public/6a0bd8046f1068f1720819fd/da882bc10_image.png",
  },
  {
    title: "Transparency",
    desc: "We are committed to open and clear communication with all stakeholders, making information accessible and understandable.",
    image: "https://media.base44.com/images/public/6a0bd8046f1068f1720819fd/704ff1ca8_image.png",
  },
  {
    title: "Excellence",
    desc: "We strive for the highest quality in delivering our mandate, continuously improving processes and outcomes for depositors.",
    image: "https://media.base44.com/images/public/6a0bd8046f1068f1720819fd/d3964e180_image.png",
  },
  {
    title: "Inclusivity",
    desc: "We ensure our protection mechanisms reach all eligible depositors across Pakistan, with special focus on the financially vulnerable.",
    image: "https://media.base44.com/images/public/6a0bd8046f1068f1720819fd/97370dcd1_image.png",
  },
  {
    title: "Fairness",
    desc: "We treat all stakeholders equitably and impartially, applying consistent standards across all member institutions.",
    image: "https://media.base44.com/images/public/6a0bd8046f1068f1720819fd/2c26566a0_image.png",
  },
  {
    title: "Efficiency",
    desc: "We operate with speed and precision, especially in times of bank failure, to ensure timely reimbursement within 30 days.",
    image: "https://media.base44.com/images/public/6a0bd8046f1068f1720819fd/84f3c5336_image.png",
  },
];

const heroImage = "https://media.base44.com/images/public/6a0bd8046f1068f1720819fd/6ff769062_generated_4e1df085.png";

export default function CoreValues() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <HeroSection heroImage={heroImage} />

      {/* Values Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-primary" />
              <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
                What We Stand For
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
              The Pillars of Our Mission
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ValueCard key={i} title={v.title} image={v.image} index={i} />
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}