import { useEffect, useState } from 'react'
import { fetchProjects } from '../services/projectService'
import { Project } from '../types/project'

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((err) => setError(err?.message || 'Gagal mengambil project'))
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading, error }
}
