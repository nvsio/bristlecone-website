import React from "react";

export default function DharmaMark({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <g fill="none" stroke="#0b0b0b" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" opacity={0.7}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4 L12 20 M4 12 L20 12" opacity={0.5} />
        </g>
      </svg>
    </g>
  );
}
