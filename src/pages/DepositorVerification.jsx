import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, FileText } from "lucide-react";

export default function DepositorVerification() {
  const [form, setForm] = useState({ name: "", cnic: "", bank: "", accountNumber: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const banks = ["Allied Bank Limited","Askari Bank Limited","Bank Alfalah Limited","Bank AL Habib Limited","BankIslami Pakistan Limited","Dubai Islamic Bank Pakistan Limited","Faysal Bank Limited","First Women Bank Limited","Habib Bank Limited","Habib Metropolitan Bank Limited","JS Bank Limited","MCB Bank Limited","MCB Islamic Bank Limited","Meezan Bank Limited","National Bank of Pakistan","SAMBA Bank Limited","Sindh Bank Limited","Soneri Bank Limited","Standard Chartered Bank (Pakistan) Limited","The Bank of Khyber","The Bank of Punjab","United Bank Limited","Other"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-dpc-clay min-h-screen pt-16">
      {/* 
         UPDATED HERO SECTION: 
         - Added '-mt-16' (negative margin) to pull the section UP to cover the gap behind the navbar.
         - The inner 'pt-32' ensures the text stays safely below the navbar.
      */}
      <section className="relative -mt-16 pb-16 md:pb-20 px-6 md:px-12 border-b border-dpc-navy/10 bg-dpc-navy text-dpc-clay overflow-hidden">
        <div className="absolute inset-0">
          <img src="/building.jpg" alt="Depositor verification background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          {["25%","50%","75%"].map(l => <div key={l} className="absolute top-0 bottom-0 w-[1px] bg-dpc-clay" style={{ left: l }} />)}
        </div>
        
        {/* Content Container with added padding-top to position text correctly */}
        <div className="relative z-10 max-w-6xl mx-auto pt-32 md:pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-dpc-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">Claim Process</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dpc-clay leading-tight">
              Depositor<br /><span className="italic font-normal text-dpc-clay/60">Verification Form</span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 text-dpc-clay/70 max-w-2xl leading-relaxed">
            Submit your details to initiate the depositor verification process in the event of a member bank failure.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-white border border-dpc-navy/10 p-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-dpc-teal mx-auto mb-6" strokeWidth={1} />
                <h2 className="font-serif text-3xl text-dpc-navy mb-4">Form Submitted</h2>
                <p className="text-dpc-navy/60 mb-8">Your verification request has been received. A DPC representative will contact you within 5 business days.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", cnic: "", bank: "", accountNumber: "", email: "", phone: "" }); }} className="text-xs font-bold tracking-widest uppercase text-dpc-teal hover:text-dpc-blue transition-colors">
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-white border border-dpc-navy/10 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <FileText className="w-5 h-5 text-dpc-teal" strokeWidth={1.5} />
                  <h2 className="font-serif text-2xl text-dpc-navy">Verification Details</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Full Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors placeholder:text-dpc-navy/30" placeholder="As per CNIC" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">CNIC Number *</label>
                      <input required type="text" value={form.cnic} onChange={e => setForm({...form, cnic: e.target.value})} className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors placeholder:text-dpc-navy/30" placeholder="XXXXX-XXXXXXX-X" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Member Bank *</label>
                    <select required value={form.bank} onChange={e => setForm({...form, bank: e.target.value})} className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors">
                      <option value="">Select a bank</option>
                      {banks.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Account Number *</label>
                    <input required type="text" value={form.accountNumber} onChange={e => setForm({...form, accountNumber: e.target.value})} className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors placeholder:text-dpc-navy/30" placeholder="Your account number" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors placeholder:text-dpc-navy/30" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors placeholder:text-dpc-navy/30" placeholder="+92 XXX XXXXXXX" />
                    </div>
                  </div>
                  <p className="text-xs text-dpc-navy/40 leading-relaxed pt-2">This form is for verification purposes only. Information submitted will be treated confidentially in accordance with the DPC Act 2016.</p>
                  <button disabled={loading} type="submit" className="w-full bg-dpc-navy text-dpc-clay py-4 text-xs font-bold tracking-widest uppercase hover:bg-dpc-teal hover:text-dpc-navy transition-colors disabled:opacity-50">
                    {loading ? "Submitting..." : "Submit Verification Request"}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}