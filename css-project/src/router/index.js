import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import hello from '@/components/HelloWorld'
import alignCenter from '@/components/common/alignCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[{
	    	path:'/alignCenter',
	    	name:'alignCenter',
	    	component: alignCenter
	    }]
    },
    {
    	path: '/hello',
    	name: 'hello',
    	component: hello
    }
  ]
})
