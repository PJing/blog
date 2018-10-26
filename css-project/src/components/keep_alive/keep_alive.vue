<template>
	<div>
		<h2>测试嵌套路由及缓存</h2>
		<keep-alive :include="keep.keep">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	import {mapState,mapActions} from "vuex"
	export default {
		name: 'keep_alive',
		data() {
			return {
				// include: window.sessionStorage.getItem('keep') || 'test'
			}
		},
		computed:{
			...mapState(['keep']),
		},
		methods:{
			...mapActions(['keeps'])
		},
		beforeRouteUpdate(to, from, next) {
			console.log(to.name)

			if (to.name === 'keepA') {
				this.keeps('')
			}
			next()
		},
	}
</script>
<style scoped="scoped">
	h2 {
		text-align: center;
	}
</style>
