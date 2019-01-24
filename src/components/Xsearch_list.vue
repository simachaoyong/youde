<template>
  <header class="header">
    <div class="top">
      <div @click="prve" class="jiantou">
        <i class="iconfont icon-jiantou2"></i>
      </div>
      <div class="inputSearch">
        <i class="iconfont icon-search"></i>
        <input @click="goTo('search')" type="text" placeholder="搜索商品">
      </div>
    </div>
  </header>
</template>
<script>
export default {
      methods:{
        goTo(name){
      this.$router.push({name : name })
    },
    prve(){
      this.$router.go(-1)
    }
  }
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
.top {
  width: 100%;
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid #e4e5e7;
}
.top div {
  float: left;
}
.top .jiantou {
  width: 10%;
  margin-left: 10px;
}
.top .inputSearch {
  display: flex;
  height: 30px;
  margin-top: 10px;
  text-align: center;
  background-color: #e4e5e7;
  border-radius: 10px;
  width: 80%;
  /* padding-bottom: 10px; */
}
.top .inputSearch i {
  position: relative;
  width: 30px;
  text-align: center;
  bottom: 7px;
}
.top .inputSearch input {
  background-color: #e4e5e7;
  border-radius: 10px;
}
</style>
