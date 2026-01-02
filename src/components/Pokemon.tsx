import React from "react"

type PokemonProps = {
  position: string
  color: string
  size: string
  imageSrc: string
  altText: string
  floatDelay?: string
  particleColor: string
  onClick: () => void
}

export default function Pokemon({
  position,
  color,
  size,
  imageSrc,
  altText,
  floatDelay,
  particleColor,
  onClick
}: PokemonProps) {
  return (
    <div
      className={`absolute ${position} hover:scale-110 transition-transform cursor-pointer float ${floatDelay || ''} z-20`}
      onClick={onClick}
      style={{ color }}
    >
      <img
        src={imageSrc}
        className={`${size} pokemon-img ${particleColor === color ? 'active' : ''}`}
        alt={altText}
      />
    </div>
  )
}
