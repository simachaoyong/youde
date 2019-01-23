<template>
  <header class="header">
<<<<<<< HEAD
    <div class="top">
      <div class="jiantou">
        <i class="iconfont icon-jiantou2"></i>
      </div>
      <div class="inputSearch">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜索商品">
      </div>
    </div>
  </header>
</template>
<script>
export default {
 
}
</script>
=======
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

>>>>>>> 3f117b0a14a06f7b8f1918900ea4ee4de32c19cd
<style scoped>
.header {
  height: 47px;
  position: fixed;
<<<<<<< HEAD
  width: 100%;
  top: 0;
  left: 0;
  line-height: 47px;
}
.top{
  width: 100%;
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid #e4e5e7;
}
.top div{
  float:left;
}
.top .jiantou{
  width: 10%;
  margin-left: 10px;
}
.top .inputSearch{
  display: flex;
  height: 30px;
  margin-top: 10px;
  text-align: center;
  background-color: #e4e5e7;
  border-radius: 10px;
  width: 80%;
  /* padding-bottom: 10px; */
}
.top .inputSearch i{
  position: relative;
  width:30px;
  text-align: center;
 bottom:7px;

}
.top .inputSearch input{
    background-color: #e4e5e7;
    border-radius: 10px;
=======
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
>>>>>>> 3f117b0a14a06f7b8f1918900ea4ee4de32c19cd
}
</style>
