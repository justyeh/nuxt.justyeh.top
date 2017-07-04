<template>
  <div class="admin">
    <my-header></my-header>
    <side-menu></side-menu>
    <div class="main">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/admin/Header.vue'
import SideMenu from '../components/admin/SideMenu.vue'

export default {
  components: {
    MyHeader,
    SideMenu
  }
}
</script>

<style scoped>
.admin {
  position: relative;
  height: 100%;
  min-width: 960px;
}

.main {
  position: absolute;
  top: 80px;
  left: 150px;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 0 50px;
}
</style>

<style>
.admin ::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #F5F5F5;
}

.admin ::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: rgba(100, 100, 100, 0.2);
  box-shadow: 0 0 6px rgba(100, 100, 100, 0.2);
}

.admin ::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: rgba(100, 100, 100, 0.6);
}
</style>



