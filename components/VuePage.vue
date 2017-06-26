<template>
    <div>
        <a href="javascript:;" class="disable" v-if="page == 0">&larr;Prev</a>
        <nuxt-link :to="'/'+(page-1)" v-else>&larr;Prev</nuxt-link>
    
        <a href="javascript:;" class="disable" v-if="page >= total">Prev&rarr;</a>
        <nuxt-link :to="'/'+(page+1)" v-else>Next&rarr;</nuxt-link>
    </div>
</template>

<script>
export default {
   props: {
        total: {
            type: Number
        },
        page: {
            type: Number
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: space-between;
}

div a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #666;
    border-radius: 3px;
    text-align: center;
    color: #666;
}

div a.disable {
    cursor: not-allowed;
    color: #ddd;
    border-color: #ddd;
}

div a:not(.disable):hover {
    border-color: rgb(51, 204, 250);
    color: rgb(51, 204, 250);
}
</style>
