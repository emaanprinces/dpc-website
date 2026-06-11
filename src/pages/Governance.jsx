
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const directors = [
  {
    name: "Mr. Mohammad Aftab Manzoor",
    title: "Director",
    image: "/ChatGPT Image May 30, 2026, 03_13_36 PM.png",
  },
  {
    name: "Mr. Imran Maqbool",
    title: "Director",
    image: "/ChatGPT Image May 30, 2026, 03_13_31 PM.png",
  },
  {
    name: "Ms. Amna Shabbir",
    title: "Director (Nominee of the Ministry of Finance)",
    image: "/girls.png",
  },
];

const management = [
  {
    name: "Mr. Mansoor Zaidi",
    title: "Head of Policy & Regulations",
    image: "/ChatGPT Image May 30, 2026, 03_25_52 PM.png",
  },
  {
    name: "Mr. Khurram Iftikhar",
    title: "Company Secretary",
    image: "", // Picture removed
  },
  {
    name: "Mr. Sohail Dilawar",
    title: "Head of Operations",
    image: "/ChatGPT Image May 30, 2026, 03_29_27 PM.png",
  },
];

export default function Governance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      {/* ── HERO HEADER ── */}
      <section className="relative w-full pt-24 pb-12 md:pt-40 md:pb-20 flex items-center overflow-hidden border-b border-slate-200 bg-white">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/building.jpg" alt="Governance background" className="w-full h-full object-cover opacity-10" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
        
        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-slate-100 blur-[120px]" />
          <div className="absolute bottom-0 left-[-5%] w-[35vw] h-[35vw] rounded-full bg-slate-50 blur-[90px]" />
        </div>
        
        {/* Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          {[20, 40, 60, 80].map((p) => (
            <div key={p} className="absolute top-0 bottom-0 w-px bg-slate-900" style={{ left: `${p}%` }} />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <p className="text-slate-600 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase flex items-center justify-center lg:justify-start gap-3">
              <span className="w-6 h-px bg-slate-900 inline-block" />
              Chairman of the Board
            </p>
            
            <h1 className="font-serif text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[5.5rem] xl:text-[6rem] leading-[0.9] md:leading-[0.88] tracking-tight text-slate-900">
              Mr. Saleem
              <br />
              <span className="italic font-normal text-slate-400">Ullah</span>
            </h1>

            <div className="space-y-4 flex flex-col items-center lg:items-start">
              <p className="text-lg md:text-xl text-slate-500 italic font-serif whitespace-nowrap">
                Deputy Governor, State Bank of Pakistan
              </p>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light max-w-lg">
                Directing corporate strategy and regulatory compliance with over three decades of financial oversight experience at the national level. Ensuring the safety and stability of the deposit sector.
              </p>

              <button
                onClick={() => navigate("/chairman-profile")}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 border border-slate-900/20 text-[10px] uppercase tracking-widest font-bold hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                <User className="w-3 h-3" />
                Chairman Profile
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Chairman Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-[2rem] bg-slate-100 blur-3xl -z-10" />
             
            {/* CHAIRMAN: Full format of div (w-full h-full object-cover) */}
            <div className="w-64 sm:w-72 md:w-96 lg:w-[450px] aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative z-10 bg-slate-100">
              <img
                src="/chariman.png"
                alt="Mr. Saleem Ullah"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-20 space-y-28">

        {/* ── BOARD DIRECTORS ── */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 whitespace-nowrap">
              Board Directors
            </p>
            <div className="h-px w-full bg-slate-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group border border-slate-200 hover:border-slate-400 transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-[4/5] bg-slate-50 overflow-hidden">
                  {d.image ? (
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-slate-300" />
                    </div>
                  )}
                </div>
                <div className="p-6 text-center md:text-left">
                  <p className="font-serif text-2xl leading-snug mb-2 text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                    {d.name}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-slate-500 font-bold">
                    {d.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── EXECUTIVE MANAGEMENT ── */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400 whitespace-nowrap">
              Executive Management
            </p>
            <div className="h-px w-full bg-slate-200" />
          </div>

          {/* Managing Director */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-10 items-center bg-slate-50 p-8 border border-slate-200 mb-12 text-center md:text-left"
          >
            {/* MANAGING DIRECTOR IMAGE: Set to full format of the div (w-full h-full object-cover) */}
            <div className="w-56 md:w-64 aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white shadow-sm flex-shrink-0 bg-white relative">
              {("/image(11).png") ? (
                <img
                  src="/image(11).png"
                  alt="Syed Shahzad Safdar Zaidi"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-12 h-12 text-slate-300" />
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-900 font-bold mb-2">Managing Director</p>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight text-slate-900">Syed Shahzad Safdar Zaidi</h3>
              </div>
              <p className="text-slate-600 italic leading-relaxed font-serif text-sm">
                Directing the daily operational framework and long-term strategic vision of the corporation, ensuring seamless execution of policy mandates and depositor security.
              </p>
            </div>
          </motion.div>

          {/* Management — Bigger Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {management.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-slate-200 hover:border-slate-400 transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-[4/5] bg-slate-50 overflow-hidden">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-slate-300" />
                    </div>
                  )}
                </div>
                <div className="p-5 text-center md:text-left">
                  <p className="font-serif text-xl leading-snug mb-1 text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                    {m.name}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.12em] text-slate-500 font-bold leading-relaxed">
                    {m.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
