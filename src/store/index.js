import { createStore } from 'vuex'
import PassState from './states/PassState'
import CreateState from './states/CreateState'
import UserState from './states/UserState'

const store = createStore({
  modules: {
    PassState,
    CreateState,
    UserState,
  },
})

export default store
