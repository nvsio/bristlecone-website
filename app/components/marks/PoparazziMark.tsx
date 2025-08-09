import React from "react";

export default function PoparazziMark({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <g fill="none" stroke="#0b0b0b" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" opacity={0.7}>
          <rect x="5" y="7" width="14" height="10" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <rect x="9" y="4" width="6" height="3" rx="1.5" />
        </g>
      </svg>
    </g>
  );
}
