'use client'
import { useState } from "react";
import Antigravity from "@/features/component/Antigravity";
import GlassSurface from "@/features/component/glass-surface/GlassSurface";
import NavigationBar from "@/features/component/NavigationBar";
import Image from "next/image";


export default function Home() {
  const [particleColor, setParticleColor] = useState('#FF6A00');

  return (
    <div className="w-full h-[200vh]">

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .float-delay-1 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .float-delay-2 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Antigravity
          className=""
          count={200}
          magnetRadius={15}
          ringRadius={10}
          waveSpeed={1}
          waveAmplitude={1}
          particleSize={0.8}
          lerpSpeed={0.05}
          color={particleColor}
          autoAnimate={true}
          particleVariance={0}
        />
      </div>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <NavigationBar />
      </div>

      <div className="min-h-screen relative">
        {/* Bulbasaur Glow */}
        <div 
          className="absolute bottom-24 left-136 float opacity-0 hover:scale-110 hover:opacity-100 transition-transform duration-600"
          onClick={() => setParticleColor('#00BA82')}
        >
          <img src="images/bulbasaur glow.png" alt="" className="w-64" />
        </div>

        {/* Bulbasaur */}
        <div 
          className="absolute bottom-12 left-142 hover:scale-110 transition-transform duration-600 cursor-pointer float"
          onClick={() => setParticleColor('#00BA82')}
        >
          <img src="images/bulbasaur.svg" alt="" className="w-64" />
        </div>

        {/* Squirtle */}
        <div 
          className="absolute top-48 right-196 hover:scale-110 transition-transform duration-600 cursor-pointer float float-delay-1"
          onClick={() => setParticleColor('#00EAFF')}
        > 
          <img src="images/squirtle.svg" alt="" className="w-64" />
        </div>
        
        {/* Charmander */}
        <div 
          className="absolute bottom-42 left-12 hover:scale-110 transition-transform duration-600 cursor-pointer float float-delay-2"
          onClick={() => setParticleColor('#F4CF00')}
        >
          <img src="images/charmender.svg" alt="" className="w-84" />
        </div>

        {/* boxes */}
        <div className="min-h-screen flex flex-col w-full gap-4 bg-transparent font-jakarta pl-56 pr-24 justify-center">
          <div className="flex w-full gap-16 justify-center items-center">
            <div className="flex flex-col flex-3 gap-4">
              <h1 className="text-white text-5xl">Welcome!</h1>
              <GlassSurface
                borderRadius={24}
                backgroundOpacity={0.15}
                className="p-1 w-full p-6"
              >
                <div className="flex flex-col w-full h-full gap-1">
                  <p className="text-white text-xl">Hi! I'm Muhammad Rizqi Aditya Firmansyah</p>
                  <p className="text-white text-justify text-xl">I'm a Computer Science student (Information Technology major) at Universitas Brawijaya with a strong interest in Mobile Development and Front-End Web Development. Experienced in building responsive and user-friendly application interfaces, with a solid understanding of UI implementation and basic software development principles. Highly motivated to learn, adaptable, and eager to gain hands-on experience through an internship opportunity.</p>
                </div>
              </GlassSurface>
              <GlassSurface
                borderRadius={12}
                backgroundOpacity={0.15}
                className="p-1 w-full"
              >
                <div className="flex flex-col w-full h-full gap-1">
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-14 items-center justify-items-center p-4 ">
                    {[
                      "htmls.svg",
                      "css.svg",
                      "js.svg",
                      "ts.svg",
                      "react.svg",
                      "next.svg",
                      "kotlin.svg",
                      "compose.svg",
                      "dart.svg",
                      "flutter.svg",
                      "github.svg",
                      "docker.svg",
                      "mongo.svg",
                      "postgre.svg",
                    ].map((file) => (
                      <img
                        key={file}
                        src={`/images/logo/${file}`}
                        alt={file}
                        className="h-8 px-2 w-auto object-contain hover:scale-150 transition-transform duration-300"
                      />
                    ))}
                  </div>
                </div>
              </GlassSurface>
            </div>

            <div className="flex flex-col flex-2">
              <img src="/images/profile.png" className="h-[80vh] w-auto max-w-full object-contain" alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}