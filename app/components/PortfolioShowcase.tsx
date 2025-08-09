"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface PortfolioCompany {
  id: string;
  name: string;
  status?: string;
  description?: string;
  svgPath: string;
  category: "active" | "exited" | "unicorn";
}

interface PortfolioCompanyExtended extends PortfolioCompany {
  url?: string;
}

const portfolioCompanies: PortfolioCompanyExtended[] = [
  { id: "anthropic", name: "Anthropic", svgPath: "/bristlecone-portfolio-01.svg", category: "unicorn", description: "AI Safety & Research", url: "https://angellist.com" },
  { id: "openai", name: "OpenAI", svgPath: "/bristlecone-portfolio-02.svg", category: "unicorn", description: "Artificial General Intelligence", url: "https://colossal.com" },
  { id: "nova", name: "Nova", status: "Acquired by AngelList", svgPath: "/bristlecone-portfolio-03.svg", category: "exited", url: "https://hadrian.co" },
  { id: "dharma", name: "Dharma", status: "Acquired by OpenSea", svgPath: "/bristlecone-portfolio-04.svg", category: "exited", url: "https://paradromics.com" },
  { id: "poparazzi", name: "Poparazzi", status: "Acquired by Meta", svgPath: "/bristlecone-portfolio-05.svg", category: "exited", url: "https://varda.com" },
  { id: "join", name: "Join", status: "Acquired by Eco", svgPath: "/bristlecone-portfolio-06.svg", category: "exited", url: "https://www.regentcraft.com/" },
  { id: "rareart", name: "R.A.R.E Art", status: "Acquired by Coinbase", svgPath: "/bristlecone-portfolio-07.svg", category: "exited", url: "https://rain.ai" },
  { id: "ftw", name: "FTW", status: "Acquired by Samsung", svgPath: "/bristlecone-portfolio-08.svg", category: "exited", url: "https://codex.xyz" },
  { id: "circle", name: "Circle", status: "NYSE: CRCL", svgPath: "/bristlecone-portfolio-09.svg", category: "unicorn" },
  { id: "sphere", name: "Sphere", svgPath: "/bristlecone-portfolio-10.svg", category: "active", description: "Social Networking Reimagined" },
  { id: "codex", name: "Codex", svgPath: "/bristlecone-portfolio-11.svg", category: "active", description: "Developer Infrastructure", url: "https://lore.xyz" },
  { id: "rainai", name: "Rain AI", svgPath: "/bristlecone-portfolio-12.svg", category: "active", description: "Neuromorphic Computing", url: "https://superplastic.co" },
  { id: "regent", name: "Regent", svgPath: "/bristlecone-portfolio-13.svg", category: "active", description: "Autonomous Navigation", url: "https://blockparty.game/" },
  { id: "varda", name: "Varda", svgPath: "/bristlecone-portfolio-14.svg", category: "active", description: "Space Manufacturing", url: "https://immieats.com" },
  { id: "paradromics", name: "Paradromics", svgPath: "/bristlecone-portfolio-15.svg", category: "active", description: "Brain-Computer Interface", url: "https://beehiiv.com" },
  { id: "colossal", name: "Colossal", svgPath: "/bristlecone-portfolio-16.svg", category: "active", description: "De-extinction & Conservation", url: "https://openai.com" },
  { id: "vial", name: "Vial", svgPath: "/bristlecone-portfolio-17.svg", category: "active", description: "Clinical Trial Technology", url: "https://anthropic.com" },
  { id: "tavus", name: "Tavus", svgPath: "/bristlecone-portfolio-18.svg", category: "active", description: "AI Video Generation", url: "https://tavus.io" },
  { id: "beehiv", name: "Beehiv", svgPath: "/bristlecone-portfolio-19.svg", category: "active", description: "Newsletter Platform", url: "https://vial.com" },
  { id: "immi", name: "Immi", svgPath: "/bristlecone-portfolio-20.svg", category: "active", description: "Instant Ramen Reimagined", url: "https://sphere.net" },
  { id: "infinitegames", name: "Infinite Games", svgPath: "/bristlecone-portfolio-21.svg", category: "active", description: "Gaming Studios", url: "https://circle.com" },
  { id: "superplastic", name: "Superplastic", svgPath: "/bristlecone-portfolio-22.svg", category: "active", description: "Synthetic Celebrities", url: "https://samsung.com" },
  { id: "lore", name: "Lore", svgPath: "/bristlecone-portfolio-23.svg", category: "active", description: "Immersive Storytelling", url: "https://samsung.com" },
  { id: "puma", name: "Puma", svgPath: "/bristlecone-portfolio-24.svg", category: "active", description: "Browser Technology", url: "https://coinbase.com" },
  { id: "fomo", name: "Fomo", svgPath: "/bristlecone-portfolio-25.svg", category: "active", description: "Social Commerce", url: "https://coinbase.com" },
  { id: "company26", name: "Stealth AI", svgPath: "/bristlecone-portfolio-26.svg", category: "active", description: "Confidential", url: "https://bend.eco" },
  { id: "company27", name: "Quantum Labs", svgPath: "/bristlecone-portfolio-27.svg", category: "active", description: "Quantum Computing", url: "https://bend.eco" },
  { id: "company28", name: "Nexus Bio", svgPath: "/bristlecone-portfolio-28.svg", category: "active", description: "Synthetic Biology", url: "https://meta.com" },
  { id: "company29", name: "Orbital", svgPath: "/bristlecone-portfolio-29.svg", category: "active", description: "Space Infrastructure", url: "https://meta.com" },
  { id: "company30", name: "AngelList Ventures", svgPath: "/bristlecone-portfolio-30.svg", category: "unicorn", description: "Venture Platform", url: "https://angellist.com" },
  { id: "company31", name: "OpenSea", svgPath: "/bristlecone-portfolio-31.svg", category: "unicorn", description: "NFT Marketplace", url: "https://opensea.com" },
  { id: "company32", name: "OpenSea Pro", svgPath: "/bristlecone-portfolio-32.svg", category: "unicorn", description: "Advanced NFT Trading", url: "https://opensea.com" }
];

export default function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "unicorn" | "exited" | "active">("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredCompanies = portfolioCompanies.filter(company => 
    selectedCategory === "all" || company.category === selectedCategory
  );

  const categories = [
    { id: "all", label: "All Companies", count: portfolioCompanies.length },
    { id: "unicorn", label: "Unicorns", count: portfolioCompanies.filter(c => c.category === "unicorn").length },
    { id: "exited", label: "Exits", count: portfolioCompanies.filter(c => c.category === "exited").length },
    { id: "active", label: "Active", count: portfolioCompanies.filter(c => c.category === "active").length }
  ];

  return (
    <section 
      ref={containerRef}
      className={`
        relative w-full transition-all
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ transitionDuration: '800ms' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        
        <div className="mb-20 text-center">
          <h2 
            className="mb-3 text-sm font-medium uppercase tracking-widest"
            style={{ 
              color: 'var(--color-text-tertiary)',
              letterSpacing: '0.15em'
            }}
          >
            Portfolio
          </h2>
          <p 
            className="mx-auto max-w-2xl text-2xl font-light leading-relaxed"
            style={{ 
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-display)'
            }}
          >
            Some of the teams we've backed early
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div 
            className="inline-flex rounded-full p-1"
            style={{ 
              background: 'var(--color-surface)',
              boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.04)'
            }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as typeof selectedCategory)}
                className={`
                  relative px-6 py-2 text-sm font-medium transition-all
                  ${selectedCategory === category.id 
                    ? 'text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
                style={{
                  borderRadius: '9999px',
                  transitionDuration: 'var(--transition-fast)'
                }}
              >
                {selectedCategory === category.id && (
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      background: 'var(--color-text-primary)',
                      borderRadius: '9999px'
                    }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {category.label}
                  <span 
                    className={`
                      text-xs
                      ${selectedCategory === category.id ? 'opacity-70' : 'opacity-50'}
                    `}
                  >
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
          }}
        >
          {filteredCompanies.map((company, index) => {
            const CompanyWrapper = 'div';
            const wrapperProps = { className: "group relative" } as const;
            
            return (
              <CompanyWrapper
                key={company.id}
                {...wrapperProps}
                onMouseEnter={() => setHoveredId(company.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  animation: `reveal ${400 + index * 40}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                  opacity: 0,
                  textDecoration: 'none'
                }}
              >
              <div
                className="relative overflow-hidden transition-all"
                style={{
                  borderRadius: 'var(--radius-large)',
                  background: hoveredId === company.id 
                    ? 'linear-gradient(135deg, var(--color-pure) 0%, var(--color-surface) 100%)'
                    : 'var(--color-pure)',
                  boxShadow: hoveredId === company.id
                    ? '0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 10px 20px -8px rgba(0, 0, 0, 0.04)'
                    : '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
                  transform: hoveredId === company.id ? 'translateY(-4px) scale(1.02)' : 'none',
                  transitionDuration: 'var(--transition-smooth)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div className="flex h-40 items-center justify-center p-8">
                  <div 
                    className="relative h-full w-full transition-all"
                    style={{
                      transform: hoveredId === company.id ? 'scale(1.05)' : 'scale(1)',
                      transitionDuration: 'var(--transition-smooth)'
                    }}
                  >
                    <Image
                      src={company.svgPath}
                      alt={company.name}
                      fill
                      className="object-contain"
                      style={{
                        filter: hoveredId === company.id 
                          ? 'saturate(1.1) contrast(1.05)' 
                          : 'saturate(0.95)',
                        opacity: hoveredId === company.id ? 1 : 0.85,
                        transitionDuration: 'var(--transition-fast)'
                      }}
                    />
                  </div>
                </div>
                
                <div 
                  className="border-t px-6 py-4"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <h3 
                    className="mb-1 text-base font-medium"
                    style={{ 
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    {company.name}
                  </h3>
                  {(company.status || company.description) && (
                    <p 
                      className="text-sm"
                      style={{ 
                        color: 'var(--color-text-tertiary)',
                        fontFamily: 'var(--font-text)'
                      }}
                    >
                      {company.status || company.description}
                    </p>
                  )}
                </div>

                {company.category === "unicorn" && (
                  <div 
                    className="absolute right-4 top-4"
                    style={{
                      opacity: hoveredId === company.id ? 1 : 0.7,
                      transitionDuration: 'var(--transition-fast)'
                    }}
                  >
                    <div 
                      className="flex h-8 w-8 items-center justify-center rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                        boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)'
                      }}
                    >
                      <span className="text-xs">🦄</span>
                    </div>
                  </div>
                )}

                {company.category === "exited" && (
                  <div 
                    className="absolute right-4 top-4"
                    style={{
                      opacity: hoveredId === company.id ? 1 : 0.7,
                      transitionDuration: 'var(--transition-fast)'
                    }}
                  >
                    <div 
                      className="flex h-8 w-8 items-center justify-center rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </CompanyWrapper>
          );
          })}
        </div>
      </div>
    </section>
  );
}