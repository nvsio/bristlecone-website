"use client";

import React, { useEffect, useState } from "react";

const lines = [
  "Before it's obvious.",
  "Small teams. Infinite leverage.",
  "The future compounds quietly.",
  "Conviction over consensus.",
  "Build what doesn't exist yet.",
];

export default function HeroCaption() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const id = setInterval(() => setIndex((i) => (i + 1) % lines.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div 
      className={`
        flex items-center justify-center transition-all
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}
      style={{ transitionDuration: '1200ms', transitionDelay: '600ms' }}
    >
      <div className="relative h-8 w-full max-w-2xl overflow-hidden px-8">
        {lines.map((text, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center transition-all"
            style={{
              opacity: i === index ? 1 : 0,
              transform: i === index ? 'translateY(0) scale(1)' : 'translateY(4px) scale(0.98)',
              transitionDuration: '800ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
            aria-hidden={i !== index}
          >
            <p 
              className="text-center font-light tracking-wide"
              style={{ 
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-text)',
                letterSpacing: '0.02em'
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
