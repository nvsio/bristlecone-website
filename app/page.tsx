import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        <Image
          src="/logo.png"
          alt="Bristlecone"
          fill
          priority
          className="object-contain"
        />
      </div>
    </main>
  )
}