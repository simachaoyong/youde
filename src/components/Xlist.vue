<template>
<<<<<<< HEAD
	<div>
		分类
	</div>
</template>
<script>

</script>
<style scoped>
	
=======
  <div class="xlist">
    <div class="recommendTitle">
      <img src="../assets/images/tj.png" alt>
      <span>为您推荐</span>
    </div>
    <div class="recommonCont">
      <div class="recommendList" v-for="(item,index) of data" :key="index">
        <div class="inner">
          <div class="recommendListImg">
            <img
              data-v-e37d4f68
              :src="item.thumbnail"
              alt
              class="recommendImgSize"
            >
          </div>
          <span class="recommendListTitle" v-text="item.title"></span>
          <span class="recommendListPrace">
            ￥
            <span v-text="(item.maxPrice/100).toFixed(2)"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: []
    };
  },
  created() {
    this.$axios
      .get("https://m.youde.com/youde/f/app/s_10020/goods/recommend/list?pageIndex=1")
      .then(res => {
        this.data = res.data.data;
      });
  }
};
</script>
<style scoped>
.xlist {
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
  background-color: #fff;
}
.recommendTitle {
  height: 51px;
  line-height: 30px;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #f4f4f4;
  
}
.recommendTitle img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.recommendTitle span {
  font-size: 16px;
  font-weight: 700;
  color: #594c52;
}
.recommonCont {
  width: 100%;
  overflow: hidden;
}
.recommendList {
  padding: 10px;
  float: left;
  width: 50%;
  border-right: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
}
.recommendList img {
  width: 100%;
}
.recommendList .recommendListTitle {
  display: block;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.recommendListPrace {
  font-size: 16px;
  color: red;
}
>>>>>>> 3f117b0a14a06f7b8f1918900ea4ee4de32c19cd
</style>
