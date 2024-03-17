<template>
  <div id="app">
      <Nav></Nav>
      
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap; /* 当没有足够空间时允许项目换行 */
  justify-content: center; /* 项目之间和周围的空间平均分布 */
  gap: 20px; /* 设置项目之间的间隙 */

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
