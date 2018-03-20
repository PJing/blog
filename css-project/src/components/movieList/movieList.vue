<template>
	<div class="index">
		<mt-navbar v-model="selected">
			<mt-tabitem v-for="(item,index) in navList" :id="index">{{item}}</mt-tabitem>
		</mt-navbar>
		<mt-tab-container v-model="selected" :swipeable="true">
  			<mt-tab-container-item :id="0">
  				<ul>
					<li v-for="item in movieList">
						<img :src="item.images.medium"/>
					</li>
				</ul>
  			</mt-tab-container-item>
  			<mt-tab-container-item :id="1">
  				<p>111</p>
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
				navList:['正在热映','即将上映'],
				selected:0
			}
		},
		created(){
			this.testJsonp();
			this.getList();
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
				})
			},
			getList(){
				let url = 'theaters';
				let str = {
					'city':"武汉",
					'start':this.start
				}
				this.$post(url,str).then(res =>{
					console.log("新电影",res)
				})
			}
		}
	}
</script>

<style scoped>
ul li{
	width: 50%;

	display: inline-block;
	font-size: 0;
}
ul li img{
	width: 100%;
}
</style>