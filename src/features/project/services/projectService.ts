import { getProjectsApi } from '../api/projectApi'

export const fetchProjects = async () => {
  return getProjectsApi()
}
