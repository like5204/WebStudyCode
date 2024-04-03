import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import index from '@/components/index'
import note from '@/components/note'
import notfound from '@/components/notfound'
import message from '@/components/message'
import showNote from '@/components/showNote'


import foot from '@/components/myfooter'

import ed from '@/components/ed'
import head from '@/components/myheader'

let router = new Router({
  mode:"history",
  routes:[
    {path:"/", component:index},
    {path:"/note/:id",  name:"note", props:true ,component:showNote},
    {path:"/note", components:{
      default:note,
      myfoot:null,
      myhead:head
    }, meta:"博客浏览"},
    {path:"/message", components:{
      default:message,
      myhead:head
    }, meta:"留言"},
    {path:"/index", components:{
        default:index,
        myfoot:foot,
        myhead:head
    }, meta:"主页"},
    {path:"/ed", components:{
      default:ed,
      myhead:head
    },meta:"编辑"},
    {path:"*", component:notfound}
  ]
});


export default router;