<template>
  <div class="flex flex-row justify-between px-2 text-xs">
    <button class="my-2 mx-1 p-2 bg-slate-400 rounded-lg" @click="deleteItem({ item, getUID })">X</button>
    <div class="my-2 mx-1 p-2 bg-slate-200 rounded-lg">{{ item.service }}</div>
    <button class="my-2 mx-1 p-2 bg-slate-400 rounded-lg" @click="copyLogin">{{ item.login }}</button>
    <button class="my-2 mx-1 p-2 bg-slate-400 rounded-lg" @click="showSecret">{{ secretPass }}</button>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      secretPass: 'xxxxxxxx',
      openSecret: false,
    }
  },
  computed: { ...mapGetters(['getUID']) },
  methods: {
    ...mapActions(['deleteItem']),
    showSecret() {
      if (this.openSecret) {
        navigator.clipboard.writeText(this.secretPass)
      }

      this.secretPass = CryptoJS.AES.decrypt(this.item.password, `${this.item.login}_secret`).toString(CryptoJS.enc.Utf8)
      this.openSecret = true
    },
    copyLogin() {
      navigator.clipboard.writeText(this.item.login)
    },
  },
}
</script>
