<template>
	<div class="button">
		<span class="disable" @click="tohome">{{btname}}</span>
	</div>
</template>

<script>
	export default {
		name:'fullbtn',
		props:{
			btname:{
				type:String
			}
		},
		methods:{
			tohome(){
				this.$emit("back")
			}
		}
	}
</script>

<style>
	.button span{
		border:1px solid gainsboro;
		border-radius: 4px;
		padding: 5px;
		display:inline-block;
		cursor: pointer;
		background-color: #fff;
		color: #000;
		font-size: 14px;
	}
</style>