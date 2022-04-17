<template>
  <div class="flex flex-col justify-center grow bg-slate-100">
    <div class="text-2xl mb-4">Sign In</div>
    <div class="">
      <div class="">Email:</div>
      <input type="email" class="mb-2 px-2 w-52" />
    </div>
    <div>
      <div>Password:</div>
      <input type="password" class="mb-2 px-2 w-52" />
    </div>
    <div class="">
      <MyButton>Sign In</MyButton>
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
import { mapMutations } from 'vuex'
export default {
  methods: { ...mapMutations(['enterTest']) },
}
</script>
