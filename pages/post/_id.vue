<template>
  <div class="page">
    <div class="post">
      <div class="poster" v-if="post.image" :style="{backgroundImage:'url('+post.image+')'}"></div>
      <div class="title">{{post.title}}</div>
      <div class="info">
        <p>更新于：{{post.updated_at}}</p>
        <p v-if="post.tags && post.tags.length > 0">
          标签：
          <span v-for="tag in post.tags" :key="tag.tagId">{{tag.name}}</span>
        </p>
      </div>
      <div class="content">
        <div v-html="post.html" class="md"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import timeago from 'timeago.js'

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
      post.updated_at = timeago(null, 'zh_CN').format(post.updated_at);
      return { post }
    }).catch((err) => {
      error({ statusCode: 404, message: err.message })
    })
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.meta_description },
        { name: 'keywords', content: this.keywords.join(',') }
      ]
    }
  },
  computed: {
    keywords() {
      let keywords = [];
      this.post.tags.forEach(function (element) {
        keywords.push(element.name)
      });
      return keywords
    }
  }
}
</script>

<style scoped>
.page {
  box-shadow: none;
}

.post {
  box-shadow: 0 0 6px rgba(100, 100, 100, 0.4);
}

.poster {
  height: 420px;
  background: no-repeat center / cover;
}

.title {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.info {
  display: flex;
  font-size: 16px;
  padding: 0 30px;
  color: #3084bb;
}

.info p {
  padding-right: 10px;
}

.info p:last-child {
  padding-left: 0;
}

.info p span:after {
  content: '，'
}

.info p span:last-child:after {
  content: ''
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
    justify-content: center;
    font-size: 14px;
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
