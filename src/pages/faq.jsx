import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1. What is Deposit Protection?",
    answer: "Deposit Protection is a system established to protect the deposits of eligible depositors up to a specified limit in the event of a bank being declared as a failed bank by State Bank of Pakistan (SBP)."
  },
  {
    question: "2. What is Deposit Protection Corporation (DPC) and what is its role?",
    answer: "Deposit Protection Corporation (DPC) is a subsidiary of State Bank of Pakistan (SBP) established under the Deposit Protection Corporation Act, 2016. The role of the Corporation is to provide a robust deposit protection mechanism to ensure payment of protected amount to the eligible depositors of a DPC member bank, in the event of it being declared as a failed bank by State Bank of Pakistan (SBP)."
  },
  {
    question: "3. What is the protected amount determined by DPC for the protection of eligible depositors?",
    answer: "Presently, a protected amount of up to PKR 1,000,000/- per depositor per bank has been determined by DPC for the protection of eligible depositors."
  },
  {
    question: "4. What is the benefit of Deposit Protection?",
    answer: "<p>Deposit Protection will provide prompt access to the guaranteed amount i.e. up to PKR 1,000,000/- to the eligible depositors of a bank declared as failed by State Bank of Pakistan.</p><p>Updated Web link to access the list of institute is required. Moreover, the list of member banks provided under this question needs to be updated.</p><p>Presently all scheduled banks operating in Pakistan are members of DPC. Following is the list of banks that are members of DPC. This list is also available at DPC's website: <a href=\"https://dpc.org.pk/Circulars/2024/UpdatedList-DPCMember%20Institutions.pdf\" target=\"_blank\">Click here to view the PDF</a></p><ol><li>SME Bank Limited</li><li>The Punjab Provincial Cooperative Bank Limited</li><li>Zarai Taraqiati Bank Limited</li><li>First Women Bank Limited</li><li>National Bank of Pakistan</li><li>Sindh Bank Limited</li><li>The Bank of Khyber</li><li>The Bank of Punjab</li><li>Allied Bank Limited</li><li>Askari Bank Limited</li><li>Bank Alfalah Limited</li><li>Bank AL Habib Limited</li><li>Faysal Bank Limited</li><li>Habib Bank Limited</li><li>Habib Metropolitan Bank Limited</li><li>JS Bank Limited</li><li>MCB Bank Limited</li><li>SAMBA Bank Limited</li><li>Silkbank Limited</li><li>Soneri Bank Limited</li><li>Standard Chartered Bank (Pakistan) Limited</li><li>Summit Bank Limited</li><li>United Bank Limited</li><li>Albaraka Bank (Pakistan) Limited</li><li>Bank Islami Pakistan Limited</li><li>Dubai Islamic Bank Pakistan Limited</li><li>Meezan Bank Limited</li><li>MCB Islamic Bank Limited</li><li>Citibank N.A.- Pakistan Operations</li><li>Deutsche Bank AG- Pakistan Operations</li><li>Industrial and Commercial Bank of China Limited- Pakistan Branches</li><li>Bank of China Limited- Pakistan Operations</li></ol>"
  },
  {
    question: "5. How do I know if my bank is a member bank of DPC or Not?",
    answer: "<p>Presently all scheduled banks operating in Pakistan are members of DPC. This list is also available at DPC's website: <a href=\"http://www.dpc.org.pk/Circulars/2020/CL1-Annex-A.pdf\" target=\"_blank\">Click here to view the PDF</a></p><p class=\"list-header\">Specialized Banks</p><ol start=\"1\"><li>SME Bank Limited</li><li>The Punjab Provincial Cooperative Bank Limited</li><li>Zarai Taraqiati Bank Limited</li></ol><p class=\"list-header\">Commercial Banks</p><ol start=\"4\"><li>First Women Bank Limited</li><li>National Bank of Pakistan</li><li>Sindh Bank Limited</li><li>The Bank of Khyber</li><li>The Bank of Punjab</li><li>Allied Bank Limited</li><li>Askari Bank Limited</li><li>Bank Alfalah Limited</li><li>Bank AL Habib Limited</li><li>Faysal Bank Limited</li><li>Habib Bank Limited</li><li>Habib Metropolitan Bank Limited</li><li>JS Bank Limited</li><li>MCB Bank Limited</li><li>SAMBA Bank Limited</li><li>Silkbank Limited</li><li>Soneri Bank Limited</li><li>Standard Chartered Bank (Pakistan) Limited</li><li>Bank Makramah Limited</li><li>United Bank Limited</li><li>Albaraka Bank (Pakistan) Limited</li><li>BankIslami Pakistan Limited</li><li>Dubai Islamic Bank Pakistan Limited</li><li>Meezan Bank Limited</li><li>MCB Islamic Bank Limited</li><li>Citibank N.A.- Pakistan Operations</li><li>Deutsche Bank AG- Pakistan Operations</li><li>Industrial and Commercial Bank of China Limited- Pakistan Branches</li><li>Bank of China Limited- Pakistan Operations</li></ol>"
  },
  {
    question: "6. How do I know if my deposit is eligible for deposit protection or not?",
    answer: "<p>Your deposit is eligible for protection, if it does not belong to any of the following categories:</p><ol><li>Depositors / deposits mentioned in the list below:<ul class=\"list-roman\"><li>Government or Government Institutions.</li><li>Member institutions of DPC.</li><li>Companies as defined under Companies Ordinance, 1984/ Companies Act 2017</li><li>Corporations, Modarbas, Mutual Funds</li><li>Branch(es)/ Permanent establishment(s) of foreign entities</li><li>Diplomatic Missions and international organizations/ entities like United Nations, World Bank, IFC, ADB etc.</li><li>Autonomous Bodies</li><li>Deposits on which preferential interest or return has been granted</li><li>Members of Board of Directors and senior management of a DPC member bank</li><li>Partners of auditing firm responsible to certify DPC member bank financial statements</li><li>Persons acquired rights to a deposit after State Bank of Pakistan's notification of Bank failure under DPC Act 2016</li><li>Spouses, dependent lineal ascendants and descendants and dependent brothers and sisters of the persons specified at sr. no ix, x & xi above.</li><li>Deposits arising out of or related to transactions or actions constituting 'money laundering within the meaning of the Anti-Money Laundering Act, 2010, if the offender has been convicted of such offence</li></ul></li><li>Amounts reported under unclaimed deposits by a member bank in compliance of section 31 of Banking Companies Ordinance 1962.</li><li>Deposits maintained at branches and subsidiaries of Pakistani banks operating outside Pakistan and branches located in Export Processing Zones (EPZ).</li></ol>"
  },
  {
    question: "7. I am an eligible depositor, how do I know if my account is also eligible for deposit protection?",
    answer: "<p>Following type of accounts of eligible depositors are protected by DPC:</p><ol><li>All current and saving accounts including Roshan Digital Accounts (RDA).</li><li>All type of branchless banking accounts</li><li>Fixed term deposits</li><li>Call Deposit Receipts (CDR)/ Security Deposit Receipts (SDR)</li><li>Deposit balance kept as cash margins/ collateral or under lien, that are payable to depositors after satisfaction of all dues that are payable by them to the bank.</li><li>Foreign currency deposits. However, equivalent PKR on the exchange rate declared by SBP on notification date shall be reimbursed.</li><li>Profit on any of the above deposits accrued till cut-off date.</li><li>Any other type of deposits communicated by DPC from time to time.</li></ol>"
  },
  {
    question: "8. Does DPC provide protection to my deposits held at an overseas branch of a Pakistani bank?",
    answer: "<p>DPC does not provide protection to depositors of overseas branches of Pakistani banks and branches located in Export Processing Zones (EPZ) across Pakistan.</p>"
  },
  {
    question: "9. I am a foreign national temporarily living in Pakistan. Does my account maintained in a domestic branch of Pakistani bank is eligible for deposit protection or Not?",
    answer: "<p>Yes, Nationality/ residential status of a depositor does not affect the eligibility of a depositor for Deposit Protection. However, the bank should be a member institution of DPC. This can be verified from the list of banks available in FAQ#5. The list of member banks is also available on the DPC website at <a href=\"https://dpc.org.pk/Circulars/2024/UpdatedList-DPCMember Institutions.pdf\" target=\"_blank\">https://dpc.org.pk/Circulars/2024/UpdatedList-DPCMember Institutions.pdf</a></p>"
  },
  {
    question: "10. Do I need to apply for deposit protection?",
    answer: "<p>No, all eligible depositors of member banks of DPC shall automatically stand qualified for deposit protection.</p>"
  },
  {
    question: "11. I have a joint account with my wife in a bank. Does each of us enjoy separate deposit protection by DPC in case of bank failure?",
    answer: "<p>Yes, each eligible depositor of a joint account enjoys separate protection by DPC. However, any pre-defined share or proportionate share of each depositor in a joint account shall add up to his/ her other deposit balances in the same bank for the purpose of calculating the protected amount for reimbursement to that depositor.</p>"
  },
  {
    question: "12. Can I claim an additional protection from DPC over and above the maximum protected amount of PKR 1,000,000?",
    answer: "<p>No, the maximum protected deposit currently prescribed by DPC is PKR 1,000,000/-.</p>"
  },
  {
    question: "13. What happens to unprotected portion of my deposits?",
    answer: "<p>Depositor may claim for the unprotected portion of their deposits from the official liquidator.</p>"
  },
  {
    question: "14. Does DPC provide separate coverage for conventional & Islamic deposits of a single depositor?",
    answer: "<p>No, DPC provides a total coverage of up to PKR 1,000,000/- to each eligible depositor against all of his/her conventional & Islamic deposits, held in the same bank.</p>"
  },
  {
    question: "15. Whether DPC provides separate protection against multiple accounts of an eligible depositor maintained with different banks?",
    answer: "<p>Yes, a single depositor can receive a protection of up to PKR 1,000,000/- against all his/ her deposits maintained with each member bank. However, maximum protection is capped at PKR 1,000,000/- for all accounts in one bank based on 'per depositor per bank principle'.</p>"
  },
  {
    question: "16. In which currency the protected amount shall be reimbursed to eligible depositors?",
    answer: "<p>The protected amount shall be reimbursed to eligible depositors in Pak Rupees. Foreign currency deposits shall also be reimbursed in equivalent Pak Rupees on the conversion rates declared by SBP for this purpose.</p>"
  },
  {
    question: "17. Can a bank recover the cost of deposit protection from its depositors?",
    answer: "<p>No, banks are not allowed to recover any cost associated with deposit protection from their depositors.</p>"
  },
  {
    question: "18. If my bank fails, would DPC pay any interest on my protected deposits at the time of reimbursement?",
    answer: "<p>No, DPC will not pay any further interest or profit on the total claim of the depositor on a failed member bank.</p>"
  },
  {
    question: "19. I have advised my bank to issue a pay order/ bankers cheque from my account. In addition, I have received a pay order from my insurance company that is forwarded to the bank for credit in my account. What happens to items in transit that are not cleared/ settled on the date of bank failure?",
    answer: "<p>The issues related to instruments in transit that are not settled/ cleared on the date of bank failure shall be addressed during liquidation process. DPC would make payment to eligible depositors based on the outstanding balance(s) available in their deposit account(s) on the date of bank failure as declared by State Bank of Pakistan.</p>"
  },
  {
    question: "20. I have two accounts in the same bank, one as an individual and other as a Sole Proprietor. Does DPC provide separate protection to both accounts at the time of bank failure?",
    answer: "<p>No. DPC aggregates all deposit accounts of a depositor (including accounts held as a Sole Proprietor) maintained in a failed member bank and determines the protected amount based on 'per depositor per bank' principle.</p><table><thead><tr><th>Depositor Name</th><th>Account Type</th><th>No. of Accounts</th><th>Total Deposit (PKR)</th><th>Protected Amount (PKR)</th></tr></thead><tbody><tr><td>Mr. XYZ Khan</td><td>Individual</td><td>1</td><td>400,000</td><td>--</td></tr><tr><td></td><td>Sole Proprietor</td><td>1</td><td>680,000</td><td>--</td></tr><tr><td><strong>Total</strong></td><td></td><td></td><td><strong>1,080,000</strong></td><td><strong>1,000,000</strong></td></tr></tbody></table>"
  },
  {
    question: "21. How DPC would assess the protected amount for different categories of eligible depositors?",
    answer: "<p>Deposit Protection Corporation (DPC) will assess the protected amount for different categories of eligible depositors in the following manner:</p><table><thead><tr><th>Depositor Name</th><th>Category</th><th>No. of Accounts</th><th>Total Deposit (PKR)</th><th>Protected Amount (PKR)</th><th>Note</th></tr></thead><tbody><tr><td>Mr. XYZ Khan</td><td>Individual</td><td>2</td><td>1,200,000</td><td>1,000,000</td><td>Conventional + Islamic</td></tr><tr><td>Ms. ABC Bibi</td><td>Individual</td><td>2</td><td>1,600,000</td><td>1,000,000</td><td>Single + Joint</td></tr><tr><td>XYZ (Pvt.) Ltd.</td><td>Corporate</td><td>1</td><td>50,000,000</td><td>0</td><td>Not Eligible</td></tr><tr><td>Mr. XYZ Khan (Partner)</td><td>Not Eligible</td><td>1</td><td>1,000,000</td><td>0</td><td>Audit Firm Partner</td></tr></tbody></table><p><em>* Account type(s) can be Conventional, Islamic or both.</em></p>"
  },
  {
    question: "22. How would I know if my bank (DPC member institution) has failed?",
    answer: "<p>After the issuance of notification by State Bank of Pakistan (SBP), the Corporation (DPC) shall inform general public through leading newspapers having wide circulation in the country. The information shall include the date after which depositors will receive protected amount from the Corporation and the procedure for payments.</p>"
  },
  {
    question: "23. How would DPC validate my total deposits held with a failed member institution (bank)?",
    answer: "<p>Deposit balances of all eligible depositors shall be validated on the basis of a comprehensive depositor's database reported by the failed member institution (bank).</p>"
  },
  {
    question: "24. If my bank (DPC member institution) fails, when will I receive the coverage amount guaranteed against my deposits from DPC?",
    answer: "<p>DPC shall begin the process of reimbursement to eligible depositors as early as possible after the issuance of failure notification of a member institution by SBP. DPC shall ensure payments to most of the protected depositors are made or tendered within seven working days and that all payments are made or tendered within thirty days at the latest, provided that there is no legal dispute on the deposit or accounts in question.</p>"
  },
  {
    question: "25. I have deposits in two member institutions (banks) of DPC. What happens to my deposits if they merged?",
    answer: "<p>Your deposits up to the guarantee amount shall continue to be protected separately for a period of one year or full withdrawal or until maturity of the deposits, whichever occurs earlier, from the effective date of merger.</p>"
  },
  {
    question: "26. Can legal heirs of a deceased depositor of a failed bank claim the guaranteed amount from DPC?",
    answer: "<p>Yes. However, the legal heirs will be required to prove their right to claim the guaranteed amount by acquiring all necessary documents as per the applicable laws.</p>"
  },
  {
    question: "27. Where should I contact for further information on deposit protection in Pakistan?",
    answer: "<p>You may visit our website <a href=\"http://www.dpc.org.pk\" target=\"_blank\">http://www.dpc.org.pk</a> to access further details on deposit protection in Pakistan. You may also write to us electronically at <a href=\"mailto:info@dpc.org.pk\">info@dpc.org.pk</a> or through surface mail at the following address:</p><address><strong>DEPOSIT PROTECTION CORPORATION</strong><br/>(A Subsidiary of State Bank of Pakistan)<br/>2nd Floor, SBP Bolton Market Building,<br/>M.A. Jinnah Road, Karachi.</address>"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* Added styles to format the HTML list, links, and tables */}
      <style jsx global>{`
        .faq-content p {
          margin-bottom: 0.75rem;
        }
        /* Style for List Headers in Q5 */
        .faq-content .list-header {
          font-weight: 700;
          color: #0f4c81; /* dpc-navy/blue */
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          font-size: 1.1em;
        }
        .faq-content ol {
          margin-top: 0.5rem;
          padding-left: 1.5rem;
          list-style-type: decimal;
          column-count: 2; /* Makes the list 2 columns for a slicker look */
          column-gap: 2rem;
        }
        @media (max-width: 768px) {
          .faq-content ol {
            column-count: 1; /* 1 column on mobile */
          }
        }
        .faq-content li {
          margin-bottom: 0.4rem;
          break-inside: avoid; /* Prevents list items from being cut in half */
        }
        /* Specific style for the nested Roman list in Q6 */
        .faq-content .list-roman {
          list-style-type: lower-roman;
          padding-left: 1.5rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .faq-content .list-roman li {
          margin-bottom: 0.25rem;
        }
        /* Style for Tables in Q20 and Q21 */
        .faq-content table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
          margin-bottom: 1rem;
          font-size: 0.95em;
        }
        .faq-content th {
          background-color: #0f4c81;
          color: white;
          padding: 10px;
          text-align: left;
          font-weight: 600;
        }
        .faq-content td {
          border-bottom: 1px solid #e5e7eb;
          padding: 10px;
          color: #374151;
        }
        .faq-content tr:last-child td {
          border-bottom: none;
        }
        .faq-content tr:nth-child(even) {
          background-color: #f9fafb;
        }
        /* Style for Address block in Q27 */
        .faq-content address {
          font-style: normal;
          margin-top: 1rem;
          line-height: 1.6;
          background-color: #f8f9fa;
          padding: 1rem;
          border-left: 3px solid #0f4c81;
        }
        .faq-content a {
          color: #0f4c81; /* dpc-blue */
          text-decoration: underline;
          font-weight: 600;
        }
        .faq-content a:hover {
          color: #0a365e;
        }
      `}</style>

      <div className="bg-white min-h-screen">
        {/* HERO SECTION UPDATED: Removed bg-dpc-navy, image opacity, and overlay lines. */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 border-b border-dpc-navy/10 text-dpc-navy overflow-hidden min-h-[50vh]">
          <div className="absolute inset-0">
            {/* Removed opacity-20 to make the image clear (removed shade) */}
            <img src="/03.jpg" alt="FAQ background" className="w-full h-full object-cover" />
          </div>
          
          {/* Removed the vertical lines overlay div here to remove graphical shades */}

          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              {/* Updated text colors to dark for readability on lighter background */}
              <p className="text-dpc-navy text-xs font-bold tracking-[0.3em] uppercase mb-4">Common Questions</p>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-dpc-navy leading-tight">
                Frequently Asked<br /><span className="italic font-normal text-gray-600">Questions</span>
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, amount: 0.1 }} 
                  transition={{ duration: 0.5, delay: idx * 0.02 }} 
                  className="bg-white border border-dpc-navy/10 overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="font-serif text-base md:text-lg text-dpc-navy group-hover:text-dpc-blue transition-colors pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-dpc-navy/40 transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? "rotate-180" : ""}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div 
                        initial={{ height: 0 }} 
                        animate={{ height: "auto" }} 
                        exit={{ height: 0 }} 
                        transition={{ duration: 0.2 }}
                      >
                        <div 
                          className="px-6 pb-6 text-sm md:text-base text-dpc-navy/70 leading-relaxed border-t border-dpc-navy/5 pt-4 font-sans faq-content"
                          dangerouslySetInnerHTML={{ __html: faq.answer }} 
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}