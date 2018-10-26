<template>
	<div>
		<h2>B</h2>
		<input type="text" v-model="params">
		<button type="primary" @click="toKeepC">去c页面</button>
	</div>
</template>

<script>
	export default {
		name: 'keepB',
		data() {
			return {
				params: ''
			}
		},
		created() {
			this.params = this.$route.params.name
			this.$store.state.keep.keep = 'keepB'
		},
		methods: {
			toKeepC() {
				this.$router.push('keepC')
			}
		},
	}
</script>

<style>
</style>