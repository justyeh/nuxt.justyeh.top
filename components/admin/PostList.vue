<template>
    <div>
        <article v-for="(post, index) in posts" :key="post.id" :class="{curr:currPost.id==post.id}">
            <a href="javascript:;" @click="handlePostClick(index)">{{ post.title }}</a>
            <div class="btn-group">
                <a href="javascript:;" class="btn btn-small btn-danger" @click="offline(index)" v-if="post.status != 'offline'">下线</a>
                <nuxt-link target="_blank" class="btn btn-small btn-main" :to="'/post/'+post.id">预览</nuxt-link>
            </div>
        </article>
        <vue-page :total="count" :page="page" model="button" v-on:pageChange="getPageList" class="vue-page"></vue-page>
    </div>
</template>

<script>
import axios from '~plugins/axios'
import VuePage from '~components/VuePage'

export default {
    data() {
        return {
            posts: [],
            currPost: 0,
            count: 0,
            page: 0
        }
    },
    created() {
        this.getPageList(0)
        axios.get('/api/post/count/all').then(res => {
            this.count = res.data.result
        })
    },
    components: {
        VuePage
    },
    methods: {
        getPageList(page) {
            axios.get(`/api/post/page/${page}`).then(res => {
                this.posts = res.data.list;
                this.currPost = this.posts[0];
                this.page = page;
                this.$emit('currPostChange', this.posts[0])
            })
        },
        handlePostClick(index) {
            this.currPost = this.posts[index]
            this.$emit('currPostChange', this.currPost)
        },
        handlePostFormUpdate(newPost) {
           this.currPost.title = newPost.title;
           this.currPost.status = newPost.status;
        },
        offline(index) {
            axios.post('/api/post/update', {
                post: {
                    id: this.posts[index].id,
                    status: 'offline'
                }
            }).then((res) => {
                this.posts[index].status = 'offline';
            }).catch((err) => {
                alert(err)
            });
        }
    }
}
</script>

<style scoped>
article {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

article a {
    margin-bottom: 10px;
    color: #333;
    font-size: 16px;
    transition: all ease .1s;
}

article.curr>a {
    color: #1b8afa;
    font-weight: bold;
}

article .btn-group {
    text-align: right;
    padding-top: 10px;
}

article .btn-group a {
    font-size: 14px;
    color: #fff;
}

.vue-page {
    padding-top: 20px;
}
</style>
