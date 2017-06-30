<template>
  <div class="side-menu">
    <ul>
      <li>
        <nuxt-link to="admin/posts">博客管理</nuxt-link>
      </li>
      <li>
        <nuxt-link to="admin/tags">标签管理</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.side-menu {
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  width: 150px;
  box-shadow: 0 5px 5px rgba(100, 100, 100, 0.5);
  background: #263238;
  z-index: 99;
}

.side-menu a {
  display: block;
  height: 60px;
  line-height: 60px;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid rgba(100, 100, 100, 0.3)
}

.side-menu a:hover {
  background: #263238;
}
</style>
