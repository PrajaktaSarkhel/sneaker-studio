"use client"

import { useState } from "react"
import SneakerPreview from "@/components/SneakerPreview"
import CustomizerControls from "@/components/CustomizerControls"

export default function CustomizerPage() {
  const [color, setColor] = useState("#ff0000")

  return (
    <div className="grid md:grid-cols-2 gap-8 p-8">
      
      {/* LEFT: Live Preview */}
      <SneakerPreview color={color} />

      {/* RIGHT: Controls */}
      <CustomizerControls onColorChange={setColor} />

    </div>
  )
}
