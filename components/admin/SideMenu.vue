<template>
  <div class="side-menu">
    <ul>
      <li>
        <nuxt-link to="/admin">
          <i class="fa fa-list"></i>博客管理</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/tag">
          <i class="fa fa-tags"></i>标签管理</nuxt-link>
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

a {
  display: block;
  height: 60px;
  line-height: 60px;
  color: #fff;
  border-bottom: 1px solid rgba(100, 100, 100, 0.3)
}

a.nuxt-link-exact-active {
  color: #1b8afa
}

i {
  margin: 0 10px 0 20px;
  ;
}
</style>
