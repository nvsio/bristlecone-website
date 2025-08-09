import React from "react";

export default function RainAIMark({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <g fill="none" stroke="#0b0b0b" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" opacity={0.7}>
          <path d="M12 4 C10 7, 7 9, 7 12 a5 5 0 0 0 10 0 c0 -3 -3 -5 -5 -8z" />
          <path d="M9 18 l0 -2 M12 19 l0 -3 M15 18 l0 -2" opacity={0.5} />
        </g>
      </svg>
    </g>
  );
}
