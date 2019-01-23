<template>
    <div id='ydyiyao'>
        <div class="ydyiyao">
          <div  class="ydyiyaoLeft">
            <h1>优德医药</h1>
            <h2>今日团购</h2>
          </div> 
          <div class="ydyiyaoRight">
               <div class="swiper-container swiper-container-horizontal swiper-container1" id="imglist">
                    <div class="swiper-wrapper" >
                            <div class="swiper-slide" v-for="item  in recommend"
                            :key="item.id" >
                                <div class='element'>
                                    <img :src="item.thumbnail" />
                                    <div class='Price'>
                                    <p class='sellsprcie'>{{(item.title)}}</p>
                                    <p class='beforesprcie'>{{'￥'+(item.price).toFixed(2)}}</p>
                                </div>
                            </div>
                            
                                
                    </div>
                    <div class="swiper-pagination swp1"></div>
               </div>
          </div>
        </div>  
        </div>
       
    </div>
    
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      recommend: []
    };
  },
  methods: {
    getList: function() {
      this.$axios
        .get("https://m.youde.com/youde/f/app/s_10020/spgroupbuying/list/json")
        .then(res => {
          this.recommend = res.data.data;
          Vue.nextTick(() => {
            var swiper = new Swiper(".swiper-container1", {
              slidesPerView: 1,
              spaceBetween: 200,
              pagination: {
                el: ".swp1",
                clickable: true
              },
              autoplay: true,
              loop: true
            });
          });
        })
        .catch(() => {
          // Indicator.close();
        });
    }
  },
  created() {
    // 调用请求发送的数据，进行渲染数据
    this.getList();
  }
};
</script>
<style scoped>
@import url("../swiper/css/swiper.css");
#ydyiyao {
  height: 130px;
  width: 320px;
  padding: 3px;
  background-color: #ef6d6d;
}
#ydyiyao .ydyiyao .ydyiyaoLeft {
  width: 100px;
  height: 55px;
  float: left;
  /* padding-bottom: 5px; */
}
#ydyiyao .ydyiyao .ydyiyaoLeft h1 {
  height: 20px;
  width: 60px;
  font-size: 14px;
  vertical-align: 3px;
  /* margin-left: 15px; */
  color: #fff;
  margin: 10px 0 10px 12px;
}
#ydyiyao .ydyiyao .ydyiyaoLeft h2 {
  font-size: 16px;
  vertical-align: 3px;
  margin-left: 15px;
  color: #fff;
  font-weight: 999;
  font-style: italic;
}
#ydyiyao .ydyiyao .ydyiyaoRight {
  float: right;
  width: 200px;
  height: 80px;
}
#ydyiyao #imglist .swiper-slide {
  list-style: none;
  width: 200px;
  height: 80px;
  color: red;
  font-size: 40px;
  text-align: center;
}
#ydyiyao #imglist .swiper-slide .element {
  list-style: none;
  width: 200px;
  height: 80px;
  color: red;
  font-size: 40px;
}
#ydyiyao #imglist .element .Price {
  float: right;
  /* margin: 5px; */
  width: 100px;
  padding-top: 5px;
  /* background-color: rgba(0, 0, 50, 0.7); */
}
#ydyiyao #imglist .element .Price p {
  margin: 10px 5px;
  width: 100px;
  font-size: 10px;
  color: #fff;
}
#ydyiyao #imglist .swiper-slide img {
  float: left;
  width: 50px;
  height: 70px;
  margin: 8px 5px;
}
</style>