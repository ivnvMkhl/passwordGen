<template>
  <div class="flex flex-col justify-start grow bg-slate-100">
    <div v-if="getAll.length > 0">
      <div class="flex flex-row justify-between px-2 text-xs font-bold">
        <div class="mx-1 px-8 p-2">Service:</div>
        <div class="mx-1 p-2">Login:</div>
        <div class="mx-1 p-2">Password:</div>
      </div>
      <PassStackItem v-for="item in getAll" :key="item.id" :item="item"></PassStackItem>
    </div>
    <div v-else class="py-4 text-lg">No entries</div>
    <div>
      <MyButton @click="fetchItems(getUID)">Refresh server</MyButton>
    </div>
  </div>
</template>

<script>
import PassStackItem from './PassStackItem.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  created() {
    this.getUserAuth()
    if (!this.isAuth) {
      this.$router.push('/')
    }
  },
  mounted() {
    this.fetchItems(this.getUID)
  },
  components: {
    PassStackItem,
  },
  computed: { ...mapGetters(['getAll', 'isAuth', 'getUID']) },
  methods: { ...mapActions(['getUserAuth', 'fetchItems']) },
}
</script>
