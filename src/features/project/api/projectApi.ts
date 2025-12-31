import axiosClient from '@/lib/axios/axiosClient'
import { Project } from '../types/project'

export const getProjectsApi = async (): Promise<Project[]> => {
  const res = await axiosClient.get(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
  return res.data.data
}