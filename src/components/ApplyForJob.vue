<template>
	<div data-page="productlist" class="page navbar-fixed page-on-center">
		<!--
        	作者：759156313@qq.com
        	时间：2018-08-09
        	描述：navbar
        -->
		<div class="navbar">
			<div class="navbar-inner">
				<div class="left sliding">
					<a href="home.html" class="back link"><i class="icon icon-back"></i></a>
				</div>
				<div class="center">应聘消息</div>
			</div>
		</div>
		<!--子组件-->
		<general-message :value="value" v-show="showMessageFlag" @back="getback"></general-message>
		<!--
        	作者：759156313@qq.com
        	时间：2018-08-09
        	描述：应聘者列表
       -->
		<div class="page-content hide-bars-on-scroll">
			<div class="prductlist  content-block">
				<!--下拉加载-->
				<div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="60">
					<span v-for="item in list">
				  	
				  	<div @click="info"  class="card tablet-50" style="width: 100%;height: 80px;margin-bottom: 16px;margin-top: 16px;">
						<div class="banner productblock name">赵老四</div>
						<div class="job">村头修车</div>
						<div class="time">投递时间:2018-08-09 13:43:30 </div>
						<span class="more" @click="moreMessage">详情</span>
				</div>
				</span>
				<!--加载中的圆圈显示-->
				<mt-spinner :size="20" color="#26a2ff" style="
			        position: fixed;
			        left: calc(50% - 20px);
			        animation-duration: 1s;
			        animation-iteration-count: 1;
			        animation-fill-mode: forwards;
			      " :style="{
			        'animation-name': animationLoadingStyle
			      }"></mt-spinner>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import GeneralMessage from "@/components/GeneralMessage";
	export default {
		components: {
			GeneralMessage
		},
		data() {
			return {
				item: 0,
				value: "",
				showMessageFlag: false,
				animationLoadingStyle: "loadingHide",
				list: [
					"爱尚教育科技有限公司", "嘎嘎嘎嘎嘎",
				],
				lists: [{
					name: "我是加载的",
				}]
			};
		},
		methods: {
			loadMore() {
				this.loading = true;
				//				显示加载中的圆圈
				this.animationLoadingStyle = "loadingShow";
				setTimeout(() => {
					let last = this.list[this.list.length - 1];
					for(let i = 1; i <= 4; i++) {
						this.list.push(this.lists[0].name + i);
					}
					//				隐藏加载中的圆圈
					this.animationLoadingStyle = "loadingHide";
					this.loading = false;
				}, 1500);
			},
			info: function() {
				this.showFlg = true;
			},
			moreMessage: function() {
				console.log(111);
				this.showMessageFlag = true;
			},
			getback: function() {
				this.showMessageFlag = false;
			}
		}
	}
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