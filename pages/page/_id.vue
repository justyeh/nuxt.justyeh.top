<template>
    <div class="container">
        <post-list :posts="posts"></post-list>
        <vue-page :total="count" :page="page" path="/page/" model="link"></vue-page>
    </div>
</template>

<script>
import axios from '~plugins/axios'
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
        ])
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
