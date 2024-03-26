<template>
  <div id="app">
     <div>{{a}}</div>

     <cmp1 :value="a"  @input="item=>this.a=item"/>

       <cmp1 :value="a"  @input="fn"/>
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
    fn(value)
    {
        this.a = (value)
    }
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
