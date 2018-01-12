<template>
	<div class="container" >
		<img v-show="false" ref="img" src="../../assets/loginlogo.png"/>
		<div ref="qrcode">

		</div>
	</div>
</template>

<script>
	import qrcanvas from 'qrcanvas'
	
	export default {
		name:'qrcanvas',
		data(){
			return {
				
			}
		},
		mounted(){
			this.createCode()
		},
		methods:{
			createCode(){
				let $this= this;
				this.$refs.img.onload=function(){
				var canvas = qrcanvas({
				  data: 'https://stage.vpclub.cn/yingxiaobao/web/app#/old/oldbeforeBroadband?prev=940869452720955392',
				  cellSize:3,
				  correctLevel:"H",
				  typeNumber:12,
				  logo:{
				  	image:$this.$refs.img,
				  	clearEdges:2,
				  	margin:2
					
				  }
				});
//				console.log(this.$refs.qrcode)
				$this.$refs.qrcode.appendChild(canvas);
				}
				
			}
		}
	}
	
</script>

<style scoped>
.container{
	margin: 100px auto;
	text-align: center;
}
canvas{
	width: 200px;
	height: 200px;
}
</style>