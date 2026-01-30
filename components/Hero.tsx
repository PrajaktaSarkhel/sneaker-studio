"use client"

import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-black dark:text-white pt-24">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center min-h-[calc(100vh-6rem)]">

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Design Sneakers
              <span className="block text-gray-500 dark:text-gray-400 mt-2">That Are Truly Yours</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-md">
              Customize colors, materials, and styles in real-time.
              Build sneakers inspired by the world's best brands.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                >
                  Start Designing
                </Button>
              </Link>

              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>

          {/* Sneaker Visual */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-glow dark:from-purple-700/30 dark:to-pink-700/30" />
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
