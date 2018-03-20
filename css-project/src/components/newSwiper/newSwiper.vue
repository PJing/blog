<template>
	<div id="swiper">
		<v-touch @swipeleft="onSwipeLeft()" @swiperight="swipeRight" class="box">
			<div class="swiper" ref="tab">
				<a href="https://www.baidu.com"><img src="../../../build/logo.png"/></a>
				<img src="../../../build/logo.png"/>
				<img src="../../../build/logo.png"/>
				<img src="../../../build/logo.png"/>
			</div>
		</v-touch>
		<v-touch @swipeleft="swipe('left')">
			<div class="container" ref="outbox">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</v-touch>
	</div>
</template>

<script>
	export default {
		name:"newSwiper",
		data(){
			return {
				curLeft:0,
				curIndex:0
			}
		},
		methods:{
			onSwipeLeft(){
				console.log("左",this.$refs.tab)
				this.curLeft -= 50;
				this.$refs.tab.style.webkitTransform = "translate("+this.curLeft +"px"
			},
			swipeRight(){
				console.log("右");
				this.curLeft += 50;
				this.$refs.tab.style.webkitTransform = "translate("+this.curLeft +"px"
			},
			swipe(type){
				let domArr = this.$refs.outbox.children;
//				for(let i = 0; i<domArr.length; i++){
//					domArr[i].className =''
//				}
				if(type == "left"){
//					if(this.curIndex==0){
						this.curIndex++;
						domArr[this.curIndex-1].className = 'next';
						domArr[this.curIndex].className = 'prev';
						domArr[this.curIndex+1].className = 'active';
//					}
					
				}
			}
		},
		mounted(){
			this.$refs.outbox.children[this.curIndex].className = 'prev';
			this.$refs.outbox.children[this.curIndex+1].className = 'active';
			this.$refs.outbox.children[this.curIndex+2].className = 'next';
		}
	}
</script>

<style scoped>
	img{
		width: 10%;
	}
	.box{
		width: 50%;
		margin: 20px auto;
		overflow: hidden;
		border: 1px solid #ccc;
	}
	.swiper{
		width: 100%;
		transition: all .3s linear;
	}
	.container{
		position: relative;
		width: 100%;
		border: 1px solid #ccc;
		height: 300px;
	}
	.container div{
		width: 300px;
		height: 300px;
		background-color: green;
		position: absolute;
		transition: all 1s linear;
	}
	.container .prev{
		transform: scale(.6);
		left: 100px;
	}
	.container .next{
		transform: scale(.6);
		right: 100px;
	}
	.container .active{
		transform: scale(1) translateX(-50%);
		left: 50%;
	}
</style>