<template>
	<div data-page="productlist" class="page navbar-fixed page-on-center">
		<div class="navbar">
			<div class="navbar-inner">
				<div class="left sliding">
					<a href="#/General" class="back link"><i class="icon icon-back"></i></a>
				</div>
				<div class="center">企业发布</div>
				
			</div>
		</div>
		
		<!--跳转详情页-->
		<releases-info v-model="value" v-if="showFlg" @back="back" ></releases-info>
		
		<div class="page-content hide-bars-on-scroll">
			<div class="prductlist  content-block">
				
				<div
				  v-infinite-scroll="loadMore"
				  infinite-scroll-disabled="loading"
				  infinite-scroll-distance="60" >
				  <span v-for="item in list">
				  	
				  	<div  @click="info" class="card tablet-50" style="width: 100%;height: 120px;margin-bottom: 16px;margin-top: 16px;">
							<div >
								<span style="
									position: absolute;
									top: 20px;
									left: 20px;
									font-weight: bold;
									color: #777777;
									font-size: 16px;
									">JAVA软件工程师</span>
								<span style="
									position: absolute;
									top: 20px;
									right: 20px;
									color: #F44336;
									">5-8k/月</span>
							</div>
							<div class="col-100" style="
								position: absolute;
								top: 50px;left: 20px;
								color: #777777;
								">2018-08-09 13:30 — 2018-08-09 17:30</div>
							<div style="font-size: 13px;">
								<span style="
									position: absolute;
									bottom: 20px;
									left: 20px;
									color: #777777;
									">爱尚教育科技公司</span>
								<span style="
									position: absolute;
									bottom: 20px;
									right: 20px;
									color: #FFC107;
									">甘井子区科技创业大厦</span>
							</div>
						</div>
				  	
				  </span>
				  
				  <!--加载中的圆圈显示-->
				  <mt-spinner 
			      :size="20" 
			      color="#26a2ff"
			      style="
			        position: fixed;
			        left: calc(50% - 20px);
			        animation-duration: 1s;
			        animation-iteration-count: 1;
			        animation-fill-mode: forwards;
			      "
			      :style="{
			        'animation-name': animationLoadingStyle
			      }"
    			 ></mt-spinner>
				</div>
				
				
			</div>
		</div>
	</div>
</template>

<script>
	import ReleasesInfo from '@/components/common/releasesInfo'
	
	export default {
		components:{
			ReleasesInfo,
		},
		data() {
			return {
				item:0,
				showFlg:false,
				animationLoadingStyle: "loadingHide",
				list: [
					"爱尚教育科技有限公司","嘎嘎嘎嘎嘎",
				],
				lists: [{
					name: "我是加载的",
				}
				]
			}	
		},

		methods: {
			loadMore() {
			  this.loading = true;
//				显示加载中的圆圈
			  this.animationLoadingStyle = "loadingShow";
			  setTimeout(() => {
			    let last = this.list[this.list.length - 1];
			    for (let i = 1; i <= 4; i++) {
			      this.list.push(this.lists[0].name+i);
			    }
//				隐藏加载中的圆圈
			    this.animationLoadingStyle = "loadingHide";
			    this.loading = false;
			  }, 1500);
			},
			info: function() {
				this.showFlg = true;
			},
			back: function() {
				this.showFlg = false;
			}
			
		},
	}
</script>

<style>
</style>