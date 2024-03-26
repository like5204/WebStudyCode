<template>
  <div id="app">
     <div>{{a}}</div>
      <input type="text" :value="a"  @input="a=$event.target.value"/>
  </div>
</template>

<script>

export default {

//v-model = :value + @input

  name: 'App',
  components: {
    
  },
  methods:{
    fn(ev)
    {
        this.a = (ev.target.value);
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
