<template>
	<mt-tabbar v-model="selected" fixed>
	  <mt-tab-item :id="item.name" v-for="(item,index) in tabList">
	    <img slot="icon" :src="item.icon">
	    {{item.name}}
	  </mt-tab-item>
	</mt-tabbar>
</template>

<script>
	import { Tabbar, TabItem } from 'mint-ui';
	import { mapActions } from 'vuex'
	export default {
		name :"tabBar",
		data(){
			return {
				tabList:[
					{
						name:"电影",
						icon:require("../image/logo.png")
					},
					{
						name:"音乐",
						icon:require("../image/logo.png")
					},
					{
						name:"我的",
						icon:require("../image/logo.png")
					}
				],
				selected:"电影",
			}
		},
		components:{
			"mtTabbar":Tabbar,
			"mtTabItem":TabItem
		},
		methods:{
			...mapActions([
				
			])
		},
		watch:{
			selected(val,oldval){
				
				switch(val){
					case "电影":
						console.log("电影");
						
						break;
					case "音乐":
						console.log("音乐");
						break;
					case "我的":
						console.log("我的");
						break;
				}
			}
		}
	}
</script>

<style scoped="scoped">
	/*img{
		width: 50px;
	}*/
</style>