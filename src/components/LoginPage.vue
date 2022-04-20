<template>
  <div class="flex flex-col justify-center grow bg-slate-100">
    <div class="text-2xl mb-4">Sign In</div>
    <div class="">
      <div class="">Email:</div>
      <input
        type="email"
        :class="{ 'bg-red-200': !/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email) && !(email.length === 0) }"
        ref="login_email"
        v-on:keyup.enter="this.$refs.login_password.focus()"
        class="mb-2 px-2 w-52"
        v-model="email"
      />
    </div>
    <div>
      <div>Password:</div>
      <input
        type="password"
        ref="login_password"
        class="mb-2 px-2 w-52"
        v-on:keyup.enter="logIn({ email, password })"
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
        @click="password.length > 5 && /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email) ? logIn({ password, email }) : () => {}"
        >Sign In</MyButton
      >
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
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  created() {
    this.getUserAuth()
  },
  mounted() {
    this.$refs.login_email.focus()
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
    ...mapMutations(['enterTest']),
    ...mapActions(['logIn', 'getUserAuth']),
  },
}
</script>
