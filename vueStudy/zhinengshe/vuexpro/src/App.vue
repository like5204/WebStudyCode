<template>
  <div id="app">

    root name：{{name}}<br/>

    user name：{{username}}<br/>

    company name：{{companyname}}<br/>

  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'App',
  computed:{
    ...mapState({
      name:state=>state.name,
      username:state=>state.user.name,
      companyname:state=>state.company.name

    })
  },
  created(){
    console.log(mapState)
  }
}
</script>

<style>

</style>
