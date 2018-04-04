<template>
	<div>
		<input ref="file" type="file" name="" id="" value="" style="display: none;" @change="getFile" />
		<el-button @click="clickInput" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
		<img ref="oImg" src=""/>
	</div>
</template>

<script>
	import {} from 'element-ui'
	export default {
		name:"imgUpload",
		data(){
			return {
				
			}
		},
		methods:{
			clickInput(){
				console.log(this.$refs.file)
				this.$refs.file.click();
			},
			getFile(){
				let _this = this;
				let file = this.$refs.file.files[0]
				console.log(file);	
				
			 	var reader = new FileReader();  
          
		        // 将文件读取为DataUrl  
		        reader.readAsDataURL(file);  
		        reader.onload = function(event) {  
	            _this.$refs.oImg.src = this.result;  
	        }
			}
		}
		
	}
</script>

<style>
</style>