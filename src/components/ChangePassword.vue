<template>
	<div>
		<div data-page="profile" class="page page-on-center">
	  		<div class="navbar  header">
	    		<div class="navbar-inner" >
	     	 		<div class="left sliding"><a href="#" class="open-panel link icon-only"><i class="icon icon-bars"></i></a></div>
	     			 <div class="center ">My Profile</div>
	    		</div>
	 		</div>
	 	</div>	
	 	<div class="page-content" >
	     	<div class="item-content userprofile large" >
	        	<div class="item-media" ><img src="../../static/img/geleimuqiao.jpg" width="44"></div>
	        	<div class="item-inner" >
	           		<div class="item-title-row">
	               	   <div class="item-title">格雷姆乔.贾卡杰克</div>
	            	</div>
	            <div class="item-subtitle">男      2800岁</div>
	        	</div>
	        </div>
	        <div style="width: 100% ; height:200px">
	       		<mt-field label="新密码" placeholder="请输入新密码" v-model="username"></mt-field>
	       		<mt-field label="确认密码" placeholder="请再次输入新密码" v-model="username"></mt-field>
	        </div>
	        <div style="width: 100% ; height:200px">
	        	<mt-field label="手机验证码" placeholder="这个东西需要花钱" v-model="username"></mt-field>
	        </div>
	        <div style="height: 400px;width: 100%;line-height: 400px;" @click="Toast">
			<a href="#/General" class="button-fill button col-100">确认修改</a></div>
			<div style="width: 25px; height: 25px;position: absolute;left: 15px; top:15px;" >
					<i class="icon icon-back" @click="change"></i>
				</div>
		</div>
		
	
	</div>
</template>

<script>
	export default{
		methods:{
			change:function(){
				this.$router.push({
					name:'General'
				});
			},
			Toast(){
				Toast({
				message: '操作成功',
			    iconClass: 'icon icon-success'
				});
			}
		}
	}
</script>

<style>
</style>