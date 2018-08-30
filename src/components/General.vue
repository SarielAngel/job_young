<template>
	<div >
		<div data-page="profile" class="page page-on-center">
	  		<div class="navbar  header">
	    		<div class="navbar-inner" >
	     	 		<div class="left sliding"><a href="#" class="open-panel link icon-only"><i class="icon icon-bars"></i></a></div>
	     			 <div class="center "></div>
	    		</div>
	 		</div>
	 	</div>	 
	 	<div class="page-content" >
	     	<div class="item-content userprofile large" >
	        	<div class="item-media" ><img src="../../static/img/geleimuqiao.jpg" width="44"></div>
	        	<div class="item-inner" >
	           		<div class="item-title-row">
	               	   <div class="item-title" style="font-size: 20px;">{{name}}</div>
	            	</div>
	            <div class="item-subtitle" style="font-size: 20px;">{{sex}}    {{age}}岁</div>
	        	</div>
	        </div>
	        <div style="width: 100% ; height:144px">
	       		<mt-cell title="电话号" v-model="tel"></mt-cell>
	        	<mt-cell title="毕业院校" v-model="school"></mt-cell>
	       	 	<mt-cell title="专业" v-model="pos"></mt-cell>
	        </div>
	        <div style="width: 100% ; height:200px">
	        	<mt-cell
				  title="历史记录"
				  to="/GeneralPostHistory"
				  is-link
				  value="">
				</mt-cell>
				<mt-cell
				  title="收藏记录"
				  to="/collection"
				  is-link
				  value="">
				</mt-cell>
				<mt-cell
				  title="关注列表"
				  to="/focus"
				  is-link
				  value="">
				</mt-cell>
				<mt-cell
				  title="修改密码"
				  to="/ChangePassword"
				  is-link
				  value="">
				</mt-cell>
				<mt-cell
				  title="退出登陆"
				  to="/home"
				  is-link
				  style=";"
				  >
				</mt-cell>
	        </div>
	        <div style="width: 25px; height: 25px;position: absolute;right: 15px; top:15px;">
	        <i class="fa fa-edit" aria-hidden="true" @click="change"></i></div>
	  	</div>
  	</div>
</template>

<script>
	export default{
		data(){
			return{
				tel:'173828885557',
				school:'哈尔滨远东理工',
				pos:'计算机网络技术',
				name:'格雷姆乔。贾卡杰克',
				sex:'男',
				age:'2300'
			}
		},
		methods:{
			change(){
				this.$router.push({
					name:"GeneralChange"
				});
			}	
		}
	}
</script>

<style>
</style>