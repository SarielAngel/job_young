<template>
	<div>
		<div><input type="radio"></div>
		<ul>
			<h2>{{ name }}</h2>
			<h1 class="ha">我是测试页面</h1>
			<!--<div v-for="item in userlist">-->
			<div v-for="(item, index) in userlist">
				<label>姓名:</label><span>{{ item.name }}</span>
				<label>id:</label><span>{{ item.id }}</span>
				<label>index:</label><span>{{ index }}</span>
			</div>
			<button @click="add">添加</button>
			<button @click="mes">消息框</button>

			<mt-datetime-picker
        ref="picker"
        type="datetime"
        v-model="pickerValue"
       >
      </mt-datetime-picker>


		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			  pickerValue: "",
				name: "嘎嘎嘎",
				userlist: [{
						name: "无极剑圣",
						id: "1",
					},
					{
						name: "疾风剑豪",
						id: "2",
					}
				],
			}
		},

		methods: {
			add: function() {

					this.$http.get("/detaila?releasesId=1").then((res) => {
						console.log("拿到值了");
						console.log(res);
					} )
			},
			mes: function() {
				MessageBox({
					title: '提示',
					message: '确定执行此操作?',
					showCancelButton: true
				});
			}
		},

	}
</script>

<style>
	.ha {
		color: royalblue;
	}
</style>