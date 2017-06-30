<template>
  <header>
    <nuxt-link to="/" class="nav-left">
      <img src="../../assets/img/head.jpg" />
      <span>JustYeh的前端博客</span>
    </nuxt-link>
    <nuxt-link to="">退出</nuxt-link>
  </header>
</template>

<style scoped>
header {
  background: #1b8afa;
  position: absolute;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  font-size: 18px;
  color: #fff;
}

header .nav-left {
  display: flex;
  align-items: center;
}

header .nav-left img {
  width: 40px;
  border-radius: 100%;
  margin-right: 20px;
}

header a {
  color: rgba(250, 250, 250, 0.8);
}
</style>
