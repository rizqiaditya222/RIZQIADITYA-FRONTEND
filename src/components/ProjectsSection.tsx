import React from "react"
import FlipCard from "@/components/FlipCard"
import Footer from "./Footer"

type Props = {
  projects: any[]
  loading: boolean
  error?: string | null
}

export default function ProjectsSection({ projects, loading, error }: Props) {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="w-full flex flex-col flex-1 items-center justify-start pt-20 md:pt-28 xl:pt-32 pb-8 px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 snap-start snap-always overflow-y-auto">
        <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-medium relative z-10">My Projects!</h1>
        <p className="text-[#A0A0A0] mt-2 text-sm md:text-base relative z-10 text-center">
          Here are projects that I made for the past two years
        </p>

        {loading && (
          <p className="text-white mt-8 md:mt-12 relative z-10">Loading projects...</p>
        )}

        {error && (
          <p className="text-red-400 mt-8 md:mt-12 relative z-10">{error}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full relative z-10 mt-8">
          {!loading && !error && projects.map((project) => (
            <FlipCard
              deploymentUrl={"https://" + (project.deploymentUrl ?? "")}
              key={project._id}
              frontImage={`${project.photoUrl}`}
              title={project.title}
              tags={
                project.githubRepos?.map((repo: any) => ({
                  icon: "/images/logo/GITHUB.svg",
                  label: repo.repoName,
                  url: repo.repoUrl
                })) || []
              }
              description={`${project.description}`}
              techIcons={project.techStack
                .flatMap((stack: string) => {
                  try {
                    return JSON.parse(stack)
                  } catch {
                    return []
                  }
                })
                .map((tech: string) => `images/logo/${tech}.svg`)
              }
              height="h-[380px]"
            />
          ))}
        </div>
      </div>
        <Footer />


    </div>
  )
}
