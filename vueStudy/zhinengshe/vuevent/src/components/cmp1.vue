
<template>
  <div>
    姓名: <input type="text" v-model="name" /><br />

    年龄: <input type="text" v-model="age" /><br />

    <button @click="fn">提交</button>
  </div>
</template>

<script>
export default {
  name: "cmp1",
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    fn() {
      this.$emit("added", { name: this.name, age: this.age });
      this.name='';
      this.age='';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

