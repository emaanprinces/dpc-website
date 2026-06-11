
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  ArrowRight,
  PiggyBank,
  Building2,
  Laptop,
  CheckCircle2,
  Globe,
  Wallet,
  Clock,
  FileText,
  BarChart,
  Landmark,
  ArrowUpRight,
  Coins,
  CreditCard,
  Shield
} from 'lucide-react';
import Image from '../components/ui/Image';

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

const CountUp = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

/* ── HERO ── */
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile(768);

  const slides = React.useMemo(
    () => [
      {
        id: 1,
        title: "Safeguarding Depositors Trust",
        subtitle: "Mandated by the DPC Act 2016 to guarantee protection up to Rs 1M per eligible depositor.",
        imageDesktop: "/front.webp",
        imageMobile: "/m1.webp",
        accent: "text-dpc-teal"
      },
      {
        id: 2,
        title: "Trusted by Millions",
        subtitle: "Ensuring the stability and safety of the deposit sector across 33+ member banks.",
        imageDesktop: "/Gemini_Generated_Image_nk2bqfnk2bqfnk2b.png",
        imageMobile: "/m2.webp",
        accent: "text-dpc-clay"
      },
      {
        id: 3,
        title: "State Bank Oversight",
        subtitle: "Operating as a subsidiary of the State Bank of Pakistan with full regulatory compliance.",
        imageDesktop: "/Gemini_Generated_Image_40w3et40w3et40w3.png",
        imageMobile: "/m3.webp",
        accent: "text-emerald-300"
      }
    ],
    []
  );

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  const textVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Images Layer */}
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
                className="w-full h-full object-cover object-center md:object-center"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10 h-[60%] md:h-[50%]" />

      {/* Slide Text Content */}
      <div className="relative z-20 flex w-full flex-col justify-end text-center px-4 pb-16 sm:pb-12 md:pb-16 lg:pb-24 max-w-7xl mx-auto min-h-[80vh] md:min-h-screen">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentSlide}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            custom={1}
            className="w-full flex flex-col items-center"
          >
            <p className={`text-xs sm:text-sm md:text-base font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4 md:mb-6 drop-shadow-md ${slides[currentSlide].accent}`}>
              Deposit Protection Corporation
            </p>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-4 sm:mb-6 md:mb-8 leading-tight sm:leading-[1.1] drop-shadow-xl">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-white/90 sm:text-white/95 text-sm sm:text-base md:text-lg lg:text-2xl font-medium max-w-2xl lg:max-w-3xl mx-auto leading-relaxed sm:leading-relaxed drop-shadow-md sm:bg-black/30 sm:p-4 md:p-5 sm:rounded-xl md:rounded-2xl lg:rounded-3xl sm:backdrop-blur-sm">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Slide Navigation Buttons */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 rounded-full transition-all duration-300 ease-out ${
              currentSlide === idx 
                ? "w-8 sm:w-12 bg-dpc-teal" 
                : "w-2 sm:w-4 bg-white/30 hover:bg-white/50"
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
          <div className="flex animate-marquee whitespace-nowrap group-hover:pause items-center">
            {[...banks, ...banks].map((bank, i) => (
              <div
                key={i}
                className="mx-6 flex items-center gap-3 text-dpc-navy font-serif text-lg tracking-tight"
              >
                <Landmark size={12} className="text-dpc-teal" strokeWidth={2} />
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

/* ── IntroSection (MODIFIED) ───────────────────────────────────── */
const IntroSection = () => (
  <section className="py-24 sm:py-32 bg-white text-dpc-navy border-b border-dpc-navy/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* CHANGED: Shield icon replaced with Logo Image */}
            <div className="mb-8">
              <Image
                src="/dpc-logo.png" // REPLACE THIS WITH YOUR ACTUAL LOGO PATH
                alt="DPC Logo"
                width={200}
                height={60}
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* CHANGED: Heading to "About The Corporation" with stylish styling */}
           <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tight text-dpc-navy mb-6">
  About <span className="italic text-dpc-teal">Us</span>
</h2>

            <div className="h-[1px] w-full bg-dpc-navy/10 mb-6" />
            <p className="text-dpc-navy/60 font-medium tracking-wide uppercase text-xs">Overview</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7"
        >
          <div className="prose prose-lg prose-p:text-dpc-navy/70 prose-p:leading-relaxed max-w-none">
            <p className="text-xl sm:text-2xl text-dpc-navy font-serif leading-snug mb-8">
           Deposit Protection Corporation (DPC) is a wholly-owned subsidiary of the State Bank of Pakistan and established in wake of the DPC Act 2016. The corporation commenced its business with effect from June 01-2018.
 <br/></p>
            
Deposit Protection Corporation plays a key role in promoting financial stability by sustaining confidence in the banking system. The objective of DPC is to compensate the small and financially unsophisticated depositors to the extent of protected deposits in the unlikely event of a bank failure.

            <p>
Deposit Protection Corporation is governed by an independent and professional board of directors under the Chairmanship of Deputy Governor of State Bank of Pakistan, while its affairs are administered by the Managing Director. The Federal Government nominates the Board of Directors in consultation with the State Bank of Pakistan. </p>

            <p>
             All banks scheduled under subsection (2) of section 37 of the State Bank of Pakistan Act, 1956 (XXXIII of 1956), unless exempted or excluded by the Board, shall compulsorily be member institutions of the Corporation and liable to pay the prescribed premium. DPC collects premiums from member institutions as empowered by the DPC Act 2016 and managed the received funds separately for both Islamic and conventional premium.
               </p>

            <p>
           DPC steps forwards in the unlikely event of bank failure as notified by the State Bank of Pakistan and compensate its depositors up to the amount as prescribed within 30 days after the notification after adopting the approved procedure of reimbursement.

 </p>
          </div>
          <div className="mt-10">
            <a href="/about" className="inline-flex items-center gap-3 text-dpc-blue font-semibold text-sm tracking-wider uppercase group">
              Read the DPC Act 2016
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ── VisionMission ──────────────────────────────────────────── */
const VisionMission = () => (
  <section id="vision" className="py-24 sm:py-32 bg-dpc-clay">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-px bg-dpc-navy/10">
        {[
          {
            type: 'Mission',
            text: "To protect depositors' funds and maintain public trust in Pakistan's banking sector.",
          },
          {
            type: 'Vision',
            text: 'To become a credible institution providing effective deposit protection aligned with international standards.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-dpc-clay p-12 sm:p-16 lg:p-20 flex flex-col justify-center border border-transparent"
          >
            <span className="text-dpc-navy/50 text-sm font-bold tracking-[0.15em] uppercase mb-8 block">
              {item.type}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-dpc-navy leading-[1.3]">
              "{item.text}"
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ── LegacySection ──────────────────────────────────────────── */
const LegacySection = () => {
  return (
    <section className="py-24 sm:py-32 bg-white text-dpc-navy border-b border-dpc-navy/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-dpc-clay relative overflow-hidden">
              <Image
                src="/building.jpg"
                alt="Building"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-dpc-navy/10 pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-dpc-teal" />
              <span className="text-dpc-teal text-xs font-semibold tracking-[0.2em] uppercase">
                Historical Context
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif leading-[1.1] text-dpc-navy">
              A Legacy of <br /><span className="italic text-dpc-navy/60">Financial Resilience.</span>
            </h2>
            
            <div className="prose prose-lg prose-p:text-dpc-navy/70 prose-p:leading-relaxed">
              <p>
                The concept of deposit protection in Pakistan evolved through decades of economic reform. Recognizing the necessity of a dedicated entity to handle depositor security, the State Bank of Pakistan championed the DPC Act.
              </p>
              <p>
                Enacted in 2016, the legislation marked a paradigm shift in financial regulation, aligning Pakistan's banking sector with global best practices endorsed by international financial institutions.
              </p>
            </div>
            
            <div className="pt-6 border-t border-dpc-navy/10 flex items-center gap-6">
              <div className="text-5xl font-serif text-dpc-blue">2016</div>
              <div className="text-sm font-medium text-dpc-navy/60 uppercase tracking-widest leading-snug">
                Year of <br />Establishment
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── NumbersSection ─────────────────────────────────────────── */
const NumbersSection = () => {
  return (
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
              className="bg-dpc-navy p-8 sm:p-12 flex flex-col items-center text-center border border-transparent"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
                {stat.prefix}<CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-dpc-clay/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── DatesSection ───────────────────────────────────────────── */
const DatesSection = () => {
  const events = [
    { year: '2016', title: 'DPC Act Promulgated', desc: 'Legislation passed establishing the Corporation.' },
    { year: '2018', title: 'Operational Commencement', desc: 'DPC officially commenced operations.' },
    { year: '2021', title: 'Coverage Enhancement', desc: 'Limit raised from Rs. 250,000 to Rs. 500,000.' },
    { year: '2024', title: 'Current Limit Applied', desc: 'Limit enhanced from Rs. 500,000 to Rs. 1,000,000 per depositor.' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-dpc-navy mb-4">Key Milestones</h2>
          <div className="h-[1px] w-24 bg-dpc-navy" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border-l border-dpc-navy/10 pl-6 py-2 hover:border-dpc-blue transition-colors duration-300"
            >
              <div className="text-2xl font-serif text-dpc-navy/40 mb-4 group-hover:text-dpc-blue transition-colors">{event.year}</div>
              <h4 className="text-lg font-serif text-dpc-navy mb-2">{event.title}</h4>
              <p className="text-sm text-dpc-navy/60 leading-relaxed">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── NewUpdates ─────────────────────────────────────────────── */
const NewUpdates = () => {
  const updates = [
    { date: '2026', category: 'Circular Letter No. 2 of 2026', title: 'Member Institutions of Deposit Protection Corporation (DPC)', link: '#' },
    { date: '2026', category: 'Circular Letter No. 1 of 2026', title: 'Notification', link: '#' },
    { date: '2025', category: 'Circular No. 1 of 2025', title: 'Deposit Protection Mechanism for Digital Banks', link: '#' },
    { date: '2025', category: 'Circular Letter No. 03 of 2025', title: 'Member Institutions of Deposit Protection Corporation (DPC)', link: '#' },
    { date: '2025', category: 'Circular Letter No. 02 of 2025', title: 'Member Institutions of Deposit Protection Corporation (DPC)', link: '#' },
    { date: '2025', category: 'Circular Letter No. 01 of 2025', title: 'Member Institutions of Deposit Protection Corporation (DPC)', link: '#' },
    { date: '2024', category: 'Annual Report', title: 'Annual Report 2023-24', link: '#' },
  ];

  return (
    <section id="updates" className="py-24 sm:py-32 bg-dpc-clay">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-3xl sm:text-4xl font-serif text-dpc-navy mb-6">Latest <br />Updates</h2>
              <p className="text-dpc-navy/60 text-sm leading-relaxed mb-8">Official circulars, notifications, and regulatory updates from the Corporation.</p>
              <a href="/latestupdates" className="inline-flex items-center gap-2 border border-dpc-navy text-dpc-navy px-6 py-3 text-xs font-semibold tracking-wider uppercase hover:bg-dpc-navy hover:text-white transition-all">
                View Archive
              </a>
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

/* ── HowItWorks ─────────────────────────────────────────────── */
const HowItWorks = () => {
  const steps = [
    { num: '01', icon: <Wallet size={28} strokeWidth={1.5} />, title:     'Customer Deposits Money',        desc: 'A depositor places funds in a savings, current, fixed, or other eligible account at a member bank.' },
    { num: '02', icon: <CreditCard size={28} strokeWidth={1.5} />, title: 'Member Institution Premiums', desc: 'Member institutions pay premiums to DPC, helping build and maintain a dedicated protection fund to protect eligible depositors.' },
    { num: '03', icon: <Building2 size={28} strokeWidth={1.5} />, title:  'SBP Declares Bank Failure',    desc: 'The State Bank of Pakistan officially notifies DPC of a member institution\'s failure, triggering the reimbursement mandate.' },
    { num: '04', icon: <Shield size={28} strokeWidth={1.5} />, title:     'DPC Reimburses Depositors',         desc: 'DPC disburses up to Rs. 1M per eligible depositor within 30 days through designated agent banks.' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-dpc-navy text-dpc-clay">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-dpc-teal text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">The Process</span>
          <h2 className="text-3xl sm:text-5xl font-serif leading-[1.1]">How DPC <span className="italic text-dpc-clay/50">Works</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="relative p-8 lg:p-10 border border-white/10 group hover:border-dpc-teal/40 transition-colors duration-300"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-dpc-teal/30">
                  <ChevronRight size={20} />
                </div>
              )}
              <div className="text-dpc-teal mb-6 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
              <div className="text-dpc-clay/20 font-serif text-5xl absolute top-6 right-8 select-none">{step.num}</div>
              <h3 className="text-lg font-serif text-dpc-clay mb-3 leading-snug">{step.title}</h3>
              <p className="text-sm text-dpc-clay/50 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── WhyDPCMatters ──────────────────────────────────────────── */
const WhyDPCMatters = () => {
  const features = [
    { icon: <Globe size={22} strokeWidth={1.5} />, title: 'Financial Stability', desc: 'Helps prevent bank-run contagion by guaranteeing retail depositors, keeping the broader financial system stable.' },
    { icon: <Shield size={22} strokeWidth={1.5} />, title: 'Depositor Protection', desc: 'Guarantees up to Rs. 1M per depositor per bank, covering the vast majority of individual account holders.' },
    { icon: <Landmark size={22} strokeWidth={1.5} />, title: 'Trust in Banking', desc: 'Increases public confidence so depositors can save without fear of losing funds to institutional failure.' },
    { icon: <CheckCircle2 size={22} strokeWidth={1.5} />, title: 'Government-Backed System', desc: 'Operating under the State Bank of Pakistan, DPC carries full institutional authority and sovereign backing.' },
    { icon: <Building2 size={22} strokeWidth={1.5} />, title: 'Secure Banking Environment', desc: 'Encourages banks to maintain sound financial practices, contributing to a stable and secure banking environment.' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-dpc-navy/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden bg-dpc-clay">
              <Image src="/sbp-people.jpg" alt="Depositors protected by DPC" className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* teal accent bar */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-dpc-teal pointer-events-none" />
          </motion.div>

          {/* content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-10"
          >
            <div>
              <span className="text-dpc-teal text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">Purpose</span>
              <h2 className="text-3xl sm:text-5xl font-serif text-dpc-navy leading-[1.1] mb-4">
                Why DPC <span className="italic text-dpc-navy/50">Matters</span>
              </h2>
            </div>

            <div className="space-y-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-dpc-navy/10 flex items-center justify-center text-dpc-blue group-hover:bg-dpc-blue group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-dpc-navy mb-1">{f.title}</h4>
                    <p className="text-sm text-dpc-navy/60 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── WhatDPCProtects ────────────────────────────────────────── */
const WhatDPCProtects = () => {
  const accounts = [
    { icon: <Wallet size={26} strokeWidth={1.5} />, title: 'Savings Accounts', desc: 'All eligible savings deposits held at member banks.' },
    { icon: <Wallet size={26} strokeWidth={1.5} />, title: 'Current Accounts', desc: 'Demand deposit accounts for individuals and businesses.' },
    { icon: <FileText size={26} strokeWidth={1.5} />, title: 'Fixed Deposits', desc: 'Term deposit receipts maturing within the protected limit.' },
    { icon: <Globe size={26} strokeWidth={1.5} />, title: 'Roshan Digital Accounts', desc: 'Accounts held by overseas Pakistanis under the RDA scheme.' },
    { icon: <Laptop size={26} strokeWidth={1.5} />, title: 'Islamic Banking Deposits', desc: 'Sharia-compliant deposit products at Islamic windows and banks.' },
    { icon: <BarChart size={26} strokeWidth={1.5} />, title: 'Foreign Currency Accounts', desc: 'Eligible FCY deposits converted at prevailing exchange rates.' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-dpc-clay border-b border-dpc-navy/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-dpc-teal text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">Coverage</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-dpc-navy leading-[1.1]">
            What DPC <span className="italic text-dpc-navy/50">Protects</span>
          </h2>
          <p className="text-dpc-navy/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Eligible deposit types covered up to Rs. 1.0M per depositor per member institution.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((acc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-dpc-navy/10 group hover:border-dpc-blue/30 hover:shadow-sm transition-all duration-300"
            >
              <div className="text-dpc-blue mb-5 group-hover:scale-110 transition-transform duration-300">{acc.icon}</div>
              <h3 className="text-lg font-serif text-dpc-navy mb-2">{acc.title}</h3>
              <p className="text-sm text-dpc-navy/60 leading-relaxed">{acc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── ProductShowcase ────────────────────────────────────────── */
const ProductShowcase = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-dpc-navy/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-dpc-teal text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Institutional Framework</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-dpc-navy mb-6 max-w-3xl mx-auto">
          Comprehensive Regulatory Architecture
        </h2>
        <p className="text-dpc-navy/60 text-lg max-w-2xl mx-auto mb-16">
          A standardized, robust framework ensuring uniformity in protection across all scheduled banks.
        </p>
        
        {/* Added justify-items-center to keep the boxes centered */}
<div className="grid md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
  {[
    { title: 'Ex-Ante Funding', desc: 'Premiums collected systematically prior to any failure event to ensure immediate liquidity.', icon: <Coins size={32} /> },
    { title: 'Swift Settlement', desc: 'Statutory mandate to reimburse depositors within 30 days of a bank\'s notification of failure.', icon: <Clock size={32} /> },
  ].map((item, i) => (
    <motion.div 
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="p-8 border border-dpc-navy/10 flex flex-col items-center text-center hover:border-dpc-blue/30 transition-colors w-full max-w-sm"
    >
      <div className="text-dpc-blue mb-6">{item.icon}</div>
      <h3 className="text-xl font-serif text-dpc-navy mb-4">{item.title}</h3>
      <p className="text-sm text-dpc-navy/60 leading-relaxed">{item.desc}</p>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

/* ── DepositProtection ──────────────────────────────────────── */
const DepositProtection = () => {
  const steps = [
    { number: '01', title: 'Identification', desc: 'The SBP officially declares a member institution as failed or in liquidation, triggering DPC\'s mandate to act.' },
    { number: '02', title: 'Data Acquisition', desc: 'DPC assumes control of depositor records to identify all eligible accounts held at the failed institution.' },
    { number: '03', title: 'Consolidation', desc: 'Multiple accounts of a single depositor are aggregated to calculate their total protected exposure per bank.' },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-dpc-navy text-dpc-clay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="mb-10 sm:mb-16">
          <span className="text-dpc-teal text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">Standard Operating Procedure</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1]">
            Reimbursement <br /><span className="italic text-dpc-clay/50">Protocol</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Steps list */}
          <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left py-6 sm:py-8 flex items-start gap-5 sm:gap-8 group transition-all duration-300 focus:outline-none ${
                  active === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <span className={`font-serif text-xl sm:text-2xl flex-shrink-0 transition-colors duration-300 ${active === i ? 'text-dpc-teal' : 'text-dpc-clay/40'}`}>
                  {step.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-base sm:text-lg font-semibold uppercase tracking-wide">{step.title}</h4>
                    {active === i && (
                      <motion.div
                        layoutId="active-arrow"
                        className="w-5 h-5 flex-shrink-0 text-dpc-teal"
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    )}
                  </div>
                  <AnimatePresence>
                    {active === i && (
                      <motion.p
                        key="desc-mobile"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden overflow-hidden text-dpc-clay/60 text-sm leading-relaxed mt-3"
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="hidden lg:flex bg-[#150D2E] border border-white/5 items-center justify-center p-16 relative overflow-hidden min-h-[360px]">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-center relative z-10"
              >
                <span className="text-[7rem] font-serif text-dpc-clay/[0.06] block leading-none mb-6 select-none">
                  {steps[active].number}
                </span>
                <h3 className="text-2xl font-serif text-dpc-clay mb-4 uppercase tracking-wide">{steps[active].title}</h3>
                <p className="text-dpc-clay/50 text-base max-w-sm mx-auto leading-relaxed">{steps[active].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── ProtectionCategories ───────────────────────────────────── */
const ProtectionCategories = () => {
  const categories = [
    { title: 'Current Accounts', desc: 'Standard checking and transactional accounts.' },
    { title: 'Savings Accounts', desc: 'Standard retail and corporate savings deposits.' },
    { title: 'Fixed Term Deposits', desc: 'Term deposits regardless of maturity period.' },
    { title: 'Foreign Currency', desc: 'FCY accounts (compensated in PKR equivalent).' },
  ];

  return (
    <section id="protection" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-dpc-navy mb-4">Scope of Coverage</h2>
            <div className="h-[1px] w-24 bg-dpc-navy" />
          </div>
          <p className="text-dpc-navy/60 text-sm max-w-md">
            The protection scheme covers principal amounts and accrued interest across a wide spectrum of retail banking products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dpc-navy/10 border border-dpc-navy/10">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-8 sm:p-10 group hover:bg-dpc-clay transition-colors">
              <CheckCircle2 size={24} className="text-dpc-teal mb-6" strokeWidth={1.5} />
              <h4 className="text-lg font-serif text-dpc-navy mb-3">{cat.title}</h4>
              <p className="text-sm text-dpc-navy/60 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── FAQSection ─────────────────────────────────────────────── */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: 'What is the protected amount determined by DPC?', answer: 'Currently, the DPC provides protection for up to Rs. 1,000,000 (one million rupees) per depositor per bank. This limit is absolute and statutory.' },
    { question: 'Do I need to register for this protection?', answer: 'No. Coverage is automatic for all eligible deposits held at member banks. No application or premium payment from the depositor is required.' },
    { question: 'Are Islamic banking deposits covered?', answer: 'Yes. The DPC manages a separate Shariah-compliant deposit protection mechanism for Islamic banking institutions alongside the conventional scheme.' },
    { question: 'What happens if I have accounts in multiple banks?', answer: 'The limit of Rs. 1,000,000 applies per depositor, per bank. If you hold accounts in different banks, each bank\'s deposits are protected separately up to the limit.' },
    { question: 'Which deposits are excluded?', answer: 'Deposits of government entities, inter-bank deposits, and deposits of individuals holding significant influence (like bank directors) are excluded under the DPC Act.' },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-dpc-navy mb-4">Frequently Asked Questions</h2>
          <div className="h-[1px] w-24 bg-dpc-navy mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-dpc-navy/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
      </div>
    </section>
  );
};

/* ── ContactSection ─────────────────────────────────────────── */
const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-dpc-clay text-dpc-navy border-t border-dpc-navy/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-dpc-teal text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block">Corporate Communications</span>
            <h2 className="text-4xl sm:text-5xl font-serif leading-[1.1] mb-8">
              Direct <br /><span className="italic text-dpc-navy/50">Inquiries.</span>
            </h2>
            <p className="text-dpc-navy/60 mb-12 max-w-md">
              For official correspondence, media inquiries, or institutional questions regarding the deposit protection framework.
            </p>
            
            <div className="space-y-8 border-l border-dpc-navy/20 pl-6">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-dpc-teal uppercase mb-2">Headquarters</p>
                <p className="font-serif text-lg text-dpc-navy">2nd Floor, State Bank of Pakistan - Bolton Market Building, M. A. Jinnah Road, Karachi, Pakistan</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-dpc-teal uppercase mb-2">Direct Line</p>
                <p className="font-serif text-lg text-dpc-navy">+92 (21) 111-727-111</p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-dpc-teal uppercase mb-2">Email</p>
                <p className="font-serif text-lg text-dpc-navy">info@dpc.org.pk</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-dpc-navy/10 p-8 sm:p-12">
            <h3 className="font-serif text-2xl mb-8 text-dpc-navy">Send a Message</h3>
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                >
                  <CheckCircle2 size={48} className="text-dpc-teal mx-auto mb-6" strokeWidth={1} />
                  <h4 className="font-serif text-2xl mb-2">Inquiry Submitted</h4>
                  <p className="text-dpc-clay/60 text-sm">A representative will respond to your communication shortly.</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-8 text-xs font-semibold tracking-widest uppercase text-dpc-teal hover:text-white transition-colors">
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Full Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors placeholder:text-dpc-navy/30" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Institution / Affiliation</label>
                      <input type="text" className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors placeholder:text-dpc-navy/30" placeholder="Optional" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors placeholder:text-dpc-navy/30" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Message</label>
                    <textarea required rows={4} className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors resize-none placeholder:text-dpc-navy/30" placeholder="Enter your inquiry here..."></textarea>
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="bg-dpc-navy text-dpc-clay w-full py-4 text-xs font-bold tracking-widest uppercase hover:bg-dpc-teal hover:text-dpc-navy transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Home Component ──────────────────────────────────────────── */
function Home() {
  return (
    <div className="min-h-screen bg-dpc-clay font-sans text-dpc-navy selection:bg-dpc-teal selection:text-dpc-navy">
      <Hero />
      <BankMarquee />
      <IntroSection />
      <NumbersSection />
      <VisionMission />
      <HowItWorks />
      <WhyDPCMatters />
      <WhatDPCProtects />
      <ProductShowcase />
      <DepositProtection />
      <ProtectionCategories />
      <LegacySection />
      <DatesSection />
      <NewUpdates />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

export default Home;
