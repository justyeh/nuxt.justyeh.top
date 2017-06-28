<template>
  <section class="page">
    <h1>关于这个网站</h1>
    <p>大家好，我叫叶文祥，一位前端码畜，喜欢跟潮流，也是为了不落伍，目前正在学习Vue.js和ES6，有时也会使用node.js，不过属于玩票性质！</p>
    <p>这个网站算是我的业余成果吧，使用的技术栈：Vue.js+Nuxt.js+Es6+Webpack+Mysql+Noyde.js+Express.js，我已将网站开源到GitHub，项目地址
      <a target="_blank" href="https://github.com/justyeh/justyeh.com">https://github.com/justyeh/justyeh.com</a>，欢迎来踩！</p>
    <p>如果你也对前端感兴趣，欢迎和我交流，我的邮箱
      <a href="mailto:justyeh@163.com">justyeh@163.com</a>，有时也会做一些微不足道的开源工作，这是我的GitHub主页
      <a target="_blank" href="https://github.com/justyeh">https://github.com/justyeh</a>。</p>
  </section>
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

<style>
h1{
  text-align: center;
  padding-bottom: 20px;
}
.page {
  padding: 20px 30px;
  font-size: 16px;
}

.page p {
  padding-top: 20px;
  line-height: 20px;
  text-indent: 2em;
}
</style>
