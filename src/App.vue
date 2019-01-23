<template>
  <div id="app">
    <Xsearch />
    <Xbanner />
    <Xmenu />
    <Ximg />
    <Xhot />
    <Xgroup />
    <Xlist />
    <Totop />
    <Xfooter />
  </div>
</template>

<script>
import Xsearch from './components/Xsearch.vue'
import Xfooter from './components/Xfooter.vue'
import Xmenu from './components/Xmenu.vue'
import Ximg from './components/Ximg.vue'
import Xhot from './components/Xhot.vue'
import Xgroup from './components/Xgroup.vue'
import Xlist from './components/Xlist.vue'
import Totop from './components/Totop.vue'
import Xbanner from './components/Xbanner.vue'
export default {
  name: 'app',
  components: {
    Xsearch,
    Xfooter,
    Xmenu,
    Ximg,
    Xhot,
    Xgroup,
    Xlist,
    Totop,
    Xbanner
  }
}
</script>

<style scoped>
#app{
  padding-bottom:58px;
}
</style>
