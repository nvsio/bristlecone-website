import React from "react";

export default function CircleMark({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="8" fill="none" stroke="#0b0b0b" strokeWidth={1.6} opacity={0.7} />
      </svg>
    </g>
  );
}
