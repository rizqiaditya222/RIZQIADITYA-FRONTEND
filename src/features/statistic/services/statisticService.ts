import { postVisitStatisticApi } from '../api/statisticApi'

export const recordVisit = async () => {
  await postVisitStatisticApi()
}
