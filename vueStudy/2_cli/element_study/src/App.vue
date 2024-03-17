<template>
  <div id="app">
      <ele></ele>
  </div>
</template>

<script>
import ele from './components/ele.vue'

export default {
  name: 'App',
  components: {
    ele
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
