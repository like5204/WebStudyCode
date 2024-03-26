<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        {{item.title}}
        <tree v-if="item.children&&item.children.length>0"
             :data="item.children"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tree",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style scoped>
</style>