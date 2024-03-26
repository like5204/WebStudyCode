<template>
  <div id="app">
     <div>{{a}}</div>

       <cmp1 v-model="a" />
  </div>
</template>

<script>
import cmp1 from "@/components/cmp1"

export default {

  name: 'App',
  components: {
    cmp1
  },
  methods:{
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
