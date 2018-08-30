<template>
	<div>
		<div data-page="profile" class="page page-on-center">
	  		<div class="navbar  header">
	    		<div class="navbar-inner">
	     	 		<div class="left sliding"><a href="#" class="open-panel link icon-only"><i class="icon icon-bars"></i></a></div>
	     			 <div class="center ">My Profile</div>
	    		</div>
	 		</div>
	 	</div>	 
	 	<div class="page-content">
	     	<div class="item-content userprofile large" style="height: 70px;">
	        	<div class="item-media"><img src="../../static/img/touxiang.jpg" ></div>
	        	<div class="item-inner">
	           		<div class="item-title-row">
	            	</div>
	        	</div>
	        </div>
	        <div style="width: 100%;height: 450px;">
		        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
				<mt-cell title="性别" v-model="sex" style="width: 50%;" ><span @click="handlerChange" style="margin-left:8px;font-size: 18px;font-family: 'Open Sans', Helvetica, Arial, sans-serif;left: 10px;">{{sex}}</span><mt-popup v-model="popupVisible" position="bottom">
					<mt-picker :slots="slots" @change="onValuesChange" style="height: 180px; width: 380px;text-align-last: center;; transform: translate(0px, 36px) translateZ(0px);"></mt-picker>
				</mt-popup></mt-cell>
				<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="tel"></mt-field>
				<mt-field label="毕业院校" placeholder="请选择毕业院校" v-model="school"></mt-field>
				<mt-field label="所属专业" placeholder="请选择专业" v-model="pos"></mt-field>
				<mt-field label="选择出生日期" placeholder="请输入生日" type="date" v-model="time"></mt-field>
			</div>
			<div style="height: 50px;width: 100%;line-height: 100px;" @click="Toast">
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
			},
			handlerChange:function(){
				this.popupVisible=true;
			},
			onValuesChange(picker, values) {
				this.sex = values[0];
		      if (values[0] > values[1]) {
		        picker.setSlotValue(1, values[0]);
		      }
		    }
		},
		data(){
			return{
				username:'格雷姆乔。贾卡杰克',
				tel:'17382885557',
				school:'哈尔滨远东理工',
				pos:'计算机网络',
				time:'2016/9/1',
				popupVisible: false,
				sex:'男',
			    slots: [
		          {
		            flex: 1,
		            values: ['男', '女', '不限'],
		            className: 'slot1',
		            textAlign: 'right'
		          }
		        ]  
			    
			}
		}
	}
</script>

<style>
</style>