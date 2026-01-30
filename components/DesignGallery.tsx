"use client"

export {}

import { useCustomizerStore } from "@/lib/stores/customizer-store"
import { useState } from "react"

export default function DesignGallery() {
  const [designs, setDesigns] = useState<any[]>([])
  const state = useCustomizerStore()

  return (
    <div className="space-y-6">
      <button
        onClick={() => setDesigns((prev) => [...prev, state])}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Save Current Design
      </button>

      {!designs.length && (
        <p className="text-sm text-muted-foreground">
          No designs saved yet.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {designs.map((d, i) => (
          <div key={i} className="border rounded p-4 text-sm">
            <p><b>Model:</b> {d.model}</p>
            <p><b>Material:</b> {d.material}</p>
            <p><b>Text:</b> {d.text || "—"}</p>
            <button
              className="mt-2 text-red-500 text-xs"
              onClick={() =>
                setDesigns((prev) => prev.filter((_, idx) => idx !== i))
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
