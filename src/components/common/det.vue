<template>
	<div>
		<div class="views pageview">
		  	<div class="view view-main" data-page="productlist">
		    	<div class="pages">
					<div data-page="productlist" class="page navbar-fixed page-on-center">
					  	<div class="navbar">
					    	<div class="navbar-inner">
						      	<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back" @click="close"></i></a></div>
						      	<div class="center">详情</div>
						        <div class="right"><a href="#" class="open-panel link icon-only"><span @click="det(selectValue)">确认</span></a></div>
					    	</div>
					  	</div>
					  	<div class="page-content hide-bars-on-scroll">
					    	<div class="prductlist  content-block">
					    		<!--很神奇的将div做成了textarea效果-->
					    		<!--<div contenteditable="true"
					    			 placeholder="请输入详情"
					    			 v-html="test"
					    			 class="sss">
					    		</div>-->
					    		<div style="height: 86vh;">
					    		<textarea class="sss" v-model="selectValue">{{selectValue}}</textarea>
					    		</div>
					    	</div>
					    </div>
				 	</div>
				</div>
		  	</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selectValue:'',
				detvalue: {
					label: "",
					value: ""
				}
			}
		},
		created() {
			this.selectValue = this.value.value;
		},
		props: {
				value: {
					type: Object,
					default: function() {
						return {};
					}
				},
			},
        methods:{
            det:function(selectValue) {
            	console.log(this.selectValue);
				this.detvalue.label = this.selectValue;
				
				if(this.detvalue.label === "") {
					this.detvalue.label = '请输入详情';
					this.detvalue.value = '';
				}else{
					this.detvalue.label = '点击查看';
					this.detvalue.value = this.selectValue;
				}
                console.log(this.detvalue.value);
               
                this.$emit('input',this.detvalue);
                this.$emit("close");
            },
            close:function() {
            	this.$emit("close");
            },
        }
    }    
</script>

<style>
	.sss {
		font-size: 20px;
		width:99%;
		height:50%;
		outline: none;
		background:transparent;
		border: 0px;
	}
	/*伪对象选择器 此次负责去除滚动条*/
	::-webkit-scrollbar{display: none;};
	/*.sss:empty::before{
			color:lightgrey;
			content:attr(placeholder);
	}*/
</style>