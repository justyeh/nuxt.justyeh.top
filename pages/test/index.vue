<template>
    <div class="page">
        <vue-page total="10" page="5" path="?page="></vue-page>
    </div>
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

<style>
.page{
    padding: 20px;
}
</style>
