"use client"

import Image from "next/image"
import { useCustomizerStore } from "@/lib/stores/customizer-store"

export default function SneakerPreview() {
  const { model, colors, material, text, textColor } =
    useCustomizerStore()

  const basePath = `/sneakers/${model}`

  return (
    <div className="relative w-full max-w-[520px] h-[280px] mx-auto bg-muted rounded-xl overflow-hidden">
      {/* Base */}
      <Image
        src={`${basePath}/base.png`}
        alt="Base"
        fill
        className="object-contain"
        style={{
          filter: `drop-shadow(0 0 0 ${colors.base})`,
        }}
      />

      {/* Sole */}
      <Image
        src={`${basePath}/sole.png`}
        alt="Sole"
        fill
        className="object-contain"
        style={{
          filter: `drop-shadow(0 0 0 ${colors.sole})`,
        }}
      />

      {/* Lace */}
      <Image
        src={`${basePath}/lace.png`}
        alt="Lace"
        fill
        className="object-contain"
        style={{
          filter: `drop-shadow(0 0 0 ${colors.lace})`,
        }}
      />

      {/* Text Engraving */}
      {text && (
        <span
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm font-semibold tracking-wide"
          style={{ color: textColor }}
        >
          {text}
        </span>
      )}

      {/* Material Tag */}
      <span className="absolute top-3 right-3 text-xs bg-black/70 text-white px-2 py-1 rounded">
        {material}
      </span>
    </div>
  )
}
