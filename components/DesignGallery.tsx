"use client"

import SneakerCard from "@/components/SneakerCard"

const BASE_SNEAKERS = [
  {
    id: "air-max",
    name: "Air Max 90",
    image: "/sneakers/air-max/base.png",
    priceFrom: 8999
  },
  {
    id: "jordan-1",
    name: "Jordan 1 High",
    image: "/sneakers/jordan/base.png",
    priceFrom: 10999
  },
  {
    id: "yeezy",
    name: "Yeezy Boost 350",
    image: "/sneakers/yeezy/base.png",
    priceFrom: 12999
  }
]

export default function DesignGallery() {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 justify-items-center">
      {BASE_SNEAKERS.map((sneaker) => (
        <SneakerCard
          key={sneaker.id}
          name={sneaker.name}
          image={sneaker.image}
          priceFrom={sneaker.priceFrom}
          onView={() => console.log("View", sneaker.name)}
          onCustomize={() => console.log("Customize", sneaker.name)}
        />
      ))}
    </div>
  )
}
