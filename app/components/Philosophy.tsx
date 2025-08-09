"use client";

import React, { useEffect, useRef, useState } from "react";

interface Principle {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const principles: Principle[] = [
  {
    number: "01",
    title: "Patient Capital",
    description: "We measure success in decades, not quarters. Our commitment extends far beyond typical investment horizons.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    number: "02",
    title: "Frontier Focus",
    description: "We identify emerging paradigms before they become consensus, backing founders who see what others cannot.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: "03",
    title: "Founder First",
    description: "We believe extraordinary outcomes come from extraordinary people. We back conviction over convention.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: "04",
    title: "Quiet Partnership",
    description: "We work behind the scenes, providing strategic value without fanfare. Our success is measured by yours.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }
];

export default function Philosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const focuses = [
    { title: "Programmable Biology" },
    { title: "Programmable Atoms" },
    { title: "Programmable Value" },
    { title: "Programmable Media" },
  ];

  return (
    <section id="focus" ref={sectionRef} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={`mb-12 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-sm uppercase tracking-widest" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.15em' }}>
            Areas of Focus
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {focuses.map((f, i) => (
            <div key={f.title} className="rounded-xl border p-6" style={{ borderColor: 'var(--color-border)', background: 'var(--color-pure)' }}>
              <h3 className="text-xl font-light" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>
                {String(i + 1).padStart(2, '0')} · {f.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}