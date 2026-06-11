import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-full border border-border/50 bg-muted/20 px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10 ${className}`}
      {...props}
    />
  );
}
