import React from "react";
import { Building2, CreditCard, Clock, MapPin, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function LocationSidebar({ branches, atms, showBranches, showAtms, onSelectMarker, selectedId }) {
  const items = [
    ...(showBranches ? branches.map(b => ({ ...b, type: "branch" })) : []),
    ...(showAtms ? atms.map(a => ({ ...a, type: "atm" })) : []),
  ];

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-48 text-center px-4">
        <Building2 className="w-8 h-8 text-muted-foreground/40 mb-3" />
        <p className="font-body text-sm text-muted-foreground">No locations to display.</p>
        <p className="font-body text-xs text-muted-foreground/60 mt-1">Toggle branches or ATMs above.</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border/50">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelectMarker(item)}
          className={`w-full text-left px-4 py-3.5 transition-all duration-200 flex items-start gap-3 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b1c79] focus-visible:ring-inset
            ${selectedId === item.id ? "bg-[#4b1c79]/5 border-l-2 border-[#4b1c79]" : "border-l-2 border-transparent"}`}
        >
          <div className={`mt-0.5 w-7 h-7 rounded-md flex-shrink-0 flex items-center justify-center
            ${item.type === "branch" ? "bg-[#4b1c79]/10" : "bg-foreground/5"}`}>
            {item.type === "branch"
              ? <Building2 className="w-3.5 h-3.5 text-[#4b1c79]" />
              : <CreditCard className="w-3.5 h-3.5 text-foreground/60" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <Badge
                variant="outline"
                className={`text-[10px] px-1.5 py-0 h-4 font-body tracking-wide uppercase font-medium border-0
                  ${item.type === "branch" ? "bg-[#4b1c79]/10 text-[#4b1c79]" : "bg-muted text-muted-foreground"}`}
              >
                {item.type === "branch" ? "Branch" : "ATM"}
              </Badge>
            </div>
            <p className="font-body text-xs text-foreground leading-snug truncate">{item.address}</p>
            <p className="font-body text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 flex-shrink-0" />
              {item.type === "branch" ? "Mon–Fri 9–5" : "24/7"}
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0 mt-1" />
        </button>
      ))}
    </div>
  );
}