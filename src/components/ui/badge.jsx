import React from "react";

export function Badge({ children, className = "", ...props }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
