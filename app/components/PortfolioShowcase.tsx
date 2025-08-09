"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioCompany {
  id: string;
  svgPath: string;
  href?: string;
}

const portfolioCompanies: PortfolioCompany[] = [
  { id: "01", svgPath: "/bristlecone-portfolio-01.svg", href: "https://example.com" },
  { id: "02", svgPath: "/bristlecone-portfolio-02.svg", href: "https://example.com" },
  { id: "03", svgPath: "/bristlecone-portfolio-03.svg", href: "https://example.com" },
  { id: "04", svgPath: "/bristlecone-portfolio-04.svg", href: "https://example.com" },
  { id: "05", svgPath: "/bristlecone-portfolio-05.svg", href: "https://example.com" },
  { id: "06", svgPath: "/bristlecone-portfolio-06.svg", href: "https://example.com" },
  { id: "07", svgPath: "/bristlecone-portfolio-07.svg", href: "https://example.com" },
  { id: "08", svgPath: "/bristlecone-portfolio-08.svg", href: "https://example.com" },
  { id: "09", svgPath: "/bristlecone-portfolio-09.svg", href: "https://example.com" },
  { id: "10", svgPath: "/bristlecone-portfolio-10.svg", href: "https://example.com" },
  { id: "11", svgPath: "/bristlecone-portfolio-11.svg", href: "https://example.com" },
  { id: "12", svgPath: "/bristlecone-portfolio-12.svg", href: "https://example.com" },
  { id: "13", svgPath: "/bristlecone-portfolio-13.svg", href: "https://example.com" },
  { id: "14", svgPath: "/bristlecone-portfolio-14.svg", href: "https://example.com" },
  { id: "15", svgPath: "/bristlecone-portfolio-15.svg", href: "https://example.com" },
  { id: "16", svgPath: "/bristlecone-portfolio-16.svg", href: "https://example.com" },
  { id: "17", svgPath: "/bristlecone-portfolio-17.svg", href: "https://example.com" },
  { id: "18", svgPath: "/bristlecone-portfolio-18.svg", href: "https://example.com" },
  { id: "19", svgPath: "/bristlecone-portfolio-19.svg", href: "https://example.com" },
  { id: "20", svgPath: "/bristlecone-portfolio-20.svg", href: "https://example.com" },
  { id: "21", svgPath: "/bristlecone-portfolio-21.svg", href: "https://example.com" },
  { id: "22", svgPath: "/bristlecone-portfolio-22.svg", href: "https://example.com" },
  { id: "23", svgPath: "/bristlecone-portfolio-23.svg", href: "https://example.com" },
  { id: "24", svgPath: "/bristlecone-portfolio-24.svg", href: "https://example.com" },
  { id: "25", svgPath: "/bristlecone-portfolio-25.svg", href: "https://example.com" },
  { id: "26", svgPath: "/bristlecone-portfolio-26.svg", href: "https://example.com" },
  { id: "27", svgPath: "/bristlecone-portfolio-27.svg", href: "https://example.com" },
  { id: "28", svgPath: "/bristlecone-portfolio-28.svg", href: "https://example.com" },
  { id: "29", svgPath: "/bristlecone-portfolio-29.svg", href: "https://example.com" },
  { id: "30", svgPath: "/bristlecone-portfolio-30.svg", href: "https://example.com" },
  { id: "31", svgPath: "/bristlecone-portfolio-31.svg", href: "https://example.com" },
  { id: "32", svgPath: "/bristlecone-portfolio-32.svg", href: "https://example.com" },
];

export default function PortfolioShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-2.5 sm:gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {portfolioCompanies.map((company, index) => (
            <motion.a
              key={company.id}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.01, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative block overflow-hidden rounded-xl border bg-white transition-colors hover:bg-gray-50"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="flex h-28 items-center justify-center p-5 sm:h-32 sm:p-6">
                <div className="relative h-full w-full">
                  <Image src={company.svgPath} alt="" fill className="object-contain" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}