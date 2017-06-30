<template>
  <div class="error">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.error {
  text-align: center;
  padding: 30px 0;
}

.title {
  margin-top: 15px;
  font-size: 5em;
}

.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}

a {
  margin-top: 50px;
  border: 1px solid #3084bb;
  color: #3084bb;
  font-size: 16px;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
}
</style>
