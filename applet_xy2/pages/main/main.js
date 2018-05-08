// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      phone:["13088881111","13088882222"],
      imageList:[
        "http://7xqe2i.com1.z0.glb.clouddn.com/p1.jpeg?v=" + Math.random() / 9999,
        "http://7xqe2i.com1.z0.glb.clouddn.com/p2.jpeg?v=" + Math.random() / 9999,
        "http://7xqe2i.com1.z0.glb.clouddn.com/p3.jpeg?v=" + Math.random() / 9999,
        "http://7xqe2i.com1.z0.glb.clouddn.com/p4.jpeg?v=" + Math.random() / 9999,
        "http://7xqe2i.com1.z0.glb.clouddn.com/p5.jpeg?v=" + Math.random() / 9999,
        "http://7xqe2i.com1.z0.glb.clouddn.com/p6.jpeg?v=" + Math.random() / 9999,
        "http://7xqe2i.com1.z0.glb.clouddn.com/p7.jpeg?v=" + Math.random() / 9999,
        "http://7xqe2i.com1.z0.glb.clouddn.com/p8.jpeg?v=" + Math.random() / 9999,
        "http://7xqe2i.com1.z0.glb.clouddn.com/p9.jpeg?v=" + Math.random() / 9999,
      ],
      viedoUrl: "http://7xqe2i.com1.z0.glb.clouddn.com/shipin.mp4?v=" + Math.random() / 9999,
      suolueUrl: "http://7xqe2i.com1.z0.glb.clouddn.com/suolue.png?v=" + Math.random() / 9999,
  },
  showImage:function(event){
    console.log(2222)
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
      phoneNumber: '13838197902' //仅为示例，并非真实的电话号码
    })
  },
  onPhoneCall2: function () {
    wx.makePhoneCall({
      phoneNumber: '13071081895' //仅为示例，并非真实的电话号码
    })
  }
})