import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- DATA EXPORTS (KEPT AS REQUESTED) ---

export const MEDIA_DATA = [
  { date: "2026", category: "Circular Letter No. 2 of 2026", title: "Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2026", category: "Circular Letter No. 1 of 2026", title: "Notification" },
  { date: "2025", category: "Circular No. 1 of 2025", title: "Deposit Protection Mechanism for Digital Banks" },
  { date: "2025", category: "Circular Letter No. 03 of 2025", title: "Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2025", category: "Circular Letter No. 02 of 2025", title: "Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2025", category: "Circular Letter No. 01 of 2025", title: "Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2024", category: "Annual Report", title: "Annual Report 2023-24" },
  { date: "2024", category: "Circular Letter No. 04 of 2024", title: "Premium Assessment Guidelines" },
  { date: "2024", category: "Circular Letter No. 03 of 2024", title: "Coverage Limit Enhancement" },
  { date: "2024", category: "Gazette Notification", title: "Coverage Limit Rs. 1,000,000" },
];

export const DOCUMENTS = [
  { category: "Legislation", year: "2016", title: "Deposit Protection Corporation Act, 2016", size: "PDF · 1.2 MB" },
  { category: "Annual Reports", year: "2024", title: "Annual Report 2023–24", size: "PDF · 8.3 MB" },
  { category: "Annual Reports", year: "2023", title: "Annual Report 2022–23", size: "PDF · 7.9 MB" },
  { category: "Annual Reports", year: "2022", title: "Annual Report 2021–22", size: "PDF · 7.1 MB" },
  { category: "Circular Letters", year: "2026", title: "Circular Letter No. 2 of 2026 — Member Institutions of DPC", size: "PDF · 0.3 MB" },
  { category: "Circular Letters", year: "2026", title: "Circular Letter No. 1 of 2026 — Notification", size: "PDF · 0.2 MB" },
  { category: "Circular Letters", year: "2025", title: "Circular No. 1 of 2025 — Deposit Protection for Digital Banks", size: "PDF · 0.5 MB" },
  { category: "Circular Letters", year: "2025", title: "Circular Letter No. 03 of 2025 — Member Institutions", size: "PDF · 0.3 MB" },
  { category: "Circular Letters", year: "2024", title: "Circular Letter No. 04 of 2024 — Premium Assessment", size: "PDF · 0.4 MB" },
  { category: "Notifications", year: "2024", title: "Gazette Notification — Coverage Limit Rs. 1,000,000", size: "PDF · 0.2 MB" },
  { category: "Notifications", year: "2021", title: "Gazette Notification — Coverage Limit Enhancement (2021)", size: "PDF · 0.2 MB" },
  { category: "Notifications", year: "2018", title: "Gazette Notification — DPC Operational Commencement", size: "PDF · 0.2 MB" },
];

export const CATEGORIES = ["All", "Legislation", "Annual Reports", "Circular Letters", "Notifications"];

// --- COMPONENT ---

export default function Media() {
  return (
    <div className="bg-dpc-clay min-h-screen">
      
      {/* HERO SECTION WITH IMAGE — NO SHADE */}
      {/* 1. Increased min-h to [70vh] and pb to 24/32 for a bigger hero */}
      <section className="relative pb-24 md:pb-32 px-6 md:px-12 border-b border-dpc-navy/10 bg-dpc-navy text-dpc-clay overflow-hidden min-h-[70vh]">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/34.webp" alt="Latest updates background" className="w-full h-full object-cover" />
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          {["25%","50%","75%"].map(l => <div key={l} className="absolute top-0 bottom-0 w-[1px] bg-dpc-clay" style={{ left: l }} />)}
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-6xl mx-auto pt-32 md:pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            {/* <p className="text-dpc-teal text-xs font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-md">Press & Publications</p> */}
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dpc-clay leading-tight drop-shadow-xl">
              {/* Media &<br /><span className="italic font-normal text-dpc-clay/60 drop-shadow-lg">Downloads</span> */}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 px-6 md:px-12 border-b border-dpc-navy/10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-dpc-navy mb-2">Latest Updates</h2>
          <div className="h-[1px] w-24 bg-dpc-navy mb-12" />
          <div className="flex flex-col border-t border-dpc-navy/10">
            {MEDIA_DATA.map((u, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group py-6 border-b border-dpc-navy/10 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 hover:bg-dpc-clay/30 transition-colors px-4 -mx-4">
                <div className="flex-shrink-0 w-20"><p className="text-xs font-semibold tracking-widest text-dpc-navy/40 uppercase">{u.date}</p></div>
                <div className="flex-grow">
                  <span className="inline-block px-2 py-1 bg-dpc-navy/5 text-[10px] font-bold uppercase tracking-widest text-dpc-blue mb-2">{u.category}</span>
                  <h3 className="font-serif text-lg text-dpc-navy group-hover:text-dpc-blue transition-colors">{u.title}</h3>
                </div>
                <div className="flex-shrink-0 text-dpc-navy/20 group-hover:text-dpc-blue transition-colors hidden sm:block"><ArrowRight size={18} /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}