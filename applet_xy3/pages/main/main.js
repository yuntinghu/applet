// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imageList:[
        "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/p1.jpg?v=" + Math.random() / 9999,
        "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/p2.jpg?v=" + Math.random() / 9999,
        "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/p3.jpg?v=" + Math.random() / 9999,
        "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/p4.jpg?v=" + Math.random() / 9999,
        "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/p5.jpg?v=" + Math.random() / 9999,
        "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/p6.jpg?v=" + Math.random() / 9999,
        "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/p7.jpg?v=" + Math.random() / 9999,
        "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/p8.jpg?v=" + Math.random() / 9999,
        "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/p9.jpg?v=" + Math.random() / 9999,
      ],
    viedoUrl: "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/shipin.mp4?v=" + Math.random() / 9999,
    suolueUrl: "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/suolue.png?v=" + Math.random() / 9999,
    logoURL: "https://raw.githubusercontent.com/yuntinghu/applet/master/images/applet3/logo.png?v=" + Math.random() / 9999,
      leftWidth:false,
  },
  showImage:function(event){
    var src = event.target.dataset.src
    wx.previewImage({
      current: src,
      urls: this.data.imageList,
      success: function (res) { 
        console.log("succes",res)
      },
      fail: function (res) { console.log("falil", res) },
      complete: function (res) { console.log("complete", res)},
    })
  },
  onMap:function () {
    wx.getLocation({
      type: "gcj02",//默认 wgs84 返回gps坐标，gcj02 返回可以用于wx.openLocation的坐标
      success: function(res) {
        wx.openLocation({
          //@todo 写入地址经纬度以及路径名称
          // latitude: res.latitude, //纬度
          // longitude: res.longitude, //经度
          latitude: 34.7977900000,//纬度
          longitude: 113.3486700000, //经度
          scale:28,//缩放比例
          name:"河南省郑州市荥阳市恒力机械厂",
          address:"河南省郑州市荥阳市城关乡李克寨村东南方向约0.94公里"
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(222222)
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
    var _this = this;
    var query = wx.createSelectorQuery();
    query.select('#li1').boundingClientRect();
    query.exec(function(res){
      if (res[0].left>30){
        _this.setData({ leftWidth:true})
      }
    })
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
  tapName: function (event) {
    console.log(event)
  },

  onPhoneCall: function (event) {
    wx.makePhoneCall({
      phoneNumber: '0371-64666648' //仅为示例，并非真实的电话号码
    })
  },
  onPhoneCall1: function (event) {
    wx.makePhoneCall({
      phoneNumber: '13071081851' //仅为示例，并非真实的电话号码
    })
  },
  onPhoneCall2: function () {
    wx.makePhoneCall({
      phoneNumber: '13071081895' //仅为示例，并非真实的电话号码
    })
  }
})