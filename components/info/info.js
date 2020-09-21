// components/info/info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '第一节课程：设计基础原理',
    // 用户输入的信息
    messageInfo: '',
    defaultValue:'',
    listData: [
      {
          id: 1,
          name: "张三",
          phone: "138*******0000",
          time: "13:14:00",
          message: "这个课程真好，学完收获真多！"
      },
      {
          id: 1,
          name: "张三",
          phone: "138*******0000",
          time: "13:14:00",
          message: "这个课程真好，学完收获真多！"
      },{
          id: 1,
          name: "张三",
          phone: "138*******0000",
          time: "13:14:00",
          message: "这个课程真好，学完收获真多！"
      },{
          id: 1,
          name: "张三",
          phone: "138*******0000",
          time: "13:14:00",
          message: "这个课程真好，学完收获真多！"
      },{
          id: 1,
          name: "张三",
          phone: "138*******0000",
          time: "13:14:00",
          message: "这个课程真好，学完收获真多！"
      },{
          id: 1,
          name: "张三",
          phone: "138*******0000",
          time: "13:14:00",
          message: "这个课程真好，学完收获真多！"
      },{
          id: 1,
          name: "张三",
          phone: "138*******0000",
          time: "13:14:00",
          message: "这个课程真好，学完收获真多！"
      },{
          id: 1,
          name: "张三",
          phone: "138*******0000",
          time: "13:14:00",
          message: "这个课程真好，学完收获真多！"
      },
  ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendFlower() {
      const user = [{
        id: 0,
        name: wx.getStorageSync('userInfo').nickName,
        time: new Date().toLocaleTimeString(),
        message: '🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸',
        phone: "138*******0000",
      }];
      let newData = [...this.data.listData, ...user]
      this.setData({
        listData: newData
      })
      console.log(this.data.listData)
    },

    bindKeyInput: function (e) {
      this.setData({
        messageInfo: e.detail.value,
        defaultValue: e.detail.value
      })
    },

    submitInfo() {
      if(this.data.messageInfo === '') {
        wx.showToast({
          title: '请输入信息',
          icon: 'none'
        })
        return false;
      }
      const user = [{
        id: 0,
        name: wx.getStorageSync('userInfo').nickName,
        time: new Date().toLocaleTimeString(),
        message: this.data.messageInfo,
        phone: "138*******0000",
      }];
      let newData = [...this.data.listData, ...user]
      this.setData({
        listData: newData,
        messageInfo: '',
        defaultValue: ''
      })
      console.log(this.data.listData)
    }
  }
})
