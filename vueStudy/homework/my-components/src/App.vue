<template>
  <div id="app">
      <mydialog>
            <template #header></template>
      </mydialog>
  </div>
</template>

<script>
import mydialog from "@/components/mydialog";

export default {
  name: "App",
  components: {
    mydialog,
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
