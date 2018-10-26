export const userName = {
	state:{
		name:123
	},
	mutations:{
		changeUserName(state,name){
			console.log("----vuex里的state-------",state,name)
			state.name = name
		}
	},
	actions:{
		changeUserName({commit},data){
			commit("changeUserName",data)
			console.log("vuex里的data",data)
		}
	},
	getters:{
		changeUserName:state => state
	}
}
