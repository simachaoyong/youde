<template>
  <div class="msg">
    <div class="top">
      <div class="jiantou">
        <span style="color: rgb(88, 89, 89)">购物车</span>
        <i class="iconfont icon-bianji"></i>
      </div>
    </div>
    <div class="product">
      <div class="listItemContainer" v-for="(item,index) of goodlist" :key="index">
        <span class="del" @click="delBtn(index)">删除</span>
        <div class="checkBox">
          <input type="checkbox" v-model="selected" :value="index">
        </div>
        <div class="goodsImg">
          <img :src="item.goodDetail.thumbnail">
        </div>
        <div class="goodsRight">
          <h3 class="goodsName">{{item.goodDetail.title}}
          </h3>
          <p class="goodsSize">40g</p>
          <div class="goodsRightBtm">
            <div style="color:red;" class="goodsPrice">¥{{(item.goodDetail.minPrice/100).toFixed(2)}}</div>
            <div class="goodsCount">
              <span class="de"></span>
              <em class="num" v-text="item.pronum"></em>
              <span class="add"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total">
      <p class="fangkuai">
        <input type="checkbox" v-model="qxuan">全选
      </p>
      <p>
        <span>合计:</span>
        <span style="color:red;" v-text="heji"></span>
      </p>
      <p :class="{'jiesuan':jiesuan}">结 算</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodlist:[],
      // 全选
      // qxuan:false,//如果qxuan为false，为空，如果是true就填满数组
      jiesuan:false,
      // 选中某个input的时候
      selected:[],
      heji:0,
    }
  },
  computed: {
    //返回全选的值
    qxuan:{
      get(){
        if(this.selected.length==this.goodlist.length){
          return true;
        }else{
          return false;
        }
      },
      // 当点击全选时执行的函数
      set(checked){
        if(checked){
          this.selected=this.goodlist.map((item,index)=>index);
        }else{
          this.selected=[];
        }
      }
    }
  },
  watch: {
    selected(){
      if(this.selected.length>0){
        this.heji=0;
        // 这里是用于判断有多少个框被选中了
        for(var i=0;i<this.selected.length;i++){
          console.log(this.goodlist[this.selected[i]]);
          this.heji+=(this.goodlist[this.selected[i]].goodDetail.minPrice*this.goodlist[this.selected[i]].pronum);
        }
        this.heji=(this.heji/100).toFixed(2);
        this.jiesuan=true;
      }else{
        this.jiesuan=false;
      }
    },
  },
  methods: {
    //点击删除按钮的时候
    delBtn(index){
      this.goodlist.splice(index,1);
    }
  },
  created() {
    // 这里能拿到商品的详细信息了
    this.goodlist=this.$store.state.carList;
    // console.log(this.$store.state.carList);

  },
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
  z-index: 2332;
  top: 0;
  left: 0;
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
.msg .product {
  width:100%;
  overflow:hidden;
  margin-top: 50px;
  margin-bottom: 100px;
}
.msg .listItemContainer {
  border-bottom: 1px solid #e4e5e7;
  height: 100px;
  width: 100%;
  display:flex;
  padding:10px;
  overflow:hidden;
  position:relative;
}
.checkBox{
  display:flex;
  height:100%;
  align-items: center;
}
.checkBox input{
  width:1.125rem;
  height:1.125rem;
}
.msg .listItemContainer .goodsImg {
  margin-left:10px;
  display:flex;
  align-items:center;
}
.msg .listItemContainer .goodsImg img {
  width:4.125rem;
}
.msg .listItemContainer .goodsRight{
overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  line-height:25px;
  margin-right:20px;
  flex: 1;
}
.msg .listItemContainer .goodsRight .goodsName{
  padding-right:1.25rem;
  
}
.msg .listItemContainer .del {
  position:absolute;
  right:10px;
  top:1.125rem;
  color: red;
  font-size:.875rem;
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
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount span {
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 16px;
  border-radius: 50%;
  color: #fff;
  background-color: #999;
  text-align: left;
  line-height: 20px;
  margin: 0 10px 0 10px;
  position: relative;
}
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount .de::before,
.add::before {
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
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount .add {
  background-color: #58b3e7;
  margin-left: 20px;
}
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount .add::after {
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
.msg .listItemContainer .goodsRight .goodsRightBtm .goodsCount .num {
  display: inline-block;
  position: absolute;
  right: 30px;
  top: -5px;
  /* line-height: 10px; */
  font-size: 12px;
  text-align: center;
  width: 40px;
  /* margin-bottom: 10px; */
}
.msg .total {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 50px;
  bottom: 48px;
  left: 0;
  background: #fff;
  overflow: hidden;
  border-top: 1px solid #efefef;
  /* border-bottom: 1px solid  red; */
}
.msg .total p {
  float: left;
  line-height: 50px;
  font-size: 14px;
  color: #424e5a;
}
.msg .total p:nth-child(1) {
  margin-right: 15px;
  text-indent: 10px;
}
.msg .total p:nth-child(2) {
  /* width: 20%; */
  font-weight: 400;
  color: #424e5a;
}
.msg .total p:nth-child(3) {
  position: absolute;
  right: 0;
  width: 100px;
  text-align: center;
  color: #fff;
  font-size:1rem;
  background-color:#ccc;
}
.msg .total p.jiesuan{
  background-color:#36c;
}
.fangkuai input{
  width:1.125rem;
  height:1.125rem;
}
</style>
