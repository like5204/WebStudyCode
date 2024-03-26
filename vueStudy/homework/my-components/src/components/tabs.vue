<template>
  <div class="tabs">
    <ul>
      <li
        v-for="(item, i) in arr"
        :key="i"
        :class="['tab', { active: value == i }]"
        @click="$emit('input', i)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      index: 2,
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: violet;
}

.tab {
  float: left;
  margin-left: 10px;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
}
.active {
  background: #007bff;
  color: white;
}
.tabs {
  width: 1000px;
  height: 100px;
  position: relative;
}
</style>