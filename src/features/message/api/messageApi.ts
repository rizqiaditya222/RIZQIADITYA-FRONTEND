import axiosClient from '@/lib/axios/axiosClient'
import { ApiResponse } from '@/types/api'
import { Message, SendMessagePayload } from '../types/message'

export const sendMessageApi = async (
  payload: SendMessagePayload
): Promise<Message> => {
  const res = await axiosClient.post<ApiResponse<Message>>('/messages', payload)
  return res.data.data
}
