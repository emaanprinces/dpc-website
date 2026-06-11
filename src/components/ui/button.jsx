import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full bg-[#4b1c79] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#39145f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b1c79] focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
