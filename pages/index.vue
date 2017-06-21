<template>
  <div class="container">
    <article v-for="(post, index) in posts">
      <div class="poster" :style="{backgroundImage:'url('+post.image+')'}">
        <router-link :to="'/post/'+post.id">{{ post.title }}</router-link>
      </div>
      <div class="desc">{{post.desc}}</div>
      <div class="tags">
        <a href="">js</a>
        <a href="">css</a>
        <a href="">requirejs</a>
      </div>
    </article>
  </div>
</template>

<script>
import axios from '~plugins/axios'

export default {
  async asyncData ({error}) {
    return axios.get('/api/post/').then((res) => {
      return { posts: res.data.list }
    }).catch((err) => {
      error({ statusCode: 404, message: err.message })
    })
  }
}

</script>

<style scoped>
article {
  background: #fff;
  border-radius: 2px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.26);
  margin-bottom: 20px;
}

article .poster {
  background: rgba(38, 50, 56, 0.95) no-repeat center / cover;
  height: 300px;
  padding: 20px;
  display: flex;
  align-items: flex-end;
}

article .poster a {
  color: #fff;
  font-size: 26px;
}

article .desc {
  padding: 20px;
}

article .tags {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 0 0 0 20px;
}

article .tags a {
  padding: 5px 10px;
  background: rgba(100, 100, 100, 0.12);
  border-radius: 2px;
  color: rgba(0, 0, 0, .54);
  margin: 20px 10px 20px 0;
}

article .tags a:hover {
  background: rgba(100, 100, 100, 0.2);
}
</style>
