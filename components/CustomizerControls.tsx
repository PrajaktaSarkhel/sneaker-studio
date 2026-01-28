"use client";

import { Slider } from "@/components/ui/slider";
import { useCustomizerStore } from "@/lib/stores/customizer-store";

const PARTS = ["upper", "sole", "laces"] as const;

export default function CustomizerControls() {
  const { setColor, setZoom } = useCustomizerStore();

  return (
    <div className="space-y-6">
      {PARTS.map((part) => (
        <div key={part}>
          <p className="capitalize text-sm font-medium mb-2">
            {part} color
          </p>
          <Slider
            max={360}
            step={1}
            onValueChange={(v) => setColor(part, v[0])}
          />
        </div>
      ))}

      <div>
        <p className="text-sm font-medium mb-2">Zoom</p>
        <Slider
          min={0.9}
          max={1.4}
          step={0.05}
          defaultValue={[1]}
          onValueChange={(v) => setZoom(v[0])}
        />
      </div>
    </div>
  );
}
