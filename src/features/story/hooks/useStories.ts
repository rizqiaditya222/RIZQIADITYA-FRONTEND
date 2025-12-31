'use client'

import { useEffect, useState } from 'react'
import { fetchVisibleStories } from '../service/storyService'
import { Story } from '../types/story'

export const useStories = () => {
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchVisibleStories()
      .then(setStories)
      .finally(() => setLoading(false))
  }, [])

  return { stories, loading }
}
