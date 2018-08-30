<template>
	<div class="views pageview">
		<div class="views pageview">
		  	<div class="view view-main" data-page="productlist">
		    	<div class="pages">
					<div data-page="productlist" class="page navbar-fixed page-on-center">
					  	<div class="navbar">
					    	<div class="navbar-inner">
						      	<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back" @click="close"></i></a></div>
						      	<div class="center">性别</div>
						        <div class="right"><a href="#" class="open-panel link icon-only"><span @click="sex">确认</span></a></div>
					    	</div>
					  	</div>
					  	<div class="page-content hide-bars-on-scroll">
					    	<div class="prductlist  content-block">
					    		<mt-radio
  									title="选择性别"
  										v-model="selectValue"
  										:options="options">
								</mt-radio>	
					    	</div>
					    </div>
					</div>
				</div>
		  	</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				options:[
					{
					    label: '不限',
					    value: '1'
					},
					{
					    label: '男',
					    value: '2'
					},
					{
					    label: "女",
					    value: '3'
					}
				],
				selectValue:''
			}
		},
		props: {
			value: {
				type: Object,
				default: function() {
					return {
						label: "",
						value: '0'
					};
				}
			}
		},
		methods: {
			sex:function(){
				var back = {};
//				储存	
				for(var index in this.options){
		        	var item = this.options[index];
		        	if(item.value === this.selectValue){
		        		back.label = item.label;
		        		back.value = item.value;
		        	}
		        }
//				非空校验				
				if(this.selectValue == '') {
					alert("请选择性别");
				}
//				回调					
		        this.$emit("input", back);
		        this.$emit("close");
			},
			close:function() {
            	this.$emit("close");
            },
		}
	}
</script>

<style>
</style>