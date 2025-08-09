'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import PortfolioShowcase from './components/PortfolioShowcase'
import Philosophy from './components/Philosophy'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <main id="main" className="relative min-h-screen overflow-hidden bg-[var(--color-canvas)]">
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div 
          className={`
            relative mb-12 transition-all
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          style={{
            transitionDuration: 'var(--transition-slow)',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <div className="relative h-40 w-40 sm:h-56 sm:w-56">
            <div className="relative h-full w-full">
              <Image
                src="/logo.svg"
                alt="Bristlecone"
                fill
                priority
                className="object-contain transition-all"
                style={{
                  filter: imageLoaded ? 'none' : 'blur(1px)',
                  opacity: imageLoaded ? 1 : 0.4,
                  transitionDuration: '800ms'
                }}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-6 sm:mt-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
        <PortfolioShowcase />
      </div>
      
      <div className="mt-4 sm:mt-6">
        <Philosophy />
      </div>
      
      {/* Footer removed by request */}
    </main>
    </>
  )
}