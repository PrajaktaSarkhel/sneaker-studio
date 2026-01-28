import SneakerCard from "@/components/SneakerCard"

export default function GalleryPage() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <SneakerCard
        image="/images/sneaker-01.png"
        name="Air Flex"
        price="₹8,999"
      />
      <SneakerCard
        image="/images/sneaker-02.png"
        name="NeoKnit"
        price="₹9,499"
      />
      <SneakerCard
        image="/images/sneaker-03.png"
        name="StreetRun"
        price="₹7,999"
      />
    </div>
  )
}
