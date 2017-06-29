<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from '~components/Header.vue'
import MyFooter from '~components/Footer.vue'
import {seo} from '../util/assist'

export default {
  components: {
    MyHeader,
    MyFooter
  },
  mounted(){
    seo()
  }
}
</script>
