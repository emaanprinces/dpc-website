import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ShieldCheck, Building2, Landmark, HelpCircle, Info, ExternalLink } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "1. What is Deposit Protection?",
    answer: "Deposit protection is a mechanism to provide security to the depositors of banks in the event of a bank's failure. It ensures that the depositors receive a certain amount of their deposits within a specified period of time, guaranteed by law."
  },
  {
    question: "2. What is Deposit Protection Corporation (DPC) and what is its role?",
    answer: "Deposit Protection Corporation (DPC) is a wholly owned subsidiary of State Bank of Pakistan (SBP), established under the Deposit Protection Corporation Act, 2016. Its primary role is to manage the deposit protection scheme in Pakistan, collect premiums from member banks, and reimburse protected depositors in case a member institution is declared failed by the State Bank of Pakistan."
  },
  {
    question: "3. What is the protected amount determined by DPC for the protection of eligible depositors?",
    answer: "The current protected amount determined by DPC is PKR 1,000,000 (one million) per depositor per bank. This amount is subject to updates by DPC from time to time."
  },
  {
    question: "4. What is the benefit of Deposit Protection?",
    answer: "Deposit protection provides peace of mind and financial security to small depositors. It maintains public confidence in the banking system and prevents panic withdrawals by ensuring that depositors' money (up to the protected limit) is safe even if their bank fails."
  },
  {
    question: "5. How do I know if my bank is a member bank of DPC or Not?",
    answer: "All scheduled banks operating in Pakistan, including commercial banks, specialized banks, and foreign banks, are mandatory member institutions of DPC. You can check the DPC website or ask your bank directly for confirmation."
  },
  {
    question: "6. How do I know if my deposit is eligible for deposit protection or not?",
    answer: "Most types of deposits including savings, current, and fixed deposits are eligible. However, certain deposits like those belonging to government entities, banks, DPC directors, or those involved in money laundering are excluded. Refer to the DPC Act for the complete exclusion list."
  },
  {
    question: "7. I am an eligible depositor, how do I know if my account is also eligible for deposit protection?",
    answer: "Individual accounts, joint accounts, and accounts of sole proprietors are generally eligible for protection. If you are an individual depositor in a member bank, your eligible accounts are automatically covered under the scheme."
  },
  {
    question: "8. Does DPC provide protection to my deposits held at an overseas branch of a Pakistani bank?",
    answer: "No. DPC protection only applies to deposits held in domestic branches of Pakistani member banks within the territory of Pakistan."
  },
  {
    question: "9. I am a foreign national temporarily living in Pakistan. Does my account maintained in a domestic branch of Pakistani bank is eligible for deposit protection or Not?",
    answer: "Yes, as long as the account is maintained in an eligible currency in a domestic branch of a member institution in Pakistan, it is covered regardless of the nationality of the depositor."
  },
  {
    question: "10. Do I need to apply for deposit protection?",
    answer: "No. You do not need to apply or register for deposit protection. It is provided automatically by law to all eligible depositors of member institutions."
  },
  {
    question: "11. I have a joint account with my wife in a bank. Does each of us enjoy separate deposit protection by DPC in case of bank failure?",
    answer: "In the case of joint accounts, the protection is provided to each depositor based on their share. If no share is specified, it is divided equally. Each individual depositor is entitled to a maximum protection of PKR 1,000,000 across all their accounts in that bank."
  },
  {
    question: "12. Can I claim an additional protection from DPC over and above the maximum protected amount of PKR 1,000,000?",
    answer: "No. The DPC only guarantees reimbursement up to the maximum protected limit of PKR 1,000,000 per depositor per bank."
  },
  {
    question: "13. What happens to unprotected portion of my deposits?",
    answer: "For amounts exceeding the PKR 1,000,000 limit, depositors can still file claims with the liquidator of the failed bank. These claims will be settled from the proceeds of the bank's assets during the liquidation process as per the priority of payments specified in the law."
  },
  {
    question: "14. Does DPC provide separate coverage for conventional & Islamic deposits of a single depositor?",
    answer: "No. All deposits of a single depositor (whether conventional or Islamic) within the same bank are aggregated, and the total protection is capped at the maximum limit of PKR 1,000,000."
  },
  {
    question: "15. Whether DPC provides separate protection against multiple accounts of an eligible depositor maintained with different banks?",
    answer: "Yes. The protection limit applies per depositor per bank. If you have accounts in three different member banks, you are protected up to PKR 1,000,000 in each of those banks independently."
  },
  {
    question: "16. In which currency the protected amount shall be reimbursed to eligible depositors?",
    answer: "The protected amount will be reimbursed in Pakistani Rupees (PKR), regardless of the original currency of the deposit."
  },
  {
    question: "17. Can a bank recover the cost of deposit protection from its depositors?",
    answer: "No. Member institutions are prohibited from recovering the cost of deposit protection premiums from their depositors. The premium is an expense borne by the banks."
  },
  {
    question: "18. If my bank fails, would DPC pay any interest on my protected deposits at the time of reimbursement?",
    answer: "No. DPC only reimburses the principal amount (plus any accrued interest/profit up to the date of bank failure) within the overall limit of PKR 1,000,000. No further interest is paid by DPC after the bank's failure."
  },
  {
    question: "19. I have advised my bank to issue a pay order/ bankers cheque from my account. In addition, I have received a pay order from my insurance company that is forwarded to the bank for credit in my account. What happens to items in transit that are not cleared/ settled on the date of bank failure?",
    answer: "Items in transit are treated as deposits if they have been debited from the sender's account or credited to the receiver's account before the time of failure. These will be included in the aggregate deposit amount for protection assessment."
  },
  {
    question: "20. I have two accounts in the same bank, one as an individual and other as a Sole Proprietor. Does DPC provide separate protection to both accounts at the time of bank failure?",
    answer: "No. For the purpose of deposit protection, a Sole Proprietorship is not a separate legal entity from the individual. Therefore, both accounts will be aggregated and protected up to the single limit of PKR 1,000,000."
  },
  {
    question: "21. How DPC would assess the protected amount for different categories of eligible depositors?",
    answer: "DPC assesses the protected amount by aggregating all deposits associated with a single CNIC or unique identification number within a specific bank. Joint accounts are apportioned as per law before aggregation."
  },
  {
    question: "22. How would I know if my bank (DPC member institution) has failed?",
    answer: "The State Bank of Pakistan (SBP) will issue a public notification if a bank is declared failed. This will be widely publicized through newspapers, media, and the websites of SBP and DPC."
  },
  {
    question: "23. How would DPC validate my total deposits held with a failed member institution (bank)?",
    answer: "DPC will validate deposits based on the official records and data of the failed bank as of the date it was declared failed. It is important to keep your bank records (like CNIC and contact info) updated."
  },
  {
    question: "24. If my bank (DPC member institution) fails, when will I receive the coverage amount guaranteed against my deposits from DPC?",
    answer: "DPC aims to start the reimbursement process as quickly as possible after the public notification of the bank's failure. The specific timeline and procedure will be communicated by DPC through public channels at that time."
  },
  {
    question: "25. I have deposits in two member institutions (banks) of DPC. What happens to my deposits if they merged?",
    answer: "If two banks merge, they become a single member institution. After the merger, your total deposits in the new entity will be protected up to the single limit of PKR 1,000,000."
  },
  {
    question: "26. Can legal heirs of a deceased depositor of a failed bank claim the guaranteed amount from DPC?",
    answer: "Yes. Legal heirs can claim the protected amount by following the standard legal procedure for inheritance (e.g., providing a Succession Certificate) as per Pakistani law."
  },
  {
    question: "27. Where should I contact for further information on deposit protection in Pakistan?",
    answer: "For more information, you can visit the official DPC website (www.dpc.org.pk), contact the State Bank of Pakistan, or reach out to the customer service department of your bank."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-100 selection:text-blue-900" id="faq-page">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4"
          >
            <ShieldCheck className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider px-2">Official Policy</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Guidelines for Depositors regarding the Deposit Protection Corporation (DPC) of Pakistan.
          </motion.p>
        </div>

        {/* Disclaimer Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border-l-4 border-amber-400 p-6 rounded-r-xl shadow-sm mb-12 flex gap-4 items-start"
        >
          <div className="p-2 bg-amber-50 rounded-lg shrink-0">
            <Info className="w-5 h-5 text-amber-600" />
          </div>
          <div className="text-sm text-slate-700 italic">
            <span className="font-bold text-slate-900 not-italic uppercase text-[10px] tracking-widest block mb-1">Disclaimer</span>
            These FAQs are being issued for information and general understanding only and shall not constitute any legal obligation on the part of Deposit Protection Corporation (DPC). These FAQs are subject to updates from time to time.
          </div>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              key={index}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                ? 'border-blue-200 bg-white shadow-md' 
                : 'border-slate-200 bg-white/50 hover:bg-white hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors"
                id={`faq-btn-${index}`}
              >
                <span className={`font-medium transition-colors duration-300 ${
                  openIndex === index ? 'text-blue-700' : 'text-slate-800'
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 p-1 rounded-full transition-all duration-300 ${
                  openIndex === index ? 'bg-blue-50 rotate-180' : 'bg-slate-50'
                }`}>
                  <ChevronDown className={`w-5 h-5 transition-colors ${
                    openIndex === index ? 'text-blue-600' : 'text-slate-400'
                  }`} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer Info Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
              <Landmark className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">State Bank of Pakistan</h3>
              <p className="text-sm text-slate-500 mb-3">DPC is a subsidiary of the SBP, managing Pakistan's deposit protection scheme.</p>
              <a href="#" className="text-xs text-blue-600 font-bold uppercase tracking-wider flex items-center hover:text-blue-700 transition-colors">
                Learn More <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
              <Building2 className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Member Institutions</h3>
              <p className="text-sm text-slate-500 mb-3">All scheduled banks operating in Pakistan are mandatory members of DPC.</p>
              <a href="#" className="text-xs text-blue-600 font-bold uppercase tracking-wider flex items-center hover:text-blue-700 transition-colors">
                View Banks <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Strip */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <HelpCircle className="w-32 h-32" />
          </div>
          <h2 className="text-2xl font-bold mb-4 relative z-10">Need more information?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">For further queries, please reach out to the customer service department of your bank or visit the official DPC website.</p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors relative z-10">
            Contact DPC Office
          </button>
        </div>

        <div className="mt-12 text-center text-slate-400 text-xs uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Deposit Protection Corporation Pakistan
        </div>
      </div>
    </div>
  );
}
