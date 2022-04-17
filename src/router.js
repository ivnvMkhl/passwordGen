import { createRouter, createWebHistory } from 'vue-router'
import Generator from './components/Generator.vue'
import CreateForm from './components/CreateForm.vue'
import PassStack from './components/PassStack.vue'
import LoginPage from './components/LoginPage.vue'
import SignupPage from './components/SignupPage.vue'
import ForgotPage from './components/ForgotPage.vue'
import NotFound from './components/NotFound.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'gen', component: Generator },
    { path: '/create', name: 'create', component: CreateForm },
    { path: '/stack', name: 'stack', component: PassStack },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/signup', name: 'signup', component: SignupPage },
    { path: '/forgot', name: 'forgot', component: ForgotPage },
    // { path: '*', name: 'notFound', component: NotFound },
  ],
})
