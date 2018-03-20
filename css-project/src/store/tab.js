export const tab = {
	state:{
		tab:""
	},
	mutations:{
		tab(state,data){
			state.tab = data
		}
	},
	actions:{
		tab:({commit},params) => {
			commit('tab',params)
		}
	}
}
