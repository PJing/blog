Component({
  properties:{
    parentData:{
      type:String,
      value:"还未传入数据"
    }
  },
  data:{
    newList:[1,2,3,4,5,6],
    list:[1,2,3]
  },
  created(){
    this.getMap();
  },
  methods:{
    appendList(){
      var ls = this.data.newList;
      ls.push(1)
      this.setData({
        newList: ls
      })
      console.log(this.data.newList)
    },
    getMap(){

    }
  }
})