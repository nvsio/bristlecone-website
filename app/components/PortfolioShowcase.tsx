"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PortfolioCompany {
  id: string;
  svgPath: string;
}

const portfolioCompanies: PortfolioCompany[] = [
  { id: "01", svgPath: "/bristlecone-portfolio-01.svg" },
  { id: "02", svgPath: "/bristlecone-portfolio-02.svg" },
  { id: "03", svgPath: "/bristlecone-portfolio-03.svg" },
  { id: "04", svgPath: "/bristlecone-portfolio-04.svg" },
  { id: "05", svgPath: "/bristlecone-portfolio-05.svg" },
  { id: "06", svgPath: "/bristlecone-portfolio-06.svg" },
  { id: "07", svgPath: "/bristlecone-portfolio-07.svg" },
  { id: "08", svgPath: "/bristlecone-portfolio-08.svg" },
  { id: "09", svgPath: "/bristlecone-portfolio-09.svg" },
  { id: "10", svgPath: "/bristlecone-portfolio-10.svg" },
  { id: "11", svgPath: "/bristlecone-portfolio-11.svg" },
  { id: "12", svgPath: "/bristlecone-portfolio-12.svg" },
  { id: "13", svgPath: "/bristlecone-portfolio-13.svg" },
  { id: "14", svgPath: "/bristlecone-portfolio-14.svg" },
  { id: "15", svgPath: "/bristlecone-portfolio-15.svg" },
  { id: "16", svgPath: "/bristlecone-portfolio-16.svg" },
  { id: "17", svgPath: "/bristlecone-portfolio-17.svg" },
  { id: "18", svgPath: "/bristlecone-portfolio-18.svg" },
  { id: "19", svgPath: "/bristlecone-portfolio-19.svg" },
  { id: "20", svgPath: "/bristlecone-portfolio-20.svg" },
  { id: "21", svgPath: "/bristlecone-portfolio-21.svg" },
  { id: "22", svgPath: "/bristlecone-portfolio-22.svg" },
  { id: "23", svgPath: "/bristlecone-portfolio-23.svg" },
  { id: "24", svgPath: "/bristlecone-portfolio-24.svg" },
  { id: "25", svgPath: "/bristlecone-portfolio-25.svg" },
  { id: "26", svgPath: "/bristlecone-portfolio-26.svg" },
  { id: "27", svgPath: "/bristlecone-portfolio-27.svg" },
  { id: "28", svgPath: "/bristlecone-portfolio-28.svg" },
  { id: "29", svgPath: "/bristlecone-portfolio-29.svg" },
  { id: "30", svgPath: "/bristlecone-portfolio-30.svg" },
  { id: "31", svgPath: "/bristlecone-portfolio-31.svg" },
  { id: "32", svgPath: "/bristlecone-portfolio-32.svg" },
];

export default function PortfolioShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
          {portfolioCompanies.map((company, index) => (
            <div key={company.id} className="relative overflow-hidden rounded-xl border bg-white" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex h-32 items-center justify-center p-6">
                <div className="relative h-full w-full">
                  <Image src={company.svgPath} alt="" fill className="object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}