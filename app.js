
App({
  globalData: {
    initialdata: []
  },

  onLaunch() {
    wx.cloud.init({
      env: "lin1-5ghgfuc93b22e503",
      traceUser: true,
    });
    this.getData()
  },
  onLaunch() {
    wx.cloud.init({
      env: "lin1-5ghgfuc93b22e503",
      traceUser: true,
    });
    this.getData()
  },
  async getData() {
    wx.showLoading({
      title: '更新中...',
      mask: true
    })
    try {
      const res = await wx.cloud.callFunction({
        name: "initialization",
      })
      if (res?.result) {
        this.globalData.initialdata = res.result;

      }
    } catch (error) {
      console.error('更新失败:', error);
      wx.showToast({
        title: '更新失败',
        icon: 'error'
      });
    } finally {
      wx.hideLoading()
    }
  }
});