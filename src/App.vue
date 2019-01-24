<template>
  <div id="app">
    <!-- 路由匹配到组件，渲染的地方 -->
    <router-view></router-view>
    <Xfooter></Xfooter>
  </div>
</template>

<script>
import Xfooter from './components/Xfooter.vue'
export default {
  components: {
    Xfooter
  }
}
</script>
<style>

</style>
