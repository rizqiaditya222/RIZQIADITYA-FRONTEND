import { useState } from 'react'
import { sendMessage } from '../services/messageService'

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const send = async (message: string) => {
    setLoading(true)
    setError(null)
    try {
      await sendMessage(message)
    } catch (err: any) {
      setError(err?.message || 'Gagal mengirim pesan')
    } finally {
      setLoading(false)
    }
  }

  return { send, loading, error }
}
