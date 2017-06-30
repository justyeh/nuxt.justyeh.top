<template>
  <div class="app">
    <nuxt></nuxt>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from '~components/Footer'

export default {
  components: {
    MyFooter
  }
}
</script>

<style scoped>
.app {
    background: rgb(38, 50, 56) no-repeat center url(~assets/img/star-bg.svg) /cover
}
</style>


