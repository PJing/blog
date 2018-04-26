// pages/nav/nav.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    curIndex:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    navList: [
      {
        text: "地图",
        icon:"../../image/dingwei2.png"
      },
      {
        text: "周边",
        icon: "../../image/dingwei3.png"
      },
      {
        text: "路线",
        icon: "../../image/dingwei4.png"
      }
    ],
    url:[
      "../../pages/first/first",
      "../../pages/second/second",
      "../../pages/third/third",      
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tab:function(ev){
      console.log(ev);
      this.setData({
        curIndex: ev.currentTarget.dataset.index
      })
      wx.navigateTo({
        url: this.data.url[this.data.curIndex],
      })
    }
  }
})
