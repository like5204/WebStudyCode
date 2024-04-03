import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


const store_user = {
    state:{name:"luoxinlei"},
    mutations:{
        setname(state, name){
            state.name = name;
        }
    },
    actions:{
        setname({commit}, arg){
            commit(setname, arg);
        }
    }
};


const store_company = {
    state:{name:"xx有限公司"},
    mutations:{
        setname(state, name){
            state.name = name;
        }
    },
    actions:{
        setname({commit}, arg){
            commit(setname, arg);
        }
    }
    
};


const store = new Vuex.Store({
    state:{
        name:"lxl"
    },
    mutations:{
        setName(state, name){
            state.name = name;
        }
    },
    actions:{
        setname({commit}, arg){
            commit('setName', arg);
        }
    },
    modules:{
        user:store_user,
        company:store_company
    }
});


export default store;