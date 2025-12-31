import axiosClient from '@/lib/axios/axiosClient'
import { Project } from '../types/project'

export const getProjectsApi = async (): Promise<Project[]> => {
  const res = await axiosClient.get('/projects')
  return res.data.data
}