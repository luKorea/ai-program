//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    //  视频信息
    videoInfo: {
      imgUrl: 'http://www.s3tu.com/images/2020/09/18/2075600.png',
      title: '第一节课：设计基础原理',
      time: '14:00:00'
    },
    listData: [
      {
        id: 1,
        title: '第一节课：设计基础原理',
        img: 'http://www.s3tu.com/images/2020/09/18/151bd70.png'
      },
      {
        id: 2,
        title: '第一节课：设计基础原理',
        img: 'http://www.s3tu.com/images/2020/09/18/151bd70.png'
      },
      {
        id: 3,
        title: '第一节课：设计基础原理',
        img: 'http://www.s3tu.com/images/2020/09/18/151bd70.png'
      },
      {
        id: 4,
        title: '第一节课：设计基础原理',
        img: 'http://www.s3tu.com/images/2020/09/18/151bd70.png'
      },
      {
        id: 5,
        title: '第一节课：设计基础原理',
        img: 'http://www.s3tu.com/images/2020/09/18/151bd70.png'
      },
      {
        id: 6,
        title: '第一节课：设计基础原理',
        img: 'http://www.s3tu.com/images/2020/09/18/151bd70.png'
      }
    ],
    // 判断当前用户是否已经登陆
    userInfo: {},
    hasUserInfo: false,
    showModal: false,
    goDetails: false,
    //  发送验证码倒计时
    showBtn: true,
    count: 60,
    timer: ''
  },
  // 跳转到详情页
  bindViewTap: function() {
    if(this.data.goDetails) {
      wx.navigateTo({
        url: '../details/details'
      })
    }
  },
  //判断当前用户是否已经登陆，登陆成功之后，隐藏登陆按钮，允许用户跳转
  onLoad: function () {
    const info = wx.getStorageSync('userInfo')
    if(info) {
      this.setData({
        hasUserInfo: true,
        goDetails: true
      })
      console.log(this.data);
    }
  },

  //用户授权
  getUserInfo: function(e) {
    console.log(1)
    const that = this
    if(this.data.goDetails) return
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              wx.showToast({
                title: '授权成功',
              })
              that.setData({
                userInfo: res.userInfo,
                hasUserInfo: true,
                goDetails: true,
                showModal: true
              })
              wx.setStorageSync('userInfo', res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              
            }
          })
        }
      }
    })
  },

  // 发送验证码
  sendCode() {
    const TIME_COUNT = 60; //更改倒计时时间
    const that = this;
    let {timer, count} = that.data;
        if (!timer) {
            that.setData({
              count: TIME_COUNT,
              showBtn: false
            })
            timer = setInterval(() => {
                if (count > 0 && count <= TIME_COUNT) {
                  that.setData({
                    count: count--,
                    showBtn: false
                  })
                } else {
                    that.setData({
                      showBtn: true,
                      count: 60,
                      timer: null
                    })
                    clearInterval(timer); // 清除定时器

                }
            }, 1000);
        }
  },

  // 验证手机号码
  regPhone(e) {
    const {value} = e.detail;
    let regPhone = new RegExp(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/, 'g');
    if(!regPhone.test(value)) {
      wx.showToast({
        title: '手机号码格式不正确',
        icon: 'none'
      })
    } if(value === '') {
      wx.showToast({
        title: '输入的内容不能为空',
        icon: 'none'
      })
    } else return false;
  },

  // 验证名字
  regName(e) {
    const {value} = e.detail;
    let regName = new RegExp(/^[\u4E00-\u9FA5]{2,4}$/, 'g');
    if(!regName.test(value)) {
      wx.showToast({
        title: '真实姓名只能为中文且2至50个字',
        icon: 'none'
      })
    } if(value === '') {
      wx.showToast({
        title: '输入的内容不能为空',
        icon: 'none'
      })
    } else return false;
  },


  // 用户登陆
  formSubmit(e) {
    console.log(e)
    let {detail: {value}} = e;
    wx.showToast({
      title: '登陆成功',
    })
    this.setData({
      showModal: false
    })
  }
})
