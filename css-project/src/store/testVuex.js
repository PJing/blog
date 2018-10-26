export const testVuex = {
	state:"",
	mutations:{
		changeName(state,data){
			state = data
		}
	},
	actions:{
		changeName({commit},params){
			commit("changeName",params)
		}
	}
}