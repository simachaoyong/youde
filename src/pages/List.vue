<template>
  <div id="app">
    <XsearchList></XsearchList>
    <Xbody></Xbody>
    <Xfooter></Xfooter>
  </div>
</template>

<script>
import XsearchList from "../components/Xsearch_list.vue";
import Xfooter from "../components/Xfooter.vue";
import Xbody from "../components/Xbody.vue";
export default {
  components: {
    XsearchList,
    Xbody,
    Xfooter
  }
};
</script>
<style>
</style>
