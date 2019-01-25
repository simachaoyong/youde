<template>
  <div class="msg">
    <div class="top">
      <div class="jiantou">
        <i class="iconfont icon-jiantou-copy" @click="goLink()"></i>
        <span style="color: rgb(88, 89, 89)">我的</span>
      </div>
    </div>
    <div class="nick">
      <img src="../assets/images/my_headBg.jpg" alt>
      <div class="userInfoCont">
        <div class="userInfo">
          <div class="userImg">
            <img src="../assets/images/headImg.png" alt>
          </div>
          <div class="userName">昵称</div>
        </div>
        <div class="signIn">
          <span style="display:inline-block" class="signBtn">签到送积分</span>
          <div style="display:inline-block" class="signTag">?</div>
        </div>
      </div>
    </div>
    <div class="headImg">
      <img src="../assets/images/headImg.png" alt>
    </div>
    <div class="tologin">
      <span>点我去登录</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goLink(){
      this.$router.go(-1);
    }
  },
};
</script>
<style scoped>
.msg {
  width: 100%;
}
.top {
  background-color: #818db3 !important;
  width: 100%;
  position: fixed;
  height: 47px;
  background-color: #fff;
}
.top .jiantou {
  position: fixed;
  width: 100%;
  height: 47px;
  line-height: 47px;
}
.top .jiantou i {
  display: inline-block;
  width: 10%;
  margin-left: 10px;
}
.top .jiantou span {
  width: 220px;
  display: inline-block;
  flex: 1;
  text-align: center;
}
.nick {
  height: 180px;
  width: 100%;
  overflow: hidden;
  /* position: relative; */
}
.nick img {
  height: 300px;
}
.nick .userInfoCont {
  position: absolute;
  left: 20px;
  top: 85px;
}
.nick .userInfoCont > div {
  height: 56px;
  /* line-height: 56px; */
  float: left;
}
.nick .userInfoCont .userInfo {
  margin-right: 45px;
}
.nick .userInfoCont .userInfo div {
  float: left;
  text-align: center;
  height: 56px;
  line-height: 56px;
  color: #fff;
}
.nick .userInfoCont .userInfo .userImg img {
  width: 56px;
  height: 56px;
  margin-right: 15px;
}
.nick .userInfoCont .signIn {
  /* line-height: 56px; */
  padding-top: 15px;
  color: #fff;
}
.nick .userInfoCont .signIn .signBtn {
  width: 100px;
  height: 30px;
  background-color: #fff;
  color: #5c6794;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
  margin-right: 15px;
}
.nick .userInfoCont .signIn .signTag {
  border: 1px solid #fff;
  width: 15px;
  font-size: 10px;
  text-align: center;
  border-radius: 50%;
  /* height: 10px; */
}
.msg .headImg {
  width: 140px;
  height: 140px;
  margin-top: 90px;
  margin-left: 90px;
}
.msg .tologin {
  width: 100%;
  text-align: center;
}
.msg .tologin span {
  display: inline-block;
  width: 108px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
  background-color: #62ace3;
  color: #fff;
}
</style>
