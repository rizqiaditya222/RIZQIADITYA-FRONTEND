export interface Comment {
  _id: string
  storyId: string
  comment: string
  createdAt: string
}

export interface CreateCommentPayload {
  storyId: string
  comment: string
}
