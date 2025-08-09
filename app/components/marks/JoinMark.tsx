import React from "react";

export default function JoinMark({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <g fill="none" stroke="#0b0b0b" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" opacity={0.7}>
          <path d="M7 7 L17 17" />
          <path d="M17 7 L7 17" />
          <circle cx="12" cy="12" r="9" opacity={0.3} />
        </g>
      </svg>
    </g>
  );
}
