<template>
  <section class="container">
    <img src="../../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Posts
    </h1>
    <ul class="posts">
      <li v-for="(post, index) in posts" class="post">
        <a :href="'/post/' + post.id">{{post.id}}</a>
        <nuxt-link :to="{ path: 'post', params: { id: 2 }}">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/post')
    return {
      posts: data.list
    }
  },
  head () {
    return {
      title: 'posts'
    }
  }
}

</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.posts
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.post
{
  margin: 10px 0;
}
</style>
