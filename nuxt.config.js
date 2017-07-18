module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'JustYeh的前端博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '叶文祥的前端博客' },
      /*优先使用 IE 最新版本和 Chrome  */
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      /* iOS 设备 */
      { name: 'author', content: '叶文祥,justyeh@163.com' },
      { name: 'apple-mobile-web-app-title', content: '叶文祥的前端博客' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#263238' },
      /*fullscreen and app mode*/
      { name: 'screen-orientation', content: 'portrait' },
      { name: 'x5-orientation', content: 'portrait' },
      { name: 'full-screen', content: 'yes' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'browsermode', content: 'application' },
      { name: 'x5-page-mode', content: 'app' },
      /*webkit*/
      { name: 'theme-color', content: '#263238' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS
  css: ['~assets/css/main.css', '~assets/css/font-awesome.min.css'],

  build: {
    //Add axios globally
    vendor: ['axios','vue-notification'],
    // Run ESLINT on save
    /*extend (config, ctx) {
       if (ctx.isClient) {
         config.module.rules.push({
           enforce: 'pre',
           test: /\.(js|vue)$/,
           loader: 'eslint-loader',
           exclude: /(node_modules)/
         })
       }
     }*/
  },
  // 页面顶部loading效果
  loading: {
    color: '#04acf7',
    height: '4px',
    failedColor: 'red'
  },
  //页面的过渡效果
  transition: {
    name: 'page'
  },
  //配置路由
  router: {
    middleware: 'adminAuth'
  },
  //插件
  plugins: [
    { src: '~plugins/axios' },
    { src: '~plugins/vue-notification', ssr: false }
  ]
}
