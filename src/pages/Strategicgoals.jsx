
import HeroSection from "../components/strategic/HeroSection";
import SectionDivider from "../components/strategic/SectionDivider";
import GoalCard from "../components/strategic/GoalCard";

const goals = [
  {
    num: "SG - 01", // Updated to match image
    title: "Strengthen the Framework for Protection of Depositors.",
    desc: "Continuously enhance our deposit protection framework to be aligned with international best practices and IADI Core Principles.",
    timeline: "Ongoing",
    image: "https://media.base44.com/images/public/6a0b2a55851cdb4fe6f16cbb/94bd461af_generated_image.png",
  },
  {
    num: "SG - 02", // Updated to match image
    title: "Strategize Developments for Greater Effectiveness & Efficiency.",
    desc: "Increase depositor awareness about the protection scheme through targeted outreach and education campaigns.",
    timeline: "2024–2026",
    image: "https://media.base44.com/images/public/6a0b2a55851cdb4fe6f16cbb/ca45164dd_generated_image.png",
  },
  {
    num: "SG - 03", // Updated to match image
    title: "Strengthen Inter-Agency Cooperation with Safety-Net Participants.",
    desc: "Modernize internal systems to ensure faster and more accurate depositor reimbursement processes in the event of a bank failure.",
    timeline: "2025–2027",
    image: "https://media.base44.com/images/public/6a0b2a55851cdb4fe6f16cbb/b97ac3282_generated_image.png",
  },
  {
    num: "SG - 04", // Updated to match image
    title: "Ensure Adequate Financing Sources to Protect Depositors from Losses.",
    desc: "Build and maintain a robust Deposit Protection Fund capable of absorbing shocks from potential member institution failures.",
    timeline: "Ongoing",
    image: "https://media.base44.com/images/public/6a0b2a55851cdb4fe6f16cbb/cafa3c297_generated_image.png",
  },
  {
    num: "SG - 05", // Updated to match image
    title: "Enhancement of DPC's Mandate & Powers for Financial Stability.",
    desc: "Implement state-of-the-art digital infrastructure to maintain accurate depositor records and enable swift claim processing.",
    timeline: "2025–2026",
    image: "https://media.base44.com/images/public/6a0b2a55851cdb4fe6f16cbb/1359f1a1d_generated_image.png",
  },
  {
    num: "SG - 06", // Updated to match image
    title: "Promoting Deposit Protection Corporation as a well-known safety-net participant among depositors and general public",
    desc: "Strengthen coordination with the State Bank of Pakistan and other regulatory bodies to enhance the overall financial stability framework.",
    timeline: "Ongoing",
    image: "https://media.base44.com/images/public/6a0b2a55851cdb4fe6f16cbb/1cd236763_generated_image.png",
  },
];

export default function StrategicGoals() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/20">
      <HeroSection />
      <SectionDivider
        subtitle="The Six Pillars"
        title="Architecting the pillars of financial sovereignty."
      />

      <section className="px-6 md:px-16 pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-28">
          {goals.map((goal, i) => (
            <GoalCard key={i} goal={goal} index={i} />
          ))}
        </div>
      </section>

    </div>
  );
}
