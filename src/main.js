import Vue from 'vue'
<<<<<<< HEAD
// import App from './App.vue'
import router from './configs/router.js'
=======
import App from './App.vue'
>>>>>>> 3f117b0a14a06f7b8f1918900ea4ee4de32c19cd
// 引入媒体查询
import '../src/css/common.css';
Vue.config.productionTip = false
// 引入字体图标
<<<<<<< HEAD
import '../src/assets/iconfont3/iconfont.css';
import '../src/assets/iconfont1/iconfont.css';
import '../src/assets/iconfont2/iconfont.css';
=======
import '../src/assets/iconfont1/iconfont.css';
>>>>>>> 3f117b0a14a06f7b8f1918900ea4ee4de32c19cd
// 引入公共样式
import '../src/css/base.css';
// 引入axios
import axios from "axios";
Vue.prototype.$axios=axios; 
new Vue({
  el:"#app",
<<<<<<< HEAD
  router,
  render: h => h('router-view'),
=======
  render: h => h(App),
>>>>>>> 3f117b0a14a06f7b8f1918900ea4ee4de32c19cd
})
