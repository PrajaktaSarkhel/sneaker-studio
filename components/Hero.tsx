"use client"

import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center py-24">

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
                  className="
                    bg-purple-600/20 text-purple-400
                    border border-purple-500/40
                    hover:bg-purple-500 hover:text-white
                    shadow-[0_0_30px_rgba(168,85,247,0.35)]
                  "
                >
                  View Gallery
                </Button>
              </Link>


            </div>
          </div>

          {/* Sneaker Visual */}
          <div className="relative flex items-center justify-center group">
            
            {/* Glow */}
            <div
              className="
                absolute w-96 h-96 rounded-full blur-3xl
                bg-purple-500/30
                dark:bg-purple-600/30
                transition-all duration-500
                group-hover:scale-110
              "
            />

            {/* Shoe */}
            <img
              src="/images/hero-sneaker.png"
              alt="Sneaker"
              className="
                relative
                w-[480px]
                rotate-[-18deg]
                animate-float
                drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]
                transition-transform duration-500
                group-hover:rotate-[-14deg]
                group-hover:translate-y-[-6px]
              "
            />
          </div>

        </div>
      </main>
    </>
  )
}
