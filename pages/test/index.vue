<template>
    <div class="page">
        <vue-page total='10' page='1' path='?page=' ></vue-page>
        <material-design-color></material-design-color>
    </div>
</template>

<script>
import VuePage from '../../components/VuePage'
import MaterialDesignColor from '../../components/tools/MaterialDesignColor'
export default {
    head() {
        return {
            title: `测试页`
        }
    },
    components: {
        VuePage,
        MaterialDesignColor
    }
}
</script>

<style>
.page{
    padding: 20px;
}
</style>
