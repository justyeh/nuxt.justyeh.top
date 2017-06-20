<template>
  <section class="detail">
    <div class="title">{{post.title}}</div>
    <div class="info">
      <p>{{post.updated_at}}</p>
    </div>
    <div class="conten">
      {{post.markdown}}
    </div>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/post/' + params.id).then((res) => {
      return { post: res.data.list }
    }).catch((err) => {
      error({ statusCode: 404, message: err.message })
    })
  },
  head () {
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
.title {
  padding: 20px;
  font-size: 26px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.info {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 20px 20px 0 20px;
}

.conten {
  padding: 20px;
  line-height: 26px;
}
</style>
