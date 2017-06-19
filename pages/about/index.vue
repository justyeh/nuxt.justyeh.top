<template>
  <section class="container">
    <img src="../../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      关于Yeh
    </h1>
    <nuxt-link class="button" to="/">
      Home
    </nuxt-link>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: `关于`
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
