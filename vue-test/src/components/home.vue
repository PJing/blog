<template>
	<div>
		我是首页aaa
		<button class="btn" @click="tomain">{{name}}</button>
		<selects :list="list" @change="changeItem"></selects>
		<span>当前选中的人为：{{currentName}}</span><hr />
		<button class='btn' @click="testVuex" >测试vuex</button>
	</div>
</template>

<script>
	import selects from "./navbar"
	import { mapActions } from 'vuex';
//	console.log(mapActions)
	export default{
		data(){
			return {
				name:"我是按钮",
				list:[
					{name:"赵"},
					{name:"钱"},
					{name:"孙"},
					{name:"李"}
				],
				currentName:""
			}
		},
		methods:{
			...mapActions([
				'token',
			]),
			testVuex(){
				this.token(123)
			},
			tomain:function(){
				this.$router.push({path:"/second"});
			},
			changeItem(val){
				this.currentName = val
			},
			
		},
		components:{
			selects
		}
	}
</script>

<style>
	.btn{
		width: 100px;
		height: 30px;
		border: 1px solid #ccc;
		background-color: #fff;
		border-radius: 3px;
		cursor: pointer;
		outline: none;
	}
	.btn:hover{
		opacity: .5;
	}
</style>