<template>
	<el-menu
	  :default-active="activeIndex"
	  class="el-menu-demo"
	  mode="horizontal"
	  background-color="#545c64"
	  text-color="#fff"
	  active-text-color="#ffd04b">
	  <el-menu-item :index="item.index" v-for="item in menu">{{item.menu}}</el-menu-item>
	</el-menu>
</template>

<script>
	 export default {
	    data() {
	      return {
	        activeIndex: '1',
	       	menu:[
	       		{	
	       			index:"1",
	       			menu:'导航1'
	       		},
	       		{
	       			index:"2",
	       			menu:'导航2'
	       		}
	       	]
	      };
	    },
	    methods: {
	      
	    }
	  }
</script>

<style scoped>
	
</style>