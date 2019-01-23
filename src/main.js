import Vue from 'vue'
import App from './App.vue'
// 引入媒体查询
import '../src/css/common.css';
Vue.config.productionTip = false
// 引入字体图标
import '../src/assets/iconfont1/iconfont.css';
// 引入公共样式
import '../src/css/base.css';
// 引入axios
import axios from "axios";
Vue.prototype.$axios=axios; 
new Vue({
  el:"#app",
  render: h => h(App),
})
