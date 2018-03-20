<template>
	<div>
		<span>正在开发中</span>
		<span id="">
			{{name}}
		</span>
	</div>
</template>

<script>
	import  {topinyin}  from './pinyin.js'
	export default {
		name:'my',
		data(){
			return {
				name:"123123",
				arr: ['中华','人民','共和国','abc']
			}
		},
		created(){
			console.log(topinyin("中"))
		  	this.arr.sort((item1, item2) => {
			    return item1.localeCompare(item2);
			});

		},
		methods:{
			
		}
	}
</script>

<style>
</style>