
import React from "react";
import { motion } from "framer-motion";
import { Shield, ShieldOff } from "lucide-react";

type Item = { text: string; tag: string; metric: string };

const protectedDeposits: Item[] = [
  { text: "All types of current and saving accounts", tag: "Retail", metric: "100%" },
  { text: "All types of branchless banking accounts", tag: "Digital", metric: "100%" },
  { text: "Fixed term deposits / accounts", tag: "Term", metric: "100%" },
  { text: "Call deposit receipts / Security deposit receipts", tag: "Instrument", metric: "100%" },
  {
    text: "Deposit balances kept as cash margins / cash collateral or under lien, payable to protected depositors after satisfaction of all dues payable by them to the bank",
    tag: "Collateral",
    metric: "Net",
  },
  {
    text: "Foreign currency accounts — paid as the Rupee equivalent of the protected amount at the SBP exchange rate on the day of notification under section 21(1) of the Act",
    tag: "FX",
    metric: "PKR Eq.",
  },
  {
    text: "Any profit accrued and unpaid (under the product's terms and conditions) on any of the above accounts and instruments",
    tag: "Profit",
    metric: "Accrued",
  },
  {
    text: "Any other type / category of accounts or deposits, as may be communicated by the Corporation from time to time",
    tag: "Extended",
    metric: "Notified",
  },
];

const notProtectedDeposits: Item[] = [
  { text: "Persons granted preferential interest or return in deviation from the terms a member institution applies to all depositors of similar category", tag: "Preferential", metric: "Excluded" },
  { text: "Members of the board of directors and senior management of a member institution, including its CEO and Key Executives", tag: "Insider", metric: "Excluded" },
  { text: "Partners of auditing firms responsible for certifying the member institution's financial statements", tag: "Auditor", metric: "Excluded" },
  { text: "Persons having acquired rights to a deposit after the issuance of SBP's notification under sub-section (1) of Section 21", tag: "Post-notice", metric: "Excluded" },
  { text: "Spouse, dependent lineal ascendants and descendants, and dependent siblings of the persons specified above", tag: "Related", metric: "Excluded" },
  { text: "Any member institution whose deposits are in its name and on its account", tag: "Inter-bank", metric: "Excluded" },
  { text: "Government or government institutions", tag: "Government", metric: "Excluded" },
  { text: "Any company as defined under the Companies Act, 2017", tag: "Company", metric: "Excluded" },
  { text: "Any other class of persons or institutions as specified by the Board from time to time", tag: "Board-spec.", metric: "Excluded" },
  { text: "Deposits arising out of or related to transactions constituting 'money laundering' under the Anti-Money Laundering Act, 2010 (VII of 2010), where the offender has been convicted", tag: "AML", metric: "Excluded" },
  { text: "Corporations", tag: "Corporate", metric: "Excluded" },
  { text: "Modarbas", tag: "Modarba", metric: "Excluded" },
  { text: "Mutual Funds", tag: "Fund", metric: "Excluded" },
  { text: "Branches / permanent establishments of foreign entities", tag: "Foreign", metric: "Excluded" },
  { text: "Diplomatic Missions and international organizations / entities (e.g. United Nations, World Bank, IFC, ADB)", tag: "Diplomatic", metric: "Excluded" },
  { text: "Autonomous bodies", tag: "Autonomous", metric: "Excluded" },
];

function IndexDonut({ i, total, muted = false }: { i: number; total: number; muted?: boolean }) {
  const pct = ((i + 1) / total) * 100;
  const r = 22;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  const strokeColor = muted ? "#0f172a" : "#0d9488";
  
  return (
    <div className="relative w-12 h-12 flex-shrink-0">
      <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
        <circle cx="28" cy="28" r={r} fill="none" stroke="#0f172a" strokeOpacity="0.1" strokeWidth="3" />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={muted ? 0.35 : 0.85}
          strokeWidth="3"
          strokeDasharray={`${dash} ${c}`}
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`absolute inset-0 flex items-center justify-center font-serif text-sm font-semibold ${
          muted ? "text-slate-500" : "text-slate-900"
        }`}
      >
        {String.fromCharCode(65 + (i % 26))}
      </span>
    </div>
  );
}

function MiniBars({ seed, muted = false }: { seed: number; muted?: boolean }) {
  const bars = Array.from({ length: 5 }, (_, k) => {
    const h = 30 + ((seed * 7 + k * 13) % 60);
    return h;
  });
  return (
    <div className="flex items-end gap-0.5 h-6">
      {bars.map((h, k) => (
        <span
          key={k}
          className={muted ? "w-0.5 bg-slate-200" : "w-0.5"}
          style={{ height: `${h}%`, backgroundColor: muted ? undefined : "#0d9488" }}
        />
      ))}
    </div>
  );
}

export default function ProtectedDeposits() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* Hero - Shades Removed */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden flex items-center justify-center bg-white">
        {/* Background Layer - Full Opacity, No Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/building.jpg"
           alt="Financial Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content - Adjusted colors for bright background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="mb-6 inline-block"
          >
            {/* Solid white background for icon to pop against photo */}
            <div className="p-4 bg-white rounded-full border border-slate-100 shadow-lg backdrop-blur-sm">
                <Shield className="w-12 h-12 text-teal-600 mx-auto" strokeWidth={1.5} />
            </div>
          </motion.div>
          
          {/* Dark text for contrast */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-slate-900 mb-6 tracking-tight leading-tight">
            Deposit Protection 
          </h1>
          
          {/* Darker subtext and border */}
          <p className="text-slate-700 text-sm md:text-lg tracking-widest uppercase font-semibold border-t border-slate-400 pt-6 inline-block bg-white/50 backdrop-blur-sm px-4 rounded-b-lg">
            Security . Stability . Trust
          </p>
        </motion.div>
      </section>

      {/* Protected */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between flex-wrap gap-4 mb-12"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100">
                <Shield className="w-6 h-6 text-teal-600" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-teal-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                  Covered
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
                  Protected Deposits
                </h2>
              </div>
            </div>
            <p className="text-sm text-slate-500 max-w-xs text-right">
              The following types of deposits held with a member bank are eligible
              for protection under the scheme.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-slate-100 border border-slate-200">
            {protectedDeposits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group bg-white p-6 flex gap-4 hover:bg-slate-50 transition-colors"
              >
                <IndexDonut i={i} total={protectedDeposits.length} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] tracking-widest uppercase text-teal-600 font-bold">
                      {item.tag}
                    </span>
                    <MiniBars seed={i + 3} />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.text}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                    <span className="text-[10px] tracking-widest uppercase text-slate-400">
                      Coverage
                    </span>
                    <span className="font-serif text-base text-slate-900 font-semibold">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Protected */}
      <section className="py-16 md:py-24 px-4 md:px-12 border-b border-slate-200 bg-stone-50 text-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between flex-wrap gap-4 mb-12"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100">
                <ShieldOff className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-amber-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                  Not Covered
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
                  Excluded Deposits
                </h2>
              </div>
            </div>
            <p className="text-sm text-slate-500 max-w-xs text-right">
              The Corporation's guarantee does not extend to the categories of
              depositors and deposits listed below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {notProtectedDeposits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                className="bg-white border border-amber-200 p-6 flex gap-4 hover:shadow-lg transition-all"
              >
                <div className="relative w-12 h-12 flex-shrink-0">
                  <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                    <circle cx="28" cy="28" r="22" fill="none" stroke="#e2e8f0" strokeOpacity="0.5" strokeWidth="3" />
                    <circle
                      cx="28"
                      cy="28"
                      r="22"
                      fill="none"
                      stroke="#d97706"
                      strokeOpacity="0.8"
                      strokeWidth="3"
                      strokeDasharray={`${(((i + 1) / notProtectedDeposits.length) * 100 / 100) * (2 * Math.PI * 22)} ${2 * Math.PI * 22}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-serif text-sm font-semibold text-slate-800">
                    {String.fromCharCode(65 + (i % 26))}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] tracking-widest uppercase text-amber-600 font-bold">
                      {item.tag}
                    </span>
                    <div className="flex items-end gap-0.5 h-6">
                      {Array.from({ length: 5 }, (_, k) => {
                        const h = 30 + (((i + 1) * 7 + k * 13) % 60);
                        return (
                          <span key={k} className="w-0.5 bg-amber-500/50" style={{ height: `${h}%` }} />
                        );
                      })}
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.text}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                    <span className="text-[10px] tracking-widest uppercase text-slate-400">
                      Status
                    </span>
                    <span className="font-serif text-base text-amber-600 font-semibold">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
