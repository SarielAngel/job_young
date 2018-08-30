<template>
	<div data-page="productlist" class="page navbar-fixed page-on-center">
		<div class="navbar">
			<div class="navbar-inner">
				<div class="left sliding">
					<a href="#/General" class="back link"><i class="icon icon-back"></i></a>
				</div>
				<div class="center">我的收藏</div>
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
				  	<div @click="info" class="row">
				  	<job-item ></job-item>
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
	import JobItem from "@/components/common/jobItem";
	import ReleasesInfo from '@/components/common/releasesInfo'
	
	export default{
		components: {
			JobItem,
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