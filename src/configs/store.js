import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        // 购物车最开始是空的
        carList:[],
        number:0,
        total:0,
        // 单个商品数量
        num:0
    },
    mutations:{
        // 把产品添加进购物车先，同时传入商品id
        cunPro(state,obj){//同时要把总数添加上
            state.carList.push(obj);
        },
        // 点击删除按钮
        delPro(state,index){
            state.carList.splice(index,1);
        },
        //当点击增加按钮的时候
        addPro(state,index){
            //相当于点击之后变成了新的数组了，关键是不能改变原来的数组
            let idx=index;
            state.carList.forEach((item,index)=>{
                if(index==idx){
                    item.pronum++
                }
            })
        },
        //当点击减少按钮时
        decPro(state,index){
            let idx=index;
            state.carList.forEach((item,index)=>{
                if(index==idx){
                    if(item.pronum<=0){
                        item.pronum=0
                    }else{
                        item.pronum--
                    }
                }
            })
        } 
    }
})


export default store