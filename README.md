# React-dbmovie-app

> 之前就想学习了解下React，了解下那丰富的生态圈与函数式编程，于是就找个了模拟项目一边学一边写啦~~

>( 吐槽下。。redux还真是烧脑，当时看了好几遍都不会，只能一边做一边理解了。相比之下Vuex用起来真是轻松愉快: ) )


## 相关说明
 1、api使用了豆瓣官方提供的api与 https://github.com/jokermonn/-Api 提供的api说明与key

 2、在页面设计有部分方面参考了 https://github.com/haishanh/doba-react 

 ~~3、由于使用豆瓣电影的api进行数据请求时，会出现跨域错误，因此在这我使用了一个名为'Allow-Control-Allow-Origin: *'
 的Chrome插件来配合使用~~已解决，用jsonp了。





## 技术栈
```
React
React-router
Redux
antd  
```



## 功能实现情况
#### 根据所提供的Api 完成了以下功能
 - [x] 根据关键字/标签进行搜索
 - [x] 显示所设置的城市的当前上映的电影 ( 暂时就设置了五座城市 )
 - [x] 显示电影相关信息 
 - [x] 显示电影热评
 - [x] 显示演员信息

 
 
 ## 安装
 
 ``` bash
 git clone https://github.com/spezz07/react-dbmovie.git
 cd react-dbmovie

 # install dependencies
 npm install
 
 # serve with hot reload at localhost:3000
 npm start
 
 # build for production and view the bundle analyzer report
 npm run build 
 ```
 

