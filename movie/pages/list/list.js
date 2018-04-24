var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data:{
    curAddress:{},
    markers: [{
      id:0,
      latitude: "",
      longitude: "",
    }],
    mapCtx:"",
    // 控件
    controls: [{
      id: 0,
      iconPath: '/image/dw.png',
      position: {
        left: 10,
        top: 10,
        width: 20,
        height: 20
      },
      clickable: true
    }],
    //搜索结果
    selResult:[
      // 1,2,3,4,5
    ],
    //搜索文字
    keyword:"洪山区",
    height:"",
    slideIndex:1,
  },
  onReady(){
    this.mapCtx = wx.createMapContext('qqmap')
  },
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'LMABZ-A5MWF-TVBJ2-JOYJG-ENN6T-KSFOO'
    });
    this.getCurAddress();
  },
  onShow: function () {
  },
  getCurAddress(){
    var _this = this
    wx.getLocation({
      type:"gcj02",
      success: function (res) {
        console.log(res)
        _this.setData({
          curAddress:res,
          markers: [{
            id:0,
            latitude: res.latitude,
            longitude: res.longitude,
            // name: 'T.I.T 创意园'
          }],
        });
        // _this.getCurrentOpenLocation()
      },
    })
  },
  getCurrentOpenLocation(){
    wx.openLocation({
      latitude: this.data.curAddress.latitude,
      longitude: this.data.curAddress.longitude,
      success:function(res){
        console.log("succcess",res)
      },
      fail:function(res){
        console.log("error",res)
      }
    })
  },
  // 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 wx.openLocation
  getCenterLocation(){
    this.mapCtx.getCenterLocation({
      success:function(res){
        console.log("地图中心点的位置",res)
      }
    })
  },
  //将地图中心移动到当前定位点，需要配合map组件的show-location使用
  moveToLocation(){
    this.mapCtx.moveToLocation();
  },
  //平移marker，带动画
  translateMarker(){
    this.mapCtx.translateMarker({
      markerId:0,
      destination: this.data.markes[0],
      autoRotate:true,
      duration:1000,
      animatedEnd(res){
          console.log("运动结束",res)
      }
    })
  },
  //点击控件
  controltap(e) {
    console.log(e)
    if (e.controlId == 0){
      this.moveToLocation();
    }
  },
  // 搜索提示
  getSuggestion(ev){
    var _this = this;
    console.log(this.data.keyword)
    qqmapsdk.getSuggestion({
      keyword: _this.data.keyword,
      region:"武汉市",
      success:function(res){
        console.log("关键字",res)

        _this.setData({
          selResult : res.data,
          height:"60vh"
        })
        // console.log(this.data.)
      }
    })
  },
  //底部触摸动作
  slide(){
    if(this.data.slideIndex == 1){
      this.toTop();
    } else if (this.data.slideIndex == 2){
      this.toDown();
    }
  },
  toTop(){
    console.log("上")
    this.setData({
      mapHeight: "50vh",
      botHeight:"50vh",
      slideIndex: 2
    })
  },
  toDown(){
    console.log("下")
    this.setData({
      mapHeight: "85vh",
      botHeight: "15vh",
      slideIndex: 1
    })
  },
  //地点搜索
  searchAddr(ev){
    var _this = this;
    console.log(ev.currentTarget.dataset.info.address)
    qqmapsdk.geocoder({
      address:ev.currentTarget.dataset.info.address,
      success:function(res){
        console.log("点击位置",res)
        var markers = _this.data.markers
        markers.push({
          id:1,
          latitude: res.result.location.lat,
          longitude: res.result.location.lng,
        })
        _this.setData({
          markers:markers
        })
        console.log(_this.data.markers)
        setTimeout(()=>{
          _this.mapCtx.translateMarker({
            markerId: 1,
            destination:{
              latitude: _this.data.markes[1].latitude,
              longitude: _this.data.markes[1].longitude,
            },
            autoRotate: true,
            duration: 1000,
            animatedEnd(res) {
              console.log("运动结束", res)
            }
          })
        },2000)
      }
    })
  }
});