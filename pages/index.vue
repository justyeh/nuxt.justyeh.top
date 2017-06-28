<template>
  <div class="container">
    <transition-group name="list" tag="section">
      <article v-for="(post, index) in posts" :key="post.id">
        <div class="poster" v-if="post.image" :style="{backgroundImage:'url('+post.image+')'}"></div>
        <router-link :to="'/post/'+post.id">{{ post.title }}</router-link>
        <div class="desc">{{post.meta_description}}</div>
      </article>
    </transition-group>
    <vue-page :total="total" :page="0" path="/page/" v-on:pageChange="pageChange"></vue-page>
  </div>
</template>

<script>
import axios from '~plugins/axios'
import VuePage from '../components/VuePage'
import ApiCfg from '../util/api.config'

export default {
  async asyncData({ query, error }) {

    let [pageRes, countRes] = await Promise.all([
      axios.get('/api/post/page/0?scope=published'),
      axios.get('/api/post/count/published'),
    ])
    return {
      posts: pageRes.data.list,
      count: countRes.data.result
    }
  },
  computed: {
    total() {
      return Math.ceil(this.count / ApiCfg.pageSize)
    }
  },
  components: {
    VuePage
  },
  methods: {
    pageChange(page) {
      axios.get(`/api/post/page/${page}?scope=published`).then(res => {
        this.posts = res.data.list;
      }).catch(error => console.error(error))
    }
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
  line-height: 36px;
  margin: 10px 20px 5px 20px;
  display: inline-block;
}

article a:hover {
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
  padding: 3px 10px;
}

.list-enter-active,
.list-leave-active {
  opacity: 0;
  transform: translateY(0);
  animation: fade-in 0.2s ease-in forwards;
  animation-delay: 0.3s;
}

.list-enter,
.list-leave-active {
  animation: fade-out 0.3s ease-in forwards;
}

@keyframes fade-in {
  0% {
    display: none;
    opacity: 0;
  }
  5% {
    display: black;
    opacity: 0;
    transform: translateY(3000px)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
}

@keyframes fade-out {
  0% {
    display: block;
    opacity: 1;
  }
  100% {
    display: none;
    opacity: 0;
  }
}
</style>
