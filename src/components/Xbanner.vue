<template>
  <!-- 轮播图 -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item of bannerimg">
        <img :src="JSON.parse(item.banner)[0].path">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import Swiper from "swiper";
export default {
  data() {
    return {
      bannerimg: []
    };
  },
  methods: {
    getlist() {
      this.$axios
        .get("https://m.youde.com/youde/f/app/s_10020/advertising/list?type=1")
        .then(res => {
          this.bannerimg = res.data.data;
          Vue.nextTick(() => {
            var swiper = new Swiper(".swiper-container", {
              initialSlide: 4,
              direction: "horizontal",
              pagination: {
                el: ".swiper-pagination"
              },
              autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: true
              },
              loop: true
            });
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getlist();
  }
};
</script>
<style scoped>
@import url(../swiper/css/swiper.min.css);
.swiper-container {
  width: 100%;
  height: 175px;
  background-color:#fff;
  overflow: hidden;
}
.swiper-container img {
  width: 100%;
  height: 100%;
}
.swiper-wrapper{
	height:149px;
}
.swiper-pagination{
	bottom:6px;
}
</style>
