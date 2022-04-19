<template>
  <div class="flex flex-col justify-center grow bg-slate-100">
    <div class="text-2xl mb-4">Sign Up</div>
    <div class="">
      <div class="">Email:</div>
      <input type="email" class="mb-2 px-2 w-52" v-model="email" />
    </div>
    <div class="">
      <div class="">Password:</div>
      <input type="text" class="mb-2 px-2 w-52" :class="{ 'text-red-500': !validPassword() }" v-model="password" />
    </div>
    <div class="">
      <MyButton @click="signUp({ password, email })">Sign Up</MyButton>
    </div>
    <div class="mt-4">
      Already have an account?
      <router-link :to="{ name: 'login' }" class="font-bold hover:text-slate-600 hover:cursor-pointer">Sign in</router-link>
    </div>
    <div class="mt-2">
      or
      <router-link :to="{ name: 'forgot' }" class="font-bold hover:text-slate-600 hover:cursor-pointer">forgot password</router-link>
    </div>
    <div class="mt-2">
      or
      <router-link :to="{ name: 'create' }" class="font-bold hover:text-slate-600 hover:cursor-pointer">enter test mode</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['signUp']),
    validPassword() {
      if (this.password.length >= 6) {
        return true
      } else return false
    },
  },
}
</script>
