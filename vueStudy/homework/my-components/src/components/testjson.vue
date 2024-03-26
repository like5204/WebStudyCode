<template>
  <div id="box">
        <button @click="fn">111</button>
  </div>
</template>

<script>
export default {
    props:['json'],
    methods:{
        fn()
        {
            this.json++
            console.log(this.json);
        }
    }
};
</script>

<style scoped>

</style>