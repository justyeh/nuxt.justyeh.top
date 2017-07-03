<template>
    <div class="root">
        <post-list class="post-list" v-on:currPostChange="currPostChange" ref="potslist"></post-list>
        <post-form class="post-form" v-on:postFormUpdated="postFormUpdated" :currPost="currPost"></post-form>
    </div>
</template>

<script>
import axios from '~plugins/axios'

import PostList from '~components/admin/PostList'
import PostForm from '~components/admin/PostForm'


export default {
    layout: 'admin',
    /* async asyncData({ error }) {
         let [pageRes, countRes] = await Promise.all([
             axios.get('/api/post/page/0?scope=published'),
             axios.get('/api/post/count/published'),
         ])
         return {
             posts: pageRes.data.list,
             count: countRes.data.result
         }
     },*/
    data() {
        return {
            currPost: null
        }
    },
    components: {
        PostList,
        PostForm
    },
    methods: {
        currPostChange(currPost) {
            this.currPost = currPost;
        },
        postFormUpdated(newPost) {
            this.$refs.potslist.handlePostFormUpdate(newPost);
        }
    }
}

</script>

<style scoped>
.root {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.post-list {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 360px;
    background: #f5f5f5;
    overflow-y: auto;
    padding: 20px 10px 0 10px;
}

.post-form {
    position: absolute;
    top: 0;
    right: 0;
    left: 360px;
    bottom: 0;
    padding: 20px;
    overflow-y: auto;
}
</style>
