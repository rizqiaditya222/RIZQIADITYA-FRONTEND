import { Comment } from "@/features/comments/types/Comment"

export interface Story {
  _id: string
  photoUrl: string
  caption?: string
  location?: string
  isVisible: boolean
  expiredAt: string
  comments: Comment[]
  createdAt: string
}
