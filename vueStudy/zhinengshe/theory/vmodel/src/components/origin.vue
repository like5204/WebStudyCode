<template>
  <div id="app">
     <div>{{a}}</div>
      <input type="text" v-model="a"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data()
  {
    return {
      a:123
    }
  }
}
</script>

<style>

</style>
