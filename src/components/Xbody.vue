<template>
  <div class="bar">
		<div class="left-bar">
				<a href="javascript:;">医疗健康器材</a>
				<a href="javascript:;">中西成药</a>
				<a href="javascript:;">养生中药</a>
				<a href="javascript:;">医疗健康器材</a>
				<a href="javascript:;">医疗健康器材</a>
				<a href="javascript:;">医疗健康器材</a>
				<a href="javascript:;">医疗健康器材</a>
				<a href="javascript:;">医疗健康器材</a>
				<a href="javascript:;">医疗健康器材</a>
				<a href="javascript:;">医疗健康器材</a>
				<a href="javascript:;">医疗健康器材</a>
		</div>
		<div class="right-bar">
				<div class="right-bar-name">
					 <p><span>|</span>感冒类</p>
					<div class="right-bar-list">
							<div class="right-bar-list-img">
								<img src="../assets/images/84.png" alt="">
								<p>预防感冒</p>
							</div>
					</div>
					<div class="right-bar-list">
							<div class="right-bar-list-img">
								<img src="../assets/images/84.png" alt="">
								<p>预防感冒</p>
							</div>
					</div>
					<div class="right-bar-list">
							<div class="right-bar-list-img">
								<img src="../assets/images/84.png" alt="">
								<p>预防感冒</p>
							</div>
					</div>
					<div class="right-bar-list">
							<div class="right-bar-list-img">
								<img src="../assets/images/84.png" alt="">
								<p>预防感冒</p>
							</div>
					</div>
					<div class="right-bar-list">
							<div class="right-bar-list-img">
								<img src="../assets/images/84.png" alt="">
								<p>预防感冒</p>
							</div>
					</div>
					<div class="right-bar-list">
							<div class="right-bar-list-img">
								<img src="../assets/images/84.png" alt="">
								<p>预防感冒</p>
							</div>
					</div>
				</div>
		</div>
	</div>
</template>
<script>
export default{
	
}
</script>
<style scoped>
.bar{
	/* background-color: #fff; */
	margin-top:50px;
	flex-direction: column;
	width: 100%;
}
.bar div{
		float:left;
}
.bar .left-bar{
 background-color: #e4e5e7;
 /* text-indent: 5px; */
	width: 30%;
	text-align: center;
}
.bar .left-bar a{
	display: inline-block;
	font-size: 13px;
	height:43px;
	line-height: 43px;	
}
.bar .right-bar {
		width: 70%;
		display:flex;
}
.bar .right-bar .right-bar-name{
	margin-left:10px;
	font-size: 14px;

}
.bar .right-bar .right-bar-name>p{
	height: 40px;
	line-height: 40px;
	font-size: 13px;
} 
.bar .right-bar .right-bar-list{
		/* display:flex; */
		text-align: center;
		width: 48%;
		/* margin-right: 5px;		 */
}
.bar .right-bar .right-bar-list .right-bar-list-img{
		float:left;
		width: 100%;
		border:1px solid #e4e5e7;
		padding-top: 5px;
	
}
.bar .right-bar .right-bar-list .right-bar-list-img img{
		width:70px;
}
.bar .right-bar .right-bar-list .right-bar-list-img p{
	height: 30px;
	line-height: 30px;
	width: 100%;
}
</style>
