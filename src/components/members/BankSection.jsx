import React from "react";
import { motion } from "framer-motion";
import BankCard from "./BanksCard";

export default function BankSection({ categoryKey, category, searchQuery, onViewMap }) {
  const isSpecialized = categoryKey === "specialized";

  const filteredBanks = category.banks.filter((bank) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return bank.name.toLowerCase().includes(q) || bank.short.toLowerCase().includes(q);
  });

  if (filteredBanks.length === 0) return null;

  return (
    <section className="mb-20 md:mb-28">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-12"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-8 h-px bg-dpc-teal" />
          <span className="font-body text-[10px] font-bold tracking-[0.25em] uppercase text-dpc-teal">
            {category.subtitle}
          </span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-dpc-navy tracking-tight">
          {category.label}
        </h2>
      </motion.div>

      {/* Bank grid */}
      <div
        className={
          isSpecialized
            ? "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
            : "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"
        }
      >
        {filteredBanks.map((bank, i) => (
          <BankCard
            key={bank.short}
            bank={bank}
            index={i}
            variant={isSpecialized ? "grand" : "default"}
            onViewMap={onViewMap}
          />
        ))}
      </div>
    </section>
  );
}