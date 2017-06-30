<template>
  <div class="app">
    <my-header></my-header>
    <nuxt></nuxt>
    <my-footer></my-footer>
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
    //直接将SEO脚本放在页面会被当成文本解析，所以将方法提取出来，放到mounted hook里面执行
    seo()
  }
}
</script>
