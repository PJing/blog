<template>
	<el-container>
		<el-header>
			<head-container></head-container>
		</el-header>
		<el-container>
		  <el-aside width="200px">
		  	<aside-container></aside-container>
		  </el-aside>
		  <el-main>
		  	<router-view></router-view>
		  </el-main>
		</el-container>
	</el-container>
</template>

<script>
	import headContainer from './head/head'
	import asideContainer from './aside/aside'
	export default {
		name: 'home',
		data(){
			return {
				Header:'导航',
				Main:'主题'
			}
		},
		components:{
			headContainer,
			asideContainer
		}
	}
</script>
<style scoped>
  .el-header, .el-footer {
    color: #333;
    line-height: 60px;
    padding: 0;
  }
</style>

