<template>
  <div class="recommend">
    <div class="recommendTitle">
      <img src="../assets/images/fire.2096be4.png" alt>
      <span>火爆店铺</span>
    </div>
    <div class="hot-scroll" style="overflow-y: hidden;">
      <div class="recommendCont clearfix" style="display: inline-block;">
        <div class="recommendList">
          <div class="inner shop_container">
            <img
              src="https://pic.youde.com/upload-file/20180705115723.jpg"
              alt
              class="shop_logoimg"
            >
            <div class="shop_name">5号生活馆</div>
          </div>
        </div>
        <div class="recommendList">
          <div class="inner shop_container">
            <img
              src="https://pic.youde.com/upload-file/20180709151237.png"
              alt
              class="shop_logoimg"
            >
            <div class="shop_name">米＋尚品生活馆</div>
          </div>
        </div>
        <div class="recommendList">
          <div class="inner shop_container">
            <img
              src="https://pic.youde.com/upload-file/20180705113636.png"
              alt
              class="shop_logoimg"
            >
            <div class="shop_name">五洲全球购</div>
          </div>
        </div>
        <div class="recommendList">
          <div class="inner shop_container">
            <img
              src="https://pic.youde.com/upload-file/20180730095747.png"
              alt
              class="shop_logoimg"
            >
            <div class="shop_name">超凡镜品眼镜专营店</div>
          </div>
        </div>
        <div class="recommendList">
          <div class="inner shop_container">
            <img
              src="https://pic.youde.com/upload-file/20180711174542.jpg"
              alt
              class="shop_logoimg"
            >
            <div class="shop_name">锦缘靓妆</div>
          </div>
        </div>
        <div class="recommendList">
          <div class="inner shop_container">
            <img
              src="https://pic.youde.com/upload-file/20180712135816.jpg"
              alt
              class="shop_logoimg"
            >
            <div class="shop_name">麦琪克官方旗舰店</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style scoped>
.recommend {
  width: 100%;
  margin-top: 10px;
}
.recommendTitle {
  height: 51px;
  line-height: 30px;
  padding: 10px;
  border-bottom: 1px solid #f4f4f4;
  background-color: #fff;
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
.hot-scroll{
	width:100%;
	background-color:#fff
}
.recommendCont{
	width:100%;
	overflow:hidden;
}
.recommendList{
	width: 50%;
	float: left;
    box-sizing: border-box;
    border-right: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
	}
.recommendList .inner{
	padding:10px;
	height:60px;
}
.recommendList .shop_container{
	display:flex;
}
.recommendList .shop_container img{
	width:30%;
}
.shop_name{
	display:flex;
	justify-content: center;
	align-items: center;
    width: 70%;
}
</style>
