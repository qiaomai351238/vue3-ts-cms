import qmRequest from '@/service'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return qmRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return qmRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return qmRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return qmRequest.patch<IDataType>({
    url,
    data: editData
  })
}
