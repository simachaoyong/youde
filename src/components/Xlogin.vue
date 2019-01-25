<template>
  <div class="msg">
    <div class="top">
      <div class="jiantou">
        <i @click="goTo('home')" class="iconfont icon-jiantou2"></i>
        <span style="color: rgb(88, 89, 89)">登录</span>
      </div>
    </div>
    <div class="login_logo">
      <img style="width:220px;" src="../assets/images/login_logo.png" alt>
    </div>
    <div class="loginForm">
      <div class="userName">
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="passworld">
        <input type="text" placeholder="请输入密码">
        <i class="iconfont icon-Icon-kejian"></i>
      </div>
      <div class="submit">
        <button>登录</button>
      </div>
      <div class="forgetPwd">
        <a href="javascript:;" class="go_register" @click="goTo('reg')">注册</a>
        <a href="javascript:;" class>忘记密码？</a>
      </div>
    </div>
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
.msg {
  width: 100%;
}
.top {
  position: fixed;
  width: 100%;
  height: 47px;
  line-height: 1.5;
  top: 0;
  left: 0;
  z-index: 100;
  margin: auto;
  right: 0;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
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
.login_logo {
  margin-top: 30px;
  padding: 50px;
  height: 180px;
  width: 100%;
  overflow: hidden;
}
.loginForm {
  margin-top: 50px;
  text-align: center;
}
.loginForm input {
  width: 80%;
  height: 45px;
  font-weight: 400;
  font-size: 16px;
  border-bottom: 1px solid #f3f3f3;
}
.loginForm .passworld input {
  width: 68%;
}
.loginForm .passworld i {
  display: inline-block;
  font-size: 35px;
}
.loginForm .submit {
  margin-top: 40px;
}
.loginForm .submit button {
  width: 85%;
  border: none;
  background-color: #3765cc;
  font-size: 18px;
  color: #fff;
  height: 45px;
  border-radius: 5px;
  outline: none;
  padding: 1px 6px;
  margin-bottom: 10px;
}
.loginForm .forgetPwd {
  width: 100%;
  text-align: right;
}
.loginForm .forgetPwd a {
  display: inline-block;
  font-size: 16px;
  color: #454545;
}
.loginForm .forgetPwd a:nth-child(1) {
  line-height: 48px;
  margin-right: 10px;
}
.loginForm .forgetPwd a:nth-child(2) {
  margin-right: 10px;
}
</style>
