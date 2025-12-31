'use client'

import { useState } from "react"
import Antigravity from "@/features/component/Antigravity"
import GlassSurface from "@/features/component/glass-surface/GlassSurface"
import NavigationBar from "@/features/component/NavigationBar"
import FlipCard from "@/components/FlipCard"
import { useProjects } from "@/features/project/hooks/useProjects"

export default function Home() {
  const [particleColor, setParticleColor] = useState('#6D6D6D')

  const { projects, loading, error } = useProjects()

  return (
    <div className="w-full h-[200vh]">

      {/* ================= STYLE ================= */}
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

      {/* ================= BACKGROUND PARTICLE ================= */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Antigravity
          count={150}
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

      {/* ================= NAVBAR ================= */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <NavigationBar />
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="min-h-screen relative">

        {/* Bulbasaur */}
        <div
          className="absolute bottom-12 left-142 hover:scale-110 transition-transform cursor-pointer float"
          onClick={() => setParticleColor('#009060')}
          style={{ color: '#009060' }}
        >
          <img
            src="/images/bulbasaur.svg"
            className={`w-64 pokemon-img ${particleColor === '#009060' ? 'active' : ''}`}
            alt=""
          />
        </div>

        {/* Squirtle */}
        <div
          className="absolute top-48 left-184 hover:scale-110 transition-transform cursor-pointer float float-delay-1"
          onClick={() => setParticleColor('#0072D5')}
          style={{ color: '#0072D5' }}
        >
          <img
            src="/images/squirtle.svg"
            className={`w-64 pokemon-img ${particleColor === '#0072D5' ? 'active' : ''}`}
            alt=""
          />
        </div>

        {/* Charmander */}
        <div
          className="absolute bottom-56 left-12 hover:scale-110 transition-transform cursor-pointer float float-delay-2"
          onClick={() => setParticleColor('#FF4400')}
          style={{ color: '#FF4400' }}
        >
          <img
            src="/images/charmender.svg"
            className={`w-84 pokemon-img ${particleColor === '#FF4400' ? 'active' : ''}`}
            alt=""
          />
        </div>

        {/* ================= PROFILE ================= */}
        <div className="min-h-screen flex flex-col w-full gap-4 pl-56 pr-24 justify-center">
          <div className="flex w-full gap-16 items-center">

            <div className="flex flex-col flex-3 gap-4">
              <h1 className="text-white text-5xl">Welcome!</h1>

              <GlassSurface borderRadius={24} backgroundOpacity={0.15} className="p-6">
                <div className="flex flex-col">

                <p className="text-white text-xl">
                  Hi! I'm Muhammad Rizqi Aditya Firmansyah.
                </p>
                <p className="text-white text-xl text-justify mt-2">
                  I'm a Computer Science student (Information Technology major) at Universitas Brawijaya
                  with a strong interest in Mobile Development and Web / Full Stack Development.

                  I have experience in building responsive and user-friendly application interfaces, along with a solid understanding of UI implementation and fundamental software development principles. I'm highly motivated, adaptable, and eager to continuously learn and grow by exploring new technologies.
                </p>
                </div>
              </GlassSurface>

              <GlassSurface borderRadius={12} backgroundOpacity={0.15} className="p-4">
                <div className="grid grid-cols-3 md:grid-cols-14 justify-items-center">
                  {[
                    "HTML.svg","CSS.svg","JAVASCRIPT.svg","TYPESCRIPT.svg","REACTJS.svg",
                    "NEXTJS.svg","kotlin.svg","compose.svg","dart.svg",
                    "flutter.svg","github.svg","docker.svg","mongo.svg","postgre.svg",
                  ].map((file) => (
                    <img
                      key={file}
                      src={`/images/logo/${file}`}
                      className="h-8 hover:scale-150 px-4 transition-transform"
                      alt=""
                    />
                  ))}
                </div>
              </GlassSurface>
            </div>

            <div className="flex flex-2">
              <img
                src="/images/profile.png"
                className="h-[80vh] object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= PROJECT SECTION ================= */}
      <div className="w-full flex flex-col items-center py-24 px-24">
        <h1 className="text-white text-6xl font-medium">My Projects!</h1>
        <p className="text-[#A0A0A0] mt-2">
          Here are projects that I made for the past two years
        </p>

        {/* Loading */}
        {loading && (
          <p className="text-white mt-12">Loading projects...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-400 mt-12">{error}</p>
        )}

        {/* Projects */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {!loading && !error && projects.map((project) => (
            <FlipCard
            deploymentUrl= {"https://"+(project.deploymentUrl ?? "")}
              key={project._id}
              frontImage={`${project.photoUrl}`}
              title={project.title}
              tags={
                project.githubRepos?.map(repo => ({
                  icon: "/images/logo/github.svg",
                  label: repo.repoName,
                })) || []
              }
              description={`${project.description}`}
techIcons={project.techStack.map(
  tech => `/images/logo/${tech.toLowerCase()}.svg`
)}
              height="h-[380px]"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
