import React from "react";

export default function NovaMark({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <g fill="none" stroke="#0b0b0b" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" opacity={0.7}>
          <path d="M12 4 L12 20" />
          <path d="M4 12 L20 12" />
          <path d="M6 6 L18 18" opacity={0.4} />
          <path d="M18 6 L6 18" opacity={0.4} />
        </g>
      </svg>
    </g>
  );
}
