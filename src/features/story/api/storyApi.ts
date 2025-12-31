import axiosClient from '@/lib/axios/axiosClient'
import { ApiResponse } from '@/types/api'
import { Story } from '../types/story'

export const getStoriesApi = async (): Promise<Story[]> => {
  const res = await axiosClient.get<ApiResponse<Story[]>>('/stories')
  return res.data.data
}
