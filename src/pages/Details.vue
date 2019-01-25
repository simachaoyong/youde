<template>
  <div id="details">
    <!-- 头部 -->
    <header class="header-container">
      <div class="f_logo" @click="goTo()">
        <i class="iconfont icon-jiantou2"></i>
      </div>
      <div class="title-box">
        <div class="active active1 titleTab">
          <span>商品</span>
        </div>
        <div class="titleTab">
          <span>详情</span>
        </div>
        <div class="titleTab active2" style="border-right:1px solid #377dcc;">
          <span>评论</span>
        </div>
      </div>
      <div class="right">
        <i class="iconfont icon-xingxing"></i>
      </div>
    </header>
    <!-- 主体内容 -->
    <main id="cont">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) of goodDetail.pictures" :key="index">
            <img :src="item.ossPicUrl">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 说明 -->
      <div class="goods-info-wrapper" style="pointer-events: auto;">
        <h3 class="goods-name world">
          <span v-text="goodDetail.title"></span>
        </h3>
        <div class="line"></div>
        <p class="goods-name-detail" v-text="goodDetail.recommendSpeech"></p>
        <div class="price-wrapper">
          <span class="title">价格</span>
          <span class="price">{{(goodDetail.minPrice/100).toFixed(2)}}</span>
          <span class="title haveSales">已售：{{goodDetail.productCode}}</span>
        </div>
      </div>
      <div class="mint-cell-title">
        <div>
          <span class="left-text">
            税费
            <span>¥{{(goodDetail.minPrice/1000).toFixed(2)}}</span>
            <span class="icon iconfont icon-icon-ask">?</span>
          </span>
        </div>
      </div>
      <div class="mint-cell-title mint-cell-title-cx">
        <p class="cx">促销</p>
        <p class="m99">{{goodDetail.postPromotionName}}</p>
        <a href="#" class="r_jt">
          <i class="iconfont icon-youjiantou"></i>
        </a>
      </div>
      <div class="shop_section">
        <div class="shops_section">
          <img src="../assets/images/de_logo.png">
        </div>
        <p>优德电商平台</p>
        <ul class="shop_r">
          <li>收藏店铺</li>
          <li class="current">进入店铺</li>
        </ul>
      </div>
      <!-- 评论 -->
      <div class="comment">
        <div class="mint-cell-wrapper-sp">
          <div class="mint-cell-title-sp">
            <span class="mint-cell-text">商品评价</span>
          </div>
          <i class="iconfont icon-youjiantou"></i>
        </div>
        <div class="wrapper">
          <div class="top">
            <div class="left">
              <div class="img-face">
                <img src="https://pic.youde.com/70b03e29d1af457c9216277098eb9177.png">
              </div>
              <span>150****3293</span>
            </div>
            <div class="right">
              <div class="star">
                <i class="iconfont icon-xingxing1"></i>
                <i class="iconfont icon-xingxing1"></i>
                <i class="iconfont icon-xingxing1"></i>
                <i class="iconfont icon-xingxing1"></i>
                <i class="iconfont icon-xingxing1"></i>
              </div>
            </div>
          </div>
          <!---->
          <p class="content">非常好</p>
          <p class="time">2018-08-27 14:40:07</p>
        </div>
        <div class="wrapper">
          <div class="top">
            <div class="left">
              <div class="img-face">
                <img src="https://pic.youde.com/70b03e29d1af457c9216277098eb9177.png">
              </div>
              <span>150****3293</span>
            </div>
            <div class="right">
              <div class="star">
                <i class="iconfont icon-xingxing1"></i>
                <i class="iconfont icon-xingxing1"></i>
                <i class="iconfont icon-xingxing1"></i>
                <i class="iconfont icon-xingxing1"></i>
                <i class="iconfont icon-xingxing1"></i>
              </div>
            </div>
          </div>
          <!---->
          <p class="content">非常好</p>
          <p class="time">2018-08-27 14:40:07</p>
        </div>
      </div>
    </main>
    <!-- 底部 -->
    <footer id="footer">
      <ul class="menu_box">
        <li>
          <div>
            <i class="iconfont icon-002dianhua"></i>
          </div>
          <span>电话</span>
        </li>
        <li @click="goLink('cart')">
          <div>
            <i class="iconfont icon-jiarugouwuche" style="font-size:24px;"></i>
            <s v-text="number"></s>
          </div>
          <span>购物车</span>
        </li>
      </ul>
      <div class="lj_buy" @click="buystatus=true">立即购买</div>
      <div class="jr_car" @click="buystatus=true">加入购物车</div>
    </footer>
    <!-- 弹窗用于选择 -->
    <div id="container" v-show="buystatus">
      <div class="level"></div>
      <div class="content">
        <div class="close_btn" @click="buystatus=false">&times;</div>
        <div class="choice_pro">
          <div class="choice_img">
            <img :src="goodDetail.thumbnail">
          </div>
          <div class="choice_price">
            <p class="choice_jg">￥{{(goodDetail.minPrice/100).toFixed(2)}}</p>
            <p class="choice_kc">库存{{goodDetail.stock}}件</p>
            <div class="choice_num">
              <p>购买数量:</p>
              <div class="cart-wrapper">
                <div class="decrease" @click="dec">
                  <i>-</i>
                </div>
                <input type="number" v-model="proNum" class="number">
                <div class="add" @click="add">
                  <i>+</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cont_bot" @click="qrBtn()">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Swiper from "swiper";
export default {
  data() {
    return {
      goodDetail: {},
      buystatus: false,
      proId: this.$route.query.id,
      proNum:1,
      number:0
    };
  },
  methods: {
    goLink(name){
      this.$router.push({name});
    },
    goTo() {
      this.$router.go(-1);
    },
    renderBanner() {
      this.$axios
        .get(
          `https://m.youde.com/youde/f/app/s_10020/goods/ajax/goods?id=${
            this.proId
          }`
        )
        .then(res => {
          this.goodDetail = res.data.data;
          // 在这里执行那个轮播图
          Vue.nextTick(() => {
            var swiper = new Swiper(".swiper-container", {
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
        .catch(err => {
          console.log(err);
        });
    },
    // 较少数量先
    dec(){
      if(this.proNum<=0){
        return false;
      }else{
        this.proNum--;
      }
    },
    // 增加数量
    add(){
      this.proNum++;
    },
    // 点击确认的时候，当点击确认的时候，将数据添加进去
    qrBtn(){
      let obj={
        pronum:this.proNum,
        goodDetail:this.goodDetail
      }
      this.$store.commit('cunPro',obj);
    }
  },
  created() {
    let totalNum=this.$store.state.carList;
    for(var i=0;i<totalNum.length;i++){
      this.number+=totalNum[i].pronum;
    };
    if(totalNum.length==0){
      this.number=0
    }
  },
  watch: {
    proNum(){
      this.proNum=parseInt(Math.abs(this.proNum));
    }
  },
  mounted() {
    this.renderBanner();
  },
};
</script>
<style scoped>
@import url(../swiper/css/swiper.css);
#details {
  widows: 100%;
  overflow: hidden;
}
.header-container {
  position: fixed;
  width: 100%;
  height: 2.5625rem;
  padding-top: 0;
  line-height: 1.5;
  top: 0;
  left: 0;
  z-index: 2;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
}
.header-container .f_logo,
.header-container .right {
  box-sizing: border-box;
  height: 2.5625rem;
  position: absolute;
  text-align: center;
  bottom: 0;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.header-container .f_logo {
  left: 0.625rem;
  font-size: 1.125rem;
}
.header-container .right {
  right: 0.625rem;
  font-size: 1.375rem;
}
.header-container .iconfont {
  color: #6c6f74;
}
.header-container .title-box {
  width: auto;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 3px;
  top: 50%;
}
.header-container .title-box .titleTab {
  height: 1.375rem;
  box-sizing: border-box;
  color: #585454;
  font-size: 0.875rem;
  padding: 0 0.75rem;
  line-height: 1.375rem;
  background-color: #fff;
  border: 1px solid #377dcc;
  border-right: none;
}
.header-container .title-box .titleTab.active {
  background-color: #377dcc;
  color: #fff;
}
.title-box .active1 {
  border-radius: 0.25rem 0 0 0.25rem;
}
.title-box .active2 {
  border-radius: 0 0.25rem 0.25rem 0;
}
#cont {
  width: 100%;
  overflow: hidden;
  margin: 41px 0 52px 0;
}
.swiper-container {
  width: 100%;
  height: 256px;
  background-color: #fff;
}
.swiper-slide {
  text-align: center;
}
.swiper-slide img {
  height: 256px;
}
.goods-info-wrapper {
  width: 100%;
  padding: 0.625rem 0;
  background-color: #fff;
}
.goods-name {
  padding: 0 0.625rem;
  font-size: 1.125rem;
  color: #3b404a;
  height: 2.625rem;
  position: relative;
}
.goods-name::before {
  content: "全球购";
  text-align: center;
  height: 1.375rem;
  line-height: 1.375rem;
  margin-right: 3px;
  padding: 2px 0;
  color: #fff;
  background-color: red;
}
.line {
  margin: 10px 0;
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
}
.goods-name-detail {
  font-size: 0.875rem;
  color: #3b404a;
  line-height: 1rem;
  padding: 0 10px;
  font-weight: bolder;
}
.price-wrapper {
  height: 3rem;
  margin: 10px 10px 0;
  width: 100%;
  background-color: #f2f5f9;
  display: flex;
  align-items: center;
  padding: 10px;
}
.price-wrapper .title {
  font-size: 0.875rem;
  color: #585454;
}
.price-wrapper .haveSales {
  position: absolute;
  right: 10px;
}
.price-wrapper .price {
  color: #ff5d5d;
  font-size: 1.75rem;
  font-weight: bolder;
  font-family: arial;
  display: block;
  margin-left: 1.5625rem;
}
.price-wrapper .price::before {
  content: "￥";
  font-size: 0.875rem;
}
.mint-cell-title {
  width: 100%;
  height: 48px;
  background-color: #fff;
  line-height: 48px;
  padding: 0 10px;
}
.left-text {
  color: #8f949e;
}
.left-text .icon-icon-ask {
  color: #377dcc;
  font-size: 0.75rem;
  display: inline-block;
  margin-left: 10px;
  height: 0.875rem;
  width: 0.875rem;
  line-height: 0.875rem;
  text-align: center;
  border: 1px solid #377dcc;
  border-radius: 50%;
}
.mint-cell-title-cx {
  color: #8f949e;
}
.cx {
  float: left;
}
.m99 {
  float: left;
  background-color: #79bebe;
  height: 1.875rem;
  line-height: 1.875rem;
  margin-top: 9px;
  color: #fff;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 16px;
}
.r_jt {
  float: right;
}
.shop_section {
  margin-top: 10px;
  background-color: #fff;
  justify-content: space-between;
  padding: 10px;
  height: 6.375rem;
}
.shops_section,
.shop_section p {
  float: left;
}
.shops_section img {
  width: 5.375rem;
  height: 5.375rem;
}
.shop_section p {
  margin: 20px 0 0 10px;
  font-size: 1rem;
}
.shop_r {
  float: right;
}
.shop_r li {
  border: 1px solid #999;
  border-radius: 2px;
  font-size: 0.8125rem;
  color: #666;
  margin: 5px 0;
  padding: 5px 2px;
}
.shop_r .current {
  color: #eb2517;
  border: 1px solid #eb2517;
}
.comment {
  margin-top: 10px;
  background-color: #fff;
}
.mint-cell-wrapper-sp {
  padding: 0 10px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper {
  padding: 12px;
  border-bottom: 1px solid #eee;
}
.wrapper .top {
  overflow: hidden;
}
.wrapper .top .left {
  float: left;
}
.wrapper .top .right {
  float: right;
}
.img-face img {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
}
.img-face {
  margin-right: 6px;
  float: left;
}
.wrapper .top .left span {
  float: left;
  line-height: 2.25rem;
  width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.75rem;
  color: #676767;
}
.star i {
  line-height: 36px;
}
.star .iconfont {
  color: red;
  margin: 0 4px;
  font-size: 0.875rem;
}
.wrapper .content {
  line-height: 1.125rem;
  font-size: 0.875rem;
  margin-top: 6px;
  color: #676767;
}
.wrapper .time {
  color: #999;
  font-size: 12px;
  margin-top: 6px;
}
#footer {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #f5f5f5;
  z-index: 1;
  display: flex;
}
#footer .lj_buy,
#footer .jr_car {
  width: 30%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 0.875rem;
}
#footer .menu_box {
  flex: 1;
  display: flex;
  justify-content: space-around;
}
#footer .menu_box li {
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#footer .menu_box li span {
  color: #676767;
  font-size: 0.75rem;
}
#footer .menu_box li div .iconfont {
  color: #676767;
  font-size: 1.25rem;
}
#footer .menu_box li div {
  position: relative;
}
#footer .menu_box li div s {
  position: absolute;
  color: #fff;
  background-color: red;
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  top: -2px;
  left: 50%;
  text-align: center;
  line-height: 1rem;
  font-size: 0.875rem;
}
#footer .lj_buy {
  background-color: #4792d1;
}
#footer .jr_car {
  background-color: #ff5d5d;
}
#container {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow: hidden;
}
#container .level {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 39%, 0.1);
}
#container .content {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 600;
  width: 100%;
  height: 50%;
  background-color: #fff;
}
#container .cont_bot {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  background: rgb(255, 93, 93);
  position: absolute;
  bottom: 0;
  left: 0;
}
.choice_pro {
  padding: 10px;
  width: 100%;
}
.choice_img,
.choice_price {
  float: left;
}
.choice_img img {
  width: 4.375rem;
  width: 4.375rem;
}
.choice_price {
  margin-left: 12px;
}
.choice_price p {
  line-height: 24px;
}
.choice_jg {
  color: #ff5d5d;
}
.choice_kc,
.choice_num {
  color: #90959f;
}
.choice_num p,
.choice_num > div {
  float: left;
}
.decrease,
.number,
.add {
  float: left;
}
.number {
  width: 64px;
  height: 28px;
  text-align: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.decrease,
.add {
  height: 28px;
  width: 28px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 28px;
}
.cart-wrapper {
  margin-left: 10px;
}
.close_btn {
  font-size: 1rem;
  position: absolute;
  top: 12px;
  right: 12px;
  height: 1.125rem;
  width: 1.125rem;
  text-align: center;
  line-height: 1rem;
  border: 1px solid #ff5d5d;
  border-radius: 50%;
  color: #ff5d5d;
}
</style>
