import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ALL_CATEGORIES, CATEGORY_LABELS } from "./bankData";

export default function FilterBar({ activeFilter, onFilterChange, searchQuery, onSearchChange }) {
  const THEME_COLOR = "#320d55";

  return (
    <div className="sticky top-0 z-40 backdrop-blur-md bg-background/90 border-b border-border/50 will-change-transform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        
        {/* Flex container: Col on Mobile (Search first), Row on Desktop (Filters first) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* SEARCH BAR - Top on Mobile, Right on Desktop */}
          <div className="relative w-full sm:w-64 flex-shrink-0 order-1 sm:order-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search institutions..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 font-body text-sm bg-muted/40 border-border/50 h-10 sm:h-11"
              style={{ '--tw-ring-color': THEME_COLOR }}
            />
          </div>

          {/* FILTER PILLS - Bottom on Mobile, Left on Desktop */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto order-2 sm:order-1 scrollbar-hide snap-x snap-mandatory">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onFilterChange(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-body text-xs tracking-wider uppercase transition-all duration-300 min-h-[44px] min-w-[44px] snap-start
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  ${activeFilter === cat
                    ? "text-white shadow-md"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted border border-transparent"
                  }`}
                // Using inline style for the EXACT color you picked
                style={{
                  backgroundColor: activeFilter === cat ? THEME_COLOR : undefined,
                  '--tw-ring-color': THEME_COLOR,
                  color: (!activeFilter === cat) ? THEME_COLOR : undefined 
                }}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}