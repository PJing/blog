<template>
	<div class="index">
		<ul>
			<li v-for="item in movieList">
				<img :src="item.images.medium"/>
			</li>
		</ul>
	</div>
</template>

<script>
	import jsonp from "../../assets/js/jsonp"
	export default {
		name:"movieList",
		data(){
			return {
				name:"111",
				start:0,
				movieList:[]
			}
		},
		created(){
//			this.getMovie();
//			console.log(jsonp)
			this.testJsonp()
		},
		methods:{
			getMovie(){
				let url = "v2/movie/in_theaters"
				this.$http(url).then(res => {
					console.log(res.data)
				})
			},
			testJsonp(){
				let url = 'https://api.douban.com/v2/movie/in_theaters';
				let str = {
					'city':"武汉",
					'start':this.start
				}
				jsonp(url,str,(res) => {
					console.log(res)
					this.movieList.push(...res.subjects)
				})
			}
		}
	}
</script>

<style>
ul li{
	width: 50%;

	display: inline-block;
	font-size: 0;
}
ul li img{
	width: 100%;
}
</style>