import React from "react";

// We removed fetchPriority from types to stop React from looking for it
type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

export default function Image({
  priority = false,
  loading,
  decoding = "async",
  src,
  ...props 
}: ImageProps) {
  return (
    <img
      {...props} 
      src={src} 
      loading={loading ?? (priority ? "eager" : "lazy")} 
      decoding={decoding}
      // fetchPriority is gone. No more warnings.
    />
  );
}