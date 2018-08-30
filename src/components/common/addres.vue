<template>
		<div>
		<div class="views pageview">
		  	<div class="view view-main" data-page="productlist">
		    	<div class="pages">
					<div data-page="productlist" class="page navbar-fixed page-on-center">
					  	<div class="navbar">
					    	<div class="navbar-inner">
						      	<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back" @click="close"></i></a></div>
						      	<div class="center">工作地点</div>
						        <div class="right"><a href="#" class="open-panel link icon-only"><span @click="addres(selectValue)">确认</span></a></div>
					    	</div>
					  	</div>
					  	<div class="page-content hide-bars-on-scroll">
					    	<div class="prductlist  content-block">
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
				adresvalue: {
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
            addres:function() {
            	console.log(this.selectValue);
				this.adresvalue.label = this.selectValue;
				
				if(this.adresvalue.label === "") {
					this.adresvalue.label = '请输入地址';
					this.adresvalue.value = '';
				}else{
					this.adresvalue.label = '点击查看';
					this.adresvalue.value = this.selectValue;
				}
				
                console.log(this.adresvalue.value);
                this.$emit('input',this.adresvalue);
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
		height:99%;
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