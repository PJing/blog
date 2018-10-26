<template>
	<div class="outbox">
		<h3>图形验证码</h3>
		<div class="yxb_panel">
			<div class="yxb_bgimg" ref="img">
				<img :src="imgUrl[randomIndex]"/>
				<div class="white_box" :style="{left:randomLeft + 'px',top:randomTop + 'px'}"></div>
				<div class="img_slider_box" :style="{left:distance + 'px',top:randomTop + 'px'}">
					<img :style="{left:-randomLeft + 'px',top:-randomTop + 'px'}" :src="imgUrl[randomIndex]" alt="" />
				</div>
			</div>
		</div>
		<div class="yxb_control" >
			<div class="left_box" :style="{width:(distance + 2) + 'px'}"></div>
			<div class="slider" :class="{success:cur == 1,fail:cur == 2}" ref="slide" :style="{left:distance + 'px'}">
				<span v-if="cur == 0">→</span>
				<span v-if="cur == 1">√</span>
				<span v-if="cur == 2">×</span>
			</div>

			<div class="font">向右滑动滑块填充拼图</div>
		</div>
			<span @click="initData">刷新</span>
	</div>
</template>

<script>
export default {
	name:"pictureCode",
	data(){
		return {
			startLeft:0,
			distance:0, //移动距离

			randomLeft:"",
			randomTop:"",
			maxDistance:"",
			cur:0,
			imgUrl:[
				require("../../assets/image/yzm/yzm01.png"),
				require("../../assets/image/yzm/yzm01.png"),
				require("../../assets/image/yzm/yzm02.png"),
				require("../../assets/image/yzm/yzm03.png"),
				require("../../assets/image/yzm/yzm04.png"),
				require("../../assets/image/yzm/yzm05.png"),
				require("../../assets/image/yzm/yzm06.png"),
				require("../../assets/image/yzm/yzm07.png"),
				require("../../assets/image/yzm/yzm08.png"),
				require("../../assets/image/yzm/yzm09.png"),
			],
			randomIndex:""
		}
	},
	created(){
//		this.randomLeft = 100;
//		this.randomTop = 100;
//		this.randomIndex = parseInt(Math.random()*10)
	},
	mounted(){

		this.initData();
		
		let element = this.$refs.slide;
		// for mobile
	      element.addEventListener('touchstart', this.dragStartEvent);
	      element.addEventListener('touchmove', this.dragMoveEvent);
	      element.addEventListener('touchend', this.dragEndEvent);
	      // for pc
	      element.addEventListener('mousedown', this.dragStartEvent);
	      element.addEventListener('mousemove', this.dragMoveEvent);
	      element.addEventListener('mouseup', this.dragEndEvent);
	},
	methods:{
		initData(){
			this.randomIndex = parseInt(Math.random()*10)
			let slide = this.$refs.slide
			let img = this.$refs.img
			let slideWidth = slide.offsetWidth;
			let slideHeight = slide.offsetHeight;
			let imgWidth = img.offsetWidth;
			let imgHeight = img.offsetHeight;
			let maxTop = imgHeight - slideHeight;
			this.maxDistance = imgWidth - slideWidth;
			console.log(maxTop)
			//随机位置
			this.randomLeft = (Math.random()+0.1) * imgWidth
			if(this.randomLeft > this.maxDistance){
				this.randomLeft = this.maxDistance-30
			}
			this.randomTop = (Math.random()+0.1) * imgHeight;
			if(this.randomTop > maxTop){
				this.randomTop = maxTop-30
			}
			
			this.cur = 0;
			this.distance = 0
		},
		dragStartEvent(event){
			event.preventDefault ? event.preventDefault() : event.stopPropagation()
			console.log(event)
			var touch = event.changedTouches ? event.changedTouches[0] : event;
			this.startLeft = touch.pageX

		},
		dragMoveEvent(event){
			var touch = event.changedTouches ? event.changedTouches[0] : event;
			this.distance = touch.pageX - this.startLeft
			if(this.distance < 0){
				this.distance = 0
			}else if(this.distance > this.maxDistance){
				this.distance = this.maxDistance
			}			
		},
		dragEndEvent(event){
			event.preventDefault ? event.preventDefault() : event.stopPropagation()
			if(this.distance >= this.randomLeft-5 && this.distance <= this.randomLeft+5){

				this.regSuccess()
			}else{

				this.regFail()
			}

		},
		regSuccess(){
			this.cur = 1
			let _this = this
			setTimeout(() => {
				console.log("验证成功");
				_this.initData()
			},1000)
		},
		regFail(){
			this.cur = 2
			let _this = this
			setTimeout(() => {
				console.log("失败");
				_this.initData()			
			},1000)
		}
	},
}
</script>

<style scoped="scoped">
	.outbox{
		width: 100%;
		padding: 10px;
	}
	h3{
		font-size: 18px;
		text-align: center;
		line-height: 40px;
	}
	.yxb_panel{
		width: 100%;
		position: relative;
		width: 300px;
		
	}
	.yxb_bgimg img{
		width: 300px;
		height: 160px;
	}
	.img_slider_box{
		position: absolute;
		left: 0;
		top: 0;
		width: 40px;
		height: 40px;
		overflow: hidden;
		box-shadow: 2px 2px 10px #fff;
	}
	.img_slider_box img{
		position: absolute;
	}
	.white_box{
		width: 40px;
		height: 40px;
		background-color: #fff;
		position: absolute;
		opacity: .8;
		left: 0;
		top: 0;
		box-shadow: 1px 1px 10px #999 inset;
	}
	.yxb_control{
		border: 1px solid #ccc;
		line-height: 40px;
		width: 100%;
		border-radius: 4px;
		box-shadow: 1px 1px 10px  #ccc;
		position: relative;
	}
	.font{
		text-align: center;
	}
	.slider{
		position: absolute;
		left: 0;
		top: 0;
		width: 40px;
		height: 40px;
		text-align: center;
		border: 1px solid #ccc;
		border-radius: 4px;
		background-color: #fff;
		transition: background-color 1s ease .0s;
	}
	.left_box{
		height: 40px;
		width: 0px;
		position: absolute;
		left: 0;
		top:0;
	    background-color: #d1e9fe;
	    border: 1px solid #;
	}
	.success{
		background-color: #1991fa;
		color: #fff;
	}
	.fail{
		background-color: #f57a7a;
		color: #fff;
	}
</style>