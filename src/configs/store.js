import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        // 购物车最开始是空的
        carList:[],
        number:0,
        total:''
    },
    mutations:{
        // 把产品添加进购物车先，同时传入商品id
        cunPro(state,obj){
            state.carList.push(obj);
        },
        
    }
})


export default store