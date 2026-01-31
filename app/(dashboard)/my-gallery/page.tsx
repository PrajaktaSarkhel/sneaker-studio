"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SavedDesign {
  id: string
  model: "airmax" | "jordan" | "yeezy" | string
  customizations: {
    base: { color: string; material: string }
    sole: { color: string; material: string }
    lace: { color: string; material: string }
    text: string
  }
  date: string // ISO string
}

const STORAGE_KEY = "my-sneaker-designs"

const MODEL_NAMES: Record<string, string> = {
  airmax: "Air Max 90",
  jordan: "Jordan 1",
  yeezy: "Yeezy Boost",
}

export default function MyGalleryPage() {
  const [designs, setDesigns] = useState<SavedDesign[]>([])

  const loadDesigns = () => {
    if (typeof window === "undefined") return
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setDesigns([])
      return
    }
    const parsed: SavedDesign[] = JSON.parse(stored)
    const validDesigns = parsed.filter(
      (d) =>
        d.model &&
        d.customizations?.base &&
        d.customizations?.sole &&
        d.customizations?.lace &&
        d.date
    )
    setDesigns(validDesigns)
  }

  useEffect(() => {
    loadDesigns()
  }, [])

  const deleteDesign = (id: string) => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return
    const parsed: SavedDesign[] = JSON.parse(stored)
    const updated = parsed.filter((d) => d.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setDesigns(updated)
  }

  const formatDateTime = (isoString: string) => {
    const dateObj = new Date(isoString)
    return dateObj.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-8 py-24">
        <h1 className="text-3xl font-bold mb-10 text-center">
          My Saved Designs
        </h1>

        {designs.length === 0 ? (
          <p className="text-center text-neutral-500">
            You haven’t saved any designs yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designs.map((design) => (
              <Card
                key={design.id}
                className="p-6 border border-neutral-800
                  bg-purple-500/10 dark:bg-purple-600/20 backdrop-blur-sm
                   dark:text-white rounded-xl"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {MODEL_NAMES[design.model] ?? design.model ?? "Unknown Model"}
                </h2>

                <p className="text-sm dark:text-neutral-300 mb-4">
                  Saved on {formatDateTime(design.date)}
                </p>

                <div className="space-y-2 text-sm mb-4">
                  <div>
                    <span className="font-medium">Base:</span>{" "}
                    <span style={{ color: design.customizations?.base?.color || "inherit" }}>
                      {design.customizations?.base?.color || "N/A"}
                    </span>{" "}
                    ({design.customizations?.base?.material || "N/A"})
                  </div>

                  <div>
                    <span className="font-medium">Sole:</span>{" "}
                    <span style={{ color: design.customizations?.sole?.color || "inherit" }}>
                      {design.customizations?.sole?.color || "N/A"}
                    </span>{" "}
                    ({design.customizations?.sole?.material || "N/A"})
                  </div>

                  <div>
                    <span className="font-medium">Lace:</span>{" "}
                    <span style={{ color: design.customizations?.lace?.color || "inherit" }}>
                      {design.customizations?.lace?.color || "N/A"}
                    </span>{" "}
                    ({design.customizations?.lace?.material || "N/A"})
                  </div>

                  {design.customizations?.text && (
                    <div>
                      <span className="font-medium">Text:</span>{" "}
                      “{design.customizations.text}”
                    </div>
                  )}
                </div>

                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-full"
                  onClick={() => deleteDesign(design.id)}
                >
                  Delete
                </Button>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
