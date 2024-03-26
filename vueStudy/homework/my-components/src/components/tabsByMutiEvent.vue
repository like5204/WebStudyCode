<template>
  <div id="app">
    <tabs :arr="data1" :cur1="index1" :cur2="index2" @change1="num=>index1=num" @change2="num=>index2=num"></tabs>
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
        index1:0,
        index2:0
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
