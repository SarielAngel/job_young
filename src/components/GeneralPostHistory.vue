<template>
	<div>
		<!--
        	作者：759156313@qq.com
        	时间：2018-08-09
        	描述：navbar
        -->
		<div class="navbar">
			<div class="navbar-inner">
				<div class="left sliding">
					<a href="#/General" class="back link"><i class="icon icon-back"></i></a>
				</div>
				<div class="center">投递记录</div>
			</div>
		</div>
		<!--
        	作者：759156313@qq.com
        	时间：2018-08-09
        	描述：投递记录列表
        -->
		<div class="page-content hide-bars-on-scroll">
			<div class="prductlist content-block">
				<div class="row">
					<div class="card tablet-50" style="width: 100%;">
						<div class="card-content" style="width: 100%; height: 100px;">
							<div class="banner productblock jobname">星海广场喂鸽子</div>
							<div class="salary">300/小时</div>
							<div class="time">投递时间:2018-08-09 13:43:30 </div>
							<div class="c">已完成</div>
						</div>
					</div>
					<div class="card tablet-50 " style="width: 100%; ">
						<div class="card-content " style="width: 100%; height: 100px; ">
							<div class="banner productblock  jobname">跨海大桥修桥</div>
							<div class="salary">50000/月</div>
							<div class="time">投递时间:2018-08-08 10:15:30 </div>
							<div class="c">已取消</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//		import PostItem from "@/components/common/postItem ";
	//		export default {
	//			components: {
	//				PostItem
	//			}
	//		}
</script>

<style>
	.c {
		position: absolute;
		bottom: 25px;
		right: 20px;
		color: #888888;
	}
	
	.jobname {
		position: absolute;
		top: 20px;
		left: 20px;
		font-weight: bold;
		color: #888888;
	}
	
	.salary {
		position: absolute;
		top: 20px;
		right: 25px;
		color: #888888;
	}
	
	.time {
		position: absolute;
		bottom: 20px;
		left: 20px;
	}
</style>