<template>
  <div class="flex flex-col justify-center grow bg-slate-100">
    <div class="text-2xl mb-4">Sign Up</div>
    <div class="">
      <div class="">Email:</div>
      <input
        type="email"
        class="mb-2 px-2 w-52"
        ref="signup_email"
        :class="{ 'bg-red-200': !/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email) && !(email.length === 0) }"
        v-on:keyup.enter="this.$refs.signup_password.focus()"
        v-model="email"
      />
    </div>
    <div class="">
      <div class="">Password:</div>
      <input
        type="password"
        class="mb-2 px-2 w-52"
        ref="signup_password"
        v-on:keyup.enter="signUp({ password, email })"
        :class="{ 'bg-red-200': !(password.length > 5) && !(password.length === 0) }"
        v-model="password"
      />
    </div>
    <div class="">
      <MyButton
        :class="{
          'border-2 border-red-200 hover:border-red-200 bg-slate-300 hover:bg-slate-300 active:bg-slate-300':
            !(password.length > 5) || !/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email),
        }"
        @click="password.length > 5 && /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email) ? signUp({ password, email }) : () => {}"
        >Sign Up</MyButton
      >
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
import { mapActions, mapGetters } from 'vuex'
export default {
  created() {
    this.getUserAuth()
  },
  mounted() {
    this.$refs.signup_email.focus()
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  watch: {
    isAuth() {
      if (this.isAuth) {
        this.$router.push('/')
      }
    },
  },
  computed: { ...mapGetters(['isAuth']) },
  methods: {
    ...mapActions(['signUp', 'getUserAuth']),
  },
}
</script>
