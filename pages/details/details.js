// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 显示咨询或者聊天
    showInfoModal: true
  },


  setInfoModal(e) {
    console.log(e)
    this.setData({
      showInfoModal: !this.data.showInfoModal
    })
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 分享链接
  onShareAppMessage(res) {
    if(res.from === 'button') {
      console.log(res.target, res)
    }
    return {
      title: '大家一起练习敲代码呀',
      path: '/pages/index/index',
      imageUrl: 'https://s1.ax1x.com/2020/09/19/wIQ7DJ.png'
    }
  }

})