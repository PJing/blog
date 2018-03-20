<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
	*{
		margin: 0;
		padding: 0;
	}
	html,body{
		max-width: 750px;
		margin: 0 auto;
		position: relative;
	}
</style>
