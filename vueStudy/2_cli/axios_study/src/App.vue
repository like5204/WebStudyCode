<template>
  <div id="app">
    <MyTable></MyTable>
  </div>
</template>

<script>
import MyTable from './components/Mytable.vue'

export default {
  name: 'App',
  components: {
    MyTable
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
