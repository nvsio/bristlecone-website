import React from "react";

export default function VardaMark({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <g fill="none" stroke="#0b0b0b" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" opacity={0.7}>
          <path d="M12 3 L3 20 L21 20 Z" />
          <path d="M12 8 L8 16 L16 16 Z" opacity={0.5} />
        </g>
      </svg>
    </g>
  );
}
