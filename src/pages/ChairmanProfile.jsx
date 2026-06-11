
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Quote } from "lucide-react";

const bio = [
  "A career Central Banker and Regulator with over 29 years experience at various important positions in State Bank of Pakistan including Head Strategic Management, Director Agricultural Credit, Director Development Finance, Director Islamic Banking, Director Finance and Executive Director Financial Resource Management. With strong strategic orientation, and diversified experience in different central banking functions, he has deep insights of banks regulation, development finance, Islamic finance, financial management, enterprise risk management.",
  "He is currently working as the Deputy Governor, State Bank of Pakistan and overseeing the financial inclusion, digital financial services, information technology, human resources and finance and risk management groups. Before his appointment as Deputy Governor, he worked as the MD and CEO of Pakistan Security Printing Corporation (PSPC) and took several initiatives to transform PSPC into a globally recognized and modern security printer. As the CFO from May 2018 to November 2022 reporting directly to the Governor, he headed the most diverse portfolio in the SBP and led the finance, the treasury operations, risk management and Information Securities.",
  "Mr. Saleem is a member of the Executive Committee of Ter, and Monetary Policy Committee and chairs SBP IT Steering Committee. He is the Vice Chairman of the Board of Pakistan Security Printing Corporation and a member of National Council of Institute of Cost and Management Accountants in Pakistan. He also represented SBP on the Board of Pakistan Institute of Corporate Governance (PICG) as the Board Member.",
  "By qualification, he is fellow member of Institute of Cost and Management Accountants, Pakistan, an MBA from Bahauddin Zakariya University, Multan and an MPA from Kennedy School of Government, Harvard University.",
];

const credentials = [
  { label: "FCMA", sub: "Institute of Cost & Management Accountants" },
  { label: "MBA", sub: "Bahauddin Zakariya University" },
  { label: "MPA", sub: "Harvard University" },
];

const roles = [
  { title: "Deputy Governor", org: "State Bank of Pakistan", period: "Present" },
  { title: "MD & CEO", org: "Pakistan Security Printing Corporation", period: "2022" },
  { title: "Chief Financial Officer", org: "State Bank of Pakistan", period: "2018–2022" },
  { title: "Executive Director", org: "SBP — Financial Resource Mgmt", period: "—" },
  { title: "Director", org: "SBP — Strategic Management", period: "—" },
  { title: "Director", org: "SBP — Islamic Banking", period: "—" },
];

export default function ChairmanProfile() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 flex flex-col">
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        
        {/* HERO SECTION */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-12 relative">
          
          {/* BACK BUTTON - MOVED UP (top-4) */}
          <div className="absolute top-4 right-4 z-20">
            <Link 
              to="/governance" 
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200 hover:border-amber-400 hover:text-amber-600 text-slate-600 px-4 py-2 rounded-full shadow-sm transition-all text-sm font-medium group"
            >
              <span>Back to Governance</span>
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* IMAGE COLUMN - IMAGE FIRST ON MOBILE */}
            {/* pt-20 pushes image DOWN so it doesn't overlap the button */}
            <div className="lg:col-span-5 flex justify-center pt-20 lg:py-16 px-4 order-1 lg:order-1">
               <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
                  <img 
                     src="chariman.png"
                     alt="Mr. Ullah Saleem"
                     className="w-full h-full object-cover object-top"
                  />
               </div>
            </div>

            {/* TEXT COLUMN - TEXT SECOND ON MOBILE */}
            <div className="lg:col-span-7 p-6 md:p-10 lg:pr-16 lg:pl-4 flex flex-col justify-center order-2 lg:order-2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                  Chairman of the Board
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-4 leading-tight">
                  Mr. Saleem  Ullah<br />
                </h1>
                <p className="text-lg text-slate-600 font-serif italic">
                  Deputy Governor, State Bank of Pakistan
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {credentials.map((c, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-amber-200 transition-colors">
                    <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                      <Award className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm sm:text-base">{c.label}</p>
                      <p className="text-xs text-slate-500">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* QUOTE SECTION */}
        <section className="mb-16 px-2">
          <div className="bg-white border-l-4 border-amber-500 p-6 md:p-10 rounded-r-lg shadow-sm">
            <Quote className="w-8 h-8 text-slate-200 mb-4" />
            <p className="text-lg md:text-2xl font-serif text-slate-700 leading-relaxed italic">
              "Directing corporate strategy and regulatory compliance with over three decades of financial oversight experience at the national level, shaping Pakistan's financial landscape through innovation, inclusion, and integrity."
            </p>
          </div>
        </section>

        {/* BIO & TIMELINE */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Bio Text */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 mb-6">
               <div className="h-px bg-slate-200 flex-1" />
               <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Biography</h2>
               <div className="h-px bg-slate-200 flex-1" />
            </div>
            
            {bio.map((para, i) => (
              <p key={i} className="text-slate-600 leading-[1.8] font-serif text-base sm:text-lg text-justify">
                {para}
              </p>
            ))}
          </div>

          {/* Career Timeline */}
          <div className="lg:col-span-1">
             <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8 border-b border-slate-200 pb-2">
               Career Timeline
             </h3>
             
             <div className="space-y-0">
               {roles.map((role, i) => (
                 <div key={i} className="group relative pl-8 pb-8 border-l-2 border-amber-200 last:border-0 hover:border-amber-400 transition-colors">
                   {/* CHANGED: bg-slate-300 to bg-amber-400 (Yellow Circles) */}
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white bg-amber-400 group-hover:bg-amber-600 transition-colors shadow-sm" />
                   
                   <div className="flex flex-col">
                     <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-1">
                       {role.period}
                     </span>
                     <h4 className="font-bold text-slate-900 text-base leading-tight mb-1">
                       {role.title}
                     </h4>
                     <p className="text-sm text-slate-500 leading-snug">
                       {role.org}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

      </main>

    </div>
  );
}
