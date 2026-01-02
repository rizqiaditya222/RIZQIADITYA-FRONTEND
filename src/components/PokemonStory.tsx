import React from "react"
import Pokemon from "./Pokemon"

type Props = {
  particleColor: string
  setParticleColor: (c: string) => void
}

export default function PokemonStory({ particleColor, setParticleColor }: Props) {
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
        position="top-42 right-8/25"
        color="#FFE100"
        size="w-64"
        imageSrc="/images/pokemon/pikachu.svg"
        altText="pikachi"
        particleColor={particleColor}
        onClick={() => setParticleColor('#FFE100')}
      />

      <Pokemon
        position="bottom-48 left-8/25"
        color="#FF7700"
        size="w-64"
        imageSrc="/images/pokemon/magikarp.svg"
        altText="Magikarp"
        floatDelay="float-delay-1"
        particleColor={particleColor}
        onClick={() => setParticleColor('#FF7700')}
      />

      <Pokemon
        position="top-1/4 left-1/5"
        color="#547DF9"
        size="w-56"
        imageSrc="/images/pokemon/zubat.svg"
        altText="Charmander"
        floatDelay="float-delay-1"
        particleColor={particleColor}
        onClick={() => setParticleColor('#547DF9')}
      />
      <Pokemon
        position="top-1/4 right-1/5"
        color="#00E1FF"
        size="w-56"
        imageSrc="/images/pokemon/tentacool.svg"
        altText="Charmander"
        floatDelay="float-delay-2"
        particleColor={particleColor}
        onClick={() => setParticleColor('#00E1FF')}
      />
      <Pokemon
        position="bottom-1/6 right-1/9"
        color="#D400FF"
        size="w-84"
        imageSrc="/images/pokemon/muk.svg"
        altText="Charmander"
        floatDelay="float-delay-1"
        particleColor={particleColor}
        onClick={() => setParticleColor('#D400FF')}
      />
      <Pokemon
        position="bottom-1/5 left-1/6"
        color="#F954B9"
        size="w-56"
        imageSrc="/images/pokemon/chansey.svg"
        altText="Charmander"
        floatDelay="float-delay"
        particleColor={particleColor}
        onClick={() => setParticleColor('#F954B9')}
      />
      <Pokemon
        position="top-5/12 left-1/10"
        color="#FFBF59"
        size="w-36"
        imageSrc="/images/pokemon/abra.svg"
        altText="Charmander"
        floatDelay="float-delay-2"
        particleColor={particleColor}
        onClick={() => setParticleColor('#FFBF59')}
      />
    </>
  )
}
