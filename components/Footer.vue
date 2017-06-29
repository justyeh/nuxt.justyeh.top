<template>
  <footer>
    <div>
      <p>参考网址：</p>
      <div class="links">
        <a target="_blank" href="https://cnodejs.org/">CNode技术社区</a>
        <a target="_blank" href="https://cn.vuejs.org/">Vue.js官网</a>
        <a target="_blank" href="https://zh.nuxtjs.org/">Nuxt.js官网</a>
        <a target="_blank" href="http://www.expressjs.com.cn/">Express.js官网</a>
      </div>
    </div>
    <div>
      <p>友情链接：</p>
      <div class="links">
        <a target="_blank" href="http://www.lanqiao.org/">蓝桥官网</a>
        <a target="_blank" href="http://www.javabb.cn/">秦豹的个人网站</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: rgb(38, 50, 56);
  padding: 50px 100px;
  color: #fff;
}

div {
  padding-bottom: 20px;
}

footer div:last-child {
  padding-bottom: 0;
}

p {
  font-size: 16px;
  padding-bottom: 10px;
}

a {
  margin-right: 20px;
}
@media screen and (max-width: 960px) {
  footer{
    padding: 20px 10px;
  }
}
</style>
