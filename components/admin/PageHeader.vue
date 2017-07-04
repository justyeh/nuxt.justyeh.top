<template>
    <div class="wrap">
        <p>{{title}}</p>
        <slot name="handle"></slot>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #ddd;
    padding: 20px 0
}

p {
    font-size: 18px;
}
</style>
