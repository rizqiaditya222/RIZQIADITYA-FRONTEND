import React from "react"
import Pokemon from "./Pokemon"

type Props = {
  particleColor: string
  setParticleColor: (c: string) => void
}

export default function PokemonHero({ particleColor, setParticleColor }: Props) {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .float {
          animation: float 3s ease-in-out infinite;
        }

        .float-delay-1 {
          animation-delay: 0.5s;
        }

        .float-delay-2 {
          animation-delay: 1s;
        }

        .pokemon-img {
          filter: drop-shadow(0 0 0px transparent);
          transition: filter 0.3s ease;
        }

        .pokemon-img:hover {
          filter: drop-shadow(0 0 20px currentColor);
        }

        .pokemon-img.active {
          filter: drop-shadow(0 0 20px currentColor) drop-shadow(0 0 20px currentColor);
        }
      `}</style>

      <Pokemon
        position="bottom-12 left-142"
        color="#009060"
        size="w-64"
        imageSrc="images/pokemon/bulbasaur.svg"
        altText="Bulbasaur"
        particleColor={particleColor}
        onClick={() => setParticleColor('#009060')}
      />

      <Pokemon
        position="top-48 left-184"
        color="#0072D5"
        size="w-64"
        imageSrc="/images/pokemon/squirtle.svg"
        altText="Squirtle"
        floatDelay="float-delay-1"
        particleColor={particleColor}
        onClick={() => setParticleColor('#0072D5')}
      />

      <Pokemon
        position="bottom-56 left-12"
        color="#FF4400"
        size="w-84"
        imageSrc="/images/pokemon/charmander.svg"
        altText="Charmander"
        floatDelay="float-delay-2"
        particleColor={particleColor}
        onClick={() => setParticleColor('#FF4400')}
      />
    </>
  )
}
