export const keep = {
	state:{
		keep:''
	},
	mutations:{
		keep(state,data){
			state.keep = data
		}
	},
	actions:{
		keeps({commit},data){
			commit('keep',data)
		}
	},
	getters:{
		keep:state => state
	}
}