<template>
  <div class="index">
    <post-list :posts="posts"></post-list>
    <nuxt-link class="more" to="/page/1">查看更多</nuxt-link>
  </div>
</template>

<script>
import axios from '~plugins/axios'
import PostList from '~components/PostList'

export default {
  async asyncData({ req, error }) {
    let page = 0
    let [pageRes, countRes] = await Promise.all([
      axios.get(`/api/post/page/${page}?scope=published`),
      axios.get('/api/post/count/published'),
    ])
    return {
      posts: pageRes.data.list,
      count: countRes.data.result,
    }
  },
  components: {
    PostList
  }
}
</script>

<style scoped>
.index {
  width: 1000px;
  margin: 50px auto;
}

.more {
  background: #fff;
  border-radius: 2px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.26);
  margin-bottom: 40px;
  display: block;
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
  transition: all ease-in 0.2s;
}

.more:hover {
  background: #f2f2f2;
}

@media screen and (max-width: 960px) {
  .index {
    width: 100%;
    margin: 20px 0;
  }
  .more {
    margin: 0 10px;
  }
}
</style>
