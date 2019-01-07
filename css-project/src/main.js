// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/js/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'
import VueTouch from 'vue-touch'
import api from './service/service.json'

Vue.prototype.$http = axios;

Vue.prototype.HOST = '/api'
//axios.defaults.headers.post['Content-Type'] = 'application/json'

export const httpPost = (urlKey, params) => axios({
  url: api[urlKey],
  method: 'post',
  data: {
      ...params
  }
});

export const httpGet  = (urlKey,data) => axios({
  url: api[urlKey]+"/"+data,
  method: 'get',
});

Vue.prototype.$post = httpPost;
Vue.prototype.$get = httpGet;

// 国际化
import i18n from './assets/i18n/i18n'

import Vuex from "vuex"
Vue.use(Vuex);
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueTouch, {name: 'v-touch'})
//console.log(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n, // 国际化
  render: h => h(App)
}).$mount('#app')