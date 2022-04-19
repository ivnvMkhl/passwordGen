<template>
  <div class="flex flex-col justify-center grow bg-slate-100">
    <div class="">
      Logged in <strong>{{ getUserEmail }}</strong>
    </div>
    <div class="mb-8">
      <button class="font-bold hover:text-slate-600 hover:cursor-pointer" @click="logOut()">Logout</button>
    </div>
    <div class="text-2xl mb-4">Create new entry</div>
    <div>
      <div>Service:</div>
      <div>
        <input
          type="text"
          class="mb-2 px-2 w-52"
          ref="create_service"
          v-on:keyup.enter="this.$refs.create_login.focus()"
          @input="changeService($event.target.value)"
          :value="getService"
        />
      </div>
      <div>Login:</div>
      <div>
        <input
          type="text"
          class="mb-2 px-2 w-52"
          ref="create_login"
          v-on:keyup.enter="this.$refs.create_password.focus()"
          @input="changeLogin($event.target.value)"
          :value="getLogin"
        />
      </div>
      <div>Password:</div>
      <div>
        <input
          type="text"
          class="mb-2 px-2 w-52"
          ref="create_password"
          v-on:keyup.enter="buildCreate()"
          @input="changePassword($event.target.value)"
          :value="getPassword"
        />
      </div>
      <div class="mt-2">
        <MyButton @click="buildCreate()"> Create </MyButton>
        <MyButton @click="clearCreate"> Cleaar </MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import CryptoJS from 'crypto-js'

export default {
  created() {
    const isAuth = this.getUserAuth()
    if (!isAuth) {
      console.log('not auth')
      this.$router.push({ name: 'gen' })
    }
    if (!this.isAuth) {
      this.$router.push({ name: 'gen' })
    }
  },
  mounted() {
    this.$refs.create_service.focus()
  },
  data() {
    return {
      create: {
        service: '',
        login: '',
        password: '',
      },
    }
  },
  computed: { ...mapGetters(['getService', 'getLogin', 'getPassword', 'getAllCreate', 'isAuth', 'getUserEmail', 'getUID']) },
  methods: {
    ...mapActions(['createItem', 'changeService', 'changeLogin', 'changePassword', 'clearCreate', 'logOut', 'getUserAuth']),
    buildCreate() {
      let item = this.getAllCreate
      item.password = CryptoJS.AES.encrypt(item.password, `${item.login}_secret`).toString()
      const uid = this.getUID
      this.createItem({ item, uid })
      this.clearCreate()
      this.$refs.create_service.focus()
    },
  },
}
</script>
