// pages/selectList/selectList.js
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
    curAddr:"",
    addrList: "",
    more:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.item))
    this.setData({
      curAddr: JSON.parse(options.item)
    })
    this.reverseGeocoder();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
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
  reverseGeocoder: function () {
    var _this = this
    map.reverseGeocoder({
      location: {
        latitude: this.data.curAddr.location.lat,
        longitude: this.data.curAddr.location.lng
      },
      get_poi:1,
      success: function (res) {
        console.log("搜索地址",res.result);
        _this.setData({
          addrList: res.result
        })
      }
    })
  },
  //显示更多周边地址
  morShow(){
    this.setData({
      more:true
    })
  },
  
})