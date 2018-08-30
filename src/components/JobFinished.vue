<template>
	<div>
		<!--
        	作者：759156313@qq.com
        	时间：2018-08-17
        	描述：navbar
        -->
		<div class="navbar">
			<div class="navbar-inner">
				<div class="left sliding">
					<a href="home.html" class="back link"><i class="icon icon-back"></i></a>
				</div>
				<div class="center">完成列表</div>
			</div>
		</div>
		<!--<evaluate></evaluate>-->
		<!--
        	作者：759156313@qq.com
        	时间：2018-08-17
        	描述：完成列表
        -->
		<div class="page-content hide-bars-on-scroll">
			<div class="prductlist content-block">
				<div class="row">
					<div class="card tablet-50" style="width: 100%;">
						<div class="card-content" style="width: 100%; height: 100px;">
							<div class="banner productblock name">赵老四</div>
							<div class="job">村头修车</div>
							<div class="time">完成时间:2018-08-09 13:43:30 </div>
							<span class="more">评价</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//	import Evaluate from "@/components/common/evaluate";
//	export default {
//		components: {
//			Evaluate
//		}
//	}
</script>

<style>
	.name {
		position: absolute;
		top: 20px;
		left: 20px;
		font-weight: bold;
		color: #888888;
	}
	
	.job {
		position: absolute;
		top: 20px;
		right: 25px;
		color: #888888;
	}
	
	.time {
		position: absolute;
		bottom: 20px;
		left: 20px;
		color: #888888;
	}
	
	.more {
		position: absolute;
		bottom: 20px;
		right: 20px;
		color: #888888;
	}
</style>