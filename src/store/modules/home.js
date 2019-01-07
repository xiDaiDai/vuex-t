import request from '@/api/home'

const state = {
  info: {}
}
const getters = {
  fullName: (state, getters, rootState) => {
    return state.info.firstName + state.info.lastName
  }
}
const actions = {
  getInfo ({ commit }) {
    request.getInfo(data => {
      commit('setInfo', data)
    })
  },
  changeInfo ({ state, commit }, data) {
    commit('setInfo', data)
  }
}
const mutations = {
  setInfo (state, data) {
    state.info = data
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
