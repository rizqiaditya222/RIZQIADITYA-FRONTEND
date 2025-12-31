'use client'
import Antigravity from "@/features/component/Antigravity";

export default function BackgroundAntigravity({ color }: { color: string }) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Antigravity
        count={150}
        magnetRadius={15}
        ringRadius={10}
        waveSpeed={1}
        waveAmplitude={1}
        particleSize={0.8}
        lerpSpeed={0.05}
        color={color}
        autoAnimate
        particleVariance={0}
      />
    </div>
  );
}
