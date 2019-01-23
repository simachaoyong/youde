<template>
  <div class="groupbox">
    <ul class="group">
      <li v-for="(item,index) of data" :key="index">
        <img :src="JSON.parse(item.banner).path">
      </li>
    </ul>
	<Xsmallimg />
  </div>
</template>
<script>
import Xsmallimg from "./Xsmallimg";
export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.$axios
      .get("https://m.youde.com/youde/f/xcx/s_10020/advertising/list?type=2")
      .then(res => {
        this.data = res.data.data;
      });
  },
  components:{
	  Xsmallimg,
  }
};
</script>
<style scoped>
.groupbox {
  width: 100%;
  background-color:#fff;
}
.group {
  width: 100%;
  overflow: hidden;
}
.group li {
  float: left;
  width: 50%;
  padding: 5px;
}
.group li img {
  width: 100%;
}
</style>