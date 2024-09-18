<template>
  <div id="app">
    <h1>{{ title }}</h1>
   <vButton @click="increment" outlined>Click here</vButton>
  </div>
</template>

<script>
import vButton from './components/vButton.vue'

export default {
  name: 'App',
  components: {
    vButton
  },
  data(){
    return {
      amountOfClicks: 0
    }
  },
  methods: {
    increment(){
      this.amountOfClicks++
    }
  },
  computed: {
    title(){
      return `Amount of clicks: ${this.amountOfClicks}`
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
