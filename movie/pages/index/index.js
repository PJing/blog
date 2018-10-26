//index.js

wx.cloud.init({
  traceUser: true
})
const db = wx.cloud.database()
const todos = db.collection('todos')
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
  //  this.getDB()
    this.getDBData()
  },
  getUserInfo: function(e) {
    console.log('getUserInfo',e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 获取数据库
  getDB() {
    // 云储存能力
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      
      const todo = db.collection('todos').doc('W6oltJKURGseSvUf')
      console.log('todo', todo)
      // 往数据库插入数据
      db.collection('todos').add({
        data: {
          description: '这是小程序插入的数据',
          due: new Date(),
          tages: [
            'cloud',
            'database'
          ],
          // 为待办事项添加一个地理位置（113°E，23°N）
          location: new db.Geo.Point(113, 23),
          done: false
        },
        success(res) {
          console.log('addData', res)
        }
      })
    }
  },
  // 读取数据
  getDBData() {
    db.collection('todos').doc('W6o3vA-6q4jZ8jaR').get().then(res => {
      console.log('获取的数据库的数据', res.data)
    })
    //查询某个集合
    db.collection('todos').where({
      done:false
    }).get().then(res => {
      console.log('条件获取数据', res.data)
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
