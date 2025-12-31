import axiosClient from '@/lib/axios/axiosClient'
import { ApiResponse } from '@/types/api'
import { Comment, CreateCommentPayload } from '../types/Comment'

export const postCommentApi = async (
  payload: CreateCommentPayload
): Promise<Comment> => {
  const res = await axiosClient.post<ApiResponse<Comment>>('/comments', payload)
  return res.data.data
}
