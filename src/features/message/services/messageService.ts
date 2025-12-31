import { sendMessageApi } from '../api/messageApi'

export const sendMessage = async (message: string) => {
  return sendMessageApi({ message })
}
