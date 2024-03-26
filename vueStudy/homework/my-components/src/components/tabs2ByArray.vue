<template>
  <div id="app">
    <tabs :arr="data1" :value="indexs" @input="fn"></tabs>
  </div>
</template>

<script>
import tabs from "@/components/tabs2";

export default {
  name: "App",
  components: {
    tabs,
  },
  data(){
    return {
        data1:['家电', '数码', '食品', '图书'],
        indexs:[0, 0]
    }
  },
  methods:{
    fn(index, item)
    {
      this.$set(this.indexs, index, item);
      console.log(this.indexs)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  margin-left: 50px;
}
</style>
