"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Hero() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white">
      
      {/* Top Bar */}
      <header className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold tracking-wide">Sneaker Studio</h1>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>

          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <main className="grid md:grid-cols-2 gap-10 px-10 pt-20">
        
        {/* Text */}
        <div>
          <h2 className="text-5xl font-extrabold leading-tight">
            Design Sneakers  
            <span className="block text-neutral-400">That Are Truly Yours</span>
          </h2>

          <p className="mt-6 text-lg text-neutral-400 max-w-md">
            Customize colors, materials, and styles in real-time.  
            Build sneakers inspired by the world’s best brands.
          </p>

          <div className="mt-8 flex gap-4">
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
        <div className="flex items-center justify-center">
          <img
            src="/images/hero-sneaker.png"
            alt="Sneaker Preview"
            className="w-[420px] rotate-[-12deg] drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </main>
    </div>
  )
}
