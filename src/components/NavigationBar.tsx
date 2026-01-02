'use client'

import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation'
import GlassSurface from "./glass-surface/GlassSurface";

const NavigationBar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('portfolio');

  useEffect(() => {
    if (!pathname) return
    if (pathname.startsWith('/social')) setActiveTab('social')
    else setActiveTab('portfolio')
  }, [pathname])

  const handleClick = (tab: string) => {
    setActiveTab(tab)
    if (tab === 'social') router.push('/social')
    else router.push('/')
  }

  return (
    <GlassSurface 
      width={360}
      height={64}
      borderRadius={32}
      backgroundOpacity={0.15}
      className="p-1"
    >
      <div className="flex w-full h-full gap-1">
        <button
          onClick={() => handleClick('portfolio')}
          className={`flex-1 h-full rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300 ${
            activeTab === 'portfolio'
              ? 'bg-[#1C1C1C] text-white shadow-lg'
              : 'text-white hover:bg-white/10'
          }`}
        >
          Portofolio
        </button>
        <button
          onClick={() => handleClick('social')}
          className={`flex-1 h-full rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300 ${
            activeTab === 'social'
              ? 'bg-[#1C1C1C] text-white shadow-lg'
              : 'text-white hover:bg-white/10'
          }`}
        >
          Social
        </button>
      </div>
    </GlassSurface>
  );
};

export default NavigationBar;