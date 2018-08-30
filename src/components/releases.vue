<template>
	<div>
		<!--主页信息-->
		<div class="views pageview" v-if="isShowA">
		  	<div class="view view-main" data-page="productlist">
		    	<div class="pages">
					<div data-page="productlist" class="page navbar-fixed page-on-center">
					  	<div class="navbar">
					    	<div class="navbar-inner">
						      	<div class="center">发布</div>
					    	</div>
					  	</div>
				  	<!--发布选项列表-->
				  	<div class="page-content hide-bars-on-scroll">
				    	<div class="prductlist  content-block">
				    		<div class="list-block inputs-list">
				    			<div class="item-content">
				            		<div class="item-inner">
				    					<div>
				    						<mt-cell title="公司名称：" value="大连爱尚教育">
				    						</mt-cell>
				    					</div>

				    					<div @click="job">
				    						<mt-cell title="职位类型：" is-link>
											  <span>{{jobType.label}}</span>
											</mt-cell>
				    					</div>

							    		<div @click="jobna">
							    			<mt-cell title="职位名称：" is-link>
							    				<span>{{jobName.label}}</span>
											</mt-cell>
							    		</div>

							    		<div @click="sal">
							    			<mt-cell title="薪资：" is-link>
							    				<span>{{salary.label}}</span>
											</mt-cell>
							    		</div>

							    		<div @click="pay">
							    			<mt-cell title="支付方式：" is-link>
							    				<span>{{payWay.label}}</span>
											</mt-cell>
							    		</div>

							    		<div @click="num">
							    			<mt-cell title="人数：" is-link>
							    				<span>{{numbers.label}}</span>
											</mt-cell>
							    		</div>

							    		<div @click="addr">
							    			<mt-cell title="工作地点：" is-link>
							    				<span>{{address.label}}</span>
											</mt-cell>
							    		</div>

										<div @click="sexy">
											<mt-cell title="性别：" is-link>
												<span >{{sex.label}}</span>
											</mt-cell>
										</div>

							    		<div  @click="time('1')">
							    			<mt-cell title="起始时间：" is-link>
												<span >{{begintime}}</span>
											</mt-cell>
										</div>

										<div @click="time('2')">
											<mt-cell title="结束时间：" is-link>
												<span >{{endtime}}</span>
											</mt-cell>
										</div>

							    		<div @click="detail(details)" >
							    			<mt-cell title="详细：" is-link>
												<span >{{details.label}}</span>
											</mt-cell>
							    		</div>

							    		<div class=" row no-gutter">
							    		<button class=" button  color2 col-100" style="background-color: #2196f3;">发布</button>
  										</div>
				            			<!--日期选择-->
				            			<mt-datetime-picker
				            				ref="picker"
								    		type="datetime"
								    		v-model="timeValue"
								    		@confirm="handleConfirm"
										    month-format="{value} 月"
								    		>
								  		</mt-datetime-picker>
								  		<!--日期选择-->
				            			<!--<mt-datetime-picker
				            				ref="picker"
								    		type="datetime"
								    		v-model="endValue"
								    		@confirm="handleConfirm"
										    month-format="{value} 月"
								    		>
								  		</mt-datetime-picker>-->
				    				</div>
				    			</div>
				    		</div>
				    	</div>
				    </div>
				    </div>
				</div>
			</div>
	  	</div>
	  	 <!--isShow A父级组件  B职位类型  C职位名称  D薪资  E支付方式   F人数  G工作地点  H性别  I详细-->
		<!--职位类型组件-->
		<jobtype v-if="isShowB" @close="jobClose" v-model="jobType" class="views pageview" ></jobtype>
		<!--职位名称-->
		<jobName v-if="isShowC" @close="jobnaClose" v-model="jobName" class="views pageview" ></jobName>
		<!--薪资名称-->
		<salary v-if="isShowD" @close="salClose" v-model="salary" class="views pageview" ></salary>
		<!--支付方式组件-->
		<payway  v-if="isShowE" @close="payClose" v-model="payWay" class="views pageview" ></payway>
		<!--人数组件-->
		<numbers  v-if="isShowF" @close="numClose" v-model="numbers" class="views pageview" ></numbers>
		<!--工作地点组件-->
		<addres  v-if="isShowG" @close="addrClose" v-model="address" class="views pageview" ></addres>
		<!--性别类型组件-->
		<sex v-if="isShowH" @close="sexClose" v-model="sex" class="views pageview" ></sex>
		<!--详情-->
		<det v-if="isShowI" @close="detailsClose" v-model="details" class="views pageview"></det>
	</div>
</template>

<script>
	import Jobtype from '@/components/common/jobtype.vue'
	import JobName from '@/components/common/jobName.vue'
	import Salary from '@/components/common/salary.vue'
	import Payway from '@/components/common/payway.vue'
	import Numbers from '@/components/common/numbers.vue'
	import Addres from '@/components/common/addres.vue'
	import Sex from '@/components/common/sex.vue'
	import Det from '@/components/common/det.vue'

	export default {
		data() {
			return {
// A父级组件  B职位类型  C职位名称  D薪资  E支付方式   F人数  G工作地点  H性别  I详细
				isShowA:true,
				isShowB:false,
				isShowC:false,
				isShowD:false,
				isShowE:false,
				isShowF:false,
				isShowG:false,
				isShowH:false,
				isShowI:false,
//				起始 结束时间初始化选择
//				beginValue:new Date(),
				timeValue:new Date(),
//				职位类型
				jobType: {
					label:'请选择类型',
					value:'0'
				},
//				职位名称
				jobName: {
					label:'请输入职位名称',
					value:''
				},
//				薪资
				salary: {
					label:'请输入薪资',
					value:''
				},
//				支付方式
				payWay: {
					label:'请选择支付方式',
					value:'0'
				},
//				人数
				numbers: {
					label:'请输入人数',
					value:''
				},
//				工作地点
				address: {
					label:'请输入工作地点',
					value:''
				},
//				性别
				sex: {
					label:'请选择性别',
					value:'0'
				},
//				起始时间
				begintime:'请选择起始时间',
//				结束时间
				endtime:'请选择结束时间',
//				详情
				details: {
					label:'请输入详情',
					value:''
				},
				nums: ''
			}
		},
		methods: {
//			时间选择打开
			openPicker: function() {

				this.$refs.picker.open();
			},
//			加载职位类型组件
			job:function() {
				this.isShowB = true;
				this.isShowA = false;
			},
//			关闭职位类型型组件
			jobClose: function() {
				this.isShowB = false;
				this.isShowA = true;
			},
//			加载职位名称组件
			jobna:function() {
				this.isShowC = true;
				this.isShowA = false;
			},
//			关闭职位名称组件
			jobnaClose: function() {
				this.isShowC = false;
				this.isShowA = true;
			},
//			加载薪资组件
			sal:function() {
				this.isShowD = true;
				this.isShowA = false;
			},
//			关闭薪资组件
			salClose: function() {
				this.isShowD = false;
				this.isShowA = true;
			},
//			加载支付方式组件
			pay:function() {
				this.isShowE = true;
				this.isShowA = false;
			},
//			关闭支付方式组件
			payClose: function() {
				this.isShowE = false;
				this.isShowA = true;
			},
//			加载人数组件
			num:function() {
				this.isShowF = true;
				this.isShowA = false;
			},
//			关闭人数组件
			numClose: function() {
				this.isShowF = false;
				this.isShowA = true;
			},
//			加载工作地点组件
			addr:function() {
				this.isShowG = true;
				this.isShowA = false;
			},
//			关闭工作地点组件
			addrClose: function() {
				this.isShowG = false;
				this.isShowA = true;
			},
//			加载性别组件
			sexy:function() {
				this.isShowH = true;
				this.isShowA = false;
			},
//			关闭性别组件
			sexClose: function() {
				this.isShowH = false;
				this.isShowA = true;
			},
//			加载启动时间组件
			time:function(num) {
        		this.openPicker();
        		this.nums = num;
        		console.log(this.timeValue);

//      		if(num === '1') {
//      			console.log('开始');
//      			this.$options.methods.handleConfirm('1');
//      		}
//      		if(num === '2') {
//      			console.log('结束');
//      			this.$options.methods.handleConfirm('2');
//      		}
			},
//			加载结束时间组件
//			end:function() {
//      		this.openPicker();
//			},
			handleConfirm:function() {
				console.log(this.timeValue);

				if(this.nums === '1') {
					console.log('开始1');
					console.log(this.timeValue);
					this.begintime = this.$timeFormat.timeFormat(this.timeValue);
				}
				if(this.nums === '2') {
					console.log('结束2');
        			this.endtime = this.$timeFormat.timeFormat(this.timeValue);
        		}
			},
//			加载详情组件
			detail: function(details) {
				this.details = details;
				this.isShowI = true;
				this.isShowA = false;
			},
//			关闭详情组件
			detailsClose: function() {
				this.isShowI = false;
				this.isShowA = true;
			},
		},
		components: {
			Jobtype,
			JobName,
			Salary,
			Payway,
			Numbers,
			Addres,
			Sex,
			Det,
		}
	}
</script>

<style>
	.a{
		color: #FF0000;
	}
	.b{
		font-family:"Open Sans";
	}
</style>
