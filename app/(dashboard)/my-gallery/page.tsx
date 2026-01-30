"use client"
export {}
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import DesignGallery from "@/components/DesignGallery"

export default function MyGalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-3xl font-bold mb-8">
          My Saved Designs
        </h1>

        <DesignGallery onlySaved />
      </main>

      <Footer />
    </div>
  )
}
