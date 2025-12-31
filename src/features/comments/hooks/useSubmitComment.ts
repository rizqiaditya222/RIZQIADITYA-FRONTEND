import { useState } from 'react'
import { submitComment } from '../service/commentService'
import { CreateCommentPayload } from '../types/Comment'

export const useSubmitComment = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (payload: CreateCommentPayload) => {
    setLoading(true)
    setError(null)
    try {
      await submitComment(payload)
    } catch (err: any) {
      setError(err?.message || 'Gagal mengirim komentar')
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error }
}
