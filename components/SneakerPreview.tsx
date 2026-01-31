"use client"

import { useState } from "react"
import "./sneaker.css"

const SHAPES = {
  airmax: {
    upper: "90px 130px 70px 50px",
    sole: "40px 60px 100px 120px",
    soleHeight: "38%",
  },
  jordan: {
    upper: "40px 40px 30px 30px",
    sole: "20px 20px 30px 30px",
    soleHeight: "32%",
  },
  yeezy: {
    upper: "120px 140px 90px 70px",
    sole: "80px 100px 120px 140px",
    soleHeight: "40%",
  },
}

interface Props {
  baseColor: string
  soleColor: string
  laceColor: string
  model: "airmax" | "jordan" | "yeezy"
  text?: string
  textPosition?: { x: number; y: number }
  onTextMove?: (pos: { x: number; y: number }) => void
}

export default function SneakerPreview({
  baseColor,
  soleColor,
  laceColor,
  model,
  text,
  textPosition,
  onTextMove,
}: Props) {
  const shape = SHAPES[model]

  const [dragging, setDragging] = useState(false)

  return (
    <div className="flex justify-center items-center">
      <div
        className="sneaker-canvas"
        onMouseMove={(e) => {
          if (!dragging || !onTextMove) return

          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()

          onTextMove({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          })
        }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
      >
        {/* UPPER */}
        <div
          className="sneaker-upper"
          style={{
            background: `linear-gradient(135deg, ${baseColor}, ${baseColor}cc)`,
            borderRadius: shape.upper,
            backgroundBlendMode: "multiply",
            opacity: 0.9,
          }}
        />

        {/* SOLE */}
        <div
          className="sneaker-sole"
          style={{
            background: `linear-gradient(180deg, ${soleColor}, ${soleColor}cc)`,
            borderRadius: shape.sole,
            height: shape.soleHeight,
            backgroundBlendMode: "multiply",
          }}
        />

        {/* LACES */}
        <div className="sneaker-laces">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="sneaker-lace"
              style={{
                background: `linear-gradient(
                  90deg,
                  ${laceColor}99,
                  ${laceColor},
                  ${laceColor}99
                )`,
              }}
            />
          ))}
        </div>

        {/* TEXT */}
        {text && (
          <div
            className="sneaker-text"
            style={{
              left: textPosition?.x ?? 120,
              top: textPosition?.y ?? 60,
            }}
            onMouseDown={() => setDragging(true)}
          >
            {text}
          </div>
        )}
      </div>
    </div>
  )
}
