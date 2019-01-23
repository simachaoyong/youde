<template>
  <div id="app">
<<<<<<< HEAD
    <Xsearch></Xsearch>
    <Xbody></Xbody>
    <!-- <router-view></router-view> -->
    <Xfooter></Xfooter>
=======
    <Xsearch />
    <Xbanner />
    <Xmenu />
    <Ximg />
    <Xhot />
    <Xgroup />
    <Xlist />
    <Totop />
    <Xfooter />
>>>>>>> 3f117b0a14a06f7b8f1918900ea4ee4de32c19cd
  </div>
</template>

<script>
import Xsearch from './components/Xsearch.vue'
import Xfooter from './components/Xfooter.vue'
<<<<<<< HEAD
import Xbody from './components/Xbody.vue'
export default {
  components: {
    Xsearch,
    Xbody,
    Xfooter
  }
}
</script>
<style>

=======
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
>>>>>>> 3f117b0a14a06f7b8f1918900ea4ee4de32c19cd
</style>
