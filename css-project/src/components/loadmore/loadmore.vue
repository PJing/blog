<template>
	<div class="box">
		<loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" bottomPullText="上拉加载..." :auto-fill="allLoaded">
			<p v-for="item in list">{{item}}</p>
		</loadmore>
	</div>
</template>

<script>
	import { Loadmore } from 'mint-ui';
	export default {
		name:"box",
		data(){
			return {
				list:[1,2,3,4,5],
				allLoaded:false
			}
		},
		components:{
			Loadmore
		},
		methods:{
			setData(){
				this.list.push(111);
				console.log(111)
			},
			loadBottom() {
			  this.setData()
//			  this.allLoaded = true;// if all data are loaded
			  this.$refs.loadmore.onBottomLoaded();
			}
		},
	}
	
</script>

<style>
	.box{
		height: 300px;
		overflow: auto;
		    max-width: 750px;
	}
	p{
		text-align: center;
		border-bottom: 1px solid #DEB887;
		height: 50px;
	}
</style>