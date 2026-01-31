"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Eye, Pencil } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

type SneakerCardProps = {
  name: string
  image: string
  priceFrom: number
  onView?: () => void
  onCustomize?: () => void
}

export default function SneakerCard({
  name,
  image,
  priceFrom,
  onView,
  onCustomize
}: SneakerCardProps) {
  const [liked, setLiked] = useState(false)
  const router = useRouter()
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        group relative w-full
        sm:w-[90%] md:w-[360px] lg:w-[320px]  /* Balanced widths for grid */
        rounded-2xl bg-gradient-to-b from-zinc-900 to-black
        border border-white/10 shadow-xl overflow-hidden
      "
    >
      {/* Wishlist */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-4 right-4 z-20 text-white/70 hover:text-white"
      >
        <Heart
          size={22}
          className={liked ? "fill-red-500 text-red-500" : ""}
        />
      </button>

      {/* Image box */}
      <div
        className="
          relative m-5 rounded-xl bg-white
          aspect-[4/3] flex items-center justify-center
          overflow-hidden
        "
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-5"
        />

        {/* Hover overlay */}
        <div
          className="
            absolute inset-0 bg-black/55 opacity-0
            group-hover:opacity-100 transition
            flex items-center justify-center gap-3 px-4
          "
        >
          <button
            onClick={onView}
            className="flex items-center gap-2 bg-white text-black
                      px-4 py-2 rounded-md text-sm font-medium"
          >
            <Eye size={16} /> View
          </button>

          <button
            onClick={() => router.push("/customizer")}
            className="flex items-center gap-2 bg-white text-black
                      px-4 py-2 rounded-md text-sm font-medium hover:opacity-70"
          >
            <Pencil size={16} /> Customize
          </button>
        </div>
      </div>

      {/* Text */}
      <div className="px-5 pb-5 space-y-1.5">
        <p className="text-white text-lg font-semibold">
          {name}
        </p>
        <p className="text-sm text-white/60">
          From ₹{priceFrom.toLocaleString("en-IN")}
        </p>
      </div>
    </motion.div>
  )
}
