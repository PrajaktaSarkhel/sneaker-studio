import { create } from 'zustand'

export interface Customization {
  color?: string
  material?: string
  text?: string
}

export interface Customizations {
  [part: string]: Customization
}

export interface CustomizerState {
  selectedProduct: any | null
  customizations: Customizations
  setSelectedProduct: (product: any) => void
  updateCustomization: (part: string, updates: Partial<Customization>) => void
  setText: (text: string) => void
  resetCustomizations: () => void
}

export const useCustomizerStore = create<CustomizerState>((set, get) => ({
  selectedProduct: null,
  customizations: {},

  setSelectedProduct: (product) => set({ selectedProduct: product }),

  updateCustomization: (part, updates) => {
    const current = { ...get().customizations }
    current[part] = { ...current[part], ...updates }
    set({ customizations: current })
  },

  setText: (text) => {
    const current = { ...get().customizations }
    current['text'] = { text }
    set({ customizations: current })
  },

  resetCustomizations: () => set({ customizations: {} }),
}))
