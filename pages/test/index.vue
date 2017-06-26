<template>
    <section class="page">
        <vue-page totak="10" page="1"></vue-page>
    </section>
</template>

<script>
import VuePage from '../../components/VuePage'
export default {
    head() {
        return {
            title: `测试页`
        }
    },
    components: {
        VuePage
    }
}
</script>

<style scoped>
.detail {
    padding: 20px;
    font-size: 16px;
    line-height: 30px;
}

p {
    padding: 10px 0;
    text-indent: 2em;
}
</style>
