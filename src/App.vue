<<<<<<< HEAD
// <template>
//   <div id="app">
//     <Xsearch />
//     <Xbanner />
//     <Xmenu />
//     <Ximg />
//     <Xhot />
//     <Xgroup />
//     <Xlist />
//     <Totop />
//     <Xfooter />
//   </div>
// </template>
// <script>
// import Xsearch from './components/Xsearch.vue'
// import Xfooter from './components/Xfooter.vue'
// import Xmenu from './components/Xmenu.vue'
// import Ximg from './components/Ximg.vue'
// import Xhot from './components/Xhot.vue'
// import Xgroup from './components/Xgroup.vue'
// import Xlist from './components/Xlist.vue'
// import Totop from './components/Totop.vue'
// import Xbanner from './components/Xbanner.vue'
// export default {
//   name: 'app',
//   components: {
//     Xsearch,
//     Xfooter,
//     Xmenu,
//     Ximg,
//     Xhot,
//     Xgroup,
//     Xlist,
//     Totop,
//     Xbanner
//   }
// }
// </script>
// <style scoped>
// #app{
//   padding-bottom:58px;
// }
// </style>








// <template>
//   <div class="bar">
//     <div class="left-bar">
//       <a v-for="(item,index) in left" :key="item.id" href="javascript:;" v-text="left[index].name"></a>
//     </div>
//     <div class="right-bar" v-for="content in datas" :key="content.id">
//       <div class="right-bar-name">
//         <p>
//           <span>|</span>
//           {{content.name}}
//         </p>
//         <div class="right-bar-list">
//           <div class="right-bar-list-img" v-for="con in msage.leaf" :key="con.active">
//             <img :src="con.cover" alt>
//             <p v-text="con.name">预防感冒</p>
//           </div>
//         </div>
//         <div class="right-bar-list">
//           <div class="right-bar-list-img">
//             <img src="../assets/images/84.png" alt>
//             <p>预防感冒</p>
//           </div>
//         </div>
//         <div class="right-bar-list">
//           <div class="right-bar-list-img">
//             <img src="../assets/images/84.png" alt>
//             <p>预防感冒</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </template>
// <script>
// export default {
//   data() {
//     return {
//       left: "",
//       datas: "",
//       msage: ""
//     };
//   },
//   created() {
//     this.$axios
//       .get("https://m.youde.com/youde/f/app/s_10020/loadCategory")
//       .then(res => {
//         this.left = res.data.data;
//         console.log(this.left);
//         console.log(this.left[0].leaf);
//         var datas = [];
//         var masage = [];
//         for (let i = 0; i < res.data.data[0].leaf.length; i++) {
//           var json = {};
//           masage = res.data.data[0].leaf;
//           json["id"] = i;
//           json["name"] = res.data.data[0].leaf[i].name;
//           datas.push(json);

//           console.log(datas);
//           console.log(masage);
//         }
//         // console.log(data.data.data[0].leaf);
//       });
//     //   .catch(function(error) {
//     //     // console.log(error);
//     //   });
//   }
// };
// </script>
// <style scoped>
// .bar {
//   /* background-color: #fff; */
//   margin-top: 48px;
//   flex-direction: column;
//   width: 100%;
// }
// .bar div {
//   float: left;
// }
// .bar .left-bar {
//   background-color: #e4e5e7;
//   /* text-indent: 5px; */
//   width: 30%;
//   text-align: center;
// }
// .bar .left-bar a {
//   display: inline-block;
//   font-size: 13px;
//   height: 43px;
//   line-height: 43px;
// }
// .bar .right-bar {
//   width: 70%;
//   display: flex;
// }
// .bar .right-bar .right-bar-name {
//   margin-left: 10px;
//   font-size: 14px;
// }
// .bar .right-bar .right-bar-name > p {
//   height: 40px;
//   line-height: 40px;
//   font-size: 13px;
// }
// .bar .right-bar .right-bar-list {
//   /* display:flex; */
//   text-align: center;
//   width: 48%;
//   /* margin-right: 5px;		 */
// }
// .bar .right-bar .right-bar-list .right-bar-list-img {
//   float: left;
//   width: 100%;
//   border: 1px solid #e4e5e7;
//   padding-top: 5px;
// }
// .bar .right-bar .right-bar-list .right-bar-list-img img {
//   width: 70px;
// }
// .bar .right-bar .right-bar-list .right-bar-list-img p {
//   height: 30px;
//   line-height: 30px;
//   width: 100%;
// }
// </style>
=======
<template>
  <div id="app">
    <!-- 路由匹配到组件，渲染的地方 -->
    <router-view></router-view>
    <Xfooter></Xfooter>
  </div>
</template>

<script>
import Xfooter from './components/Xfooter.vue'
export default {
  components: {
    Xfooter
  }
}
</script>
<style>

</style>
>>>>>>> 05a801f21bd623d5e057d706c29982f571c44173
