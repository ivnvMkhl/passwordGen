<template>
  <div class="flex flex-col justify-center grow bg-slate-100">
    <div class="text-2xl mb-4">Sign In</div>
    <div class="">
      <div class="">Email:</div>
      <input type="email" class="mb-2 px-2 w-52" v-model="email" />
    </div>
    <div>
      <div>Password:</div>
      <input type="password" class="mb-2 px-2 w-52" :class="{ 'text-red-500': !validPassword() }" v-model="password" />
    </div>
    <div class="">
      <MyButton @click="logIn({ email, password })">Sign In</MyButton>
    </div>
    <div class="mt-4">
      New user?
      <router-link :to="{ name: 'signup' }" class="font-bold hover:text-slate-600 hover:cursor-pointer">Create an account</router-link>
    </div>
    <div class="mt-2">
      or
      <router-link :to="{ name: 'forgot' }" class="font-bold hover:text-slate-600 hover:cursor-pointer">forgot password</router-link>
    </div>
    <div class="mt-2">
      or
      <router-link :to="{ name: 'create' }" class="font-bold hover:text-slate-600 hover:cursor-pointer" @click="enterTest()"
        >enter test mode</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapMutations(['enterTest']),
    ...mapActions(['logIn']),
    validPassword() {
      if (this.password.length >= 6) {
        return true
      } else return false
    },
  },
}
</script>
