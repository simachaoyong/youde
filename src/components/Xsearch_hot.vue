<template>
  <div class="header">
    <div class="top">
      <div class="inputSearch">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜索商品">
      </div>
      <div @click="goTo('list')" class="jiantou">
        <span>取消</span>
      </div>
    </div>
    <div style="margin-top:47px;  background-color: #fff;">
      <h3 style="margin-left:10px;font-size:22px">热门搜索</h3>
    </div>
    <ul>
      <li>999感冒灵</li>
      <li>本草纲目本草123</li>
      <li>测试药品1</li>
      <li>江中健胃</li>
      <li>盖中盖</li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    goTo(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>
<style scoped>
.header {
  height: 47px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  line-height: 47px;
    background-color: #fff;
}
.top {
  width: 100%;
  position: fixed;
  background-color: #fff;
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
  margin-left: 10px;
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
ul{
      background-color: #fff;
}
ul li{
    background-color:lightgray;
    display:inline-block;
    margin-right:5px;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    padding:0 20px;
    margin-top: 6px;
    margin-left:10px;
}
</style>
