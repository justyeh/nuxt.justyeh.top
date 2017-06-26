<template>
    <div>
        <nuxt to="">&larr;上一页</nuxt>
        <nuxt to="">下一页&rarr;</nuxt>
    </div>
</template>

<script>
export default {
    props: ['total', 'page']
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: space-between;
}

div a {
    display: inline-block;
    width: 100px;
    padding: 10px 0;
    border: 1px solid #ccc;
    border-radius: 3px;
}

div a:not(.disable):hover {
    border-color: rgb(51, 204, 250);
}
</style>
