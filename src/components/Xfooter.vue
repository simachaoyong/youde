<template>
  <footer class="footer">
    <div class="floor-container">
      <ul class="tab4">
        <a  @click="goTo('home')" class="router-link-active">
          <span class="bar-img">
            <i class="icon iconfont icon-shouye active"></i>
          </span>
          <span class="cart-index active">首页</span>
        </a>
        <a  @click="goTo('list')">
          <span class="bar-img">
            <i class="icon iconfont icon-fenlei"></i>
          </span>
          <span class="cart-index">分类</span>
        </a>
        <a  @click="goTo('cart')">
          <span class="bar-img relative">
            <em class="shopcar_num">3</em>
            <i class="icon iconfont icon-jiarugouwuche"></i>
          </span>
          <span class="cart-index">购物车</span>
        </a>
        <a  @click="goTo('mine')">
          <span class="bar-img">
            <i class="icon iconfont icon-weibiaoti2fuzhi12"></i>
          </span>
          <span class="cart-index">我的</span>
        </a>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  methods:{
    goTo(name){
      this.$router.push({name : name })
    }
  }
};
</script>

<style scoped>
.footer{
	position:fixed;
  z-index: 2000;
	bottom:0;
	left:0;
	background-color:#fff;
	border: 1px solid #efefef;
    box-shadow: 1px 1px 1px #efefef;
	height:49px;
	width:100%;
}
.footer .floor-container{
	width: 100%;
    height: 100%;
    background-color: #fff;
}
.footer .floor-container ul{
	display:flex;
}
.footer .floor-container ul a{
	height:48px;
	padding-top:2px;
	flex:1;
	display:flex;
	flex-direction: column;
	align-items: center;
}
.footer .icon{
	color: #666;
	font-size:24px;
}
.cart-index{
	color: #666;
	font-size:12px;
}
.relative{
	position:relative;
}
.relative em{
	background-color: #eb4344;
    display: block;
    font-family: arial;
    position: absolute;
    width:14px;
	top: -3px;
    right: -6px;
	text-align:center;
    border-radius:50%;
    height: 14x;
    line-height: 14px;
    font-size: 10px;
    color: #fff;
    font-style: normal;
} 
.footer .router-link-active .icon{
	color: #196dfa;
}
.active{
	color: #196dfa;
}
</style>
