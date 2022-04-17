<template>
  <div>
    <header class="flex flex-col justify-center text-center bg-slate-400 h-12">
      <div class=""><h1 class="text-2xl font-bold">Password Generator</h1></div>
    </header>
    <div class="flex flex-col justify-center text-center bg-slate-400 h-12">
      <div class="flex flex-row justify-center">
        <div class="flex text-l">
          <div>
            <router-link
              class="px-4 hover:text-slate-600"
              :to="{ name: 'gen' }"
              @click="setActivate($event.target.name)"
              name="gen"
              :class="{ 'text-slate-600': active === 'gen' }"
              >Generator</router-link
            >
            |
          </div>

          <div v-if="!isAuth">
            <router-link
              class="px-4 hover:text-slate-600"
              :to="{ name: 'login' }"
              @click="setActivate($event.target.name)"
              name="login"
              :class="{ 'text-slate-600': active === 'create' }"
              >Login</router-link
            >
          </div>

          <div v-if="isAuth">
            <router-link
              class="px-4 hover:text-slate-600"
              :to="{ name: 'create' }"
              @click="setActivate($event.target.name)"
              name="create"
              :class="{ 'text-slate-600': active === 'create' }"
              >Create</router-link
            >
            |
          </div>

          <div v-if="isAuth">
            <router-link
              class="px-4 hover:text-slate-600"
              :to="{ name: 'stack' }"
              @click="setActivate($event.target.name)"
              name="stack"
              :class="{ 'text-slate-600': active === 'stack' }"
              >Passwords</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      active: 'gen',
    }
  },
  computed: {
    ...mapGetters(['isAuth']),
  },
  methods: {
    setActivate(pageName) {
      this.active = pageName
    },
  },
}
</script>
