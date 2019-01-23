<template>
  <div class="totop" v-show="show" @click="toTop()">
    <i class="iconfont icon-shangjiantou"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    // 点击回到顶部
    toTop() {
	  clearInterval(timer);
      var timer=setInterval(function() {
        let h = window.scrollY;
        h -= 80;
        if (h <= 0) {
          clearInterval(timer);
		}
		window.scrollTo(0,h);
      }, 50);
    }
  },
  mounted() {
    // 吸顶的内容
    window.onscroll = () => {
      if (window.scrollY >= 400) {
        this.show = true;
      } else {
        this.show = false;
      }
    };
  }
};
</script>
<style scoped>
.totop {
  position: fixed;
  bottom: 52px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: hsla(0, 0%, 100%, 0.6);
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid #efefef;
  box-shadow: 1px 1px 1px #efefef;
  line-height: 40px;
  text-align: center;
}
.totop i {
  color: #666;
  width: 40px;
}
</style>
