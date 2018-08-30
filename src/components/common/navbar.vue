<template>
	<div class="navbar ">
		<div class="navbar-inner">
			<!--左:后退按钮区域-->
			<div class="left sliding he-icon">
				<!--本应该使用div标签,用a标签是因为总样式对a标签有样式,
					用div会丢失样式,又不能改总样式-->
				<a @click="goback" data-panel="left" class="open-panel link icon-only">
					<i class="icon icon-back"></i>
				</a>
			</div>
			<!--中间区域用于显示 '登录' 二字-->
			<div class="he-title-center">{{ title }}</div>
			<!--空DIV和左面对称,使中间对齐的蠢方法之一-->
			<div class="left sliding he-icon"></div>
		</div>
	</div>
</template>

<script>
	export default {
		model: {
			// 有效代替creat钩子函数出现的方法.给title初始值就已经和父组件同步.
			// 使用model， 这儿2个属性，prop属性说，
			//title（此处为本组件被父组件调用）v-model能取到的值，
			prop: 'title',
		},
		props: {
			title: ''
		},
		data() {
			return {
				title: '',
			}
		},
		methods: {
			goback: function() {
				this.$router.go(-1)
			},
		}
	}
</script>

<style>

</style>