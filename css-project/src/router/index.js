import Vue from 'vue'
import Router from 'vue-router'
//import home from '@/components/home'
import movieList from '@/components/movieList/movieList'
import qrcanvas from '@/components/qrcanvas/qrcanvas'

Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'home',
//    component: home,
//  },
    {
    	path: '/',
      name: 'movieList',
      component: movieList,
    },
    {
    	path: '/qrcanvas',
      name: 'qrcanvas',
      component: qrcanvas,
    }
  ]
})
