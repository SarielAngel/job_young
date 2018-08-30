<template>
	<div class="views pageview">
		<div class="views pageview">
		  	<div class="view view-main" data-page="productlist">
		    	<div class="pages">
					<div data-page="productlist" class="page navbar-fixed page-on-center">
					  	<div class="navbar">
					    	<div class="navbar-inner" @click="quit">
						      	<div class="left sliding"><a class="back link"><i class="icon icon-back"></i></a></div>
						      	<div class="center">密码修改</div>
					    	</div>
					  	</div>
					  <div class="page-content hide-bars-on-scroll">
					    	<div class="list-block inputs-list">
					        <ul>
					          <li>
					            <div class="item-content">
					              <div class="item-inner">
					                <div class="item-input item-input-field" style="width:100%;">
					                  <input style="text-align:center;height: 45px;border-radius: 10px;" type="text"  placeholder="原密码">
					                </div>
					                <div class="item-input item-input-field" style="width:100%;">
					                  <input style="text-align:center;height: 45px;border-radius: 10px;" type="text"  placeholder="新密码">
					                </div>
					                <div class="item-input item-input-field" style="width:100%;">
					                  <input style="text-align:center;height: 45px;border-radius: 10px;" type="text" v-model="inputValue" placeholder="重复新密码">
					                </div>
					              </div>
					            </div>
					          </li>
					        </ul>
					      </div>
					      <div class="first" @click="save">
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
	export default{
		data(){
			return{
				inputValue: ""
			}
		},
		props: {
			value: {
				type: String,
				default: function() {
					return {
						value: ''
					};
				}
			}
		},
		created() {
      		this.inputValue = this.value;
    	},
		methods: {
			save: function() {
				this.$emit("input", this.inputValue);
				this.$emit("backPassword")
			},
			quit: function() {
				this.$emit("input", this.value);
				this.$emit("backPassword")
			}
		}
	}
</script>

<style>
	.first{
		position: relative;top:3%;left: 9%;margin-top: -20px;margin-left: -20px;
	}
	.second{
		position: relative;top:8%;left: 22%;margin-top: -20px;margin-left: -20px;
	}
</style>