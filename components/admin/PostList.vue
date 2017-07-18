<template>
    <div>
        <page-header title="博文列表">
            <button slot="handle" class="btn btn-main" @click="addNewPost">创建新博文</button>
        </page-header>
        <article v-for="(post, index) in posts" :key="post.id">
            <a href="javascript:;" @click="editPost(post.id)">{{ post.title }}</a>
            <div class="btn-group">
                <a href="javascript:;" class="btn btn-small btn-danger" @click="updateStatus(index,'offline')" v-if="post.status == 'published'">下线</a>
                <a href="javascript:;" class="btn btn-small btn-danger" @click="updateStatus(index,'published')" v-if="post.status == 'offline'">重新发布</a>
                <a href="javascript:;" class="btn btn-small btn-danger" @click="updateStatus(index,'published')" v-if="post.status == 'draft'">正式发布</a>
                <nuxt-link target="_blank" class="btn btn-small btn-main" :to="'/post/'+post.id">预览</nuxt-link>
            </div>
        </article>
        <vue-page :total="count" :page="page" model="button" v-on:pageChange="getPageList" class="vue-page"></vue-page>
    </div>
</template>

<script>
import axios from 'axios'

import VuePage from '~components/VuePage'
import PageHeader from '~components/admin/PageHeader'

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
        VuePage,
        PageHeader
    },
    methods: {
        refreshComponent(isSaveCurrPage) {
            if (isSaveCurrPage) {
                this.getPageList(this.page)
            } else {
                this.getPageList(0)
            }
        },
        addNewPost() {
            this.$emit('updateView', 'NewPost')
        },
        editPost(postId) {
            this.$emit('editPost', postId);
        },
        getPageList(page) {
            axios.get(`/api/post/page/${page}`).then(res => {
                this.posts = res.data.list;
                this.currPost = this.posts[0];
                this.page = page;
                this.$emit('currPostChange', this.posts[0])
            })
        },
        handlePostFormUpdate(newPost) {
            this.currPost.title = newPost.title;
            this.currPost.status = newPost.status;
        },
        updateStatus(index, newStatus) {
            axios.post('/api/post/update', {
                post: {
                    id: this.posts[index].id,
                    status: newStatus
                }
            }).then((res) => {
                this.posts[index].status = newStatus;
            }).catch((err) => {
                alert(err)
            });
        }
    }
}
</script>

<style scoped>
article {
    margin: 20px 0;
    padding: 10px;
    box-shadow: 0 0 15px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .1);
    transition: all ease 0.12s;
}

article:hover {
    box-shadow: 0 0 15px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, 0.15);
}

article a {
    margin-bottom: 10px;
    color: #333;
    font-size: 16px;
    transition: all ease .1s;
}

article.curr a {
    color: #1b8afa;
}

article .btn-group {
    text-align: right;
    padding: 10px 0 0 0;
}

article .btn-group a {
    font-size: 14px;
    color: #fff;
}

.vue-page {
    padding: 20px 0;
}
</style>
