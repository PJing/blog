<template>
	<div id="index">
		{{q}}
	</div>
</template>

<script>
	export default {
		name:'movieList',
		data(){
			return {
				page:"index",
				key:'c95df6ee585ff415209ef9522d3509da',
				q:"千与千寻"
			}
		},
		created(){
			this.getMovieList();
		},
		methods:{
			getMovieList(){
				console.log(this.HOST)
				let addr = this.HOST + 'onebox/movie/video?key=c95df6ee585ff415209ef9522d3509da&q=' + this.q;
//				let addr = this.HOST + 'onebox/movie/video';
//				let str ={
//					"key":this.key,
//					"q":"千与千寻"
//				};
				this.$http.post(addr).then(res => {
					
					console.log(res);
				})
			}
		}
	}
</script>

<style>
</style>