// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    //const logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    //wx.setStorageSync('logs', logs)
    // 缓存不存在时保存
    var storageData = wx.getStorageSync('postList')
    if (!storageData) {
      var dataObj = require("data/data.js")
      wx.clearStorageSync()
      wx.setStorageSync('postList', dataObj.postList)
    }
    //wx.setStorageSync('postList', dataObj.postList)
    /*wx.setStorage({
      data: dataObj.postList,
      key: 'postList',
      success: function () {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })*/

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})