"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import DesignGallery from "@/components/DesignGallery"

export default function GalleryPage() {
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
