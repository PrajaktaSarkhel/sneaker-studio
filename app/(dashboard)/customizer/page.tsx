"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import SneakerPreview from "@/components/SneakerPreview"
import { Home, Save, RotateCcw, LogOut } from "lucide-react"
import Link from "next/link"

interface Customization {
  base: { color: string; material: string }
  sole: { color: string; material: string }
  lace: { color: string; material: string }
  text: string
}


export default function CustomizerPage() {
  const router = useRouter()

  // ⚡ All hooks at the top – never conditional
  const [authChecked, setAuthChecked] = useState(false)
  const [activePart, setActivePart] = useState<"base" | "sole" | "lace">("base")
  const [activeTab, setActiveTab] = useState<"colors" | "materials" | "text">("colors")
  const [selectedModel, setSelectedModel] = useState<"airmax" | "jordan" | "yeezy">("airmax")
  const [customizations, setCustomizations] = useState<Customization>({
    base: { color: "#FF0000", material: "leather" },
    sole: { color: "#FFFFFF", material: "rubber" },
    lace: { color: "#000000", material: "cotton" },
    text: ""
  })
  const [textInput, setTextInput] = useState("")
  const [savedDesigns, setSavedDesigns] = useState<any[]>([])

  const products = ["Air Max 90", "Jordan 1", "Yeezy Boost 350"]
  const colors = ["#FF0000","#0000FF","#000000","#FFFFFF","#00FF00","#FFFF00","#FF00FF","#FFA500","#8B4513","#808080"]
  const materials = {
    base: ["leather", "canvas", "suede", "mesh"],
    sole: ["rubber", "foam", "gel"],
    lace: ["cotton", "polyester", "waxed"]
  }

  // 🔒 Auth check
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    if (!isLoggedIn) {
      router.replace("/login")
    } else {
      setAuthChecked(true)
    }
    const stored = localStorage.getItem("sneaker-designs")
    if (stored) {
      setSavedDesigns(JSON.parse(stored))
    }
  }, [router])

  // Wait until auth is verified
  if (!authChecked) return null

  // Update functions
  const updateColor = (color: string) => setCustomizations({ ...customizations, [activePart]: { ...customizations[activePart], color } })
  const updateMaterial = (material: string) => setCustomizations({ ...customizations, [activePart]: { ...customizations[activePart], material } })
  const applyText = () => setCustomizations({ ...customizations, text: textInput })

  const saveDesign = () => {
    const newDesign = {
      id: Date.now().toString(),
      customizations: { ...customizations },
      date: new Date().toLocaleDateString()
    }
    const saved = [...savedDesigns, newDesign]
    setSavedDesigns(saved)
    localStorage.setItem("sneaker-designs", JSON.stringify(saved))
    alert("Design saved successfully! 🎉")
  }

  const resetDesign = () => {
    setCustomizations({
      base: { color: "#FF0000", material: "leather" },
      sole: { color: "#FFFFFF", material: "rubber" },
      lace: { color: "#000000", material: "cotton" },
      text: ""
    })
    setTextInput("")
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.replace("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Button variant="ghost" size="icon"><Home className="w-5 h-5" /></Button>
            </Link>
            <h1 className="text-2xl font-bold">Sneaker Customizer</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/gallery">
              <Button variant="outline">My Gallery</Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-[1800px] mx-auto p-8">
        <div className="grid lg:grid-cols-[300px_1fr_350px] gap-6">
          
          {/* LEFT: Product Selection & Parts */}
          <Card className="p-6 bg-neutral-900 border-neutral-800 h-fit">
            <h2 className="text-lg font-bold mb-4">👟 Select Model</h2>
            <div className="space-y-3">
              {[
                { id: "airmax", label: "Nike Air Max" },
                { id: "jordan", label: "Jordan 1" },
                { id: "yeezy", label: "Yeezy Boost" },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id as "airmax" | "jordan" | "yeezy")}
                  className={`w-full p-4 rounded-lg font-semibold transition-all ${
                    selectedModel === m.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>


            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Customize Part</h3>
              <div className="space-y-2">
                {(["base","sole","lace"] as const).map(part => (
                  <button
                    key={part}
                    onClick={() => setActivePart(part)}
                    className={`w-full p-3 rounded-lg text-left font-medium capitalize transition-all ${
                      activePart === part ? "bg-purple-600 text-white" : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                    }`}
                  >
                    {part}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* CENTER: Live Preview */}
          <Card className="p-8 bg-neutral-900 border-neutral-800">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              👁️ Live Preview
            </h2>

            <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-12 min-h-[400px] flex items-center justify-center overflow-hidden">
              
              {/* Glow effect */}
              <div
                className="absolute w-96 h-96 blur-3xl opacity-30 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${customizations.base.color}80, transparent)`,
                }}
              />

              {/* Sneaker */}
              <SneakerPreview
                baseColor={customizations.base.color}
                soleColor={customizations.sole.color}
                laceColor={customizations.lace.color}
                model={selectedModel}
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <Button onClick={saveDesign} className="flex-1 bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" /> Save Design
              </Button>
              <Button onClick={resetDesign} variant="outline" className="flex-1">
                <RotateCcw className="w-4 h-4 mr-2" /> Reset
              </Button>
            </div>
          </Card>


          {/* RIGHT: Tabs */}
          <Card className="p-6 bg-neutral-900 border-neutral-800 h-fit">
            <h2 className="text-lg font-bold mb-4">🎨 Customize</h2>
            <div className="flex gap-2 mb-6 bg-neutral-800 p-1 rounded-lg">
              {(["colors","materials","text"] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2 px-4 rounded-md font-medium capitalize transition-all ${activeTab===tab?"bg-purple-600 text-white":"text-neutral-400 hover:text-white"}`}>
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "colors" && (
              <div>
                <h3 className="text-sm font-semibold mb-3 text-neutral-400 capitalize">Choose color for {activePart}</h3>
                <div className="grid grid-cols-5 gap-3">
                  {colors.map(color => (
                    <button key={color} onClick={() => updateColor(color)} className={`aspect-square rounded-lg transition-all ${customizations[activePart].color===color?"ring-4 ring-purple-500 scale-110":"hover:scale-105"}`} style={{backgroundColor: color, boxShadow: `0 4px 12px ${color}60`}} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "materials" && (
              <div>
                <h3 className="text-sm font-semibold mb-3 text-neutral-400 capitalize">Choose material for {activePart}</h3>
                <div className="space-y-2">
                  {materials[activePart].map(mat => (
                    <button key={mat} onClick={() => updateMaterial(mat)} className={`w-full p-4 rounded-lg text-left font-medium capitalize transition-all ${customizations[activePart].material===mat?"bg-purple-600 text-white":"bg-neutral-800 hover:bg-neutral-700 text-neutral-300"}`}>
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "text" && (
              <div>
                <h3 className="text-sm font-semibold mb-3 text-neutral-400">Add custom text</h3>
                <input type="text" value={textInput} onChange={(e)=>setTextInput(e.target.value)} maxLength={15} placeholder="Enter text..." className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:border-purple-500 focus:outline-none mb-3" />
                <div className="text-xs text-neutral-500 mb-3">{textInput.length}/15 characters</div>
                <Button onClick={applyText} className="w-full bg-purple-600 hover:bg-purple-700">Apply Text</Button>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  )
}
