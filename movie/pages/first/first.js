//引入微信地图sdk
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');

// 实例化API核心类
var map = new QQMapWX({
  key: 'LMABZ-A5MWF-TVBJ2-JOYJG-ENN6T-KSFOO' // 必填
});


Page({

  /**
   * 页面的初始数据
   */
  data: {
    addrList:"",
    // 地图控件
    controls:[
      {
        id:0,
        position:{
          left:10,
          top:10,
          width:100,
          height:100
        },
        iconPath:"../../image/dingwei.png",
        clickable: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('wxmap');

    this.moveToLocation();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      addrList:""
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // 改变输入框内容时
  getSuggestion(ev){
    console.log(ev.detail);
    var _this = this;
    map.getSuggestion({
      keyword:ev.detail.value,
      region:"武汉市",
      success:function(res){
        console.log("输入提示",res)
        _this.setData({
          addrList : res.data
        })
      }
    })
  },
  //移动到当前定位位置
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  //点击控件时
  controltap:function(ev){
    console.log("点击地图控件",ev)
    if(ev.controlId == 0){
      this.moveToLocation();
    }
  },
  //去地址详情列表页
  toSelectList:function(ev){
    // console.log("点击详情", ev.currentTarget.dataset.detail)    
    var item = ev.currentTarget.dataset.detail;
    wx.navigateTo({
      url: '../selectList/selectList?item=' + JSON.stringify(item),
    })
  },
  //缩放视野内点坐标
  includePoints:function(){
    
  }
})