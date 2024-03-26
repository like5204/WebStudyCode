<template>
    <div>
        <div>
             <input type="text" v-model="n">

            <h1 >Component 1 {{n}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cmp1',
    props:['name'],
    data() {
        return {
           n:""
        };
    },
    methods: {
        
    },
    created() {
        console.log("created cmp1");
    },
    mounted() {
       console.log("mounted cmp1");
      this.n = this.name;
      this.n = this.name + "#";
    },
    updated() {
        console.log("updated cmp1");
    },
    destroyed() {
        console.log("destroyed cmp1");
    }   
   
}
</script>

<style>
</style>