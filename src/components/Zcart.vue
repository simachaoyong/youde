<template>
  <div class="msg">
    <div class="top">
      <div class="jiantou">
        <span style="color: rgb(88, 89, 89)">购物车</span>
        <i class="iconfont icon-bianji"></i>
      </div>
    </div>
    <div class="product">
      <div class="listItemContainer">
        <div class="checkBox">
          <input type="checkBox">
        </div>
        <div class="goodsImg">
          <img src="../assets/images/ju.png">
        </div>
        <div class="goodsRight">
          <h3 class="goodsName">皇菊（优等）<span class="del">删除</span></h3>
          <p class="goodsSize">40g</p>
          <div class="goodsRightBtm">
            <div style="color:red;" class="goodsPrice">¥18.00</div>
            <div class="goodsCount">
              <span class="de"></span>
              <em class="num">1</em>
              <span class="add"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="total">
          <p class="fangkuai">
            <input type="checkBox">全选
          </p>
          <p>
            <span>合计: </span><span style="color:red;">0</span>
          </p>
          <p>
            结算
          </p>
      </div>
    </div>
</template>

<script>
export default {
  methods:{

  },
  components: {}
};
</script>
<style scoped>
.msg {
  width: 100%;
}
.top {
  width: 100%;
  position: fixed;
  height: 47px;
  background-color: #fff;
  z-index:2332;
  top:0;
  left:0;

}
.top .jiantou {
  position: fixed;
  width: 100%;
  height: 47px;
  line-height: 47px;
  border-bottom: 1px solid #e4e5e7;
}
.top .jiantou i {
  display: inline-block;
  /* width: 10%; */
  position: absolute;
  right: 10px;
  font-size: 26px;
  margin-left: 10px;
}
.top .jiantou span {
  width: 100%;
  display: inline-block;
  flex: 1;
  text-align: center;
}
.msg .product{
    margin-top: 50px;
  margin-bottom: 100px;
}
.msg .listItemContainer {
  border-bottom: 1px solid #e4e5e7;
  /* margin-top: 50px; */
  height: 100px;
  /* text-align: center; */
  text-indent: 10px;
  width: 100%;
}
.msg .listItemContainer div {
  float: left;
}
.msg .listItemContainer .checkBox {
  line-height: 100px;
}
.msg .listItemContainer .goodsImg {
  line-height: 100px;
  width: 20%;
  text-align: center;
  margin-right: 10px;
}
.msg .listItemContainer .goodsImg img {
  width: 66px;
}
.msg .listItemContainer .goodsRight {
  font-size: 12px;
  line-height: 30px;
  flex: 1;
}
.msg .listItemContainer .goodsRight .del{
  display:inline-block;
  width: 34px;
  justify-content:space-between;
  height: 20px;
  /* border-radius: 50%; */
  /* background:crimson; */
  color:red;
  font-size:12px;
  text-align:left;
  line-height: 20px;
  margin-left:88px;
}
.msg .listItemContainer .goodsRight .goodsRightBtm {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount {
  line-height: 40px;
  position: absolute;
  right: 10px;
}
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount span{
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 16px;
  border-radius: 50%;
  color:#fff;
  background-color:#999;
  text-align: left;
  line-height: 20px;
  margin: 0 10px 0 10px;
  position: relative;
  
}
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount .de::before,.add::before{
        width: 14px;
    height: 2px;
    margin: -1px 0 0 -7px;
        display: block;
    content: "";
    overflow: hidden;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
}
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount .add{
  background-color:#58b3e7;
  margin-left: 20px;
}
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount .add::after{
         display: block;
    content: "";
    overflow: hidden;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
        width: 2px;
    height: 14px;
    margin: -7px 0 0 -1px;
    
}
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount .num{
  display: inline-block;
  position:absolute;
   right:30px;
top:-5px;
  /* line-height: 10px; */
  font-size: 12px;
  text-align: center;
  width: 40px;
  /* margin-bottom: 10px; */
}
.msg .total{
  position:fixed;
  z-index: 1000;
  width: 100%;
  height: 50px;
  bottom:48px;
  left:0;
  background: #fff;
  overflow: hidden;
  border-top: 1px solid  #efefef;
   /* border-bottom: 1px solid  red; */
}
.msg .total p{
  float:left;
   line-height: 50px;
   font-size: 14px;
   color: #424e5a;
}
.msg .total p:nth-child(1){
  margin-right: 15px;
  text-indent: 10px;

}
.msg .total p:nth-child(2){
    width: 20%;
    font-weight: 400;
    color: #424e5a;
}
.msg .total p:nth-child(3){
    position:absolute;
    right: 0;
    width: 100px;
    text-align: center;
    color:#fff;
        font-size: 14px;
   background: linear-gradient(150deg,rgba(55,150,208,.9),#36c);

}
</style>
