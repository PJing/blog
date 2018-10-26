import Vue from "Vue"
import Vuex from "vuex"
import { tab } from '../store/tab'
import { testVuex } from '../store/testVuex'
import { userName } from '../store/userName'
import { keep } from '../store/keep'
Vue.use(Vuex)




export default new Vuex.Store({
	modules:{
		tab,
		testVuex,
		userName,
		keep
	}
})
