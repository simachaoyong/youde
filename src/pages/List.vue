<template>
  <div id="app">
    <Xsearch></Xsearch>
    <Xbody></Xbody>
    <Xfooter></Xfooter>
  </div>
</template>

<script>
import Xsearch from "../components/Xsearch.vue";
import Xfooter from "../components/Xfooter.vue";
import Xbody from "../components/Xbody.vue";
export default {
  components: {
    Xsearch,
    Xbody,
    Xfooter
  }
};
</script>
<style>
</style>
