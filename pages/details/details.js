// pages/details/details.js

import polyv from '../../utils/polyv';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 显示咨询或者聊天
    showInfoModal: true,
    // 视频链接
    videoSrc: '',
    // 视频时长
    duration: '',
    // 初始化播放时间
    initialTime: ''
  },

  onReady() {
    const that = this;
     //获取视频播放地址,根据后台返回的开播时间，取服务器时间跟开播时间的时间差
     let vid = "88083abbf5bcf1356e05d39666be527a_8";
     let vidObj = {
         vid,
         callback(videoInfo) {
           console.log(videoInfo);
             that.setData({
               videoSrc: videoInfo.src[0],
               duration: videoInfo.duration,
               initialTime: videoInfo.duration - 100
             });
         }
     };
     polyv.getVideo(vidObj);
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