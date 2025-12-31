export interface Message {
  _id: string
  message: string
  createdAt: string
}

export interface SendMessagePayload {
  message: string
}
