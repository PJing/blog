<template>
	<div class="index">
		<mt-navbar v-model="selected" :fixed="true">
			<mt-tabitem v-for="(item,index) in navList" :id="index">{{item}}</mt-tabitem>
		</mt-navbar>
		<mt-tab-container v-model="selected"  class="container">
  			<mt-tab-container-item class="item" :id="0" v-loading="loading">
  				<ul>
					<li v-for="item in movieList" @click="toDetail(item.id)">
						<img :src="item.images.medium"/>
						<div class="media">
							<h3>{{item.title}}</h3>
							<el-rate class="rate"
							  v-model="item.rating.average/2"
							  disabled
							  text-color="#ff9900"
							  >
							</el-rate>
							<span class="rate">{{item.rating.average}}</span>
							<p>导演：<span v-for="direct in item.directors">{{direct.name}} </span></p>
							<p>主演：<span v-for="act in item.casts">{{act.name}} </span></p>
						</div>
					</li>
				</ul>
  			</mt-tab-container-item>
  			<mt-tab-container-item class="item" :id="1" v-loading="loading2">
  				<ul>
					<li v-for="item in newMovieList">
						<img :src="item.images.medium"/>
						<div class="media">
							<h3>{{item.title}}</h3>
							<p>上映时间：{{item.pubdates}}</p>
							<p>导演：<span v-for="direct in item.directors">{{direct.name}} </span></p>
							<p>主演：<span v-for="act in item.casts">{{act.name}} </span></p>
						</div>
					</li>
				</ul>
  			</mt-tab-container-item>
  		</mt-tab-container>
		
		<!--<tab-bar></tab-bar>-->
		
	</div>
</template>

<script>
	import jsonp from "../../assets/js/jsonp"
	import tabBar from "../../assets/components/tabBar"
	import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
	export default {
		name:"movieList",
		data(){
			return {
				name:"111",
				start:0,
				movieList:[],
				newMovieList:[],
				navList:['正在热映','即将上映'],
				selected:0,
				getComing:true,
				loading:true,
				loading2:false,
			}
		},
		created(){
			this.testJsonp();
//			this.theaters();
		},
		components:{
			tabBar:tabBar,
			"mt-navbar":Navbar,
			"mt-tabitem":TabItem,
			"mtTabContainer":TabContainer,
			"mtTabContainerItem":TabContainerItem
		},
		methods:{
			testJsonp(){
				let url = 'https://api.douban.com/v2/movie/in_theaters';
				let str = {
					'city':"武汉",
					'start':this.start
				}
				jsonp(url,str,(res) => {
					console.log(res)
					this.movieList.push(...res.subjects)
					this.loading = false;
				})
			},
			theaters(){
				let url = 'theaters';
				let str = {
					'city':"武汉",
					'start':this.start
				}
				this.$post(url,str).then(res =>{
					console.log("新电影",res)
					this.movieList.push(...res.data.subjects)
//					this.$loading().close();
					this.loading = false;
				})
			},
			coming(){
				this.loading2 = true;
				let url = "coming_soon";
				let str = {
					'city':"武汉",
					'start':this.start
				}
				this.$post(url,str).then(res =>{
					console.log("即将上映",res)
					this.newMovieList.push(...res.data.subjects);
					this.loading2 = false;
				})
			},
			toDetail(id){
				this.$router.push({path:"movieDetail",query:{id:id}})
			}
			
		},
		watch:{
			selected(newVal,oldVal){
				if(this.getComing){
					this.getComing = false;
					this.coming();
				}
			}
		}
	}
</script>

<style scoped>
.container{
	margin-top: 47px;
	background-color: #fbfbfb;
	min-height: calc(100vh - 47px);
}
.item{
	min-height: calc(100vh - 47px);
}
ul li{
	font-size: 0;
	border-bottom:1px solid #ccc;
	padding: 15px;
	position: relative;
}
ul li img{
	width: 80px;
	position: absolute;
	left: 15px;
	top: 15px;
}
.media {
	padding-left: 95px;
	min-height: 120px;
	margin-right: 60px;
}
h3{
	font-size: 14px;
	font-weight: bold;
}
p{
	font-size: 12px;
}
.rate{
	font-size: 12px;
	display: inline-block;
	line-height: 18px;
}
</style>