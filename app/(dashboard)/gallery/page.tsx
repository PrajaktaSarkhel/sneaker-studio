"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import DesignGallery from "@/components/DesignGallery"

const STORAGE_KEY = "sneaker-designs"

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const existing = localStorage.getItem(STORAGE_KEY)
    if (existing) return

    const baseDesigns = [
      {
        id: "base-airmax",
        product: "Air Max 90",
        preview: "/sneakers/air-max/base.png",
        isBase: true,
        customizations: {
          upper: { color: "#ff0000", material: "leather" },
          sole: { color: "#ffffff", material: "rubber" },
          laces: { color: "#000000", material: "cotton" },
          text: ""
        },
        createdAt: Date.now()
      },
      {
        id: "base-jordan",
        product: "Jordan 1",
        preview: "/sneakers/jordan/base.png",
        isBase: true,
        customizations: {
          upper: { color: "#111111", material: "leather" },
          sole: { color: "#ffffff", material: "rubber" },
          laces: { color: "#ffffff", material: "cotton" },
          text: ""
        },
        createdAt: Date.now()
      },
      {
        id: "base-yeezy",
        product: "Yeezy Boost 350",
        preview: "/sneakers/yeezy/base.png",
        isBase: true,
        customizations: {
          upper: { color: "#888888", material: "mesh" },
          sole: { color: "#eeeeee", material: "foam" },
          laces: { color: "#888888", material: "cotton" },
          text: ""
        },
        createdAt: Date.now()
      }
    ]

    localStorage.setItem(STORAGE_KEY, JSON.stringify(baseDesigns))
  }, [])

  // 🚫 Prevent hydration mismatch
  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-3xl font-bold mb-8">
          Your Custom Designs
        </h1>

        <DesignGallery />
      </main>

      <Footer />
    </div>
  )
}
