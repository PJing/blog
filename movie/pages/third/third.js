// pages/third/third.js
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
    navbarList:[
      // {
      //   text:"公交",
      //   type:"transit",
      // },
      {
        text: "驾车",
        type: "driving",
      },
      {
        text: "步行",
        type: "walking",
      },
    ],
    addrInfo:"",
    // 搜索状态
    isSelect:0,
    addrList:"",
    //起点
    startAddr:"",
    //路线规划方式
    mode:"transit",
    curIndex:0,
    //搜索的是起点还是终点
    startend:"",
    //是否可以点击搜索
    isDisabled:true,
    //距离
    distance:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('wxmap');

    console.log("页面载入获取到的数据",options)
    if(options.addrInfo){
      var addrInfo = JSON.parse(options.addrInfo);
      this.setData({
        addrInfo: addrInfo
      })
    }
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
  //设置终点


  // 搜索地址
  selectAddr:function(ev){
    console.log(ev)
    var startend = ev.currentTarget.dataset.startend
    var _this = this;
    map.getSuggestion({
      keyword: ev.detail.value,
      region:"武汉市",
      success:function(res){
        console.log(res.data);
        _this.setData({
          isSelect:2,
          addrList:res.data,
          startend: startend
        })
      }
    })
  },
  setAddr:function(ev){
    console.log(ev.currentTarget.dataset.detail)
    var detail = ev.currentTarget.dataset.detail
    //判断现在是搜索起点还是终点
    if(this.data.startend == 1){
      this.setData({
        startAddr: {
          address: detail.title,
          location: detail.location
        },
        addrList: ""
      });
    }else{
      this.setData({
        addrInfo: {
          address: detail.title,
          location: detail.location
        },
        addrList: ""
      });
    }
    this.regWay();
    
  },
  //切换路线方式
  tab:function(ev){
    console.log("路线规划方式",ev.currentTarget.dataset.index)
    var index = ev.currentTarget.dataset.index;
    this.setData({
      curIndex: index
    })
  },
  //判断路线是否填写完整
  regWay:function(){
    if (this.data.addrInfo && this.data.startAddr) {
      this.setData({
        isSelect: 2,
        isDisabled:false
      })
      return true
    }else{
      return false    
    }
  },
  //查询路线
  goWay:function(){
    var _this = this;
    console.log(this.data.navbarList[this.data.curIndex].type)
    map.calculateDistance({
      mode: this.data.navbarList[this.data.curIndex].type,
      from: {
        latitude: this.data.startAddr.location.lat,
        longitude: this.data.startAddr.location.lng
      },
      to:[{
          latitude: this.data.addrInfo.location.lat,
          longitude: this.data.addrInfo.location.lng
      }],
      success: function (res) {
        console.log("路线规划成功",res);
        _this.setData({
          isSelect:1,
          distance: res.result.elements[0].distance
        })
      },
      fail: function (res) {
        console.log(res);
      },
    });
  }

})