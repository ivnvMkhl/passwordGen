<template>
  <div class="flex flex-col justify-center grow bg-slate-100">
    <div>
      Number of symbols:
      <input
        type="text"
        class="m-2 px-2 w-24"
        placeholder="default: 8"
        name="numberOfSymbols"
        v-model="generateParams.numberOfSymbols"
        @keyup.enter="generatePass"
      />
    </div>
    <div>
      Uppercase:
      <input type="checkbox" class="m-2" name="uppercase" v-model="generateParams.uppercase" />
    </div>
    <div>
      Numbers:
      <input type="checkbox" checked class="m-2" name="numbers" v-model="generateParams.numbers" />
    </div>

    <div>
      Symbols !@#$%?:
      <input type="checkbox" class="m-2" name="symbols" v-model="generateParams.symbols" />
    </div>
    <div class="mt-12">
      <MyButton @click="generatePass"> Generate </MyButton>
    </div>
    <div class="text-4xl">
      <div class="m-4 px-2">{{ generatedPass }}</div>
      <div>
        <MyButton @click="copyPass"> Copy </MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  created() {
    this.getUserAuth()
  },
  data() {
    return {
      generateParams: {
        numberOfSymbols: 8,
        numbers: true,
        symbols: false,
        uppercase: true,
      },
      charMaps: {
        numberMap: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
        symbolsMap: [33, 35, 36, 37, 38, 63, 64],
        uppercaseMap: [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
        lowercaseMap: [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122],
      },
      generatedPass: 'PaSsW0Rd',
    }
  },
  computed: mapGetters(['getUID', 'isAuth']),
  methods: {
    ...mapActions(['getUserAuth', 'fetchItems']),
    generatePass() {
      let summMap = this.charMaps.lowercaseMap
      if (this.generateParams.numbers) summMap = [...summMap, ...this.charMaps.numberMap]
      if (this.generateParams.symbols) summMap = [...summMap, ...this.charMaps.symbolsMap]
      if (this.generateParams.uppercase) summMap = [...summMap, ...this.charMaps.uppercaseMap]
      let charCode
      let passResult = ''
      let passLength = parseInt(this.generateParams.numberOfSymbols)
      if (isNaN(passLength) || passLength < 2) passLength = 8
      if (passLength > 12) passLength = 12
      for (let i = 0; i < passLength; i++) {
        charCode = summMap[Math.round(Math.random() * summMap.length)]
        passResult = passResult.concat(String.fromCharCode(charCode))
      }
      this.generatedPass = passResult
    },
    copyPass() {
      navigator.clipboard.writeText(this.generatedPass)
    },
  },
}
</script>
