"use client"

import { useEffect, useState } from "react"
import { useCustomizerStore } from "@/lib/stores/customizer-store"
import { Heart, Eye, Pencil } from "lucide-react"

const STORAGE_KEY = "sneaker-designs"
const WISHLIST_KEY = "wishlist-designs"

const BASE_PRICES: Record<string, number> = {
  "Air Max 90": 8999,
  "Jordan 1": 12999,
  "Yeezy Boost 350": 15999,
}

type Design = {
  id: string
  model: string
  material: string
  text?: string
  preview: string
  isBase?: boolean
  createdAt: number
}

export default function DesignGallery({ onlySaved = false }: { onlySaved?: boolean }) {
  const [designs, setDesigns] = useState<Design[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const customizer = useCustomizerStore()

  /* ---------------- Load Designs ---------------- */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      setDesigns(
        onlySaved ? parsed.filter((d: Design) => !d.isBase) : parsed
      )
    }

    const savedWishlist = localStorage.getItem(WISHLIST_KEY)
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [onlySaved])

  /* ---------------- Save Design ---------------- */
  const saveDesign = () => {
    const newDesign: Design = {
      id: crypto.randomUUID(),
      model: customizer.model,
      material: customizer.material,
      text: customizer.text,
      preview: `/sneakers/${customizer.model.toLowerCase()}/base.png`,
      isBase: false,
      createdAt: Date.now(),
    }

    const updated = [...designs, newDesign]
    setDesigns(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  /* ---------------- Wishlist ---------------- */
  const toggleWishlist = (id: string) => {
    const updated = wishlist.includes(id)
      ? wishlist.filter((w) => w !== id)
      : [...wishlist, id]

    setWishlist(updated)
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated))
  }

  /* ---------------- Delete ---------------- */
  const deleteDesign = (id: string) => {
    const updated = designs.filter((d) => d.id !== id)
    setDesigns(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  return (
    <div className="space-y-8">
      {!onlySaved && (
        <button
          onClick={saveDesign}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Save Current Design
        </button>
      )}

      {!designs.length && (
        <p className="text-sm text-muted-foreground">
          No designs saved yet.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {designs.map((d) => {
          const isLiked = wishlist.includes(d.id)

          return (
            <div
              key={d.id}
              className="group relative border rounded-xl p-4 bg-background overflow-hidden hover:shadow-xl transition"
            >
              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(d.id)}
                className="absolute top-4 right-4 z-10"
              >
                <Heart
                  size={18}
                  className={`transition ${
                    isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"
                  }`}
                />
              </button>

              {/* Image */}
              <img
                src={d.preview}
                alt={d.model}
                className="rounded-lg bg-white mb-4"
              />

              {/* Info */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">
                  {d.model}
                </h3>

                <p className="text-sm text-muted-foreground">
                  ₹{BASE_PRICES[d.model] ?? 9999}
                </p>

                <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-muted">
                  {d.isBase ? "BASE DESIGN" : "CUSTOM"}
                </span>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded text-sm">
                  <Eye size={16} />
                  View
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded text-sm">
                  <Pencil size={16} />
                  Customize
                </button>
              </div>

              {/* Delete */}
              {!d.isBase && (
                <button
                  className="mt-3 text-xs text-red-500 hover:underline"
                  onClick={() => deleteDesign(d.id)}
                >
                  Delete
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
