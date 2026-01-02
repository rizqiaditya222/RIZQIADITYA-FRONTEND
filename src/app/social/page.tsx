'use client'

import { useState, useEffect } from "react"
import Antigravity from "@/components/Antigravity"
import NavigationBar from "@/components/NavigationBar"
import { useProjects } from "@/features/project/hooks/useProjects"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import StorySection from "@/components/StorySection"
import { useParticleColor } from "@/contexts/ParticleColorContext"
import MessageSection from "@/components/MessageSection"
import PokemonStory from "@/components/PokemonStory"
import { useStories } from "@/features/story/hooks/useStories"

export default function Social() {

  const { particleColor, setParticleColor } = useParticleColor()
  const { stories, loading } = useStories()
  const [particleCount, setParticleCount] = useState(150)

  useEffect(() => {
    const updateParticleCount = () => {
      const width = window.innerWidth
      if (width < 768) {
        setParticleCount(75)
      } else if (width < 1280) {
        setParticleCount(150)
      } else {
        setParticleCount(200)
      }
    }

    updateParticleCount()
    window.addEventListener('resize', updateParticleCount)
    return () => window.removeEventListener('resize', updateParticleCount)
  }, [])

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="fixed inset-0 z-0 pointer-events-none">
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

      <div className="w-full relative z-10">
        <StorySection 
          stories={stories}
          particleColor={particleColor} 
          setParticleColor={setParticleColor} 
        />
        <MessageSection />
      </div>
    </div>

  )
}
