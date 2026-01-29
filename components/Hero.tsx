"use client"

import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black dark:from-neutral-950 dark:via-neutral-900 dark:to-black text-white pt-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[calc(100vh-6rem)]">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Design Sneakers
              <span className="block text-neutral-400 mt-2">That Are Truly Yours</span>
            </h2>

            <p className="mt-6 text-lg text-neutral-400 max-w-md">
              Customize colors, materials, and styles in real-time.
              Build sneakers inspired by the world's best brands.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
                  Start Designing
                </Button>
              </Link>

              <Link href="/gallery">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
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
              className="relative w-[420px] rotate-[-12deg] drop-shadow-2xl"
              alt="Sneaker"
            />
          </div>
        </div>
      </main>
    </>
  )
}