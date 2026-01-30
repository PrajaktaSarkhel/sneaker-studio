"use client"

import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import DesignGallery from "@/components/DesignGallery"

const STORAGE_KEY = "sneaker-designs"

export default function GalleryPage() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const existing = localStorage.getItem(STORAGE_KEY)
    if (existing) return

    const baseDesigns = [
      {
        id: "air-max-90",
        name: "Air Max 90",
        priceFrom: 8999,
        preview: "/sneakers/air-max/base.png",
        isBase: true,
        liked: false,
      },
      {
        id: "jordan-1",
        name: "Jordan 1 High",
        priceFrom: 10999,
        preview: "/sneakers/jordan/base.png",
        isBase: true,
        liked: false,
      },
      {
        id: "yeezy-350",
        name: "Yeezy Boost 350",
        priceFrom: 12999,
        preview: "/sneakers/yeezy/base.png",
        isBase: true,
        liked: false,
      },
    ]

    localStorage.setItem(STORAGE_KEY, JSON.stringify(baseDesigns))
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Your Custom Designs
        </h1>

        <DesignGallery />
      </main>

      <Footer />
    </div>
  )
}
