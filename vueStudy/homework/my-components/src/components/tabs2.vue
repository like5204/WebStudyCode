<template>
  <div class="tabs">
    <div>
      <ul>
      <li
        v-for="(item, i) in arr"
        :key="i"
        :class="['tab', { active: index1 == i }]"
        @click="$emit('update:index1', i)"
      >
        {{ item }}
      </li>
    </ul>
    </div>
    <div>
      <ul>
      <li
        v-for="(item, i) in arr"
        :key="i"
        :class="['tab', { active: cur2 == i }]"
        @click="$emit('update:cur2', i)"
      >
        {{ item }}
      </li>
    </ul>
    </div>

    
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true,
    },
    index1: {
      type: Number,
      default:0
    },
    cur2: {
      type: Number,
      default:0
    },
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
.tabs div
{
  height:100%;
}
</style>