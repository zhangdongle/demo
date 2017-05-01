Page({
    formSubmit:function(e){
        wx.navigateTo({
            url: '../list/list',
            success:function(ex){
                console.log("進入list頁面");
            }
        })
        console.log('form 发生了submit事件，携带数据为：',e.detail.value)
    },
    formReset:function(){
        console.log('form 发生了Reset事件')
    }
})