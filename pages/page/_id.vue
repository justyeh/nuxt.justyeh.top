<template>
    <div class="index">
        <post-list :posts="posts"></post-list>
        <vue-page :total="count" :page="page" path="/page/" model="link"></vue-page>
    </div>
</template>

<script>
import axios from 'axios'
import VuePage from '~components/VuePage'
import PostList from '~components/PostList'


export default {
    validate({ params }) {
        // Must be a number
        return /^\d+$/.test(params.id)
    },
    async asyncData({ params, error }) {
        let page = parseInt(params.id);
        let [pageRes, countRes] = await Promise.all([
            axios.get(`/api/post/page/${page}?scope=published`),
            axios.get('/api/post/count/published'),
        ]).catch(err => {
            error({ statusCode: 400, message: err })
        })
        
        return {
            posts: pageRes.data.list,
            count: countRes.data.result,
            page
        }
    },
    components: {
        VuePage,
        PostList
    }
}
</script>

<style scoped>
.index {
    width: 1000px;
    margin: 50px auto;
}

@media screen and (max-width: 960px) {
    .index {
        width: 100%;
        margin: 20px 0;
    }
    .more {
        margin: 0 10px;
    }
}
</style>

