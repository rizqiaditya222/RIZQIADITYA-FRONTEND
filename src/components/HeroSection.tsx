import React from "react"
import GlassSurface from "@/components/glass-surface/GlassSurface"
import PokemonSelector from "@/components/PokemonSelector"

type Props = {
  particleColor: string
  setParticleColor: (c: string) => void
}

export default function HeroSection({ particleColor, setParticleColor }: Props) {
  return (
    <>
      <style>{`
        .tech-icon {
          transition: transform 0.2s ease, filter 0.2s ease;
          will-change: transform, filter;
        }

        .tech-icon:hover {
          transform: scale(1.5);
          filter: drop-shadow(0 0 8px rgb(255,255,255));
        }
      `}</style>

      <div className="h-screen w-full relative snap-start snap-always">
        <div className="hidden lg:block">
          <PokemonSelector 
            particleColor={particleColor} 
            setParticleColor={setParticleColor} 
          />
        </div>

        <div className="min-h-screen flex flex-col w-full gap-4 px-6 md:px-12 lg:px-24 xl:pl-56 xl:pr-24 justify-center relative z-30 pointer-events-none">
          <div className="flex flex-col-reverse xl:flex-row w-full gap-8 xl:gap-16 items-center">

            <div className="flex flex-col w-full xl:flex-[3] gap-4 items-center md:items-start">
              <h1 className="text-white text-3xl md:text-4xl xl:text-5xl">Welcome!</h1>

              <GlassSurface borderRadius={24} backgroundOpacity={0.15} className="p-4 md:p-6 pointer-events-auto">
                <div className="flex flex-col">

                  <p className="text-white text-base md:text-lg xl:text-xl">
                    Hi! I'm Muhammad Rizqi Aditya Firmansyah.
                  </p>
                  <p className="text-white text-base md:text-lg xl:text-xl text-justify mt-2">
                    I'm a Computer Science student (Information Technology major) at Universitas Brawijaya
                    with a strong interest in Mobile Development and Web / Full Stack Development.

                    I have experience in building responsive and user-friendly application interfaces, along with a solid understanding of UI implementation and fundamental software development principles. I'm highly motivated, adaptable, and eager to continuously learn and grow by exploring new technologies.
                  </p>
                </div>
              </GlassSurface>

              <GlassSurface borderRadius={12} backgroundOpacity={0.15} className="p-3 pointer-events-auto w-full">
                <div className="w-full grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-15 gap-2 justify-items-center">
                  {[
                    "HTML.svg", "CSS.svg", "TAILWIND.svg", "JAVASCRIPT.svg", "TYPESCRIPT.svg", "REACTJS.svg",
                    "NEXTJS.svg", "KOTLIN.svg", "JETPACKCOMPOSE.svg", "DART.svg",
                    "FLUTTER.svg", "GITHUB.svg", "DOCKER.svg", "MONGO.svg", "POSTGRES.svg",
                  ].map((file) => (
                    <img
                      key={file}
                      src={`/images/logo/${file}`}
                      className="h-6 md:h-8 tech-icon"
                      alt=""
                    />
                  ))}
                </div>
              </GlassSurface>
            </div>

            <div className="flex w-full xl:flex-[2] justify-center pointer-events-none">
              <img
                src="/images/profile.png"
                className="h-[40vh] md:h-[50vh] xl:h-[80vh] object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
