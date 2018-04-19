import Vue from 'vue'
import Router from 'vue-router'
//import home from '@/components/home'
import movieList from '@/components/movieList/movieList'
import movieDetail from '@/components/movieList/movieDetail'
import qrcanvas from '@/components/qrcanvas/qrcanvas'
import notFound from '@/components/notFound/notFound'
import transition from '@/components/transition/transition'
import newSwiper from '@/components/newSwiper/newSwiper'
import my from '@/components/my/my'
import css3Swiper from '@/components/css3Swiper/css3Swiper'
import imgUpload from '@/components/imgUpload/imgUpload'
import loadmore from '@/components/loadmore/loadmore'

Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'home',
//    component: home,
//  },
//当页面未找到时
		
    {
    	path: '/',
      name: 'movieList',
      component: movieList,
      meta:{
      	keepAlive:true
      }
    },
    {
    	path: '/qrcanvas',
      name: 'qrcanvas',
      component: qrcanvas,
    },
    {
			path:'/notFound',
			name:'notFound',
			component:notFound,
		},
		{
			path:'/transition',
			name:'transition',
			component:transition
		},
		{
			path:'/newSwiper',
			name:'newSwiper',
			component:newSwiper
		},
		{
			path:'/my',
			name:'my',
			component:my
		},
		{
			path:'/css3Swiper',
			name:'css3Swiper',
			component:css3Swiper
		},
		{
			path:'/imgUpload',
			name:'imgUpload',
			component:imgUpload
		},
		{
			path:'/movieDetail',
			name:'movieDetail',
			component:movieDetail
		},
		{
			
			path:'/loadmore',
			name:'loadmore',
			component:loadmore
		},
		{
			path:'*',
			redirect:"notFound",
		}
  ]
})
