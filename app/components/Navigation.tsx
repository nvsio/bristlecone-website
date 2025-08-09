"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Philosophy", href: "#philosophy" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header 
      className="fixed left-0 right-0 top-0 z-50 transition-all"
      style={{
        transitionDuration: 'var(--transition-smooth)',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        background: scrolled 
          ? 'rgba(250, 250, 250, 0.72)' 
          : 'transparent',
        borderBottom: scrolled 
          ? '1px solid var(--color-border)' 
          : '1px solid transparent'
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link 
          href="/"
          className="group flex items-center gap-3 transition-all"
          style={{ transitionDuration: 'var(--transition-fast)' }}
        >
          <div 
            className="flex h-10 w-10 items-center justify-center rounded-full transition-all"
            style={{
              background: 'var(--color-text-primary)',
              transform: 'scale(1)',
              transitionDuration: 'var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) rotate(5deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
          <span 
            className="text-lg font-light tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.01em'
            }}
          >
            Bristlecone
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-4 py-2 text-sm transition-all"
                style={{
                  fontFamily: 'var(--font-text)',
                  color: isActive 
                    ? 'var(--color-text-primary)' 
                    : 'var(--color-text-secondary)',
                  fontWeight: isActive ? 500 : 400,
                  transitionDuration: 'var(--transition-fast)'
                }}
                aria-current={isActive ? 'page' : undefined}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--color-text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                  }
                }}
              >
                {item.label}
                {isActive && (
                  <div 
                    className="absolute bottom-0 left-4 right-4 h-px"
                    style={{
                      background: 'var(--color-text-primary)',
                      animation: 'expand 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full transition-all md:hidden"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            transitionDuration: 'var(--transition-fast)'
          }}
          onClick={() => {
            // Mobile menu logic would go here
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path 
              d="M3 12H21M3 6H21M3 18H21" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      <style jsx>{`
        @keyframes expand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </header>
  );
}