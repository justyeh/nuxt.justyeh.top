module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '叶文祥的前端博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '叶文祥的前端博客' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS
  css: ['~assets/css/main.css'],

  build: {
    //Add axios globally
    vendor: ['axios'],
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
  // loading效果
  loading: {
    color: '#04acf7',
    height: '4px',
    failedColor: 'red'
  }
}
