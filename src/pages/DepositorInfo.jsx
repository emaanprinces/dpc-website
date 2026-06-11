import { motion } from "framer-motion";
import { Info } from "lucide-react";

export default function DepositorInfo() {
  return (
    <div className="bg-dpc-clay min-h-screen pt-16">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 border-b border-dpc-navy/10 bg-dpc-navy text-dpc-clay overflow-hidden">
        <div className="absolute inset-0">
          <img src="/building.jpg" alt="Depositor info background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          {["25%","50%","75%"].map(l => <div key={l} className="absolute top-0 bottom-0 w-[1px] bg-dpc-clay" style={{ left: l }} />)}
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-dpc-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">Deposit Protection Corporation</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-dpc-clay leading-tight">
              Information for<br /><span className="italic font-normal text-dpc-clay/60">Depositors</span>
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-12 bg-white/5 border border-white/10 p-8 md:p-10 max-w-3xl">
            <div className="flex items-start gap-4">
              <Info className="w-5 h-5 text-dpc-teal mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-dpc-teal text-xs font-bold tracking-[0.2em] uppercase mb-3">Membership</p>
                <p className="text-sm md:text-base text-dpc-clay/80 leading-relaxed">
                  Membership of the Deposit Protection Corporation is compulsory for all banks scheduled under sub-section (2) of section 37 of the State Bank of Pakistan Act, 1956.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guaranteed Amount */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-dpc-navy/10 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }}>
            <p className="text-dpc-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">Guaranteed Amount</p>
            <h2 className="font-serif text-3xl md:text-5xl text-dpc-navy leading-tight max-w-4xl">
              Up to <span className="italic text-dpc-blue">Rs. 1,000,000</span> per depositor per bank
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-base md:text-lg text-dpc-navy/70 max-w-3xl mt-8 leading-relaxed">
            Under the provisions of Section 7(1) of the Deposit Protection Corporation Act, 2016, an amount up to <strong className="text-dpc-navy font-semibold">Rs. 1,000,000 (Rupees One Million)</strong> per depositor per bank has been determined by the Corporation to be the guaranteed amount.
          </motion.p>
        </div>
      </section>

      {/* Reimbursement Notice */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="bg-white border border-dpc-navy/10 p-8 md:p-12">
            <p className="text-dpc-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">Reimbursement Procedure</p>
            <p className="text-base md:text-lg text-dpc-navy/80 leading-relaxed">
              If a member bank has been notified by State Bank of Pakistan as a failed institution under section 21(1) of the Deposit Protection Act, 2016, the guarantee amount shall become payable to the protected depositors. The Corporation shall commence the procedure for reimbursement of protected deposits as per procedure laid down under Section 21 of Deposit Protection Corporation Act, 2016.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}