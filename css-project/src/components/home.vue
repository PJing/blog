<template>
	<div class="main">
		{{Header}}
	</div>

</template>

<script>
	export default {
		name: 'home',
		data(){
			return {
				Header:'导航',
				Main:'主题'
			}
		},
		
	}
</script>
<style scoped>
.main{
	font-size: 50px;
	font-weight: bold;
	color: #42B983;
}
</style>

