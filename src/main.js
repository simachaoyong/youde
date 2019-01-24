import Vue from 'vue'
// import App from './App.vue'
import router from './configs/router.js'
// 引入媒体查询
<<<<<<< HEAD
import '../src/css/common.css';
import store from './configs/store.js'
Vue.config.productionTip = false
// 引入字体图标
// import '../src/assets/iconfont3/iconfont.css';
import '../src/assets/iconfont1/iconfont.css';
// import '../src/assets/iconfont2/iconfont.css';
import '../src/assets/iconfont4/iconfont.css';
=======
import './css/common.css';
Vue.config.productionTip = false
// 引入字体图标
import './assets/iconfont1/iconfont.css';
>>>>>>> 05a801f21bd623d5e057d706c29982f571c44173
// 引入公共样式
import "./css/base.css";
// 引入axios
import axios from "axios";
Vue.prototype.$axios=axios; 
new Vue({
  el:"#app",
  router,
  store,
  render: h => h('router-view'),
})
