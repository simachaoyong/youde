<template>
  <div class="msg">
    <div class="top">
      <div class="jiantou">
        <i @click="goTo('login')" class="iconfont icon-jiantou2"></i>
        <span style="color: rgb(88, 89, 89)">注册</span>
      </div>
    </div>
    <div class="reg_condition">
      <div class="phone">
        <i class="iconfont icon-shouji"></i>
        <input x-model="phone" placeholder="输入手机号" type="text">
      </div>
      <!-- <div class="code">
        <i class="iconfont icon-yanzhengma"></i>
        <input placeholder="输入验证码" type="text">
        <button style=" background-color: #205aa7;">获取验证码</button>
      </div> -->
      <div class="setPwd">
        <i class="iconfont icon-mima1"></i>
        <input placeholder="密码 字母开头的6-18位组合" type="password">
      </div>
      <div class="setPwd">
        <i class="iconfont icon-mima"></i>
        <input placeholder="重复密码" type="password">
      </div>
      <div class="setPwd">
        <i class="iconfont icon-huabanfuben"></i>
        <input placeholder="推荐人手机号(可不填)" type="text">
      </div>
      <div class="user_agreement">
        <input id="userAgreement" type="checkbox" name="userAgreement" value>
        <label for="userAgreement"></label>
        <span>
          同意
          <a href="javascript:;" class>用户注册协议</a>
        </span>
      </div>
      <div class="submit">
        <button class="submit2">完&nbsp;&nbsp;&nbsp;&nbsp;成</button>
      </div>
    </div>
  </div>
</template>
<script>
import '../js/common.js'
export default {
  data(){
      return{
          phone:'',
          pasword:'',
          rePsw:'',
          refPhone:'',
          status:false
      }
  },
  methods: {
    goTo(name) {
      this.$router.push({ name: name });
    },
    verify(){

    }
  },

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

.msg .reg_condition {
  width: 100%;
  margin-top: 50px;
  height: 50px;
  line-height: 50px;
}
.msg .reg_condition div {
  margin: 10px 11px 5px 10px;
  border-bottom: 1px solid #eaeaea;
  padding-left: 5px;
  padding-right: 0;
  margin-bottom: 20px;
}
.msg .reg_condition div i{
    font-size: 18px;
}
.msg .reg_condition div input {
  width: 70%;
  height: 40px;
  font-size: 16px;
}
.msg .reg_condition button{
    width: 85px;
    height: 35px;
    color: #fff;
   
    border-radius: 10px;
    border: none;
    outline: none;
        padding: 1px 6px;
}
.msg .reg_condition .user_agreement {
  position: relative;
  height: 50px;
  border: none;
}
.msg .reg_condition .user_agreement input {
  position: absolute;
  left: 15px;
  top: 20px;
  width: 20px;
  height: 20px;
  border-radius: 30%;
}
.msg .reg_condition .user_agreement span {
  position: absolute;
  left: 55px;
}
.msg .reg_condition .submit {
  width: 80%;
  height: 45px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #ddd;
  text-align: center;
}
.msg .reg_condition .submit button {
  font-size: 16px;
  color: #fff;
}
</style>
