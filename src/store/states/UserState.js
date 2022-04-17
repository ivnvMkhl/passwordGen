export default {
  actions: {
    // async signUp(ctx, login, password) {
    //   if (!(login.trim() === '' || password.length > 6)) {
    //     ctx.commit('setUser')
    //   }
    // },
  },
  mutations: {
    enterTest(state) {
      state.isAuth = true
      state.user = {
        email: 'testMode',
      }
    },
    logout(state) {
      state.isAuth = false
      state.user = {}
    },
  },
  state: { user: {}, isAuth: false },
  getters: {
    isAuth(state) {
      return state.isAuth
    },
    getAuthUser(state) {
      return { ...state.user }
    },
    getUserEmail(state) {
      return state.user.email
    },
  },
}
