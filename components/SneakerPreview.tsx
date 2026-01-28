"use client"

import Image from "next/image"

export default function SneakerPreview({ color }: { color: string }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-8 flex justify-center">
      <div
        className="relative w-[420px] h-[240px]"
        style={{
          filter: `drop-shadow(0 30px 30px ${color}55)`
        }}
      >
        <Image
          src="/images/sneaker-01.png"
          alt="Sneaker"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
