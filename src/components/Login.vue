<template>
	<div data-page="sign-in" class="page page-on-center">
		<!--头部导航子组件-->
		<navbar v-model="showtitle"></navbar>
		<!--正文-->
		<div class="page-content logins hide-bars-on-scroll">
			<!--中间logo的位置,使用文字填充-->
			<div class="he-center he-magin100">遇 践 青 年</div>
			<div class="list-block inputs-list">
				<ul>
					<li class="item-content">
						<div class="item-inner not-empty-state">
							<div class="item-input item-input-field not-empty-state">
								<!--输入账号名-->
								<mt-field label="" placeholder="请输入用户名" v-model="username"></mt-field>
							</div>
						</div>
					</li>
					<li class="item-content he-magin30">
						<div class="item-inner not-empty-state">
							<div class="item-input item-input-field not-empty-state">
								<!--输入密码-->
								<mt-field label="" placeholder="请输入密码" type="password" v-model="password"></mt-field>
							</div>
						</div>
					</li>
					<!--TODO:当输入错误三次后,输入验证码的输入框出现并进行验证-->
					<li class="item-content he-magin30 he-captcha" v-if='showcode'>
						<div class="item-inner not-empty-state">
							<div class="item-input item-input-field not-empty-state">
								<!--输入密码-->
								<mt-field label="" v-model="captcha" placeholder="请输入验证码">
									&nbsp&nbsp&nbsp&nbsp<img src="###" height="45px" width="100px">
								</mt-field>
							</div>
						</div>
					</li>
					<li class="item-content he-magin30">
						<div class="item-inner not-empty-state">
							<div class="item-input item-input-field not-empty-state">
								<!--登录信息提交按钮-->
								<div @click="gologin" class="button-fill button col-100">用户登录</div>
							</div>
						</div>
					</li>
					<li class="item-content he-magin30">
						<div class="item-inner not-empty-state">
							<!--登录信息提交按钮-->
							<div class="clear center">
								<label class="he-left" @click="goforgot">忘记密码</label>&nbsp;&nbsp;|&nbsp;&nbsp;
								<label class="he-right" @click="goregester">快速注册</label>
							</div>
						</div>
					</li>
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
				username: '',
				password: '',
				showcode: true,
				captcha: '',
				showtitle: '登 录'
			}
		},
		methods: {
			goforgot: function() {
				this.$router.push({
					path: '/forgot'
				})
			},
			goregester: function() {
				this.$router.push({
					path: '/register'
				})
			},
			goback: function() {
				this.$router.go(-1)
			},
			gologin: function() {
				this.$router.push({
					path: '../login',
					prams: {
						username: 'username',
						password: 'password'
					}
				})
			}
		}
	}
</script>

<style>

</style>