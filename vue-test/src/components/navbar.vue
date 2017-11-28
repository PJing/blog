<template>
	 <div class="input-group">
      <div class="input-group-btn">
        <button type="button" class="btn btn-default" @click="drop" >{{current}} <span class="caret"></span></button>
        <ul class="dropdown-menu" :class="{show:slide}">
          <li v-for="item in list" @click="changeVal(item)" ><a href="#">{{item.name}}</a></li>
        </ul>
      </div><!-- /btn-group -->
      <input type="text" class="form-control" v-model="news" @input="changeVal(news)">
    </div><!-- /input-group -->
</template>

<script>
	export default {
		name:"select",
		data(){
			return {
				current:"",
				slide:false,
				news:""
			}
		},
		props:{
			list:{
				type:Array
			},
		},
		created(){
			this.current = this.list[0].name
		},
		methods:{
			drop(){
				this.slide = !this.slide
			},
			changeVal(item){
				if(item.name){
					this.current=item.name;
					this.drop()
					this.$emit("change",this.current)
				}else{
					this.new = item;
					this.$emit("change",this.new)
				}
			}
		}
	}
	
</script>

<style scoped>
	.show{
		display: block !important;	
	}
</style>