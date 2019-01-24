<template>
  <header class="header">
    <div class="top">
<<<<<<< HEAD
      <div @click="prve" class="jiantou">
=======
      <div class="jiantou">
>>>>>>> 05a801f21bd623d5e057d706c29982f571c44173
        <i class="iconfont icon-jiantou2"></i>
      </div>
      <div class="inputSearch">
        <i class="iconfont icon-search"></i>
<<<<<<< HEAD
        <input @click="goTo('search')" type="text" placeholder="搜索商品">
=======
        <input type="text" placeholder="搜索商品">
>>>>>>> 05a801f21bd623d5e057d706c29982f571c44173
      </div>
    </div>
  </header>
</template>
<script>
export default {
<<<<<<< HEAD
      methods:{
        goTo(name){
      this.$router.push({name : name })
    },
    prve(){
      this.$router.go(-1)
    }
  }
=======
 
>>>>>>> 05a801f21bd623d5e057d706c29982f571c44173
}
</script>
<style scoped>
.header {
  height: 47px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  line-height: 47px;
}
<<<<<<< HEAD
.top {
=======
.top{
>>>>>>> 05a801f21bd623d5e057d706c29982f571c44173
  width: 100%;
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid #e4e5e7;
}
<<<<<<< HEAD
.top div {
  float: left;
}
.top .jiantou {
  width: 10%;
  margin-left: 10px;
}
.top .inputSearch {
=======
.top div{
  float:left;
}
.top .jiantou{
  width: 10%;
  margin-left: 10px;
}
.top .inputSearch{
>>>>>>> 05a801f21bd623d5e057d706c29982f571c44173
  display: flex;
  height: 30px;
  margin-top: 10px;
  text-align: center;
  background-color: #e4e5e7;
  border-radius: 10px;
  width: 80%;
  /* padding-bottom: 10px; */
}
<<<<<<< HEAD
.top .inputSearch i {
  position: relative;
  width: 30px;
  text-align: center;
  bottom: 7px;
}
.top .inputSearch input {
  background-color: #e4e5e7;
  border-radius: 10px;
=======
.top .inputSearch i{
  position: relative;
  width:30px;
  text-align: center;
 bottom:7px;

}
.top .inputSearch input{
    background-color: #e4e5e7;
    border-radius: 10px;
>>>>>>> 05a801f21bd623d5e057d706c29982f571c44173
}
</style>
