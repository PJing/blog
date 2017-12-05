<template>
	<div>
		<p @click="pickerShow">点击{{address}}</p>
		<div class="picker-box" v-show="isShow">
			<Picker style="border:1px solid #42B983" :slots="slots" @change="onValuesChange" showToolbar defaultIndex="0,0" >
				<slot><span class="toolbarname" @click="pickerShow">确定</span></slot>
			</Picker>
		</div>
	</div>
</template>

<script>
	import {Picker} from "mint-ui"
	import { mapActions } from 'vuex'
	export default {
		data(){
			return{
				name:111,
				slots: [
			        {
			          flex: 1,
			          values: ['武汉', '宜昌'],
			          name:"12"
			        }, 
			        {
			          flex: 1,
			          values:['江夏'],
			        }
      			],
      			city:{
      				'武汉':['江夏','洪山'],
      				'宜昌':['宜都市','枝江市']
      			},
      			isShow:false,
      			address:"请选择",
			}
		},
		components:{
			Picker
		},
		methods:{
			...mapActions([
				"newnames"
			]),
			onValuesChange(picker, values) {
//		      console.log(picker,values)
		      this.slots[1].values=this.city[values[0]],
		      this.address = values.join("")
//		      this.setVuex()
		   },
		   pickerShow(){
		   	this.isShow = !this.isShow;
		   },
		},
		created(){
			console.log(this.$store)
			console.log(mapActions)
		}
	}
</script>

<style>
	.picker{
		position: fixed;
		bottom: 0;
		width: 80vw;
		background-color: #fff;
	}
	.picker-box{
		/*display: none;*/
		width: 80vw;
		height: 80vh;
		background-color: rgba(0,0,0,.5);
	}
	.toolbarname{
		float: right;
		line-height: 40px;
		padding: 0 10px;
	}
</style>