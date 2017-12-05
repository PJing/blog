import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import hello from '@/components/HelloWorld'
import alignCenter from '@/components/common/alignCenter'
import city from '@/components/common/city'

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
	    },
	    {
	    	path:'/city',
	    	name:'city',
	    	component: city
	    }
      
      ]
    },
    {
    	path: '/hello',
    	name: 'hello',
    	component: hello
    }
  ]
})
