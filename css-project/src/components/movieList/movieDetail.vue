<template>
	<div class="movieDetail">
		<mt-header class="pj-heading" fixed :title="titleName">
			<mt-button icon="back" slot="left"></mt-button>
		</mt-header>
		<div class="heading">
			<!--<img v-if="!detail.images" src="../../assets/image/logo.png" alt="" />-->
			<img :src="detail.images.medium" alt="" />
		</div>
		<div class="detail">
			<div class="right-fixed">
				<p>豆瓣评分</p>
				<p class="scure">{{detail.rating.average}}</p>
				<el-rate class="rate"
				  v-model="detail.rating.average/2"
				  disabled
				  text-color="#ff9900">
				</el-rate>
				<p>{{detail.ratings_count}}人</p>
			</div>
			<div class="info">
				<h3>{{detail.title}}</h3>
				<p>原名：{{detail.original_title}}</p>
				<!--<p>上映时间：</p>-->
				<!--<p>片长：分钟</p>-->
			</div>
		</div>
	</div>
</template>

<script>
	import { Header,Button } from 'mint-ui';
	export default {
		name:"movieDetail",
		data(){
			return {
				titleName:'电影',
				id:'',
				detail:{
					rating:{
						average:""
					}
				}
			}
		},
		components:{
			"mtHeader":Header,
			"mtButton":Button
		},
		created(){
			this.id = this.$route.query.id;
			console.log(this.id)
			this.getDetail();
		},
		methods:{
			getDetail(){
				let url = "subject";
				this.$get(url,this.id).then(res => {
					console.log("详情",res.data);
					this.detail = res.data;
				})
				this.$get(url,this.id+'/photos').then(res => {
					console.log("剧照",res.data);
//					this.detail = res.data;
				})
//				this.$http.get("/serch/app").then(res => {
//					console.log("new",res.data)
//				})
			}
		}
	}
</script>

<style>
	.movieDetail{
		/*padding-top: 40px;*/
	}
	.pj-heading{
		background-color: transparent;
	}
	.heading{
		height: 375px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ccc;
	}
	.heading img{
		display: block;
		width: 200px;
	}
	.detail{
		padding: 20px;
		position: relative;
	}
	.info{
		padding-right: 80px;
	}
	.right-fixed{
		position: absolute;
		right: 20px;
		top: 20px;
		box-shadow: 0 0 10px #ccc;
		padding: 10px 15px;
		text-align: center;;
	}
	h3{
		font-size: 14px;
		font-weight: bold;
	}
	.info p{
		color: #8c8d8f;
	}
</style>