<template>
	<div>
		<h2>A</h2>
		<input type="text" v-model="name">
		<button type="primary" @click="changeName">改名</button>
		<button type="primary" @click="toKeepB">跳转路由</button>
	</div>
</template>

<script>
	export default {
		name:'keepA',
		data() {
			return {
				name: '彭璟',
				age: '20'
			}
		},
		
		created() {
		},
		methods: {
			changeName() {
				this.name = '张三'
			},
			toKeepB() {
				this.$router.push({
					name:'keepB',
					params: {
						name:this.name
					}
				})
			}
		},
		
	}
	
</script>

<style>
</style>