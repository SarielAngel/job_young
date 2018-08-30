<template>
	<div>
		<router-view class="yemian"></router-view>
		<div class="b_catalog">
			<div class="catalog">
				<i class="fa fa-home" style="font-size: 24px;" aria-hidden="true" @click="home"></i>
			</div>
			<div class="catalog"> 
				<i class="fa fa-plus" style="font-size: 24px;" aria-hidden="true" @click="rel"></i>
			</div>
			<div class="catalog">
				<i class="fa fa-user" style="font-size: 24px;top: 17px;" aria-hidden="true" @click="general"></i>
			</div>
		</div>
	</div>
	
	
</template>

<script>
 	export default {
		methods :{
			home:function(){
				this.$router.push({
					path:'/home'
				})
			},
			rel:function(){
				this.$router.push({
					path:'/releases'
				})
			},
			general:function(){
				this.$router.push({
					path:'/General'
				})
			}
		}
 	}
</script>

<style>
.yemian {
	width: 100%;
	height:calc(100% - 30px);
}
.b_catalog {
	position: relative;
	width: 100%;
	height: 30px;
	background-color: #ffffff;
	left: 0;
}

.catalog {
	position: relative;
	width: 32.333333333%;
	text-align: center;
	font-size: 12px;
	color: #5d656b;
	display: inline-block;
	margin: 0;
	left: 0;
	
}

.fa-home:after {
	background-position: -44px -2px;
}
</style>