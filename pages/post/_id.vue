<template>
  <section class="container">
    <img src="../../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Post
    </h1>
    <h2 class="info">
      {{ post.title }}
    </h2>
    <div>{{post.html}}</div>
    <pre><code>{{post.markdown}}</code></pre>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/post/' + params.id).then((res) => {
      console.log(res)
      return { post: res.list }
    }).catch((e) => {
      console.log(e)
      error({ statusCode: 404, message: 'Post not found' })
    })
  },
  head () {
    return {
      title: `Post: ${this.post.title}`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
