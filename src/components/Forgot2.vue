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
								<mt-field label="" placeholder="请输入新密码" type="password" v-model="password"></mt-field>
							</div>
						</div>
					</li>
					<li class="item-content he-magin30">
						<div class="item-inner not-empty-state">
							<div class="item-input item-input-field not-empty-state">
								<!--输入账号名-->
								<mt-field label="" placeholder="确认新密码" type="password" v-model="password"></mt-field>
							</div>
						</div>
					</li>
					<li class="item-content he-magin30">
						<div class="item-inner not-empty-state ">
							<div class="item-input item-input-field not-empty-state">
								<!--登录信息提交按钮-->
								<div @click="goregister" class="button-fill button col-100 ">确 认</div>
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
				phone: '',
				code: '',
				code2: '',
				showtitle: '忘 记 密 码'
			}
		},
		methods: {
			goforgot: function() {
				this.$router.push({
					path: '/login'
				})
			},
			goregester: function() {
				this.$router.push({
					path: '/login'
				})
			},
			goback: function() {
				this.$router.go(-1)
			},
			goregister: function() {
				this.$router.push({
					path: '/login',
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