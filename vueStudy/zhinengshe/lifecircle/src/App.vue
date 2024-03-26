<template>
  <div id="app">
     

      <button @click="b=!b">Click me</button>

      <Cmp1  :name="name"  v-if="b"/>
  </div>
</template>

<script>
import Cmp1 from './components/cmp1.vue'


// 组件生命周期， 组件内销毁或者创建一个组件 不会触发销毁， 考虑父组件来创建销毁


export default {
  name: 'App',
  data: function () {
    return {
      name: 'Vue.js',
      b:true
    }
  },
  components: {
    Cmp1
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
