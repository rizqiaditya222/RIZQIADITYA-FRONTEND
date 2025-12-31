import axiosClient from '@/lib/axios/axiosClient'

export const postVisitStatisticApi = async () => {
  await axiosClient.post('/statistic/visit')
}
