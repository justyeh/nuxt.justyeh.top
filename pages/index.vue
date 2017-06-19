<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      叶文祥的前端博客
    </h1>

    <nuxt-link to="/post">
      博客列表
    </nuxt-link>
  </section>
</template>

<script>

export default {
  head () {
    return {
      title: '叶文祥的前端博客'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
