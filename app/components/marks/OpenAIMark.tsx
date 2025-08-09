import React from "react";

export default function OpenAIMark({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <g fill="none" stroke="#0b0b0b" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" opacity={0.7}>
          <path d="M12 3 a6 6 0 0 1 6 6 l-3 3 a6 6 0 1 1 -6 -6 z" />
          <path d="M9 12 l3 -3 l3 3 l-3 3 z" opacity={0.5} />
        </g>
      </svg>
    </g>
  );
}
