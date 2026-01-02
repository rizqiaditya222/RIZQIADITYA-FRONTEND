'use client'

import { useState, useEffect } from "react"
import Antigravity from "@/components/Antigravity"
import NavigationBar from "@/components/NavigationBar"
import { useProjects } from "@/features/project/hooks/useProjects"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import Footer from "@/components/Footer"
import { useParticleColor } from "@/contexts/ParticleColorContext"

export default function Home() {
  const { particleColor, setParticleColor } = useParticleColor()
  const [particleCount, setParticleCount] = useState(150)

  const { projects, loading, error } = useProjects()

  useEffect(() => {
    const updateParticleCount = () => {
      const width = window.innerWidth
      if (width < 768) {
        setParticleCount(50) // Reduced from 75 for better mobile performance
      } else if (width < 1280) {
        setParticleCount(100) // Reduced from 150
      } else {
        setParticleCount(150) // Reduced from 200
      }
    }

    updateParticleCount()
    
    // Debounce resize handler
    let timeoutId: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateParticleCount, 250)
    }
    
    window.addEventListener('resize', debouncedResize)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', debouncedResize)
    }
  }, [])

  return (
    <div className="w-full h-screen overflow-y-scroll md:snap-y md:snap-mandatory">

      <div className="hidden md:block fixed inset-0 z-0 pointer-events-none">
        <Antigravity
          count={particleCount}
          magnetRadius={15}
          ringRadius={10}
          waveSpeed={1}
          waveAmplitude={1}
          particleSize={0.8}
          lerpSpeed={0.05}
          color={particleColor}
          autoAnimate
          particleVariance={3}
        />
      </div>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <NavigationBar />
      </div>

      <div className="relative z-10">
        <HeroSection particleColor={particleColor} setParticleColor={setParticleColor} />

        <ProjectsSection projects={projects} loading={loading} error={error} />
   
      </div>
    </div>
  )
}
