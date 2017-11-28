<template>
	<div class="main">
		我是第二个页面
		<fullbtn :btname="btname" @back="back"></fullbtn>
	</div>
</template>

<script>
	import fullbtn from "./third"
	export default{
		data(){
			return	{
				btname:"点击跳转到首页"
			}
		},
		methods:{
			back(){
				this.$router.push({path:'/'});
				console.log("。。。")
			}
		},
		components:{
			fullbtn
		}
		
	}
</script>

<style scoped>
	.main{
		background-color: yellowgreen;
		color: #fff;
		text-align: center;
		font-size: 20px;
		width: 100%;
		height: 200px;
	}
</style>