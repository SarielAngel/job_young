<template>
	<div>
		<div class="views pageview">
		  	<div class="view view-main" data-page="productlist">
		    	<div class="pages">
					<div data-page="productlist" class="page navbar-fixed page-on-center">
					  	<div class="navbar">
					    	<div class="navbar-inner">
						      	<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back" @click="close"></i></a></div>
						      	<div class="center">评价</div>
						        <div class="right"><a href="#" class="open-panel link icon-only"><span @click="eval(selectValue)">确认</span></a></div>
					    	</div>
					  	</div>
					  	<div class="page-content hide-bars-on-scroll">
					    	<div class="prductlist  content-block">
					    		<input type="button" value="测试" @click="test"/>
					    		<mt-popup
								  v-model="popupVisible"
								  popup-transition="popup-fade"
								  position="bottom" class="mint-popup">
								  	<form id="score_form">
										<label style="font-size: 20px;height: 40px;">评价：</label>
									    <div class="star_evaluate">
									        <input type="radio" id="scoreId_1" class="score score_1" name="score" @click="point(1)"/>
									        <label for="scoreId_1" class="star star_1"></label>
									        <input type="radio" id="scoreId_2" class="score score_2" name="score" @click="point(2)"/>
									        <label for="scoreId_2" class="star star_2"></label>
									        <input type="radio" id="scoreId_3" class="score score_3" name="score" @click="point(3)"/>
									        <label for="scoreId_3" class="star star_3"></label>
									        <input type="radio" id="scoreId_4" class="score score_4" name="score" @click="point(4)"/>
									        <label for="scoreId_4" class="star star_4"></label>
									        <input type="radio" id="scoreId_5" class="score score_5" name="score" @click="point(5)"/>
									        <label for="scoreId_5" class="star star_5"></label>
									    </div>
									    <input type="text" style="border:none;" readonly v-model="selectValue"/>
									</form>
								</mt-popup>
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
				evalvalue: {
					label: "",
					value: ""
				},
				popupVisible:false,
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
        	test:function() {
        		this.popupVisible = true;
        	},
        	point:function(abc) {
//      		console.log(abc);
        		this.selectValue = abc;
        		
        	},
            eval:function(selectValue) {
//          	console.log(this.selectValue);
            	this.evalvalue.label = this.selectValue;
            	this.evalvalue.value = this.selectValue;
            	this.$emit('input',this.evalvalue);
            },
            close:function() {
            	this.$emit("close");
            },
        },
    }    
</script>

<style>
	/*弹出框样式*/
	.mint-popup {
    top: 70%;
    bottom: 0;
   	width: 100%;
	}
	
    /*去掉标签默认样式*/
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    input {
        margin: 0;
    }

    /*初始化样式*/
    .star_evaluate {
        position: relative;
        width: 200px;
        height: 40px;
        background: url("/static/img/icon-star-default.png") repeat-x;
        background-size: 40px 40px;
        overflow: hidden;
    }

    .star,.score{
        display: block;
        height: 40px;
        width: 40px;
        position: absolute;
    }
    .star{
        z-index: 2;
    }
    .score{
        opacity: 0;
    }

    .star_1, .score_1 {
        left: 0;
    }

    .star_2, .score_2 {
        left: 40px;
    }

    .star_3, .score_3 {
        left: 80px;
    }

    .star_4, .score_4 {
        left: 120px;
    }

    .star_5, .score_5 {
        left: 160px;
    }

    /*鼠标悬浮*/
    .star:active {
        cursor: pointer;
        background: url("/static/img/icon-star-active.png") repeat-x;
        background-size: 40px 40px;
        left: 0;
        z-index: 1;
    }

    .star_1:active {
        width: 40px;
    }

    .star_2:active {
        width: 80px;
    }

    .star_3:active {
        width: 120px;
    }

    .star_4:active {
        width: 160px;
    }

    .star_5:active {
        width: 200px;
    }

    /*选中之后*/
    .score:checked + .star {
        background: url("/static/img/icon-star-active.png") repeat-x;
        background-size: 40px 40px;
        left: 0;
    }

    .score_1:checked + .star_1 {
        width: 40px;
    }

    .score_2:checked + .star_2 {
        width: 80px;
    }

    .score_3:checked + .star_3 {
        width: 120px;
    }

    .score_4:checked + .star_4 {
        width: 160px;
    }

    .score_5:checked + .star_5 {
        width: 200px;
    }
</style>