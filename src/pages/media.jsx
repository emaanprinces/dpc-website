
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, FolderOpen, FileText, File, ArrowDown } from 'lucide-react';

// UPDATED: Exact data extracted from the provided screenshots
export const MEDIA_DATA = [
  // 2026 (Exact: 2 Circular Letters as per image)
  { date: "2026", category: "Circular Letters", title: "DPC Circular Letter No. 2 of 2026 - Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2026", category: "Notifications", title: "DPC Circular Letter No. 1 of 2026 - Notification" },

  // 2025 (Exact: 1 Circular + 3 Circular Letters as per image)
  { date: "2025", category: "Circulars", title: "DPC Circular No. 01 of 2025 - Deposit Protection Mechanism for Digital Banks" },
  { date: "2025", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2025 - Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2025", category: "Circular Letters", title: "DPC Circular Letter No. 02 of 2025 - Member Institutions of Deposit Protection Corporation (DPC)" },
  { date: "2025", category: "Circular Letters", title: "DPC Circular Letter No. 03 of 2025 - Member Institutions of Deposit Protection Corporation (DPC)" },

  // 2024 (Exact: 4 Documents as per image)
  { date: "2024", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2024 -" },
  { date: "2024", category: "Notifications", title: "Gazette Notification - Enhancement of Coverage Limit to Rs. 1,000,000" },
  { date: "2024", category: "Circular Letters", title: "2024- Member Institutions of DPC" },

  // 2023
  { date: "2023", category: "Notifications", title: "DPC Circular Letter No. 01 of 2023 - Notification" },
  { date: "2023", category: "Circular Letters", title: "DPC Circular Letter No. 02 of 2023 - Revision of Data Reporting Formats for Banks" },

  // 2022
  { date: "2022", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2022 - Single Depositor View Information System of Member Banks - Review Mechanism" },

  // 2021
  { date: "2021", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2021 - Enhancement of Protection Limit of Deposits (from Rs.250,000/- to Rs.500,000/-)" },

  // 2020
  { date: "2020", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2020" },
  { date: "2020", category: "Circular Letters", title: "DPC Circular Letter No. 02 of 2020" },

  // 2019
  { date: "2019", category: "Circulars", title: "DPC Circular No. 01 of 2019 - Premium Assessment Guidelines" },
  { date: "2019", category: "Circular Letters", title: "DPC Circular Letter No. 01 of 2019 - Coverage Limit Enhancement" },

  // 2018
  { date: "2018", category: "Circulars", title: "DPC Circular No.2 of 2018 - Declaration of Commencement of Deposit Protection Scheme" },
  { date: "2018", category: "Circulars", title: "DPC Circular No.1 of 2018 - Premium Rates" },
  { date: "2018", category: "Circular Letters", title: "DPC Circular Letter No.1 of 2018 - Operational Guidelines for Banks" },
  { date: "2018", category: "Circular Letters", title: "DPC Circular Letter No.2 of 2018 - Data Reporting Mechanism" },
  { date: "2018", category: "Circular Letters", title: "DPC Circular Letter No.3 of 2018 - Claim Settlement Process" },
];

const categories = ['All', 'Circulars', 'Circular Letters', 'Notifications'];

export default function DownloadsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (category) => {
    if (category.includes('Circular')) return <FileText size={20} strokeWidth={1.5} />;
    return <File size={20} strokeWidth={1.5} />;
  };

  const filtered = MEDIA_DATA.filter(doc =>
    (activeCategory === 'All' || doc.category === activeCategory) &&
    (doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || doc.date.includes(searchQuery))
  );
  
  const grouped = filtered.reduce((acc, doc) => { 
    if (!acc[doc.date]) acc[doc.date] = []; 
    acc[doc.date].push(doc); 
    return acc; 
  }, {});
  
  const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  // Helper function for the button
  const scrollToContent = () => {
    document.getElementById('library-content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* --- HERO SECTION --- */}
      {/* 1. Removed 'bg-dpc-navy' to remove the dark blue background shade */}
      <div className="relative overflow-hidden min-h-[500px] sm:min-h-[600px]">
        
        {/* 2. BACKGROUND IMAGE CONTAINER */}
        <div className="absolute inset-0 z-0">
          {/* 3. Removed 'opacity-60' to show the image at full brightness (no shade) */}
          <img 
            src="/34.webp" 
            alt="DPC Headquarters" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>
       
        {/* 4. CONTENT (Button Only) */}
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 relative z-10 w-full flex flex-col justify-center items-start h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            {/* 5. Removed all text (H1, P, and Badge) as requested */}
            
            
          </motion.div>
        </div>
      </div>
      

      {/* --- CONTENT SECTION --- */}
      <section id="library-content" className="py-24 sm:py-32 bg-dpc-clay border-b border-dpc-navy/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-dpc-teal" />
                <span className="text-dpc-teal text-xs font-semibold tracking-[0.2em] uppercase">Document Library</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-dpc-navy leading-[1.1]">
                {"Circulars & "}
                <br />
                <span className="italic text-dpc-navy/50">Notifications</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <p className="text-dpc-navy/60 text-sm leading-relaxed">Official communications, circulars, and guidelines published by the Deposit Protection Corporation.</p>
            </div>
          </div>

          {/* Controls (Search & Filter) */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 sticky top-4 z-20 py-2 bg-transparent backdrop-blur-sm -mx-2 px-2 sm:mx-0 sm:px-0">
            <div className="relative flex-1 max-w-sm">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-dpc-navy/30" />
              <input 
                type="text" 
                placeholder="Search documents..." 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-dpc-navy/15 bg-white text-sm text-dpc-navy placeholder:text-dpc-navy/30 focus:outline-none focus:border-dpc-teal transition-colors rounded-none shadow-sm" 
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[11px] font-semibold tracking-wider uppercase transition-all border ${activeCategory === cat ? 'bg-dpc-navy text-dpc-clay border-dpc-navy' : 'bg-white text-dpc-navy/60 border-dpc-navy/20 hover:border-dpc-navy/50 hover:text-dpc-navy shadow-sm'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-dpc-navy/40">
              <FolderOpen size={48} strokeWidth={1} className="mx-auto mb-4 opacity-40" />
              <p className="text-sm">No documents match your search.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {sortedYears.map(year => (
                <div key={year}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-dpc-navy/30 font-serif text-sm tracking-widest">{year}</span>
                    <div className="flex-1 h-[1px] bg-dpc-navy/10" />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {grouped[year].map((doc, i) => (
                      <motion.a 
                        key={i} 
                        href="#" 
                        onClick={e => e.preventDefault()} 
                        initial={{ opacity: 0, y: 10 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.4, delay: i * 0.05 }} 
                        viewport={{ once: true }}
                        className="group flex items-start gap-4 p-5 border border-dpc-navy/10 bg-white hover:border-dpc-blue/30 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-9 h-9 border border-dpc-navy/10 flex items-center justify-center text-dpc-blue group-hover:bg-dpc-blue group-hover:text-white transition-all mt-0.5">
                          {getIcon(doc.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-dpc-navy leading-snug mb-1.5 group-hover:text-dpc-blue transition-colors line-clamp-2">{doc.title}</p>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] text-dpc-navy/40 font-mono truncate max-w-[120px]">{doc.category}</span>
                            <Download size={13} className="text-dpc-navy/20 group-hover:text-dpc-teal transition-colors flex-shrink-0" />
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer Count */}
          <div className="mt-10 pt-8 border-t border-dpc-navy/10 flex items-center justify-between">
            <p className="text-xs text-dpc-navy/40">Showing <span className="text-dpc-navy font-semibold">{filtered.length}</span> of {MEDIA_DATA.length}</p>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-dpc-navy/30">Official DPC publications</span>
          </div>
        </div>
      </section>
    </>
  );
}
