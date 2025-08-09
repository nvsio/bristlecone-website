'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import PortfolioShowcase from './components/PortfolioShowcase'
import HeroCaption from './components/HeroCaption'
import AmbientConsole from './components/AmbientConsole'
import Philosophy from './components/Philosophy'
import Footer from './components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Navigation />
      <main id="main" className="relative min-h-screen overflow-hidden bg-[var(--color-canvas)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.02)] to-[rgba(0,0,0,0.01)]" />
      
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
          <div className="relative h-48 w-48 md:h-64 md:w-64">
            <div 
              className={`
                absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-50
                transition-opacity ${imageLoaded ? 'opacity-20' : 'opacity-0'}
              `}
              style={{ 
                filter: 'blur(60px)',
                transitionDuration: 'var(--transition-slow)' 
              }}
            />
            
            <div className="relative h-full w-full">
              <Image
                src="/logo.svg"
                alt="Bristlecone"
                fill
                priority
                className="object-contain transition-all"
                style={{
                  filter: imageLoaded ? 'none' : 'blur(2px)',
                  opacity: imageLoaded ? 1 : 0.3,
                  transitionDuration: 'var(--transition-smooth)'
                }}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>

        <HeroCaption />
      </div>

      <AmbientConsole />

      <div id="portfolio" className="relative mt-auto">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
        <PortfolioShowcase />
      </div>
      
      <Philosophy />
      
      <Footer />
    </main>
    </>
  )
}