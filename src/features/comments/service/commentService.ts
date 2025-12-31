import { postCommentApi } from '../api/commentApi'
import { CreateCommentPayload } from '../types/Comment'

export const submitComment = async (payload: CreateCommentPayload) => {
  return postCommentApi(payload)
}
