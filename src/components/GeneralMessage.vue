<template>
	<div style="width: 100%; height: 100%;">
		<!--<div data-page="profile" class="page page-on-center">-->
		<div class="navbar">
			<div class="navbar-inner">
				<div class="left sliding">
					<a @click="goback" class="back link"><i class="icon icon-back"></i></a>
				</div>
				<div class="center ">My Profile</div>
			</div>
		</div>
		<!--</div>-->
		
		<div style="width: 100% ; height:200px">
			<mt-cell title="姓名" v-model="relname"></mt-cell>
			<mt-cell title="年龄" v-model="age"></mt-cell>
			<mt-cell title="性別" v-model="sex"></mt-cell>
			<mt-cell title="电话号" v-model="tel"></mt-cell>
			<mt-cell title="毕业院校" v-model="school"></mt-cell>
			<mt-cell title="专业" v-model="pos"></mt-cell>
		</div>

	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: String,
				default: function() {
					return false;
				}
			}
		},
		data() {
			return {
				back: "",
				name: '贾卡杰克。格雷姆乔',
				relname: '郑超',
				age:"永远18",
				sex: '男',
				tel: '17382885557',
				school: '哈尔滨远东理工',
				pos: '计算机网络'
			}
		},
		methods: {
			goback: function() {
				this.$emit("input", this.value);
				this.$emit("back");
			}
		}
	}
</script>

<style>

</style>