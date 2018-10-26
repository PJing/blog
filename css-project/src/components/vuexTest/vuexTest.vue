<template>
	<div class="heading">
		<h3>测试vuex</h3>
		<p>{{newName}}</p>
		<input type="text" v-model='text' @keyup.enter="setText" />
		<button @click="changeNames">改变vuex username的值</button>
	</div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
	name:"vuexTest",
	data(){
		return {
			newName :"彭璟",
			text:"",
			textArr:[]
		}
	},
	computed:
//		 ...mapState(['tab','testVuex','userName'])
		 mapState({
		 	newUserName:state => state.userName
		 })
	,
	created(){
//		console.log(this.$store.state.testVuex.name)
//		console.log(this.testVuex.name)
//		console.log(this.userName)
		console.log(this.$store.state)
	},
	methods:{
		...mapActions(['changeUserName','changeName']),
		setText(){
//				console.log(this.text)
			
//			if(window.localStorage.getItem("arr")){
//				this.textArr = JSON.parse(window.localStorage.getItem("arr"));
//				console.log(this.textArr)
//			}
			if(this.text){
				console.log(this.textArr)
				this.textArr.unshift(this.text)
				 let arr = new Set(this.textArr);
				 this.textArr =[...arr]
				console.log(this.textArr)
				window.localStorage.setItem("arr",JSON.stringify(this.textArr))
			}
		},
		changeNames(){
			this.changeUserName(this.newName);
			console.log(this.userName,this.$store.state.userName)
			this.changeName("bbbbb")
		}
	}
}
	
</script>

<style scoped="scoped">
	
</style>