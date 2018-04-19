//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    red:false,
    secondDeg:0,
    minDeg:0,
    hourDeg:0
  },
  changeName(){
    this.setData({motto:"你是煞笔",red:true})
    console.log(app)
    wx.navigateTo({
      url: '../logs/logs',
    })

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log("app", app)
    console.log("this",this)
    console.log(this.data.hasUserInfo)
    console.log("currentPage",getCurrentPages())
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    } 
   this.time();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  time(){
    setInterval(() => {
      var newDate = new Date();
      var curSecond = newDate.getSeconds();
      var curMin = newDate.getMinutes();
      var curHour = newDate.getHours();
      // console.log("当前秒", curSecond)
      this.setData({
        secondDeg: curSecond * 6,
        minDeg: curMin * 6,
        hourDeg: curHour * 30,
      })
    }, 1000)
  }
})
