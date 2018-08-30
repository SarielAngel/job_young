<template>
	<div data-page="sign-in" class="page page-on-center">
		<!--头部导航子组件-->
		<navbar v-model="showtitle"></navbar>
		<!--正文-->
		<div class="page-content logins hide-bars-on-scroll">
			<div class="he-center he-magin100">遇 践 青 年</div>

			<div class="list-block inputs-list">
				<ul>
					<li class="item-content ">
						<div class="item-inner not-empty-state">
							<div class="item-input item-input-field not-empty-state">
								<!--输入账号名-->
								<mt-field label="" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
							</div>
						</div>
					</li>
					<div class="clear he-nullline"></div>
					<li class="item-content he-magin30">
						<div class="item-inner not-empty-state he-contant60">
							<div class="item-input item-input-field not-empty-state ">
								<!--输入密码-->
								<mt-field label="" placeholder="请输入验证码" v-model="code"></mt-field>
							</div>
						</div>
						<div class="item-inner not-empty-state he-contant40">
							<div class="item-input item-input-field not-empty-state ">
								<!--输入密码-->
								<mt-field label="" placeholder="获取验证码" v-model="code2"></mt-field>
							</div>
						</div>
					</li>
					<li class="item-content he-magin30">
						<div class="item-inner not-empty-state ">
							<div class="item-input item-input-field not-empty-state">
								<!--登录信息提交按钮-->
								<div @click="goregister" class="button-fill button col-100 ">下一步</div>
							</div>
						</div>
					</li>
					<!--TODO:输入验证码-->
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import navbar from '@/components/common/navbar'
	export default {
		components: {
			navbar
		},
		data() {
			return {
				phone: '',
				code: '',
				code2: '',
				showtitle: '注 册'
			}
		},
		methods: {
			goback: function() {
				this.$router.go(-1)
			},
			goregister: function() {
				this.$router.push({
					path: '/register2',
					prams: {
						phone: 'phone',
						code: 'code',
						code2: 'code2'
					}
				})
			}
		}
	}
</script>

<style>

</style>