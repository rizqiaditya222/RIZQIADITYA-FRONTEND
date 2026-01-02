'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type ParticleColorContextType = {
  particleColor: string
  setParticleColor: (color: string) => void
}

const ParticleColorContext = createContext<ParticleColorContextType | undefined>(undefined)

export function ParticleColorProvider({ children }: { children: ReactNode }) {
  const [particleColor, setParticleColor] = useState('#6D6D6D')

  return (
    <ParticleColorContext.Provider value={{ particleColor, setParticleColor }}>
      {children}
    </ParticleColorContext.Provider>
  )
}

export function useParticleColor() {
  const context = useContext(ParticleColorContext)
  if (context === undefined) {
    throw new Error('useParticleColor must be used within ParticleColorProvider')
  }
  return context
}
