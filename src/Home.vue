<template>
  <div class="md:container md:mx-auto px-4 text-slate-900">
    <div class="text-center bg-slate-400 h-screen flex flex-col">
      <HeaderMenu></HeaderMenu>
      <router-view></router-view>
      <FooterBlock></FooterBlock>
    </div>
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue'
import FooterBlock from './components/FooterBlock.vue'

export default {
  methods: {},
  components: {
    HeaderMenu,
    FooterBlock,
  },
}
</script>

<style lang="scss" scoped></style>
