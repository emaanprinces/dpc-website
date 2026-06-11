
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryType, setInquiryType] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 flex items-center overflow-hidden border-b border-dpc-navy/10 h-[500px] md:h-[600px]">
        
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="building.jpg"
            alt="Contact us background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent h-full pointer-events-none" />
{/* Content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-8 md:pb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-dpc-teal" />
                {/* Changed text color to White for visibility */}
                <p className="text-dpc-orange text-xs font-semibold tracking-[0.35em] uppercase font-sans">
                  Corporate Communications
                </p>
              </div>
              {/* Changed text color to White for visibility */}
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">
                Contact
                <br />
                <span className="italic font-normal text-white/60">Us</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-white/90 max-w-xl leading-relaxed text-base md:text-lg font-sans"
            >
              Get in touch with the Deposit Protection Corporation for any inquiries or support.
            </motion.p>
          </div>
        </div>
      </section>

      {/* INFO & FORM SECTION */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Info Section */}
            <div>
              <h2 className="font-serif text-3xl text-dpc-navy mb-8">Direct Inquiries</h2>
              <p className="text-dpc-navy/60 mb-12 leading-relaxed">For official correspondence, media inquiries, or institutional questions regarding the deposit protection framework.</p>
              
              <div className="space-y-8 border-l border-dpc-navy/20 pl-6">
                {/* Address - Full Width */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-dpc-teal uppercase mb-2">Headquarters</p>
                  <p className="font-serif text-lg text-dpc-navy leading-snug">State Bank of Pakistan</p>
                  <p className="text-sm text-dpc-navy/60 leading-relaxed mt-1">2nd Floor, State Bank of Pakistan - Bolton Market Building, M. A. Jinnah Road. Karachi, Pakistan</p>
                </div>

                {/* Phone and Fax - Same Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-dpc-teal uppercase mb-2">Direct Line</p>
                    <a href="tel:+922132454269" className="font-serif text-lg text-dpc-navy hover:text-dpc-teal transition-colors">
                      +92 21 3245 4269
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-dpc-teal uppercase mb-2">Fax</p>
                    <p className="font-serif text-lg text-dpc-navy">+92 21 9921 7225</p>
                  </div>
                </div>

                {/* Email - Clickable Link */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-dpc-teal uppercase mb-2">Email</p>
                  <a href="mailto:info@dpc.org.pk" className="font-serif text-lg text-dpc-navy hover:text-dpc-teal transition-colors">
                    info@dpc.org.pk
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="border border-dpc-navy/10 p-8 sm:p-12">
              <h3 className="font-serif text-2xl mb-6 text-dpc-navy">Official Message</h3>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 text-center">
                    <CheckCircle2 size={48} className="text-dpc-teal mx-auto mb-6" strokeWidth={1} />
                    <h4 className="font-serif text-2xl mb-2">Inquiry Submitted</h4>
                    <p className="text-dpc-navy/60 text-sm">A representative will respond to your communication shortly.</p>
                    <button onClick={() => setIsSuccess(false)} className="mt-8 text-xs font-semibold tracking-widest uppercase text-dpc-teal hover:text-dpc-blue transition-colors">Submit Another</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-6">
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
                    {inquiryType === "reference" && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                        <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Reference / Bank Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors placeholder:text-dpc-navy/30" placeholder="e.g. Habib Bank Limited" />
                      </motion.div>
                    )}
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] text-dpc-navy/50 uppercase mb-2">Message</label>
                      <textarea required rows={4} className="w-full bg-transparent border-b border-dpc-navy/20 pb-2 text-sm text-dpc-navy focus:outline-none focus:border-dpc-teal transition-colors resize-none placeholder:text-dpc-navy/30" placeholder="Enter your inquiry here..." />
                    </div>
                    <button disabled={isSubmitting} type="submit" className="bg-dpc-navy text-dpc-clay w-full py-4 text-xs font-bold tracking-widest uppercase hover:bg-dpc-teal hover:text-dpc-navy transition-colors disabled:opacity-50">
                      {isSubmitting ? "Transmitting..." : "SUBMIT INQUIRY"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MAP SECTION */}
      <section className="py-20 px-6 md:px-12 bg-white border-t border-dpc-navy/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 border-l border-dpc-navy/20 pl-6">
            <p className="text-[10px] font-bold tracking-[0.2em] text-dpc-teal uppercase mb-2">Locate Us</p>
            <h2 className="font-serif text-3xl text-dpc-navy">Visit Our Headquarters</h2>
          </div>
          
          <div className="w-full h-[450px] bg-dpc-clay/5 border border-dpc-navy/10 overflow-hidden relative shadow-sm">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
              src="https://maps.google.com/maps?q=2nd+Floor,+State+Bank+of+Pakistan+-+Bolton+Market+Building,+M.+A.+Jinnah+Road,+Karachi,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              title="DPC Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
