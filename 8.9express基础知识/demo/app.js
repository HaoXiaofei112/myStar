/**
 * Created by hama on 2017/8/9.
 */
//1.引入express模块
var express = require('express');
//2.通过调用express方法生成一个服务器实例
var app = express();
// / 代表的意思是网站的根目录，也就是网站的首页.
// 当用户去访问首页的时候，req代表的就是请求部分，res代表的就是响应部分
//res.send()就是将send字符串发送给客户端（浏览器）
app.get('/',function(req,res){
    res.send('<b>我是加粗的响应文字</b>');
})
//3.监听3000端口，并且打印成功信息
app.listen(3000,function(){
    console.log('node is OK');
})


