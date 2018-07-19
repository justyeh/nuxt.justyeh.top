# justyeh.com

以前的博客使用的是Ghost，不过被攻击了，勒索我几百美元，还是算了吧，顺便说一句，数据备份很重要！前段时间学了Vue.js，以前看的Node还能记起来点，主要为了锻炼自己吧，这次的博客没有用Hexo，Ghost什么的，自己写的。由于有SEO的需求，毕竟自己写自己看也没什么意思，最终的使用的技术方案：Vue.js+Nuxt.js+ES6+Webpack+Mysql+Node.js+Express.js。动手之前其实还有很多东西不是很熟，不过最终也算是完成了，这个项目给了我一个启发：实践是学习的最快途径，看再多次文档真不如动手写一个项目来的实在。

博客：[使用Nuxt+Vue+Node构建的SSR博客项目](http://www.justyeh.top/post/29)

## 注意

最近Nuxt官方将版本升级到了rc6，我的项目开发的时候最新版本是rc3，很抱歉的是rc3和rc6有冲突，导致了项目不能运行，现在已知的报错有：

```
Same thing here pretty much : UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): TypeError: __WEBPACK_IMPORTED_MODULE_2_nuxt___default.a is not a constructor
```

这个问题就是版本不对导致的，你可以通过安装指定版本来解决

```
npm install --save nuxt@1.0.0-alpha.3
```

鉴于我的博客是稳定运行的，所以目前我不会升级nuxt的版本，如果有遇到版本相关的问题，大家可以多关注官方的[issue](https://github.com/nuxt/nuxt.js/issues)，很多问题在上面可以搜到。



## 技术栈

Vue.js+Nuxt.js+Es6+Webpack+Mysql+Node.js+Express.js

## 运行

```
#安装依赖
npm install

#开发环境
npm run dev

#生产环境
npm run build
npm start

#pm2
npm run build
pm2 start npm --name 'justyeh.com' -- start

#运行地址
http://localhost:3000
```



## 数据库文件

数据库文件放在database目录下：

database：database.sql

tables:justyeh.sql

## 目录结构
```
/justyeh/justyeh.com/
├── assets                              资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript
├── backpack.config.js                  后台入口配置文件
├── build                               打包后的文件
├── components                          存放组件，用于组织应用的 Vue.js 组件
│   ├── admin                           后台相关的组件
│   ├── ....
├── database                            存放数据库文件的目录（自己添加）
├── layouts                             布局模板文件，默认default，通过为页面设置layout更改
│   ├── ....
├── middleware                          存放应用的中间件
├── node_modules                        Node依赖文件
├── nuxt.config.js                      Nuxt主配置文件
├── pages                               存放页面的目录
│   ├── index.vue                       首页
│   ├── ....
├── plugins                             存放插件，用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件
│   └── axios.js
├── README.md                           README
├── server                              express后台目录
│   ├── index.js                        后台入口文件
│   ├── ....
├── static                              静态文件目录,此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下
└── util                                存放一些工具文件（自己添加）
```

## 参考资料

[Vue.js](https://cn.vuejs.org/)

[Vue Router](https://router.vuejs.org/zh-cn/)

[Nuxt.js](https://zh.nuxtjs.org/)

[express](http://www.expressjs.com.cn/)

[Node-MySQL](http://www.oschina.net/translate/node-mysql-tutorial?utm_source=tuicool&utm_medium=referral)
