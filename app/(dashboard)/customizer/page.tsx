"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Save, RotateCcw, LogOut } from "lucide-react"

interface Customization {
  upper: { color: string; material: string }
  sole: { color: string; material: string }
  laces: { color: string; material: string }
  text: string
}

export default function CustomizerPage() {
  const router = useRouter()
  const [selectedProduct, setSelectedProduct] = useState("Air Max 90")
  const [activePart, setActivePart] = useState<"upper" | "sole" | "laces">("upper")
  const [activeTab, setActiveTab] = useState<"colors" | "materials" | "text">("colors")
  const [customizations, setCustomizations] = useState<Customization>({
    upper: { color: "#FF0000", material: "leather" },
    sole: { color: "#FFFFFF", material: "rubber" },
    laces: { color: "#000000", material: "cotton" },
    text: ""
  })
  const [textInput, setTextInput] = useState("")
  const [savedDesigns, setSavedDesigns] = useState<any[]>([])

  const products = ["Air Max 90", "Jordan 1", "Yeezy Boost 350"]
  const colors = [
    "#FF0000", "#0000FF", "#000000", "#FFFFFF", 
    "#00FF00", "#FFFF00", "#FF00FF", "#FFA500", 
    "#8B4513", "#808080"
  ]
  const materials = {
    upper: ["leather", "canvas", "suede", "mesh"],
    sole: ["rubber", "foam", "gel"],
    laces: ["cotton", "polyester", "waxed"]
  }

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [router])

  const updateColor = (color: string) => {
    setCustomizations({
      ...customizations,
      [activePart]: { ...customizations[activePart], color }
    })
  }

  const updateMaterial = (material: string) => {
    setCustomizations({
      ...customizations,
      [activePart]: { ...customizations[activePart], material }
    })
  }

  const applyText = () => {
    setCustomizations({ ...customizations, text: textInput })
  }

  const saveDesign = () => {
    const newDesign = {
      id: Date.now().toString(),
      product: selectedProduct,
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
      upper: { color: "#FF0000", material: "leather" },
      sole: { color: "#FFFFFF", material: "rubber" },
      laces: { color: "#000000", material: "cotton" },
      text: ""
    })
    setTextInput("")
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <Home className="w-5 h-5" />
              </Button>
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

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto p-8">
        <div className="grid lg:grid-cols-[300px_1fr_350px] gap-6">
          
          {/* LEFT: Product Selection */}
          <Card className="p-6 bg-neutral-900 border-neutral-800 h-fit">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              👟 Select Model
            </h2>
            
            <div className="space-y-3">
              {products.map((product) => (
                <button
                  key={product}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-full p-4 rounded-lg text-left font-semibold transition-all ${
                    selectedProduct === product
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                  }`}
                >
                  {product}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Customize Part</h3>
              
              <div className="space-y-2">
                {(["upper", "sole", "laces"] as const).map((part) => (
                  <button
                    key={part}
                    onClick={() => setActivePart(part)}
                    className={`w-full p-3 rounded-lg text-left font-medium capitalize transition-all ${
                      activePart === part
                        ? "bg-purple-600 text-white"
                        : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
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
            
            {/* 2D Sneaker with Realistic Effects */}
            <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-12 min-h-[400px] flex items-center justify-center overflow-hidden">
              {/* Glow Effect */}
              <div 
                className="absolute w-96 h-96 blur-3xl opacity-30 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${customizations.upper.color}80, transparent)`
                }}
              />

              {/* Sneaker */}
              <div className="relative w-[350px] h-[250px]" style={{ transform: "rotate(-15deg)" }}>
                {/* Upper Part - with shine effect */}
                <div
                  className="absolute top-0 left-0 w-full h-[60%] rounded-tl-[80px] rounded-tr-[60px] transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${customizations.upper.color} 0%, ${customizations.upper.color}dd 100%)`,
                    boxShadow: `0 10px 30px ${customizations.upper.color}60, inset -10px -10px 20px rgba(0,0,0,0.3), inset 10px 10px 20px rgba(255,255,255,0.1)`
                  }}
                >
                  {/* Shine overlay for material */}
                  {customizations.upper.material === "leather" && (
                    <div className="absolute inset-0 rounded-tl-[80px] rounded-tr-[60px]" style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)"
                    }} />
                  )}
                  {customizations.upper.material === "suede" && (
                    <div className="absolute inset-0 rounded-tl-[80px] rounded-tr-[60px]" style={{
                      background: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)"
                    }} />
                  )}
                </div>
                
                {/* Sole - with depth */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[40%] rounded-bl-[60px] rounded-br-[80px] transition-all duration-300"
                  style={{
                    background: `linear-gradient(180deg, ${customizations.sole.color} 0%, ${customizations.sole.color}cc 100%)`,
                    boxShadow: `0 8px 16px ${customizations.sole.color}40, inset 0 -4px 8px rgba(0,0,0,0.3)`
                  }}
                >
                  {/* Sole texture patterns */}
                  {customizations.sole.material === "rubber" && (
                    <div className="absolute inset-0 rounded-bl-[60px] rounded-br-[80px]" style={{
                      background: "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 6px)"
                    }} />
                  )}
                </div>
                
                {/* Laces - with 3D effect */}
                <div className="absolute top-[25%] left-1/2 -translate-x-1/2 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-12 rounded-full transition-all duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${customizations.laces.color}80 0%, ${customizations.laces.color} 50%, ${customizations.laces.color}80 100%)`,
                        boxShadow: `2px 2px 4px rgba(0,0,0,0.5), -1px -1px 2px rgba(255,255,255,0.2)`
                      }}
                    />
                  ))}
                </div>
                
                {/* Custom Text with realistic embossing */}
                {customizations.text && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div 
                      className="text-white font-bold text-xl tracking-wider"
                      style={{
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)",
                        filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                      }}
                    >
                      {customizations.text}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Design Info */}
            <div className="mt-6 p-4 bg-neutral-800 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-neutral-400 mb-1">Upper</div>
                  <div className="font-semibold capitalize">{customizations.upper.material}</div>
                </div>
                <div>
                  <div className="text-neutral-400 mb-1">Sole</div>
                  <div className="font-semibold capitalize">{customizations.sole.material}</div>
                </div>
                <div>
                  <div className="text-neutral-400 mb-1">Laces</div>
                  <div className="font-semibold capitalize">{customizations.laces.material}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <Button onClick={saveDesign} className="flex-1 bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" />
                Save Design
              </Button>
              <Button onClick={resetDesign} variant="outline" className="flex-1">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </Card>

          {/* RIGHT: Customization Options */}
          <Card className="p-6 bg-neutral-900 border-neutral-800 h-fit">
            <h2 className="text-lg font-bold mb-4">🎨 Customize</h2>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 bg-neutral-800 p-1 rounded-lg">
              {(["colors", "materials", "text"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-md font-medium capitalize transition-all ${
                    activeTab === tab
                      ? "bg-purple-600 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Colors Tab */}
            {activeTab === "colors" && (
              <div>
                <h3 className="text-sm font-semibold mb-3 text-neutral-400 capitalize">
                  Choose color for {activePart}
                </h3>
                <div className="grid grid-cols-5 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => updateColor(color)}
                      className={`aspect-square rounded-lg transition-all ${
                        customizations[activePart].color === color
                          ? "ring-4 ring-purple-500 scale-110"
                          : "hover:scale-105"
                      }`}
                      style={{
                        backgroundColor: color,
                        boxShadow: `0 4px 12px ${color}60`
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Materials Tab */}
            {activeTab === "materials" && (
              <div>
                <h3 className="text-sm font-semibold mb-3 text-neutral-400 capitalize">
                  Choose material for {activePart}
                </h3>
                <div className="space-y-2">
                  {materials[activePart].map((material) => (
                    <button
                      key={material}
                      onClick={() => updateMaterial(material)}
                      className={`w-full p-4 rounded-lg text-left font-medium capitalize transition-all ${
                        customizations[activePart].material === material
                          ? "bg-purple-600 text-white"
                          : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Text Tab */}
            {activeTab === "text" && (
              <div>
                <h3 className="text-sm font-semibold mb-3 text-neutral-400">
                  Add custom text
                </h3>
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Enter your text..."
                  maxLength={15}
                  className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:border-purple-500 focus:outline-none mb-3"
                />
                <div className="text-xs text-neutral-500 mb-3">
                  {textInput.length}/15 characters
                </div>
                <Button onClick={applyText} className="w-full bg-purple-600 hover:bg-purple-700">
                  Apply Text
                </Button>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  )
}