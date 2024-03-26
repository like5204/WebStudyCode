<template>
  <div id="_ldialog">
    <h3>
      <slot name="header">对话框</slot>
    </h3>
    <div class="lxl_content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  props:['lxl_title']
};
</script>

<style scoped>
#_ldialog {
  width: 400px;
  height: 300px;
  border: 1px solid black;
  margin: 50px auto 0;
  border-radius: 8px;
  text-indent:1.4em;
  line-height:30px;
}
#_ldialog h3 {
  text-align: center;
  border-bottom: 1px solid #eee;
  height: 30px;
}
</style>