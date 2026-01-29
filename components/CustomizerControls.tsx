"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

interface CustomizerControlsProps {
  onColorChange: (color: string) => void
}

export default function CustomizerControls({ onColorChange }: CustomizerControlsProps) {
  const [value, setValue] = useState(50)

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm mb-2">Accent Intensity</p>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          onValueChange={(v) => setValue(v[0])}
        />
      </div>

      <div className="flex gap-3">
        {["#111111", "#ff3b30", "#2563eb", "#16a34a"].map((c) => (
          <button
            key={c}
            onClick={() => onColorChange(c)}
            className="w-8 h-8 rounded-full border"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  )
}
