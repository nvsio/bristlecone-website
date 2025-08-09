"use client";

import React from "react";
import { marks } from "./marks";

type PortfolioItem = {
  name: string;
  note?: string; // e.g. acq., ticker
};

const portfolio: PortfolioItem[] = [
  { name: "Nova", note: "acq. AngelList" },
  { name: "Dharma", note: "acq. OpenSea" },
  { name: "Poparazzi", note: "acq. Meta" },
  { name: "Join", note: "acq. Eco" },
  { name: "R.A.R.E Art", note: "acq. Coinbase" },
  { name: "FTW", note: "acq. Samsung" },
  { name: "Circle", note: "$CRCL" },
  { name: "Sphere" },
  { name: "Codex" },
  { name: "Rain AI" },
  { name: "Regent" },
  { name: "Varda" },
  { name: "Paradromics" },
  { name: "Colossal" },
  { name: "Vial" },
  { name: "Tavus" },
  { name: "Anthropic" },
  { name: "OpenAI" },
  { name: "Beehiv" },
  { name: "Immi" },
  { name: "Infinite Games" },
  { name: "Superplastic" },
  { name: "Lore" },
  { name: "Puma" },
  { name: "Fomo" },
];

function PineGlyph({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <g fill="none" stroke="#0b0b0b" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" opacity={0.6}>
        <path d="M2 6 L12 0 L22 6" />
        <path d="M1 10 L12 2 L23 10" />
        <path d="M0 14 L12 4 L24 14" />
      </g>
      <rect x={10} y={14} width={4} height={6} rx={1} fill="#0b0b0b" opacity={0.6} />
    </g>
  );
}

function LogoBadge({ name, note }: PortfolioItem) {
  // Accessible title combines name + note subtly
  const title = note ? `${name} — ${note}` : name;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  function hashString(input: string): number {
    let hash = 0;
    for (let i = 0; i < input.length; i += 1) {
      hash = (hash << 5) - hash + input.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }
  const base = hashString(name);
  const hue1 = base % 360;
  const hue2 = (base * 7) % 360;
  const c1 = `hsl(${hue1} 60% 70%)`;
  const c2 = `hsl(${hue2} 60% 70%)`;

  return (
    <svg
      role="img"
      aria-label={title}
      viewBox="0 0 240 64"
      className="w-full h-16 drop-shadow-[0_0.25px_0_rgba(0,0,0,0.25)]"
    >
      <defs>
        <linearGradient id={`grad-${slug}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} stopOpacity="0.12" />
          <stop offset="100%" stopColor={c2} stopOpacity="0.12" />
        </linearGradient>
        <filter id={`blur-${slug}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="t" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0 0.025 0" />
          </feComponentTransfer>
          <feComposite operator="in" in2="SourceAlpha" />
        </filter>
      </defs>

      <g>
        <rect x="0.5" y="0.5" width="239" height="63" rx="12" fill={`url(#grad-${slug})`} filter={`url(#blur-${slug})`} />
        <rect x="0.5" y="0.5" width="239" height="63" rx="12" fill="#faf9f7" opacity="0.92" />
        <rect x="0.5" y="0.5" width="239" height="63" rx="12" fill="#000" opacity="0.02" filter="url(#grain)" />
        <rect x="0.5" y="0.5" width="239" height="63" rx="12" fill="none" stroke="#0b0b0b" strokeWidth="1.2" opacity="0.15" />
      </g>

      {(marks as Record<string, React.ComponentType<any>>)[name] ? (
        React.createElement((marks as Record<string, React.ComponentType<any>>)[name], { x: 16, y: 16 })
      ) : (
        <PineGlyph x={16} y={16} />
      )}

      <g>
        <text x="48" y="36" fill="#0b0b0b" opacity="0.7" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" fontSize="16">
          {name}
        </text>
        {note && (
          <text x="48" y="50" fill="#0b0b0b" opacity="0.35" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" fontSize="11">
            {note}
          </text>
        )}
      </g>
    </svg>
  );
}

export default function PortfolioGrid() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-6">
      <div className="mx-auto mb-6 max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">select investments</p>
        <p className="mt-2 text-[13px] text-neutral-700">Quietly building for the very long term.</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {portfolio.map((item) => (
          <div key={item.name} className="group rounded-xl transition-transform duration-150 ease-out hover:-translate-y-0.5">
            <div className="opacity-90 transition-opacity duration-150 group-hover:opacity-100">
              <LogoBadge {...item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
