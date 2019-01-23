<template>
  <div id="app">
    <Xsearch></Xsearch>
    <Xbody></Xbody>
    <!-- <Xfooter></Xfooter> -->
  </div>
</template>

<script>
import Xsearch from "./Xsearch.vue";
// import Xfooter from "./Xfooter.vue";
import Xbody from "./Xbody.vue";
export default {
  components: {
    Xsearch,
    Xbody
    // Xfooter
  }
};
</script>
<style>
</style>
