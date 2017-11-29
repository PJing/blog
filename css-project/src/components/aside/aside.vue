<template>
<el-menu
  default-active="1"
  class="el-menu-vertical-demo"
  @open="handleOpen"
  @close="handleClose"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item :index="$index" v-for="(item,$index) in navList" @click="changePath(item.url)">
 		<span slot="title">{{item.name}}</span>
  </el-menu-item>
</el-menu>
</template>
<script>
  export default {
  	name:'aside',
  	data(){
  		return {
  			navList:[
					{
						index:1,
						name:'水平垂直居中',
						url:'/alignCenter'
					},
					{
						index:2,
						name:'其他',
						url:'/'
					}
  			]
  		}
  	},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changePath(url){
      	this.$router.push({path:url})
      }
    }
  }
</script>