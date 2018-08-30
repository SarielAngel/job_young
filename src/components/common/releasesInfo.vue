<template>
	<div>
		<div class="navbar">
			<div class="navbar-inner">
				<div class="left sliding">
					<a @click="back" class="back link"><i class="icon icon-back"></i></a>
				</div>
				<div class="center ">详情</div>
				
			</div>
		</div>

		<div class="page-content hide-bars-on-scroll" >
			<div>
				<div class="card tablet-50" style="width: 96%;">
					<div  style="width: calc(100%-20px); height: 100px;">
						<div class="banner productblock" style="
		          position: absolute;
		          top: 10px;
		          left: 10px;
		          font-size: 25px;
		          font-weight: bold;
		          color: #888888;
		          ">会展中心服务人员</div>
						<div style="
			        position: absolute;
			        top: 20px;
			        right: 25px;
			        color: #FF3333;
			        ">200/天</div>
						<!--<div style="
			        position: absolute;
			        bottom: 20px;
			        left: 20px;
			        color: #999999;
			        ">结账方式:</div>-->
		        <div style="
			        position: absolute;
			        bottom: 20px;
			        left: 20px;
			        color: #999999;
			        ">日结
		        </div>
					</div>
				</div>
			</div>
			
			<div style="margin-top: 5px;">
				<div class="card tablet-50" style="width: 96%;">
					<div  style="width:100%; height: 110px;">
						<div class="banner productblock" style="
		          position: absolute;
		          top: 10px;
		          left: 10px;
		          font-size: 23px;
		          font-weight: bold;
		          color: #888888;
		          ">工作时间</div>
						<div style="
			        position: absolute;
			        top: 50px;
			        left: 20px;
			        color: #999999;
			        ">开始日期: 2018-03-08 8：30</div>
		        <div style="
			        position: absolute;
			        bottom: 10px;
			        left: 20px;
			        color: #999999;
			        ">结束日期:  2018-03-08 15：30
			       </div>
					</div>
				</div>
			</div>
			
			<div>
				<div class="card tablet-50" style="width: 96%;">
					<div  style="width:100%; height: 115px;">
						<div class="banner productblock" style="
		          position: absolute;
		          top: 10px;
		          left: 10px;
		          font-size: 23px;
		          font-weight: bold;
		          color: #888888;
		          ">职位详情</div>
						<div style="
			        position: absolute;
			        top: 50px;
			        left: 20px;
			        color: #999999;
			        ">(50字以内)只要美女
		        
			       </div>
					</div>
				</div>
			</div>
			
			<div>
				<div class="card tablet-50" style="width: 96%;">
					<div  style="width:100%; height: 115px;">
						<div class="banner productblock" style="
		          position: absolute;
		          top: 10px;
		          left: 10px;
		          font-size: 23px;
		          font-weight: bold;
		          color: #888888;
		          ">性别要求</div>
						<div style="
			        position: absolute;
			        top: 50px;
			        left: 20px;
			        color: #999999;
			        ">男</div>
			        <div style="
			        position: absolute;
			        top: 50px;
			        left: 80px;
			        color: #999999;
			        ">女</div>
					</div>
				</div>
			</div>
			
			
			<div>
				<div class="card tablet-50" style="width: 96%;">
					<div  style="width:100%; height: 115px;">
						<div class="banner productblock" style="
		          position: absolute;
		          top: 10px;
		          left: 10px;
		          font-size: 23px;
		          font-weight: bold;
		          color: #888888;
		          ">工作地点</div>
						<div style="
			        position: absolute;
			        top: 50px;
			        left: 20px;
			        color: #999999;
			        ">大连市|沙河口区|杨树南街128号  环球会展中心
		        
			       </div>
					</div>
				</div>
			</div>
			
			
			
		</div>
		
		
		
	</div>
</template>

<script>
	export default {
    props: {
      value: {
        type: String
      }
    },
    data() {
      return {
      	value:"",
      };
    },
    methods: {
      back: function() {
        this.$emit("input", this.value);
        this.$emit("back");
      }
    }
  }
</script>

<style scoped="scoped">
	.card {margin-top: px; border-radius: 10px;}
	.navbar-fixed .page-content{
		padding-top: 7px;
	}
</style>