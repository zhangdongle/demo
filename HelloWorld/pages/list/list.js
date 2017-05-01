Page({
  data: {
    'products': []
  },
  
  getProductList:function(){
      const self = this;
      wx.request({
        url: 'http://localhost:8080/product',
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          console.log(res);
          
          self.setData({products:res.data});
        }
      })
  },
  onLoad:function (){
    this.getProductList();
  },
  addProduct:function(){
    wx.navigateTo({
      url:'../product/product'
    });
  },
  deleteProduct:function(e){
    console.log(e);
    var uuid = e.currentTarget.dataset.uuid;
    const that = this;
    wx.request({
      url: 'http://localhost:8080/product/'+uuid,
      data: {},
      method: 'DELETE', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        that.getProductList();
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    });
  },
  updateProduct:function(e){
    console.log(e);
    var uuid = e.currentTarget.dataset.uuid;
    const that = this;
    wx.navigateTo({
      url: '../product/product?uuid='+uuid
    });
  }
  
})