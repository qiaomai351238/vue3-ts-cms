import qmRequest from '../index'
import type { IAccount, IDataType, ILoginResult } from './type'

enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return qmRequest.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return qmRequest.get<IDataType>({
    url: loginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleId(id: number) {
  return qmRequest.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
