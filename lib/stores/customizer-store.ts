import { create } from "zustand"

export type SneakerModel = "air-max" | "jordan"
export type Material = "leather" | "canvas"

export interface CustomizerState {
  model: SneakerModel
  colors: {
    base: string
    sole: string
    lace: string
  }
  material: Material
  text: string
  textColor: string

  setModel: (m: SneakerModel) => void
  setColor: (
    part: keyof CustomizerState["colors"],
    value: string
  ) => void
  setMaterial: (m: Material) => void
  setText: (t: string) => void
  setTextColor: (c: string) => void
}

export const useCustomizerStore = create<CustomizerState>((set) => ({
  model: "air-max",

  colors: {
    base: "#ffffff",
    sole: "#e5e7eb",
    lace: "#111827",
  },

  material: "leather",
  text: "",
  textColor: "#000000",

  setModel: (model) => set({ model }),

  setColor: (part, value) =>
    set((state) => ({
      colors: { ...state.colors, [part]: value },
    })),

  setMaterial: (material) => set({ material }),

  setText: (text) => set({ text }),

  setTextColor: (textColor) => set({ textColor }),
}))
