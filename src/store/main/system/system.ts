import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/type'
import { getPageListAction } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log({ ...payload })
      const res = await getPageListAction(payload.pageUrl, payload.queryInfo)
      const { list, totalCount } = res.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
