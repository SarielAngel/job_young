<template>
<div>
	<name-input v-model="company.name" v-if="showNameFlg" @backName="backName"></name-input>
	<address-input v-model="company.address" v-if="showAddressFlg" @backAddress="backAddress"></address-input>	
	<tel-input v-model="company.tel" v-if="showTelFlg" @backTel="backTel"></tel-input>	
	<password-input v-model="company.password" v-if="showPasswordFlg" @backPassword="backPassword"></password-input>	
	 	<div class="page-content" >
	     	<div class="item-content userprofile large" style="height: 100px;">
	        	<div class="item-media" ><img src="../../static/img/pic2.png" width="44"></div>
	        	<div class="item-inner" >
	        	</div>
	        </div>
	        
	        	<div >
	        		<div @click="nameChange">
	        			<mt-cell title="企业名称" v-model="company.name"  is-link></mt-cell>
	        		</div>
	        		<div @click="addressChange">
	        			<mt-cell title="企业地址" v-model="company.address"  is-link></mt-cell>
	        		</div>
			       	<div @click="telChange">
			       		<mt-cell title="联系电话" v-model="company.tel"  is-link></mt-cell>
			       	</div>
			       	<div @click="passwordChange">
	        			<mt-cell title="密码修改"   is-link></mt-cell>
	        		</div>
			       	<mt-cell title="帮助与反馈" :to="{ path: 'help' }" is-link></mt-cell>
					<div class="row no-gutter"><a href="#" class="button-fill button col-100">退出登录</a></div>
      			 </div>
	       
	  	</div>
  	</div>
</template>

<script>
	import NameInput from "@/components/common/nameInput.vue";
	import AddressInput from "@/components/common/addressInput.vue";
	import TelInput from "@/components/common/telInput.vue";
	import PasswordInput from "@/components/common/passwordInput.vue";
	
	export default {
		components: {
			NameInput,
			AddressInput,
			TelInput,
			PasswordInput
		},
		data() {
			return {
				showAddressFlg: false,
				showNameFlg: false,
				showTelFlg: false,
				showPasswordFlg: false,
				company: {
					name: "大连遇见青年科技有限公司",
					address: "大连市高新园区",
					tel: "18842659307",
					password: ""
				}
			}
		},
		methods: {
			nameChange: function() {
				this.showNameFlg = true
			},
			addressChange: function() {
				this.showAddressFlg = true
			},
			telChange: function() {
				this.showTelFlg = true
			},
			passwordChange: function() {
				this.showPasswordFlg = true;
			},
			backName: function() {
				this.showNameFlg = false
			},
			backAddress: function() {
				this.showAddressFlg = false
			},
			backTel: function() {
				this.showTelFlg = false
			},
			backPassword: function() {
				this.showPasswordFlg = false
			},
		}

	}
</script>

<style>
	.ha {
		color: royalblue;
	}
</style>