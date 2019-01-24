<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/images/logo.png">
    </div>
    <div class="inputSearch">
      <div>
        <button></button>
        <input type="text" placeholder="请输入你想要搜索的商品">
      </div>
    </div>
    <div class="iconSearch">
      <i class="iconfont icon-fenlei"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: "app"
};
</script>

<style scoped>
.header {
  height: 47px;
  position: fixed;
  width:100%;
  top: 0;
  left: 0;
  z-index:200;
}
.header .logo{
  height:68px;
  width:40px;
  padding-left:10px;
  position:absolute;
  left:0;
  top:0;
  margin-top:7px;
}
.header .logo img{
  width:58px;
  height:32px;
}
.header .inputSearch{
  padding:6px 0;
  margin:0 50px 0 75px;
}
.header .inputSearch div{
  position:relative;
  background-color:#fff;
  border-radius:4px;  
  height:35px;
  padding:0 35px;

}
.header .inputSearch div button{
    border: 0;
    background: url(../assets/images/search.png) no-repeat;
    background-size: 18px auto;
    width: 18px;
    height: 18px;
    left: 10px;
    position: absolute;
    top: 50%;
    margin-top: -9px;
}
.header .inputSearch div input{
  width:100%;
  height:35px;
}
.iconSearch{
  position:absolute;
  top:10px;
  right:13px;
}
.iconSearch i{
  font-size:24px;
  color:#fff;
}
</style>
