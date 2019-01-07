<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  provide() {
	return {
		reload: this.reload
	}
  },
  data() {
	  return {
		  isRouterAlive: true
	  }
  },
  methods: {
  	reload() {
  		this.isRouterAlive = false
		this.$nextTick(() => {
			this.isRouterAlive = true
		})
  	}
  },
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
