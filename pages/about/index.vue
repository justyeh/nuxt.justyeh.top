<template>
  <div class="page">
    <h1>关于这个网站</h1>
    <p>大家好，我是Yeh，一位前端码畜，为了不落伍，目前正在学习Vue.js和ES6，有时也会使用node.js，不过属于玩票性质！</p>
    <p>这个网站算是我的学习成果吧，使用的技术栈：Vue.js+Nuxt.js+ES6+Webpack+Mysql+Node.js+Express.js，我已将网站开源到GitHub，项目地址
      <a target="_blank" href="https://github.com/justyeh/justyeh.com">https://github.com/justyeh/justyeh.com</a>。由于我技术水平的限制，目前应该还有许多不足，如果你有什么好的建议和意见，欢迎和我联系！</p>
    <p>
      Email：
      <a href="mailto:justyeh@163.com">justyeh@163.com</a>
    </p>
    <p>
      Github：
      <a target="_blank" href="https://github.com/justyeh">https://github.com/justyeh</a>
    </p>
  
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `关于`
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding-bottom: 20px;
}

.page {
  padding: 20px 30px;
  font-size: 16px;
}

.page p {
  padding-top: 20px;
  line-height: 26px;
  text-indent: 2em;
}
</style>
