<template>
  <div>
    <my-header></my-header>
    <side-menu></side-menu>
    <nuxt></nuxt>
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

