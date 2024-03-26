<template>
  <div id="app">
      <cmp1  @added="fn" ref="cmp11"/>
      <ul>
          <li v-for="item in arr" :key="item.id">{{item|itemFor}}</li>
      </ul>

  </div>
</template>

<script>

import cmp1 from "@/components/cmp1.vue"

export default {
  name: 'App',
  components:{
    cmp1
  },
  data(){
    return {
      arr:[
      {id:1, name:"lxl", age:18}
      ]
    };
  },
  methods:{
    fn({name, age})
    {
        this.arr.push({name,age});
        
    }
  },
  mounted(){
    //使用 $on来监听指定vue事件
    // console.log(this.$refs.cmp11);

    // this.$refs.cmp11.$on('added', json=>
    // {
    //     console.log(json);
    // })
  },
  filters:{
    itemFor(item)
    {
        return "姓名: " + item?.name + "   年龄: " + item?.age;
    }
  }
}
</script>

<style>

</style>
