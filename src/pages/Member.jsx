
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import FilterBar from "../components/members/FilterBar";
import BankSection from "../components/members/BankSection";
import BranchMapModal from "../components/members/BranchMapModal";
import { BANK_CATEGORIES } from "../components/members/bankData";

const HERO_IMAGE = "/banks-logos.jpg";

/* ── Breadcrumb ── */
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-1.5 text-xs font-medium tracking-wide" aria-label="Breadcrumb">
      <a href="/" className="flex items-center gap-1 text-dpc-clay/50 hover:text-dpc-clay transition-colors no-underline">
        <Home size={12} />
        <span>Home</span>
      </a>
      <ChevronRight size={12} className="text-dpc-clay/30" />
      <span className="text-dpc-teal">Member Institutions</span>
    </nav>
  );
}

/* ── Hero ── */
function MembersHero() {
  return (
    <section className="relative w-full pt-36 pb-16 md:pt-48 md:pb-28 bg-black overflow-hidden border-b border-dpc-navy/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ChatGPT Image May 30, 2026, 04_11_59 PM.png" 
          alt="Member Institutions Network" 
          className="w-full h-full object-cover opacity-80" 
        />
      </div>

      {/* Dark Navy/Teal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0922]/90 via-[#0F0922]/60 to-[#0F0922]/40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
        <p className="text-dpc-teal text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3 drop-shadow-sm">
          Deposit Protection Corporation
        </p>
        <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-xl">
          Member Institutions
        </h1>
        <p className="text-white/80 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-md">
          Securing public trust by protecting eligible deposits across all scheduled member banks in Pakistan.
        </p>
      </div>
    </section>
  );
}

export default function Members() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [mapBank, setMapBank] = useState(null);

  const totalBanks = useMemo(
    () => Object.values(BANK_CATEGORIES).reduce((sum, cat) => sum + cat.banks.length, 0),
    []
  );

  const visibleCategories = useMemo(() => {
    if (activeFilter === "all") return Object.entries(BANK_CATEGORIES);
    return Object.entries(BANK_CATEGORIES).filter(([key]) => key === activeFilter);
  }, [activeFilter]);

  const hasResults = useMemo(() => {
    return visibleCategories.some(([, cat]) =>
      cat.banks.some((bank) => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        return bank.name.toLowerCase().includes(q) || bank.short.toLowerCase().includes(q);
      })
    );
  }, [visibleCategories, searchQuery]);

  return (
    <div className="min-h-screen bg-background font-body">
      <MembersHero />

      {/* Filter Bar */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {hasResults ? (
          visibleCategories.map(([key, category]) => (
            <BankSection
              key={key}
              categoryKey={key}
              category={category}
              searchQuery={searchQuery}
              onViewMap={setMapBank}
            />
          ))
        ) : (
          <div className="text-center py-24">
            <p className="font-display text-3xl text-muted-foreground italic">No institutions found</p>
            <p className="font-body text-sm text-muted-foreground/60 mt-3">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>

      {mapBank && <BranchMapModal bank={mapBank} onClose={() => setMapBank(null)} />}
    </div>
  );
}
