import { v4 as uuidv4 } from 'uuid'
import { getDatabase, push, ref, set, update } from 'firebase/database'

export default {
  actions: {
    createItem(ctx, { item, uid }) {
      if (!(item.login.trim() === '' || item.password.trim() === '')) {
        item.id = uuidv4()
        const db = getDatabase()
        push(ref(db, '/' + uid), {
          ...item,
        })
        ctx.commit('addItem', item)
      }
    },
    deleteItem(ctx, item) {
      ctx.commit('rmItem', item)
    },
  },
  mutations: {
    addItem(state, item) {
      state.passStack.push(item)
    },
    rmItem(state, item) {
      state.passStack = state.passStack.filter((val) => val.login !== item.login)
    },
  },
  state: {
    passStack: [],
  },
  getters: {
    getAll(state) {
      return state.passStack
    },
  },
}
