<template>
  <section class="page">
    <div class="poster" v-if="post.image.length > 0 " :style="{backgroundImage:'url('+post.image+')'}"></div>
    <div class="title">{{post.title}}</div>
    <div class="info">
      <p>{{post.updated_at}}</p>
    </div>
    <div class="content">
      <div v-html="post.html" class="md-theme"></div>
    </div>
  </section>
</template>

<script>
import axios from '~plugins/axios'
import { formatDate } from '../../util/assist'

import hljs from 'highlight.js'
import '~assets/css/yeh-md-theme.css'
import '~assets/css/ocean.min.css'


let marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

export default {
  name: 'id',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  asyncData({ params, error }) {
    return axios.get('/api/post/detail/' + params.id).then((res) => {
      if (res.data.code === 404) {
        error({ statusCode: 404, message: 'Not Found This Post' });
      }
      var post = res.data.list[0];
      post.html = marked(post.markdown);
      post.updated_at = formatDate(post.updated_at);
      return { post }
    }).catch((err) => {
      error({ statusCode: 404, message: err.message })
    })
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.meta_description }
      ]
    }
  }
}
</script>

<style scoped>
.poster {
  height: 360px;
  background: no-repeat center / cover;
}

.title {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.info {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 20px;
}

.content {
  padding: 20px 30px;
  line-height: 26px;
}

@media screen and (max-width: 960px) {
  .poster {
    height: 260px;
  }
  .title {
    font-size: 24px;
    padding: 15px 0
  }
  .info {
    padding: 0 10px;
  }
  .content {
    padding: 15px;
  }
}
@media screen and (max-width: 640px) {
    .poster {
        height: 220px;
    }
}
@media screen and (max-width: 480px) {
    .poster {
        height: 180px;
    }
}
</style>
