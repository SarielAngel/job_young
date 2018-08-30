<template>
	<div>
		<div class="views pageview">
		  	<div class="view view-main" data-page="productlist">
		    	<div class="pages">
					<div data-page="productlist" class="page navbar-fixed page-on-center">
					  	<div class="navbar">
					    	<div class="navbar-inner">
						      	<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back" @click="close"></i></a></div>
						      	<div class="center">支付方式</div>
						        <div class="right"><a href="#" class="open-panel link icon-only"><span @click="pay">确认</span></i></a></div>
					    	</div>
					  	</div>
					  	<div class="page-content hide-bars-on-scroll">
					    	<div class="prductlist  content-block">
					    		<mt-radio
								  align="right"
								  title="选择支付方式"
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
					    label: '/时',
					    value: '1'
					},
					{
					    label: "/天",
					    value: '2'
					},
					{
					    label: "/月",
					    value: '3'
					},
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
			pay:function(){
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
					alert("请选择工作类型");
				}
//				回调					
		        this.$emit("input", back);
		        this.$emit("close");
			},
			close:function() {
            	this.$emit("close");
        	},
		},
		
	}
</script>
<style>
</style>