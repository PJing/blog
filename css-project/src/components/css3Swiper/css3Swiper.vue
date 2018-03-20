<template>
	<div class="swiper">
		<div class="swiper-container">
			<ul>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
			</ul>
		</div>
		<a>1</a>
		<a>2</a>
		<a>3</a>
		<a>4</a>
	</div>
</template>

<script>
	export default {
		name:"css3Swiper",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	ul{
		display: flex;
	}
	li{
		width: 300px;
		height: 300px;
		background-color: yellowgreen;
		transition: all 1s;
	}
	li:hover{
		transform: translateX(100px);
		background-color: burlywood;
	}
	li:target{
		transform: rotate(-50deg);
	}
	a{
		border-radius: 10px;
		width: 14px;
		height: 14px;
		text-align: center;
		line-height: 14px;
		display: inline-block;
		background-color: #FFA500;
		transition: all .5s;
		color: #fff;
	}
	a:hover{
		background-color: red;
	}
	a:active{
		background-color: green;
	}
	a:visited{
		background-color: blue;
	}
	
</style>