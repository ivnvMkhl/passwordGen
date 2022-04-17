export default {
  actions: {
    changeService(ctx, service) {
      ctx.commit('updateState', { service })
    },
    changeLogin(ctx, login) {
      ctx.commit('updateState', { login })
    },
    changePassword(ctx, password) {
      ctx.commit('updateState', { password })
    },
    clearCreate(ctx) {
      ctx.commit('clearState')
    },
  },
  mutations: {
    updateState(state, data) {
      if (data.service) state.service = data.service
      if (data.login) state.login = data.login
      if (data.password) state.password = data.password
    },
    clearState(state) {
      for (let key in state) {
        state[key] = ''
      }
    },
  },
  state: {
    service: '',
    login: '',
    password: '',
  },
  getters: {
    getService(state) {
      return state.service
    },
    getLogin(state) {
      return state.login
    },
    getPassword(state) {
      return state.password
    },
    getAllCreate(state) {
      return { ...state }
    },
  },
}
