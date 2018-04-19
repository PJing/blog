var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data:{
    curAddress:{},
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      // name: 'T.I.T 创意园'
    }],
  },
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'LMABZ-A5MWF-TVBJ2-JOYJG-ENN6T-KSFOO'
    });
    this.getCurAddress();
  },
  onShow: function () {
    // 调用接口
    qqmapsdk.search({
      keyword: '酒店',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },
  getCurAddress(){
    var _this = this
    wx.getLocation({
      success: function (res) {
        console.log(res)
        _this.setData({
          curAddress:res,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude,
            // name: 'T.I.T 创意园'
          }],
        })
      },
    })
  }
});