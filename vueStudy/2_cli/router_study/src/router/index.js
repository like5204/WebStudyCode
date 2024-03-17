import VueRouter from "vue-router";

import Yanzi from "../components/Yanzi.vue";
import Faye from "../components/Faye.vue";
import Jay from "../components/Jay.vue";
import Yue from "../components/Yue.vue";


const router = new VueRouter(
    {
        routes:[
            {path:'/', redirect:'/Yanzi'},
            {path:'/Yanzi', component:Yanzi, 
            children:[
                {path:"Yue", component:Yue},
                {path:"Yue/:id", component:Yue,props:true}
            ]},
            {path:'/Faye', component:Faye},
            {path:'/Jay', component:Jay}
        ]
    }
)

export default router;

