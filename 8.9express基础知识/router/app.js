/**
 * Created by hama on 2017/8/9.
 */
var express = require('express');
var app = express();
//把网站根目录下的public文件夹当做是我们的静态资源访问的根目录.
//也就是说，当用户去访问带有后缀名的静态资源的时候，默认去public下访问.
app.use(express.static('public'));
//服务器的访问路由
app.get('/',function(req,res){
    res.send('hello world');
})
//访问/login的时候服务器的行为
app.get('/login',function(req,res){
    res.send('这是一个登陆页面');
})
//对访问/reg的时候服务器的行为
app.get('/reg',function(req,res){
    res.send('这是一个注册的页面');
})
//路由：用户在访问某一个URL的时候，服务器必须要有对应的路由处理.
app.listen(3000,function(){
    console.log('node is OK');
})

//静态资源：通常是一些.jpg/.png/.css/.js/.doc/...这类的资源，他们可以通过express.
//static来设置静态资源的目录。
//动态资源：通常都是/user/lizhiyuan/aasdf 不带后缀名的URL,他们需要通过路由来进行处理




