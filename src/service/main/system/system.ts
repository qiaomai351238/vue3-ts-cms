import qmRequest from '@/service'

import { IDataType } from '@/service/types'

export function getPageListAction(url: string, queryInfo: any) {
  return qmRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
