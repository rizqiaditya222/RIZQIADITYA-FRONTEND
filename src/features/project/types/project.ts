export interface GithubRepo {
  repoName: string
  repoUrl: string
}

export interface Project {
  _id: string
  photoUrl: string
  title: string
  githubRepos: GithubRepo[] | null
  deploymentUrl: string | null
  techStack: string[]
  createdAt: string
}