"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerSections = {
  company: {
    title: "Company",
    links: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Philosophy", href: "#philosophy" },
    ]
  },
  connect: {
    title: "Connect",
    links: [
      { label: "Twitter", href: "https://twitter.com/bristlecone", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/company/bristlecone", external: true },
      { label: "AngelList", href: "https://angellist.com/bristlecone", external: true },
      { label: "Email", href: "mailto:hello@bristlecone.vc", external: true }
    ]
  },
  resources: {
    title: "Resources",
    links: []
  }
};

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-canvas) 0%, var(--color-surface) 100%)',
        borderTop: '1px solid var(--color-border)'
      }}
    >
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 100%, rgba(0, 113, 227, 0.08) 0%, transparent 50%),
                             radial-gradient(circle at 75% 0%, rgba(0, 113, 227, 0.08) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-6">
              <div 
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: 'var(--color-text-primary)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M12 2L2 7L12 12L22 7L12 2Z" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 17L12 22L22 17" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 12L12 17L22 12" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            <h3 
              className="mb-2 text-xl font-light"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.01em'
              }}
            >
              Bristlecone
            </h3>
            
            <p 
              className="text-sm leading-relaxed"
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-text)'
              }}
            >
              Quiet capital for very long horizons.
            </p>
          </div>

          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h4 
                className="mb-4 text-xs font-medium uppercase tracking-widest"
                style={{
                  color: 'var(--color-text-tertiary)',
                  letterSpacing: '0.1em'
                }}
              >
                {section.title}
              </h4>
              
              <ul className="space-y-3">
                {section.links.map((link) => {
                  const LinkComponent = 'external' in link && link.external ? 'a' : Link;
                  const linkProps = 'external' in link && link.external 
                    ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
                    : { href: link.href };
                    
                  return (
                    <li key={link.label}>
                      <LinkComponent
                        {...linkProps}
                        className="group inline-flex items-center gap-1 text-sm transition-all"
                        style={{
                          color: hoveredLink === link.label 
                            ? 'var(--color-text-primary)' 
                            : 'var(--color-text-secondary)',
                          transitionDuration: 'var(--transition-fast)'
                        }}
                        onMouseEnter={() => setHoveredLink(link.label)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span>{link.label}</span>
                        {'external' in link && link.external && (
                          <svg 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="none"
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            style={{ transitionDuration: 'var(--transition-fast)' }}
                          >
                            <path 
                              d="M7 17L17 7M17 7H7M17 7V17" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </LinkComponent>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p 
            className="text-sm"
            style={{
              color: 'var(--color-text-tertiary)',
              fontFamily: 'var(--font-text)'
            }}
          >
            © {currentYear} Bristlecone Partners. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <div 
              className="flex items-center gap-2 text-sm"
              style={{
                color: 'var(--color-text-tertiary)',
                fontFamily: 'var(--font-text)'
              }}
            >
              <span>Crafted in</span>
              <span className="font-medium">San Francisco</span>
              <span 
                className="inline-block"
                style={{ 
                  animation: 'gentle-float 3s ease-in-out infinite',
                  fontSize: '16px'
                }}
              >
                🌉
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
      `}</style>
    </footer>
  );
}