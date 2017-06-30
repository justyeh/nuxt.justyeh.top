<template>
    <div class="main">
        <post-list class="post-list"></post-list>
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
    /*data() {
        return {
            post: {
                title: '',
                images: '',
                meta_description: '',
                markdown: '',
            },
            preview: false,
            currIndex: 0,
        }
    },*/
    components: {
        PostList,
        PostForm
    },
   /* mounted() {
        this.setPost(0);
    },
    methods: {
        addTag(tag) {
            this.tags.push(tag);
            axios.get('api/tag/add/' + tag).then((res) => {
                this.tags.push(tag)
            }).catch((error) => {
                alert(error)
            });
        },
        uploadImage(image) {
            axios.post('/api/upload/image', {
                image: image
            }).then((res) => {
                this.post.images = res.data.images
            }).catch((err) => {
                alert(err)
            });
        },
        updatePost() {
            axios.post('/api/post/update', {
                post: this.post
            }).then((res) => {
                this.posts[this.currIndex].title = this.post.title;
                //alert(res.data.message)
            }).catch((err) => {
                alert(err)
            });
        },
        publish() {
            axios.post('/api/post/update', {
                post: {
                    id: this.post.id,
                    status: 'published'
                }
            }).then((res) => {
                this.post.status = 'published';
                //alert(res.data.message)
            }).catch((err) => {
                alert(err)
            });
        }
    }*/
}

</script>

<style scoped>
.main {
    position: absolute;
    top: 80px;
    left: 150px;
    right: 0;
    bottom: 0;
    padding: 50px;
}

.post-list {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 360px;
    background: #f5f5f5;
    overflow-y: auto;
    padding: 20px 10px;
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
