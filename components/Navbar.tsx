"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"


export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

if (!mounted) return null


  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Sneaker Studio" className="w-8 h-8"/>
          <span className="text-xl font-bold tracking-wide">Sneaker Studio</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link href="/gallery" className="text-sm hover:opacity-70">Gallery</Link>
          <Link href="/customizer" className="text-sm hover:opacity-70">Customize</Link>

          {/* Dark Mode Toggle */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
