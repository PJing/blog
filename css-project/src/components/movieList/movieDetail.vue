<template>
	<div class="movieDetail">
		
	</div>
</template>

<script>
	export default {
		name:"movieDetail",
		data(){
			return {
				
			}
		},
		created(){
			this.getDetail();

		},
		methods:{
			getDetail(){
				console.log("id",this.$route.query)
			}
		}
	}
</script>

<style>
</style>