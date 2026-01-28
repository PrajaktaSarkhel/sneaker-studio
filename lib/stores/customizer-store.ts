import { create } from "zustand";

export type SneakerPart = "upper" | "sole" | "laces";

interface CustomizerState {
  colors: Record<SneakerPart, number>;
  zoom: number;
  setColor: (part: SneakerPart, value: number) => void;
  setZoom: (value: number) => void;
  reset: () => void;
}

export const useCustomizerStore = create<CustomizerState>((set) => ({
  colors: {
    upper: 0,
    sole: 0,
    laces: 0,
  },
  zoom: 1,

  setColor: (part, value) =>
    set((state) => ({
      colors: { ...state.colors, [part]: value },
    })),

  setZoom: (value) => set({ zoom: value }),

  reset: () =>
    set({
      colors: { upper: 0, sole: 0, laces: 0 },
      zoom: 1,
    }),
}));
