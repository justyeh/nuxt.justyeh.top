<template>
  <div class="page">
    <post-list :posts="posts"></post-list>
    <nuxt-link class="more" to="/page/1">查看更多</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
import PostList from '~components/PostList'

export default {
  async asyncData({ error }) {
    const page = 0
    
    let [pageRes, countRes] = await Promise.all([
      axios.get(`/api/post/page/${page}?scope=published`),
      axios.get('/api/post/count/published'),
    ]).catch(err => {
      error({ statusCode: 400, message: err })
    })

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
.page {
  box-shadow: none;
}

.more {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.26);
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
  .more {
    margin: 0 10px;
  }
}
</style>
