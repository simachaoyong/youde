<template>
	<div class="ximg">
		<a href="javacript:void(0);" @click="goLink('details',item.jumpVal)" v-for="(item,index) of data" :key="index">
			<img :src="JSON.parse(item.banner).path"/>
		</a>
	</div>
</template>
<script>
export default {
	data() {
		return {
			data:[]
		}
	},
	methods: {
		goLink(link,id){
			this.$router.push({name:link,query: {id}});
		}
	},
	created() {
		this.$axios.get('https://m.youde.com/youde/f/app/s_10020/advertising/list?type=19').then((res)=>{
			this.data=res.data.data;
		})
	},
};
</script>
<style scoped>
	.ximg{
		margin-top:10px;
		width:100%;
		display:flex;
		justify-content: space-around;
		background-color:#fff;
		padding-bottom:5px;
	}
	.ximg a{
		flex:1;
		margin:0 5px;
	}
	.ximg a img{
		width:100%;
	}
</style>
