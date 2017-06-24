<template>
  <div class="container">
    <article v-for="(post, index) in posts">
      <div class="poster" v-if="post.image" :style="{backgroundImage:'url('+post.image+')'}"></div>
      <router-link :to="'/post/'+post.id">{{ post.title }}</router-link>
      <div class="desc">{{post.meta_description}}</div>
      <!--<div class="tags">
        <a class="btn btn-small btn-default" href="">js</a>
      </div>-->
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
  margin-bottom: 40px;
}

article .poster {
  background: rgba(38, 50, 56, 0.95) no-repeat center / cover;
  height: 300px;
  padding: 20px;
  display: flex;
  align-items: flex-end;
}

article a {
  color: #222;
  font-size: 24px;
  line-height:36px;
  margin: 10px 20px 5px 20px;
  display:inline-block;
}
article a:hover{
  text-decoration: underline;
}

article .desc {
    padding: 0 20px 10px 20px;
    font-size: 16px;
    line-height: 24px;
}
article .tags {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 0 0 0 20px;
}
article .tags a {
  margin: 20px 10px 20px 0;
  padding:3px 10px;
}

</style>
