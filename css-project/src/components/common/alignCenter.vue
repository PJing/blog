<template>
	<div class="content">
		<div class="main">
			<h1>水平垂直居中</h1>
			<p>水平垂直居中</p>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	.content{
		display: flex;
		height: calc(100vh - 100px);
		margin: 0;
	}
	.main{
		background-color: yellowgreen;
		margin: auto;
		padding:20px;
		/*下面的代码会让里面的元素也水平垂直居中*/
		display: flex;
		align-items: center;
		justify-content: content;
		width: 220px;
		height: 200px;
	}
</style>