<template>
	<div class="views pageview">
		<div class="views pageview">
		  	<div class="view view-main" data-page="productlist">
		    	<div class="pages">
					<div data-page="productlist" class="page navbar-fixed page-on-center">
					  	<div class="navbar">
					    	<div class="navbar-inner">
						      	<div class="left sliding"><a  class="back link"><i class="icon icon-back" @click="close"></i></a></div>
						      	<div class="center">人数</div>
					    	</div>
					  	</div>
					  	<div class="page-content hide-bars-on-scroll">
					    	<div class="list-block inputs-list">
						        <ul>
						          <li>
						            <div class="item-content">
						              <div class="item-inner">
						                <div class="item-input item-input-field" style="width:100%;">
						                  <input style="text-align:center;height: 45px;border-radius: 10px;" placeholder="请输入人数" type="text" v-model="selectValue" >
						                </div>
						              </div>
						            </div>
						          </li>
						        </ul>
					      </div>
					      <div class="first" @click="num">
					      	<mt-button type="primary" size="large" style="width:88%;border-radius:10px;">保存</mt-button>
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
				numvalue: {
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
            num:function() {
            	console.log(this.selectValue)
				this.numvalue.label = this.selectValue;
					
				if(this.numvalue.label === "") {
					this.numvalue.label = '请输入薪资';
					this.numvalue.value = '';
				}else{
					this.numvalue.label = this.selectValue;
					this.numvalue.value = this.selectValue;
				}
                console.log(this.numvalue.value);
               
               this.$emit('input',this.numvalue);
               this.$emit("close");
            },
         	close:function() {
            	this.$emit("close");
        	},    
        },
    }    
</script>

<style>
	.first{
		position: relative;top:3%;left: 9%;margin-top: -20px;margin-left: -20px;
	}
</style>