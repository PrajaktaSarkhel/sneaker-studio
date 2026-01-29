"use client"

import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white">
      <Navbar />

      <main className="grid md:grid-cols-2 gap-10 px-10 pt-32 md:pt-40">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Design Sneakers
            <span className="block text-neutral-400 mt-2">That Are Truly Yours</span>
          </h2>

          <p className="mt-6 text-lg text-neutral-400 max-w-md">
            Customize colors, materials, and styles in real-time.
            Build sneakers inspired by the world’s best brands.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
                Start Designing
              </Button>
            </Link>

            <Link href="/gallery">
              <Button size="lg" variant="outline">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>

        {/* Sneaker Visual */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-glow" />
          <img
            src="/images/hero-sneaker.png"
            className="relative w-[420px] rotate-[-12deg]"
            alt="Sneaker"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
