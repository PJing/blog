<template>
	<div>
		<span>时间戳：</span>
		<span>{{times}}</span>
		<button type="primary" @click="refresh">点击刷新页面</button>
		<p>时间戳变动即代表页面刷新了</p>
		<hr>
		<h3>下面是笔记:</h3>
		<p>provide / inject 组合 方式</p>
		<p>首先，要修改下你的app.vue</p>
		<pre>export default {
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
}</pre>
		<p>然后在子组件里面用inject接收</p>
		<pre>inject: ['reload']
调用的时候直接this.reload()
		</pre>
		<p>文档地址<a target="_blank" href="https://blog.csdn.net/qq_16772725/article/details/80467492">https://blog.csdn.net/qq_16772725/article/details/80467492</a></p>
	</div>
</template>

<script>
	export default {
		name: 'reload',
		inject: ['reload'],
		data() {
			return {
				times: new Date().getTime(),
				text: ``
			};
		},
		methods: {
			refresh() {
				this.$router.push({
					path: 'reload'
				})
				this.reload()
			}
		},
		
	}
</script>

<style>

</style>
