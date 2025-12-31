import { useState } from 'react'
import { recordVisit } from '../services/statisticService'

export const useRecordVisit = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const record = async () => {
    setLoading(true)
    setError(null)
    try {
      await recordVisit()
    } catch (err: any) {
      setError(err?.message || 'Gagal merekam kunjungan')
    } finally {
      setLoading(false)
    }
  }

  return { record, loading, error }
}
