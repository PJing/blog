<template>
	<div class="container">
		 <button @click="show = !show">
		    Toggle
		  </button>
		<!--<transition name="bbb" mode="out-in">
			<div class="box" v-if="show">
				<img  src="../../../build/logo.png"/>
			</div>
		</transition>-->
		<!--<transition name="ccc">
			<div class="box" v-show="!show">
				<img  @click="show = !show" src="../../assets/image/logo.png"/>
			</div>
		</transition>-->
		<!--<transition name="ddd">
			<div v-show="show">
				<img  src="../../../build/logo.png"/>
			</div>
		</transition>-->
		<!--<transition name="eee" appear>
			<div v-show="show">
				<img  src="../../../build/logo.png"/>
			</div>
		</transition>-->
		<transition name="ddd" appear mode="out-in">
			<div v-if="show" key="a">
				<img  src="../../../build/logo.png"/>
			</div>
			<div v-else key="b">
				<img src="../../assets/image/logo.png"/>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name : "transitions",
		data(){
			return {
				show:true
			}
		}
	}
</script>

<style scoped>
/*.box{
	position: absolute;
	left: 20px;
	top: 20px;
}*/
.bbb-enter-active, .bbb-leave-active {
  transition: all .5s ease;
}
.bbb-enter, .bbb-leave-to  {
  opacity: 0;
  margin-left: 100px;
}
.bbb-enter-to,.bbb-leave{
	opacity: 1;
	margin-left: 0px;
}
.ccc-enter{
	opacity: 1;
	margin-left:200px;
}
.ccc-enter-active{
	transition: all 2s ease;
}
.ccc-enter-to{
	opacity: 1;
	margin-left: 0px;
}
.ddd-enter{
	margin-top: 200px;
}
.ddd-enter-active{
	transition:all 1s;
}
.ddd-enter-to{
	margin-top: 0;
}
.ddd-leave{
	margin-left: 0px;
	opacity: 1;
}
.ddd-leave-active{
	transition: all 1s;
}
.ddd-leave-to{
	margin-left: 200px;
	opacity: 0;
}
.eee-enter{
	margin-left: 100px;
}
.eee-enter-to{
	margin-left: 0px;
}
.eee-enter-active{
	transition: all 1s;
}
</style>