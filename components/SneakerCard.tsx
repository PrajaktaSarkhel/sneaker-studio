import { Card, CardContent } from "@/components/ui/card"

type SneakerCardProps = {
  image: string
  name: string
  price: string
}

export default function SneakerCard({ image, name, price }: SneakerCardProps) {
  return (
    <Card className="group hover:scale-[1.03] transition-transform duration-300">
      <CardContent className="p-4">
        <img
          src={image}
          alt={name}
          className="w-full rounded-lg object-contain"
        />

        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-neutral-500">{price}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
