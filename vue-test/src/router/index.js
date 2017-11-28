import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home'
import second from '@/components/second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },{
    	path:'/second',
    	component:second
    }
  ]
})
