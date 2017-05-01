//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello WXApplet',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewDemo:function(){
    wx.navigateTo({
      url: '../list/list',
      success: function(res){
        // success
        console.log('进入demo成功'+res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
