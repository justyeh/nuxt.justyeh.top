<template>
        <css-beautify></css-beautify>
</template>

<script>
import CssBeautify from '~components/tools/CssBeautify'
export default {
    head() {
        return {
            title: `测试页`
        }
    },
    components: {
        CssBeautify
    }
}
</script>

<style>
.page{
    padding: 20px;
}
</style>
