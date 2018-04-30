// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      phone:["13088881111","13088882222"]
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
  onPhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '13099990000' //仅为示例，并非真实的电话号码
    })
  },
  onPhoneCall2: function () {
    wx.makePhoneCall({
      phoneNumber: '13099990001' //仅为示例，并非真实的电话号码
    })
  }
})