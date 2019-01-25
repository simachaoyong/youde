<template>
  <footer class="footer">
    <div class="floor-container">
      <div class="tab4">
        <a  @click="goLink('home','a')" :class="{'router-link-active':show=='a'}">
          <span class="bar-img">
            <i class="icon iconfont icon-shouye active"></i>
          </span>
          <span :class="{'cart-index':true,'active':show=='a'}">首页</span>
        </a>
        <a  @click="goLink('list','b')" :class="{'router-link-active':show=='b'}">
          <span class="bar-img">
            <i class="icon iconfont icon-fenlei"></i>
          </span>
          <span :class="{'cart-index':true,'active':show=='b'}">分类</span>
        </a>
        <a  @click="goLink('cart','c')" :class="{'router-link-active':show=='c'}">
          <span class="bar-img relative">
            <em class="shopcar_num" v-text="number"></em>
            <i class="icon iconfont icon-jiarugouwuche"></i>
          </span>
          <span :class="{'cart-index':true,'active':show=='c'}">购物车</span>
        </a>
        <a  @click="goLink('mine','d')" :class="{'router-link-active':show=='d'}">
          <span class="bar-img">
            <i class="icon iconfont icon-weibiaoti2fuzhi12"></i>
          </span>
          <span :class="{'cart-index':true,'active':show=='d'}">我的</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      show:'a',
      number:0,
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
  methods:{
    goLink(link,n){
      this.$router.push({name:link});
      this.show=n;
    },
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
.footer .floor-container .tab4{
	display:flex;
}
.footer .floor-container .tab4 a{
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
