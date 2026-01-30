"use client"

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
}

export default function SneakerPreview({
  baseColor,
  soleColor,
  laceColor,
  model,
}: Props) {

  const shape = SHAPES[model]

  return (
    <div className="flex justify-center items-center">
      <div className="sneaker-canvas">
  
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
                background: `linear-gradient(90deg, ${laceColor}99, ${laceColor}, ${laceColor}99)`,
              }}
            />
          ))}
        </div>

      </div>

    </div>
  )
}
