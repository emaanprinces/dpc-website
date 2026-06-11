import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ChevronDown, ArrowRight, Shield, PiggyBank, Building2,
  Laptop, CheckCircle2, Globe, Wallet, Clock, FileText, BarChart, Landmark,
  ArrowUpRight, Download, FolderOpen, File, Search, Database, Calculator,
  BookOpen, X, ChevronLeft, Target, Sparkles, HelpCircle, Menu, ExternalLink,
} from 'lucide-react';

/* ── DATA SOURCE (Media Data) ── */
const MEDIA_DATA = [
  // 2026
  { date: "2026", category: "Circular Letters", title: "DPC Circular Letter No. 2 of 2026 - Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2026", category: "Notifications", title: "DPC Circular Letter No. 1 of 2026 - Notification" },
  // 2025
  { date: "2025", category: "Circulars", title: "DPC Circular No. 01 of 2025 - Deposit Protection Mechanism for Digital Banks" },
  { date: "2025", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2025 - Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2025", category: "Circular Letters", title: "DPC Circular Letter No. 02 of 2025 - Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2025", category: "Circular Letters", title: "DPC Circular Letter No. 03 of 2025 - Member Institutions of Deposit Protection Corporation (DPC)" },
  // 2024
  { date: "2024", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2024 - Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2024", category: "Notifications", title: "Gazette Notification - Enhancement of Coverage Limit to Rs. 1,000,000" },
  { date: "2024", category: "Circular Letters", title: "DPC Circular Letter No. 02 of 2024 - Member Institutions of DPC" },
  // 2023
  { date: "2023", category: "Notifications", title: "DPC Circular Letter No. 01 of 2023 - Notification" },
  { date: "2023", category: "Circular Letters", title: "DPC Circular Letter No. 02 of 2023 - Revision of Data Reporting Formats for Banks" },
  // 2022
  { date: "2022", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2022 - Single Depositor View Information System of Member Banks - Review Mechanism" },
  // 2021
  { date: "2021", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2021 - Enhancement of Protection Limit of Deposits (from Rs.250,000/- to Rs.500,000/-)" },
  // 2020
  { date: "2020", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2020" },
  { date: "2020", category: "Circular Letters", title: "DPC Circular Letter No. 02 of 2020" },
  // 2019
  { date: "2019", category: "Circulars", title: "DPC Circular No. 01 of 2019 - Premium Assessment Guidelines" },
  { date: "2019", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2019 - Coverage Limit Enhancement" },
  // 2018
  { date: "2018", category: "Circulars", title: "DPC Circular No.2 of 2018 - Declaration of Commencement of Deposit Protection Scheme" },
  { date: "2018", category: "Circulars", title: "DPC Circular No.1 of 2018 - Premium Rates" },
  { date: "2018", category: "Circular Letters", title: "DPC Circular Letter No.1 of 2018 - Operational Guidelines for Banks" },
  { date: "2018", category: "Circular Letters", title: "DPC Circular Letter No.2 of 2018 - Data Reporting Mechanism" },
  { date: "2018", category: "Circular Letters", title: "DPC Circular Letter No.3 of 2018 - Claim Settlement Process" },
];

const categories = ['All', 'Circulars', 'Circular Letters', 'Notifications'];

/* ── Hooks ──────────────────────────────────────────────────── */
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
};

/* ── CountUp ── */
const CountUp = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const useCountUp = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

/* ── PolicyModal ── */
function PolicyModal({ isOpen, onClose, title, dept, children }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-dpc-navy/60 backdrop-blur-sm" 
            onClick={onClose} 
          />
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.97 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }} 
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4 px-8 py-6 border-b border-dpc-navy/5">
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-dpc-blue mb-1">{dept}</p>
                <h2 className="font-serif text-xl font-bold text-dpc-navy leading-snug">{title}</h2>
              </div>
              <button 
                onClick={onClose} 
                className="flex-shrink-0 w-8 h-8 rounded-lg bg-dpc-navy/5 hover:bg-dpc-navy/10 flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-dpc-navy/60" />
              </button>
            </div>
            <div className="overflow-y-auto px-8 py-6 flex-1 text-sm text-dpc-navy/70 leading-relaxed space-y-4">
              {children}
            </div>
            <div className="px-8 py-4 border-t border-dpc-navy/5 bg-dpc-clay/40">
              <p className="text-[10px] text-dpc-navy/30 tracking-wide">Deposit Protection Corporation · DPC Act 2016</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ─── HERO (SEPARATE DESKTOP & MOBILE IMAGES) ─── */
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile(768);
  
  const slides = React.useMemo(() => [
    {
      id: 1,
      title: "Banking for Everyone",
      subtitle: "Protecting deposits of millions of customers across Pakistan's banking system.",
      imageDesktop: "/Gemini_Generated_Image_vk9buuvk9buuvk9b (1).png",
      imageMobile: "/ChatGPT Image Jun 4, 2026, 12_42_45 PM.png",
      accent: "text-dpc-teal"
    },
    {
      id: 2,
      title: "Financial Security",
      subtitle: "Ensuring stability and confidence in the nation's deposit protection scheme.",
      imageDesktop: "/ChatGPT Image May 30, 2026, 04_24_44 PM.png",
      imageMobile: "/ChatGPT Image Jun 4, 2026, 12_19_03 PM.png",
      accent: "text-dpc-clay"
    },
    {
      id: 3,
      title: "Building Trust",
      subtitle: "Working to strengthen the financial security of every depositor in Pakistan.",
      imageDesktop: "/Copilot_20260523_204240.png",
      imageMobile: "/ChatGPT Image Jun 4, 2026, 12_21_23 PM.png",
      accent: "text-emerald-300"
    }
  ], []);

  // Preload all slide images on mount so they are cached by the browser
  useEffect(() => {
    slides.forEach((slide) => {
      if (slide.imageDesktop) {
        const imgD = new window.Image();
        imgD.src = slide.imageDesktop;
      }
      if (slide.imageMobile) {
        const imgM = new window.Image();
        imgM.src = slide.imageMobile;
      }
    });
  }, [slides]);

  // Auto-play effect - slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => { 
      setCurrentSlide((prev) => (prev + 1) % slides.length); 
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Images Layer: Keeps all images rendered and fades between them to avoid black flashes */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => {
          const slideImage = isMobile 
            ? slide.imageMobile || slide.imageDesktop 
            : slide.imageDesktop;
          const isActive = idx === currentSlide;

          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1.03 : 1
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeInOut" },
                scale: { duration: 1.5, ease: "easeOut" }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slideImage}
                alt=""
                className="w-full h-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10" />

      {/* Slide Text Content */}
      <div className="relative z-20 flex h-full flex-col justify-end text-center px-6 pb-10 sm:pb-20 max-w-4xl mx-auto overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full flex flex-col items-center"
          >
            <p className={`text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-md ${slides[currentSlide].accent}`}>
              Deposit Protection Corporation
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-white/95 text-base sm:text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md bg-black/30 p-4 sm:p-5 rounded-3xl backdrop-blur-sm">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 rounded-full transition-all duration-300 ease-out ${
              currentSlide === idx 
                ? "w-12 bg-dpc-teal" 
                : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

/* ── BankMarquee ────────────────────────────────────────────── */
const BankMarquee = () => {
  const banks = [
    'The Punjab Provincial Cooperative Bank Limited',
    'Zarai Taraqiati Bank Limited',
    'Albaraka Bank (Pakistan) Limited',
    'Allied Bank Limited',
    'Askari Bank Limited',
    'Bank Alfalah Limited',
    'Bank AL Habib Limited',
    'Bank Makramah Limited',
    'Bank of China Limited – Pakistan Operations',
    'BankIslami Pakistan Limited',
    'Citibank N.A. – Pakistan Operations',
    'Deutsche Bank AG – Pakistan Operations',
    'Dubai Islamic Bank Pakistan Limited',
    'Faysal Bank Limited',
    'First Women Bank Limited',
    'Habib Bank Limited',
    'Habib Metropolitan Bank Limited',
    'JS Bank Limited',
    'MCB Bank Limited',
    'MCB Islamic Bank Limited',
    'Meezan Bank Limited',
    'National Bank of Pakistan',
    'SAMBA Bank Limited',
    'Sindh Bank Limited',
    'Soneri Bank Limited',
    'Standard Chartered Bank (Pakistan) Limited',
    'The Bank of Khyber',
    'The Bank of Punjab',
    'United Bank Limited',
    'Easypaisa Bank Limited',
  ];

  return (
    <div className="bg-dpc-clay border-b border-dpc-navy/10 py-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex justify-between items-center">
        <span className="text-dpc-navy/40 text-[10px] font-bold tracking-[0.2em] uppercase">Participating Member Banks</span>
      </div>
      <div className="relative w-full">
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap group-hover:pause items-center no-scrollbar">
            {[...banks, ...banks].map((bank, i) => (
              <div
                key={i}
                className="mx-6 flex items-center gap-3 text-dpc-navy font-serif text-lg tracking-tight"
              >
                <span className="w-1 h-1 bg-dpc-teal rounded-full opacity-50" />
                {bank}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dpc-clay to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dpc-clay to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

/* ── NewUpdates (WHITE BACKGROUND) ─────────────────────────────────────────────── */
const NewUpdates = () => {
  const updates = [
    { date: '2026', category: 'Circular Letter No. 2 of 2026', title: 'Member Institutions of Deposit Protection Corporation (DPC)', link: '#' },
    { date: '2026', category: 'Circular Letter No. 1 of 2026', title: 'Notification', link: '#' },
    { date: '2025', category: 'Circular No. 1 of 2025', title: 'Deposit Protection Mechanism for Digital Banks', link: '#' },
    { date: '2025', category: 'Circular Letter No. 03 of 2025', title: 'Member Institutions of Deposit Protection Corporation (DPC)', link: '#' },
    { date: '2025', category: 'Circular Letter No. 02 of 2025', title: 'Member Institutions of Deposit Protection Corporation (DPC)', link: '#' },
    { date: '2025', category: 'Circular Letter No. 01 of 2025', title: 'Member Institutions of Deposit Protection Corporation (DPC)', link: '#' },
    { date: '2024', category: 'Annual Report', title: 'Annual Report 2023-24', link: '#' },
    { date: '2024', category: 'Circular Letter No. 04 of 2024', title: 'Premium Assessment Guidelines', link: '#' },
    { date: '2024', category: 'Circular Letter No. 03 of 2024', title: 'Coverage Limit Enhancement', link: '#' },
    { date: '2024', category: 'Gazette Notification', title: 'Coverage Limit Rs. 1,000,000', link: '#' },
  ];

  return (
    <section id="updates" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-3xl sm:text-4xl font-serif text-dpc-navy mb-6">Latest <br />Updates</h2>
              <p className="text-dpc-navy/60 text-sm leading-relaxed mb-8">Official circulars, notifications, and regulatory updates from the Corporation.</p>
              <Link 
                to="/media" 
                className="inline-flex items-center gap-2 border border-dpc-navy text-dpc-navy px-6 py-3 text-xs font-semibold tracking-wider uppercase hover:bg-dpc-navy hover:text-white transition-all"
              >
                View Latest Updates Archive
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-8 flex flex-col border-t border-dpc-navy/10">
            {updates.map((update, i) => (
              <motion.a
                key={i}
                href={update.link}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group py-8 border-b border-dpc-navy/10 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 hover:bg-black/5 transition-colors px-4 -mx-4"
              >
                <div className="flex-shrink-0 w-32">
                  <p className="text-xs font-semibold tracking-widest text-dpc-navy/40 uppercase">{update.date}</p>
                </div>
                <div className="flex-grow">
                  <span className="inline-block px-2 py-1 bg-dpc-navy/5 text-[10px] font-bold uppercase tracking-widest text-dpc-blue mb-3">
                    {update.category}
                  </span>
                  <h3 className="text-xl font-serif text-dpc-navy group-hover:text-dpc-blue transition-colors">
                    {update.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 text-dpc-navy/20 group-hover:text-dpc-blue transition-colors hidden sm:block">
                  <ArrowRight size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── NumbersSection ── */
const NumbersSection = () => (
  <section className="py-24 bg-dpc-navy text-dpc-clay">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-px bg-dpc-clay/10">
        {[
          { label: 'Member Banks', value: 33, prefix: '', suffix: '+' },
          { label: 'Coverage Limit', value: 1, prefix: 'Rs. ', suffix: 'M' },
          { label: 'Settlement Target', value: 30, prefix: '', suffix: ' Days' },
          { label: 'Eligible Accounts', value: 97, prefix: '', suffix: '%' },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: i * 0.1 }} 
            viewport={{ once: true }} 
            className="bg-dpc-navy p-8 sm:p-12 flex flex-col items-center text-center"
          >
            <div className="text-3xl sm:text-5xl font-serif text-white mb-4">{stat.prefix}<CountUp end={stat.value} duration={2} suffix={stat.suffix} /></div>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-dpc-clay/50">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// /* ── BankerOperationalModules ── */
// function downloadPlaceholderPDF() {
//   const content = '%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj 2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj 3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]>>endobj\ntrailer<</Size 4/Root 1 0 R>>\nstartxref 200\n%%EOF';
//   const blob = new Blob([content], { type: 'application/pdf' });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url; a.download = 'DPC_SDV_Guidelines.pdf'; a.click();
//   URL.revokeObjectURL(url);
// }

// const PREMIUM_SECTIONS = [
//   { heading: '1. Scope & Applicability', body: 'All scheduled member banks are required to contribute to the Deposit Protection Fund quarterly per the DPC Act 2016 and Circular Letter No. 04 of 2024.' },
//   { heading: '2. Premium Rate Matrix', body: 'Rates are risk-adjusted based on CAMELS rating:', bullets: ['Rating 1-2 (Strong): 0.10% of eligible deposits', 'Rating 3 (Satisfactory): 0.15% of eligible deposits', 'Rating 4-5 (Marginal): 0.20% of eligible deposits'] },
//   { heading: '3. Calculation Methodology', body: 'The premium base is the monthly average of eligible deposits per quarter, excluding inter-bank, government, and over-limit deposits.' },
//   { heading: '4. Submission Deadlines', bullets: ['Q1 (Jan-Mar): Due 30 April', 'Q2 (Apr-Jun): Due 31 July', 'Q3 (Jul-Sep): Due 31 October', 'Q4 (Oct-Dec): Due 31 January'] },
//   { heading: '5. Penalties', body: 'A surcharge of 1% per month applies on late submissions. Persistent non-compliance is reported to SBP under Section 21 of the DPC Act 2016.' },
// ];
// const WAQF_SECTIONS = [
//   { heading: '1. Establishment', body: 'The DP Waqf Fund provides a Shariah-compliant deposit protection mechanism for Islamic banks and windows, per DPC Circular No. 01 of 2025.' },
//   { heading: '2. Shariah Structure', body: 'Member institutions make irrevocable Waqf contributions managed by the DPC Shariah Advisory Committee and SBP Shariah Board.' },
//   { heading: '3. Eligible Institutions', bullets: ['Full-fledged Islamic banks licensed by SBP', 'Islamic banking windows of conventional banks', 'Digital banks with Shariah-compliant deposits'] },
//   { heading: '4. Contribution Rules', body: 'Institutions contributing to DP Waqf are exempt from the conventional DPF for their Islamic portfolio. Rates mirror the risk-adjusted premium framework.' },
//   { heading: '5. Coverage', body: 'Coverage of up to Rs. 1,000,000 per depositor per institution. Payouts follow Section 15 of the DPC Act 2016 adapted for Waqf disbursement.' },
//   { heading: '6. Annual Reporting', body: "A certified Shariah Compliance Report audited by the institution's Shariah Supervisory Board must accompany the annual premium statement." },
// ];

// function PolicyContent({ sections }) {
//   return (
//     <div className="space-y-5">
//       {sections.map((s, i) => (
//         <div key={i}>
//           <p className="font-semibold text-dpc-navy mb-1">{s.heading}</p>
//           {s.body && <p>{s.body}</p>}
//           {s.bullets && <ul className="list-disc pl-5 space-y-1 mt-1">{s.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>}
//         </div>
//       ))}
//     </div>
//   );
// }

// const MODULES = [
//   { dept: 'IT / Data Teams', icon: Database, title: 'Single Depositor View (SDV) Data Submission', description: 'Access technical specifications, file format templates, and submission protocols for the SDV data reporting requirement.', action: 'Download SDV Guidelines', color: 'text-dpc-blue', bg: 'bg-dpc-blue/5', border: 'border-dpc-blue/10', hover: 'hover:border-dpc-blue/30', type: 'download' },
//   { dept: 'Finance / Compliance', icon: Calculator, title: 'Premium Contribution Calculations & Deadlines', description: 'Review the risk-adjusted premium rate matrix, calculation methodology, and quarterly submission deadlines.', action: 'View Premium Framework', color: 'text-dpc-teal', bg: 'bg-dpc-teal/5', border: 'border-dpc-teal/10', hover: 'hover:border-dpc-teal/30', type: 'modal', modalKey: 'premium' },
//   { dept: 'Shariah Board / Islamic Windows', icon: BookOpen, title: 'Deposit Protection Waqf Fund (DP Waqf) Rules', description: 'Access the Shariah-compliant Waqf structure governing Islamic banks and windows, including contribution rules.', action: 'Read DP Waqf Regulations', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', hover: 'hover:border-amber-300', type: 'modal', modalKey: 'waqf' },
// ];

// const BankerOperationalModules = () => {
//   const [openModal, setOpenModal] = useState(null);
//   return (
//     <>
//       <section className="py-24 px-6 bg-dpc-clay border-b border-dpc-navy/5">
//         <div className="max-w-6xl mx-auto">
//           <p className="text-dpc-blue text-xs font-bold tracking-[0.3em] uppercase mb-3">Departmental Resources</p>
//           <h2 className="font-serif text-3xl md:text-4xl font-bold text-dpc-navy mb-2">Banker Operational Modules</h2>
//           <p className="text-dpc-navy/40 text-sm mb-12 max-w-xl">Targeted resources organised by banking department for efficient compliance and reporting.</p>
//           <div className="grid md:grid-cols-3 gap-6">
//             {MODULES.map((m, i) => {
//               const Icon = m.icon;
//               return (
//                 <motion.div 
//                   key={i} 
//                   initial={{ opacity: 0, y: 16 }} 
//                   whileInView={{ opacity: 1, y: 0 }} 
//                   viewport={{ once: true }} 
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className={`group bg-white rounded-2xl border ${m.border} ${m.hover} transition-all p-7 flex flex-col hover:shadow-lg`}
//                 >
//                   <div className={`w-11 h-11 rounded-xl ${m.bg} flex items-center justify-center mb-5`}><Icon size={20} className={m.color} /></div>
//                   <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${m.color} mb-3`}>{m.dept}</span>
//                   <h3 className="font-serif text-lg font-bold text-dpc-navy mb-3 leading-snug">{m.title}</h3>
//                   <p className="text-sm text-dpc-navy/50 leading-relaxed flex-1">{m.description}</p>
//                   <button 
//                     onClick={() => m.type === 'download' ? downloadPlaceholderPDF() : setOpenModal(m.modalKey)}
//                     className={`mt-6 flex items-center gap-2 text-sm font-semibold ${m.color} group-hover:gap-3 transition-all`}
//                   >
//                     {m.type === 'download' ? <Download size={14} /> : <ArrowRight size={14} />}{m.action}
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//       <PolicyModal isOpen={openModal === 'premium'} onClose={() => setOpenModal(null)} dept="Finance / Compliance" title="Premium Contribution Calculations">
//         <PolicyContent sections={PREMIUM_SECTIONS} />
//       </PolicyModal>
//       <PolicyModal isOpen={openModal === 'waqf'} onClose={() => setOpenModal(null)} dept="Shariah Board / Islamic Windows" title="Deposit Protection Waqf Fund Rules">
//         <PolicyContent sections={WAQF_SECTIONS} />
//       </PolicyModal>
//     </>
//   );
// };

/* ── MediaLibrarySection (UPDATED: WHITE BACKGROUND) ── */
const MediaLibrarySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const sectionData = MEDIA_DATA.filter(doc => ['2024', '2025', '2026'].includes(doc.date));

  const getIcon = (category) => {
    if (category.includes('Circular')) return <FileText size={20} strokeWidth={1.5} />;
    return <File size={20} strokeWidth={1.5} />;
  };

  const filtered = sectionData.filter(doc =>
    (activeCategory === 'All' || doc.category === activeCategory) &&
    (doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || doc.date.includes(searchQuery))
  );
  
  const grouped = filtered.reduce((acc, doc) => { 
    if (!acc[doc.date]) acc[doc.date] = []; 
    acc[doc.date].push(doc); 
    return acc; 
  }, {});
  
  const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    // CHANGED: bg-dpc-clay to bg-white
    <section id="library-content" className="py-24 sm:py-32 bg-white border-b border-dpc-navy/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-dpc-teal" />
              <span className="text-dpc-teal text-xs font-semibold tracking-[0.2em] uppercase">Document Library</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-dpc-navy leading-[1.1]">
              {"Circulars & "}
              <br />
              <span className="italic text-dpc-navy/50">Notifications</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-dpc-navy/60 text-sm leading-relaxed">Official communications, circulars, and guidelines published by the Deposit Protection Corporation.</p>
          </div>
        </div>

        {/* Controls (Search & Filter) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 sticky top-4 z-20 py-2 bg-transparent backdrop-blur-sm -mx-2 px-2 sm:mx-0 sm:px-0">
          <div className="relative flex-1 max-w-sm">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-dpc-navy/30" />
            <input 
              type="text" 
              placeholder="Search documents..." 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-dpc-navy/15 bg-white text-sm text-dpc-navy placeholder:text-dpc-navy/30 focus:outline-none focus:border-dpc-teal transition-colors rounded-none shadow-sm" 
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[11px] font-semibold tracking-wider uppercase transition-all border ${activeCategory === cat ? 'bg-dpc-navy text-dpc-clay border-dpc-navy' : 'bg-white text-dpc-navy/60 border-dpc-navy/20 hover:border-dpc-navy/50 hover:text-dpc-navy shadow-sm'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-dpc-navy/40">
            <FolderOpen size={48} strokeWidth={1} className="mx-auto mb-4 opacity-40" />
            <p className="text-sm">No documents match your search.</p>
          </div>
        ) : (
          <div className="space-y-10">
            {sortedYears.map(year => (
              <div key={year}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-dpc-navy/30 font-serif text-sm tracking-widest">{year}</span>
                  <div className="flex-1 h-[1px] bg-dpc-navy/10" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {grouped[year].map((doc, i) => (
                    <motion.a 
                      key={i} 
                      href="#" 
                      onClick={e => e.preventDefault()} 
                      initial={{ opacity: 0, y: 10 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.4, delay: i * 0.05 }} 
                      viewport={{ once: true }}
                      // UPDATED: Card background changed to bg-gray-50 for visibility against white section
                      className="group flex items-start gap-4 p-5 border border-dpc-navy/10 bg-gray-50 hover:border-dpc-blue/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-9 h-9 border border-dpc-navy/10 flex items-center justify-center text-dpc-blue bg-white group-hover:bg-dpc-blue group-hover:text-white transition-all mt-0.5">
                        {getIcon(doc.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-dpc-navy leading-snug mb-1.5 group-hover:text-dpc-blue transition-colors line-clamp-2">{doc.title}</p>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] text-dpc-navy/40 font-mono truncate max-w-[120px]">{doc.category}</span>
                          <Download size={13} className="text-dpc-navy/20 group-hover:text-dpc-teal transition-colors flex-shrink-0" />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Count + Button */}
        <div className="mt-10 pt-8 border-t border-dpc-navy/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dpc-navy/40">Showing <span className="text-dpc-navy font-semibold">{filtered.length}</span> of {sectionData.length}</p>
          
          <Link 
            to="/media" 
            className="inline-flex items-center gap-2 px-6 py-2 text-xs font-semibold tracking-wider uppercase text-dpc-navy border border-dpc-navy hover:bg-dpc-navy hover:text-white transition-all"
          >
            View Full Archive
            <ExternalLink size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ── FAQSection ─────────────────────────────────────────────── */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'What is the protected amount determined by DPC?', answer: 'Currently, the DPC provides protection for up to Rs. 1,000,000 (one million rupees) per depositor per bank. This limit is absolute and statutory.' },
    { question: 'Do I need to register for this protection?', answer: 'No. Coverage is automatic for all eligible deposits held at member banks. No application or premium payment from the depositor is required.' },
    { question: 'Are Islamic banking deposits covered?', answer: 'Yes. The DPC manages a separate Shariah-compliant deposit protection mechanism for Islamic banking institutions alongside the conventional scheme.' },
    { question: 'What happens if I have accounts in multiple banks?', answer: 'The limit of Rs. 1,000,000 applies per depositor, per bank. If you hold accounts in different banks, each bank\'s deposits are protected separately up to the limit.' },
    { question: 'Which deposits are excluded?', answer: 'Deposits of government entities, inter-bank deposits, and deposits of individuals holding significant influence (like bank directors) are excluded under the DPC Act.' },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-dpc-clay">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-dpc-navy mb-4">Frequently Asked Questions</h2>
          <div className="h-[1px] w-24 bg-dpc-navy mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-dpc-navy/10 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-lg text-dpc-navy">{faq.question}</span>
                <ChevronDown size={20} className={`text-dpc-navy/40 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-sm text-dpc-navy/60 leading-relaxed border-t border-dpc-navy/5 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/Bfaq" 
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-wider uppercase text-dpc-clay bg-dpc-navy rounded-full hover:bg-dpc-blue transition-colors shadow-lg hover:shadow-xl"
          >
            View All FAQs
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

/* ── Home (Final Structure) ── */
export default function Home() {
  return (
    <div className="bg-dpc-clay min-h-screen">
      <Hero />
      <BankMarquee />
      
      {/* White Background */}
      <NewUpdates />
      
      <NumbersSection />
      {/* <BankerOperationalModules /> */}
      
      {/* White Background */}
      <MediaLibrarySection />
      
      <FAQSection />
    </div>
  );
}