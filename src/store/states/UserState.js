import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'firebase/auth'
import router from '../../router'

export default {
  actions: {
    async signUp(ctx, { email, password }) {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user)
          //sendEmailVerification(auth.currentUser)
          ctx.commit('updateAndLoginUser', userCredential.user)
          router.replace({ name: 'create' })
        })
        .catch((err) => {
          console.log(err.code, err.message)
        })
    },
    async logIn(ctx, { email, password }) {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user)
          ctx.commit('updateAndLoginUser', userCredential.user)
          router.replace({ name: 'create' })
        })
        .catch((err) => {
          console.log(err.code, err.message)
        })
    },
    async forgotPass(ctx, email) {
      const auth = getAuth()
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log('send forgot pass email')
          router.replace({ name: 'login' })
        })
        .catch((err) => {
          console.log(err.code, err.message)
        })
    },
    async logOut(ctx) {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          ctx.commit('logout')
          router.replace('/')
        })
        .catch((err) => {
          console.log(err.code, err.message)
        })
    },
    async getUserAuth(ctx) {
      const auth = getAuth()

      onAuthStateChanged(auth, (user) => {
        if (user) {
          ctx.commit('updateAndLoginUser', user)
          return true
        } else {
          return false
        }
      })
    },
  },
  mutations: {
    updateAndLoginUser(state, user) {
      state.user = user
      state.isAuth = true
    },
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
