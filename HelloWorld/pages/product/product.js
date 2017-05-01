Page({
  data: {
    product: {
      uuid: '',
      name: '',
      price: 0,
      num: 0,
      unit: ''
    }
  },
  onLoad:function(options){
    var uuid = options.uuid;
    console.log('uuid = '+uuid);
    if(uuid != ''){
      this.setData({
        'product':{
          'uuid':uuid
        }
      });
    }
    
  },
  formSubmit: function (e) {
    console.log(e);
    wx.request({
      url: 'http://localhost:8080/product',
      data: {
        name: e.detail.value.name,
        price: e.detail.value.price,
        amount: e.detail.value.num,
        unit: e.detail.value.unit
      },
      dataType: JSON,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      success: function (res) {
        var pages = getCurrentPages();
        if(pages.length > 1){
            //上一个页面实例对象
            var prePage = pages[pages.length - 2];
            //关键在这里
            prePage.getProductList();
        }
        wx.navigateBack();
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})