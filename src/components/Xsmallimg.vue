<template>
  <div class="group2">
    <img :src="JSON.parse(data[0].banner).path">
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.$axios
      .get("https://m.youde.com/youde/f/xcx/s_10020/advertising/list?type=3")
      .then(res => {
        this.data = res.data.data;
      });
  }
};
</script>
<style scoped>
.group2{
	width:100%;
	overflow:hidden;
	padding:5px;
}
.group2 img{
	width:100%;
	height:100%;
}
</style>