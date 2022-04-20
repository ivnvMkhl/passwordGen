import { v4 as uuidv4 } from 'uuid'
import { child, get, getDatabase, push, ref, remove, set, update } from 'firebase/database'

export default {
  actions: {
    async createItem(ctx, { item, uid }) {
      if (!(item.login.trim() === '' || item.password.trim() === '')) {
        item.id = uuidv4()
        const db = getDatabase()
        push(ref(db, `/${uid}/${item.id}`), {
          ...item,
        })
        ctx.commit('addItem', item)
      }
    },
    async fetchItems(ctx, uid) {
      const dbRef = ref(getDatabase())
      console.log(uid)
      get(child(dbRef, `${uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const items = Object.values(snapshot.val()).map((val) => Object.values(val)[0])
            ctx.commit('addAllItems', items)
          } else {
            console.log('No data available')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
    deleteItem(ctx, { item, getUID }) {
      const dbRef = ref(getDatabase())
      remove(child(dbRef, `${getUID}/${item.id}`))
      ctx.commit('rmItem', item)
    },
  },
  mutations: {
    addAllItems(state, items) {
      state.passStack = [...items]
    },
    addItem(state, item) {
      state.passStack.push(item)
    },
    rmItem(state, item) {
      state.passStack = state.passStack.filter((val) => val.id !== item.id)
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
