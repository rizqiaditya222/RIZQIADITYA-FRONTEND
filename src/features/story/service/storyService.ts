import { getStoriesApi } from '../api/storyApi'
import { Story } from '../types/story'

export const fetchVisibleStories = async (): Promise<Story[]> => {
  const stories = await getStoriesApi()
  return stories.filter(story => story.isVisible)
}
