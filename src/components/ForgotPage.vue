<template>
  <div class="flex flex-col justify-center grow bg-slate-100">
    <div class="text-2xl mb-4">Forgot password</div>
    <div class="">
      <div class="">Email:</div>
      <input
        type="email"
        ref="forgot_email"
        :class="{ 'bg-red-200': !/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email) && !(email.length === 0) }"
        class="mb-2 px-2 w-52"
        v-on:keyup.enter="forgotPass(email)"
        v-model="email"
      />
    </div>
    <div class="">
      <MyButton
        :class="{
          'border-2 border-red-200 hover:border-red-200 bg-slate-300 hover:bg-slate-300 active:bg-slate-300':
            !/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email),
        }"
        @click=";/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email) ? forgotPass(email) : () => {}"
        >Send forgot email</MyButton
      >
    </div>
    <div class="mt-4">
      New user?
      <router-link to="/signup" class="font-bold hover:text-slate-600 hover:cursor-pointer">Create an account</router-link>
    </div>
    <div class="mt-2">
      or
      <router-link to="/" class="font-bold hover:text-slate-600 hover:cursor-pointer" @click="enterTest()">enter test mode</router-link>
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
    this.$refs.forgot_email.focus()
  },
  data() {
    return {
      email: '',
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
    ...mapActions(['forgotPass', 'getUserAuth']),
  },
}
</script>
