import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Landmark, Users } from "lucide-react";
import Image from "../components/ui/Image";

// ─── THEME COLOR ────────────────────────────────────────────────────────────
const THEME_COLOR = "#320d55";

// ─── Images ───────────────────────────────────────────────────────────────────
const HERO_IMAGE = "https://media.base44.com/images/public/6a06fb4f14b34ac78744eb2f/1479fc6c4_generated_1a0d59bc.png";
const BOARDROOM_IMAGE = "https://media.base44.com/images/public/6a06fb4f14b34ac78744eb2f/2fa6503c4_generated_b924ae78.png";
const VAULT_IMAGE = "https://media.base44.com/images/public/6a06fb4f14b34ac78744eb2f/5950111f4_generated_0f179b7f.png";
const CLOCKWORK_IMAGE = "https://media.base44.com/images/public/6a06fb4f14b34ac78744eb2f/e3b516253_generated_cbc83a14.png";

// ─── Data ─────────────────────────────────────────────────────────────────────
const pillars = [
  { icon: Shield, title: "Protection", description: "Compensating small and financially unsophisticated depositors to the extent of protected deposits in the unlikely event of a bank failure." },
  { icon: Landmark, title: "Stability", description: "Playing a key role in promoting financial stability by sustaining confidence in the banking system of Pakistan." },
  { icon: Users, title: "Trust", description: "Commenced operations on June 01, 2018, building an enduring framework of depositor confidence across the nation." },
];

const governanceDetails = [
  { label: "Chairmanship", value: "Deputy Governor", sub: "State Bank of Pakistan" },
  { label: "Administration", value: "Managing Director", sub: "Deposit Protection Corporation" },
  { label: "Board Nomination", value: "Federal Government", sub: "In consultation with the State Bank of Pakistan" },
];

const fundDetails = {
  conventional: {
    title: "Conventional",
    description: "Premium collected from conventional member institutions, managed under the DPC Act 2016 framework with full regulatory oversight.",
    features: ["Compulsory membership for scheduled banks", "Prescribed premium collection", "Separate fund management"],
  },
  islamic: {
    title: "Islamic",
    description: "Premium collected from Islamic banking institutions, managed in accordance with Shariah principles and the DPC Act 2016.",
    features: ["Shariah-compliant fund structure", "Independent premium management", "Dedicated oversight framework"],
  },
};

const milestones = [
  { day: "Day 0", title: "Bank Failure Notification", description: "State Bank of Pakistan notifies DPC of a bank failure event, triggering the reimbursement protocol." },
  { day: "Day 1–10", title: "Procedure Adoption", description: "DPC adopts the approved procedure of reimbursement and initiates depositor verification processes." },
  { day: "Day 11–25", title: "Claims Processing", description: "Protected deposits are calculated and claims are verified against the prescribed compensation limits." },
  { day: "Day 30", title: "Depositor Reimbursement", description: "DPC compensates depositors up to the prescribed amount, completing the reimbursement within the mandated 30-day window." },
];

// ─── Countdown (FIXED TO STATIC 30) ─────────────────────────────────────────
function CountdownDisplay() {
  return (
    <div className="text-center mb-16 md:mb-24">
      <p className="font-body text-xs tracking-[0.3em] uppercase mb-6" style={{ color: THEME_COLOR }}>Mandated Resolution Within</p>
      <div className="inline-flex items-baseline gap-4">
        <span className="font-heading text-7xl md:text-9xl lg:text-[10rem] font-bold tabular-nums" style={{ color: THEME_COLOR }}>30</span>
        <span className="font-body text-lg md:text-2xl text-muted-foreground tracking-wider uppercase">Days</span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutUs() {
  const [activeFund, setActiveFund] = useState("conventional");

  return (
    <div className="bg-background min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/building.jpg" alt="Building facade" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 px-6 md:px-12 text-center mt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 lg:mb-6 tracking-tight drop-shadow-lg">
              Deposit Protection Corporation
            </h1>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-white drop-shadow-md">
              About Us
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="relative py-24 md:py-40 px-6 md:px-12">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border/20" style={{ opacity: 0.2, backgroundColor: THEME_COLOR }} />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: THEME_COLOR }}>Our Mission</p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground max-w-4xl leading-tight">
              Safeguarding the deposits <span className="italic" style={{ color: THEME_COLOR }}>of a nation</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mt-10 md:mt-14" style={{ lineHeight: "1.7" }}>
            Deposit Protection Corporation is a wholly-owned subsidiary of the State Bank of Pakistan, established in wake of the DPC Act 2016. The corporation commenced its business with effect from June 01, 2018.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-20 md:mt-28 bg-border">
            {pillars.map((pillar, index) => (
              <motion.div key={pillar.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, delay: index * 0.15 }} className="bg-background p-8 md:p-10">
                <pillar.icon className="w-6 h-6 mb-6" strokeWidth={1.5} style={{ color: THEME_COLOR }} />
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">{pillar.title}</h3>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed" style={{ lineHeight: "1.7" }}>{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Governance ── */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={BOARDROOM_IMAGE} alt="Grand neoclassical boardroom" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/95" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: THEME_COLOR }}>Governance</p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground max-w-4xl leading-tight">
              Pillars of <span className="italic" style={{ color: THEME_COLOR }}>governance</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-body text-lg text-foreground/80 max-w-3xl mt-10" style={{ lineHeight: "1.7" }}>
            Deposit Protection Corporation is governed by an independent and professional board of directors. The Federal Government nominates the Board of Directors in consultation with the State Bank of Pakistan.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
            {governanceDetails.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, delay: index * 0.15 }} className="relative bg-card border border-border p-8 md:p-10 group transition-colors duration-500 shadow-sm hover:border-[#320d55]">
                <div className="absolute top-0 left-0 w-12 h-px" style={{ backgroundColor: THEME_COLOR }} />
                <p className="font-body text-xs tracking-[0.2em] uppercase mb-4" style={{ color: THEME_COLOR }}>{item.label}</p>
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">{item.value}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual Vault ── */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={VAULT_IMAGE} alt="Abstract architectural bank vault" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-background/95" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: THEME_COLOR }}>Fund Management</p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground max-w-4xl leading-tight">
              The Dual <span className="italic" style={{ color: THEME_COLOR }}>Vault</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-body text-lg text-foreground/80 max-w-3xl mt-10" style={{ lineHeight: "1.7" }}>
            DPC collects premiums from member institutions as empowered by the DPC Act 2016 and manages the received funds separately for both Islamic and conventional premium.
          </motion.p>
          <div className="mt-16 md:mt-24">
            <div className="inline-flex border border-border p-1 bg-card shadow-sm">
              {["conventional", "islamic"].map((fund) => (
                <button 
                  key={fund} 
                  onClick={() => setActiveFund(fund)} 
                  className={`font-body text-sm tracking-[0.15em] uppercase px-6 py-3 transition-all duration-500 ${activeFund === fund ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
                  style={{ backgroundColor: activeFund === fund ? THEME_COLOR : 'transparent' }}
                >
                  {fund}
                </button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeFund} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <h3 className="font-heading text-2xl md:text-4xl text-foreground mb-6">
                  {fundDetails[activeFund].title} <span className="italic" style={{ color: THEME_COLOR }}>Premium</span>
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed" style={{ lineHeight: "1.7" }}>{fundDetails[activeFund].description}</p>
              </div>
              <div className="space-y-6">
                {fundDetails[activeFund].features.map((feature, i) => (
                  <motion.div key={feature} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 flex-shrink-0" style={{ backgroundColor: THEME_COLOR }} />
                    <p className="font-body text-base text-foreground/80">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* CHANGED: Reduced gap from mt-6 to mt-4 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-4 bg-card border border-border p-8 md:p-10 shadow-sm">
            <p className="font-body text-xs tracking-[0.2em] uppercase mb-3" style={{ color: THEME_COLOR }}>Compulsory Membership</p>
            <p className="font-body text-sm md:text-base text-foreground/70" style={{ lineHeight: "1.7" }}>
              All banks scheduled under subsection (2) of section 37 of the State Bank of Pakistan Act, 1956, unless exempted or excluded by the Board, shall compulsorily be member institutions of the Corporation and liable to pay the prescribed premium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      {/* CHANGED: Reduced top padding from pt-8 to pt-4 */}
      <section className="relative pt-4 pb-24 md:pt-8 md:pb-40 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src={CLOCKWORK_IMAGE} alt="Intricate clockwork mechanism" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-background/97" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: THEME_COLOR }}>The Process</p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground max-w-4xl leading-tight">
              The 30-Day <span className="italic" style={{ color: THEME_COLOR }}>Resolve</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-body text-lg text-foreground/80 max-w-3xl mt-10 mb-20 md:mb-28" style={{ lineHeight: "1.7" }}>
            DPC steps forward in the unlikely event of bank failure as notified by the State Bank of Pakistan and compensates depositors up to the prescribed amount within 30 days after the notification.
          </motion.p>
          <CountdownDisplay />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border/50" />
            <div className="space-y-16 md:space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div key={milestone.day} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, delay: index * 0.1 }} className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 mt-2 z-10" style={{ backgroundColor: THEME_COLOR }} />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <p className="font-body text-xs tracking-[0.2em] uppercase mb-2" style={{ color: THEME_COLOR }}>{milestone.day}</p>
                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">{milestone.title}</h3>
                    <p className="font-body text-sm md:text-base text-muted-foreground" style={{ lineHeight: "1.7" }}>{milestone.description}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}