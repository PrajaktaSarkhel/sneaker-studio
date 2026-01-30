"use client"

import "./sneaker.css"

interface Props {
  baseColor: string
  soleColor: string
  laceColor: string
}

export default function SneakerPreview({
  baseColor,
  soleColor,
  laceColor,
}: Props) {
  return (
    <div className="flex justify-center items-center">
      <div className="sneaker-canvas">
        {/* Upper */}
        <div
          className="sneaker-upper"
          style={{
            background: `linear-gradient(135deg, ${baseColor}, ${baseColor}cc)`,
          }}
        />

        {/* Sole */}
        <div
          className="sneaker-sole"
          style={{
            background: `linear-gradient(180deg, ${soleColor}, ${soleColor}cc)`,
          }}
        />

        {/* Laces */}
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
      </div>
    </div>
  )
}
