import Vue from 'vue'
// import App from './App.vue'
import router from './configs/router.js'
// 引入媒体查询
import '../src/css/common.css';
Vue.config.productionTip = false
// 引入字体图标
import '../src/assets/iconfont3/iconfont.css';
import '../src/assets/iconfont1/iconfont.css';
import '../src/assets/iconfont2/iconfont.css';
// 引入公共样式
import '../src/css/base.css';
// 引入axios
import axios from "axios";
Vue.prototype.$axios=axios; 
new Vue({
  el:"#app",
  router,
  render: h => h('router-view'),
})
