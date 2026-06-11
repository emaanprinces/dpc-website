
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "1. What is Deposit Protection?", answer: "Deposit Protection is a system established to protect the deposits of eligible depositors up to a specified limit in the event of a bank being declared as a failed bank by State Bank of Pakistan (SBP)." },
  { question: "2. What is Deposit Protection Corporation (DPC) and what is its role?", answer: "Deposit Protection Corporation (DPC) is a subsidiary of State Bank of Pakistan (SBP) established under the Deposit Protection Corporation Act 2016 (DPC Act). The role of the Corporation is to provide a robust deposit protection mechanism to ensure payment of protected amount to the eligible depositors of a DPC member bank, in the event of it being declared as a failed bank by State Bank of Pakistan (SBP)." },
  { question: "3. What is the protected amount determined by DPC for the protection of eligible depositors?", answer: "Presently, a protected amount of up to PKR 1,000,000/- per depositor per bank has been determined by DPC for the protection of eligible depositors." },
  { question: "4. What does the term \"Eligible Depositor/ Protected Depositor\" mean?", answer: "Categories of depositors that have been guaranteed payment up to the protected amount under the existing deposit protection mechanism of DPC are referred as \"Eligible Depositors/ Protected Depositors\"." },
  { 
    question: "5. What is the difference between \"Eligible Deposits\" and \"Protected Deposits\"?", 
    answer: `Total Deposits held by a depositor in a bank are considered Eligible Deposits. However, the amount protected by DPC is termed as Protected Deposit, which is capped at Rs. 500,000 per eligible depositor per bank. 
    <br><br>
    <table border="1" style="width:100%; border-collapse: collapse; text-align: left;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px;">Depositor</th>
          <th style="padding: 8px;">Category</th>
          <th style="padding: 8px;">No. of Accounts* in Same Bank</th>
          <th style="padding: 8px;">Total Eligible Deposits (In PKR)</th>
          <th style="padding: 8px;">Protected Deposits (In PKR)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px;">Mr. XYZ Khan</td>
          <td style="padding: 8px;">Individual / Sole Proprietorship</td>
          <td style="padding: 8px;">3</td>
          <td style="padding: 8px;">600,000</td>
          <td style="padding: 8px;">500,000</td>
        </tr>
        <tr>
          <td style="padding: 8px;">Ms. ABC Bibi</td>
          <td style="padding: 8px;">Individual / Sole Proprietorship</td>
          <td style="padding: 8px;">1</td>
          <td style="padding: 8px;">300,000</td>
          <td style="padding: 8px;">300,000</td>
        </tr>
        <tr>
          <td style="padding: 8px;">ABC Consultancy Pvt Ltd</td>
          <td style="padding: 8px;">Limited Company / Corporate</td>
          <td style="padding: 8px;">2</td>
          <td style="padding: 8px;">800,000</td>
          <td style="padding: 8px;">500,000</td>
        </tr>
      </tbody>
    </table>
    <br>
    <em style="font-size: 0.9em;">*Note: Account types in different branches of the same bank are aggregated for the purpose of DPC protection.</em>` 
  },
  { 
    question: "6. Who are the member banks of DPC?", 
    answer: `Presently all scheduled banks operating in Pakistan are members of DPC. Following is the list of banks that are members of DPC. This list is also available at DPC's website: <a href="http://www.dpc.org.pk/Circulars/2020/CL1-Annex-A.pdf" target="_blank">http://www.dpc.org.pk/Circulars/2020/CL1-Annex-A.pdf</a>
    <br><br>
    <table border="1" style="width:100%; border-collapse: collapse; text-align: left;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px;">Bank Name</th>
          <th style="padding: 8px;">Category</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding: 8px;">Allied Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Askari Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Albaraka Bank (Pakistan) Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Bank Alfalah Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Bank AL Habib Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">BankIslami Pakistan Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Bank Makramah Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Bank of China Limited- Pakistan Operations</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Citibank N.A.- Pakistan Operations</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Deutsche Bank AG- Pakistan Operations</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Dubai Islamic Bank Pakistan Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Faysal Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">First Women Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Habib Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Habib Metropolitan Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Industrial and Commercial Bank of China Limited- Pakistan Branches</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">JS Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">MCB Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">MCB Islamic Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Meezan Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">National Bank of Pakistan</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">SAMBA Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">SME Bank Limited</td><td style="padding: 8px;">Specialized Banks</td></tr>
        <tr><td style="padding: 8px;">Sindh Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Silkbank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Soneri Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Standard Chartered Bank (Pakistan) Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">The Bank of Khyber</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">The Bank of Punjab</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">The Punjab Provincial Cooperative Bank Limited</td><td style="padding: 8px;">Specialized Banks</td></tr>
        <tr><td style="padding: 8px;">United Bank Limited</td><td style="padding: 8px;">Commercial Banks</td></tr>
        <tr><td style="padding: 8px;">Zarai Taraqiati Bank Limited</td><td style="padding: 8px;">Specialized Banks</td></tr>
      </tbody>
    </table>` 
  },
  { question: "7. Is there any formal mechanism for the protection of deposits in DPC member institutions (banks)?", answer: "Yes, DPC has developed a Deposit Protection Mechanism for its member institutions (banks). For further details, please refer to DPC Circular No. 04, 2018 dated June 22, 2018 available at DPC's website: http://www.dpc.org.pk/Circulars/2018/C4-Annex-A.pdf" },
  { question: "8. Is there a separate Deposit Protection Mechanism for Islamic banking Institutions?", answer: "Yes. There is a separate Shariah Compliant Deposit Protection Mechanism for Islamic Banking Institutions. For details please refer to DPC Circular No. 05, 2018 dated November 05, 2018 available at DPC's website: http://www.dpc.org.pk/Circulars/2018/C5-Annex-A.pdf" },
  { 
    question: "9. Which Categories of Deposits are excluded from deposit protection?", 
    answer: `The following Categories of Deposits are excluded from deposit protection:
    <br><br>
    1. Depositors / deposits mentioned in the list below;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;i. Government or Government Institutions.<br>
    &nbsp;&nbsp;&nbsp;&nbsp;ii. Member institutions of DPC.<br>
    &nbsp;&nbsp;&nbsp;&nbsp;iii. Companies as defined under Companies Ordinance, 1984/ Companies Act 2017<br>
    &nbsp;&nbsp;&nbsp;&nbsp;iv. Corporations, Modarbas, Mutual Funds<br>
    &nbsp;&nbsp;&nbsp;&nbsp;v. Branch(es)/ Permanent establishment(s) of foreign entities<br>
    &nbsp;&nbsp;&nbsp;&nbsp;vi. Diplomatic Missions and international organizations/ entities like United Nations, World Bank, IFC, ADB etc.<br>
    &nbsp;&nbsp;&nbsp;&nbsp;vii. Autonomous Bodies<br>
    &nbsp;&nbsp;&nbsp;&nbsp;viii. Deposits on which preferential interest or return has been granted<br>
    &nbsp;&nbsp;&nbsp;&nbsp;ix. Members of Board of Directors and senior management of a DPC member bank<br>
    &nbsp;&nbsp;&nbsp;&nbsp;x. Partners of auditing firm responsible to certify DPC member bank financial statements<br>
    &nbsp;&nbsp;&nbsp;&nbsp;xi. Persons acquired rights to a deposit after State Bank of Pakistan's notification of Bank failure under DPC Act 2016<br>
    &nbsp;&nbsp;&nbsp;&nbsp;xii. Spouses, dependent lineal ascendants and descendants and dependent brothers and sisters of the persons specified at sr. no ix, x & xi above.<br>
    &nbsp;&nbsp;&nbsp;&nbsp;xiii. Deposits arising out of or related to transactions or actions constituting 'money laundering within the meaning of the Anti-Money Laundering Act, 2010, if the offender has been convicted of such offence<br>
    <br>
    2. Amounts reported under unclaimed deposits by a member bank in compliance of section 31 of Banking Companies Ordinance 1962.<br>
    <br>
    3. Deposits maintained at branches and subsidiaries of Pakistani banks operating outside Pakistan and branches located in Export Processing Zones (EPZ).`
  },
  { 
    question: "10. Which Type of Accounts are protected by DPC?", 
    answer: `Eligible deposits maintained in following Type of Accounts are protected by DPC:
    <br><br>
    1- All current and saving accounts including Roshan Digital Accounts (RDA).<br>
    2- All type of branchless banking accounts.<br>
    3- Fixed term deposits.<br>
    4- Call Deposit Receipts (CDR)/ Security Deposit Receipts (SDR).<br>
    5- Deposit balance kept as cash margins/ collateral or under lien, that are payable to depositors after satisfaction of all dues that are payable by them to the bank.<br>
    6- Foreign Currency Deposits. In case of an eventuality, the equivalent PKR at the exchange rate declared by SBP on notification date shall be reimbursed to the protected depositors.<br>
    7- Profit on any of the above deposits accrued till cut-off date.<br>
    8- Any other type of deposits communicated by DPC from time to time.`
  },
  { question: "11. What are the basis of charging premium from DPC member institutions (banks)?", answer: "The amount of \"eligible deposits\" disclosed by a member institution (bank) in its annual audited and AGM approved financial statements forms the basis of premium charge from banks.\nFor Example: Premium charged from a bank during calendar year 2021 would be based on the eligible deposits disclosed in annual audited and AGM approved accounts of the bank for the year 2020." },
  { question: "12. What are the basis of charging premium from banks if the annual audited accounts of previous year are not available/ AGM approved?", answer: "A bank would calculate premium payable to DPC on the basis of eligible deposits disclosed in last available annual audited and AGM approved financial statements and keep doing so until the required financial statements become available. Upon the availability of approved annual audited financial statements, the bank would recalculate the premium for relevant calendar year(s) and any difference shall be settled accordingly within seven working days." },
  { question: "13. What is the rate of premium charge?", answer: "DPC has determined a fixed rate of 0.16% of eligible deposits disclosed by a bank in its annual audited and AGM approved financial statements of preceding year. The premium is payable in four equal quarterly installments." },
  { question: "14. Can a bank recover the cost of premium from its depositors?", answer: "No, banks are explicitly prohibited from recovering costs of premium from their depositors." },
  { 
    question: "15. What is \"Per Depositor Per Bank\" principle? How DPC would calculate the protected amount payable to its eligible depositors on the cut-off date (Bank failure date)?", 
    answer: `Under the 'Per Depositor Per Bank' principle, DPC aggregates the balances of all eligible deposits (including both Conventional and Islamic accounts) held by a depositor in a single bank across all its branches. The examples below illustrate how the coverage is calculated on the cut-off date (bank failure date):
    <br><br>
    
    <strong>Example 1: Mr. A (Conventional Bank)</strong>
    <table border="1" style="width:100%; border-collapse: collapse; margin-bottom: 15px;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px;">Account Type</th>
          <th style="padding: 8px;">Account Balance (PKR)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding: 8px;">Current Account</td><td style="padding: 8px;">200,000</td></tr>
        <tr style="font-weight: bold;"><td style="padding: 8px;">Total Liability</td><td style="padding: 8px;">200,000</td></tr>
        <tr style="background-color: #e8f5e9; font-weight: bold;"><td style="padding: 8px;">Coverage</td><td style="padding: 8px;">200,000</td></tr>
      </tbody>
    </table>

    <strong>Example 2: Mr. A (Islamic Bank)</strong>
    <table border="1" style="width:100%; border-collapse: collapse; margin-bottom: 15px;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px;">Account Type</th>
          <th style="padding: 8px;">Account Balance (PKR)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding: 8px;">Term Deposit (Including accrued profit)</td><td style="padding: 8px;">210,000</td></tr>
        <tr style="font-weight: bold;"><td style="padding: 8px;">Total Liability</td><td style="padding: 8px;">210,000</td></tr>
        <tr style="background-color: #e8f5e9; font-weight: bold;"><td style="padding: 8px;">Coverage</td><td style="padding: 8px;">210,000</td></tr>
      </tbody>
    </table>

    <strong>Example 3: Mr. A (Multiple Accounts)</strong>
    <table border="1" style="width:100%; border-collapse: collapse; margin-bottom: 15px;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px;">Account Type</th>
          <th style="padding: 8px;">Account Balance (PKR)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding: 8px;">Current Account</td><td style="padding: 8px;">200,000</td></tr>
        <tr><td style="padding: 8px;">Term Deposit</td><td style="padding: 8px;">200,000</td></tr>
        <tr><td style="padding: 8px;">Savings Account</td><td style="padding: 8px;">210,000</td></tr>
        <tr style="font-weight: bold;"><td style="padding: 8px;">Total Liability</td><td style="padding: 8px;">610,000</td></tr>
        <tr style="background-color: #ffebee; font-weight: bold;"><td style="padding: 8px;">Coverage</td><td style="padding: 8px;">500,000</td></tr>
      </tbody>
    </table>

    <strong>Example 4: Mr. B</strong>
    <table border="1" style="width:100%; border-collapse: collapse; margin-bottom: 15px;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px;">Account Type</th>
          <th style="padding: 8px;">Account Balance (PKR)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding: 8px;">Conventional Current</td><td style="padding: 8px;">100,000</td></tr>
        <tr><td style="padding: 8px;">Conventional Term</td><td style="padding: 8px;">100,000</td></tr>
        <tr style="font-weight: bold;"><td style="padding: 8px;">Total Liability</td><td style="padding: 8px;">200,000</td></tr>
        <tr style="background-color: #e8f5e9; font-weight: bold;"><td style="padding: 8px;">Coverage</td><td style="padding: 8px;">200,000</td></tr>
      </tbody>
    </table>

    <strong>Example 5: Mr. B (Multiple Islamic Accounts)</strong>
    <table border="1" style="width:100%; border-collapse: collapse; margin-bottom: 15px;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px;">Account Type</th>
          <th style="padding: 8px;">Account Balance (PKR)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding: 8px;">Islamic Current</td><td style="padding: 8px;">400,000</td></tr>
        <tr><td style="padding: 8px;">Islamic Term (Including profit)</td><td style="padding: 8px;">100,000*</td></tr>
        <tr><td style="padding: 8px;">Islamic Term (Including profit)</td><td style="padding: 8px;">600,000</td></tr>
        <tr style="font-weight: bold;"><td style="padding: 8px;">Total Liability</td><td style="padding: 8px;">1,100,000</td></tr>
        <tr style="background-color: #ffebee; font-weight: bold;"><td style="padding: 8px;">Coverage</td><td style="padding: 8px;">500,000</td></tr>
      </tbody>
    </table>

    <strong>Example 6: Mr. B (High Value Accounts)</strong>
    <table border="1" style="width:100%; border-collapse: collapse; margin-bottom: 15px;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px;">Account Type</th>
          <th style="padding: 8px;">Account Balance (PKR)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding: 8px;">Conventional Current</td><td style="padding: 8px;">1000,000</td></tr>
        <tr><td style="padding: 8px;">Conventional Term</td><td style="padding: 8px;">200,000</td></tr>
        <tr style="font-weight: bold;"><td style="padding: 8px;">Total Liability</td><td style="padding: 8px;">1,200,000</td></tr>
        <tr style="background-color: #ffebee; font-weight: bold;"><td style="padding: 8px;">Coverage</td><td style="padding: 8px;">500,000</td></tr>
      </tbody>
    </table>

    <strong>Example 7: Mr. A (Mixed Accounts)</strong>
    <table border="1" style="width:100%; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px;">Account Type</th>
          <th style="padding: 8px;">Account Balance (PKR)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding: 8px;">Islamic Current</td><td style="padding: 8px;">900,000</td></tr>
        <tr><td style="padding: 8px;">Islamic Term</td><td style="padding: 8px;">100,000</td></tr>
        <tr style="font-weight: bold;"><td style="padding: 8px;">Total Liability</td><td style="padding: 8px;">1,000,000</td></tr>
        <tr style="background-color: #ffebee; font-weight: bold;"><td style="padding: 8px;">Coverage</td><td style="padding: 8px;">500,000</td></tr>
      </tbody>
    </table>` 
  },
  { question: "16. For further queries/ clarifications on Deposit Protection, where should a bank contact?", answer: "You may visit our website http://www.dpc.org.pk to access further details on deposit protection in Pakistan. You may also write to us electronically at info@dpc.org.pk or through surface mail at the following address:\n\nDEPOSIT PROTECTION CORPORATION\n(A Subsidiary of State Bank of Pakistan)\n2nd Floor, SBP Bolton Market Building,\nM.A. Jinnah Road, Karachi." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-dpc-clay min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative pb-16 md:pb-20 px-6 md:px-12 border-b border-dpc-navy/10 bg-dpc-navy text-dpc-clay overflow-hidden min-h-[50vh]">
        
        {/* Background Image */}
        <img 
          src="/03.jpg" 
          alt="Bank Building Background" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-20">
          {["25%","50%","75%"].map(l => <div key={l} className="absolute top-0 bottom-0 w-[1px] bg-dpc-clay" style={{ left: l }} />)}
        </div>

        {/* Hero Text Content */}
        <div className="relative z-30 max-w-6xl mx-auto pt-32 md:pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-dpc-teal text-xs font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-md">Common Questions</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-dpc-clay leading-tight drop-shadow-xl">
              Frequently Asked<br /><span className="italic font-normal text-dpc-clay/60 drop-shadow-lg">Questions</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FAQ LIST SECTION */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: idx * 0.04 }} className="bg-white border border-dpc-navy/10 overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
                  <span className="font-serif text-lg text-dpc-navy group-hover:text-dpc-blue transition-colors">{faq.question}</span>
                  <ChevronDown size={20} className={`text-dpc-navy/40 transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === idx ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.2 }}>
                      <div className="px-6 pb-6 text-sm text-dpc-navy/60 leading-relaxed border-t border-dpc-navy/5 pt-4" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
