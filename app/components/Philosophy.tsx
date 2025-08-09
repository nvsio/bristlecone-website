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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="philosophy"
      ref={sectionRef}
      className="relative overflow-hidden py-32"
      style={{
        background: 'linear-gradient(180deg, var(--color-canvas) 0%, var(--color-pure) 50%, var(--color-canvas) 100%)'
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 113, 227, 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(0, 113, 227, 0.05) 0%, transparent 50%)`,
          animation: isVisible ? 'pulse 8s ease-in-out infinite' : 'none'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div 
          className={`mb-20 text-center transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDuration: '800ms', transitionDelay: '200ms' }}
        >
          <h2 
            className="mb-4 text-sm font-medium uppercase tracking-widest"
            style={{ 
              color: 'var(--color-text-tertiary)',
              letterSpacing: '0.15em'
            }}
          >
            Our Philosophy
          </h2>
          <p 
            className="mx-auto max-w-3xl text-4xl font-light leading-tight"
            style={{ 
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em'
            }}
          >
            Betting on what's next,
            <span 
              className="block mt-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
              style={{ 
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite'
              }}
            >
              before it's inevitable
            </span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              className={`group relative transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDuration: '800ms',
                transitionDelay: `${400 + index * 100}ms`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative overflow-hidden rounded-2xl p-8 transition-all"
                style={{
                  background: hoveredIndex === index 
                    ? 'rgba(255, 255, 255, 0.9)'
                    : 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid var(--color-border)',
                  boxShadow: hoveredIndex === index
                    ? '0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 10px 20px -8px rgba(0, 0, 0, 0.04)'
                    : '0 1px 3px rgba(0, 0, 0, 0.04)',
                  transform: hoveredIndex === index ? 'translateY(-4px) scale(1.02)' : 'none',
                  transitionDuration: 'var(--transition-smooth)'
                }}
              >
                <div className="mb-6 flex items-start justify-between">
                  <span 
                    className="text-xs font-medium"
                    style={{ 
                      color: 'var(--color-text-tertiary)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {principle.number}
                  </span>
                  <div 
                    className="transition-all"
                    style={{
                      color: 'var(--color-text-secondary)',
                      transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                      transitionDuration: 'var(--transition-smooth)'
                    }}
                  >
                    {principle.icon}
                  </div>
                </div>

                <h3 
                  className="mb-3 text-2xl font-light"
                  style={{ 
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {principle.title}
                </h3>
                
                <p 
                  className="leading-relaxed"
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-text)',
                    fontSize: '15px',
                    lineHeight: '1.7'
                  }}
                >
                  {principle.description}
                </p>

                <div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all"
                  style={{
                    width: hoveredIndex === index ? '100%' : '0%',
                    transitionDuration: 'var(--transition-smooth)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: 200% 50%; }
          100% { background-position: -200% 50%; }
        }
      `}</style>
    </section>
  );
}