import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SneakerCard from "@/components/SneakerCard"

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-3xl font-bold mb-8">
          Design Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </main>

      <Footer />
    </div>
  )
}
