<template>
  <div>
    <my-header/>
    <side-menu/>
    <nuxt/>
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

