<template>
    <div class="admin-main">
        <div class="article-list">
            <article v-for="(post, index) in posts" :class="{curr: index == currIndex}" :key="post.id">
                <a href="javascript:;" @click="setPost(index)">{{ post.title }}</a>
                <div class="handle">
                    <a href="javascript:;" class="btn btn-small btn-danger" @click="offline(index)" v-if="post.status != 'offline'">下线</a>
                    <nuxt-link target="_blank" class="btn btn-small btn-main" :to="'/post/'+post.id">预览</nuxt-link>
                </div>
            </article>
        </div>
        <div class="post">
            <form-group>
                <template slot="label">标题</template>
                <input type="text" slot="input" placeholder="标题" v-model="post.title">
            </form-group>
            <form-group>
                <template slot="label">海报</template>
                <div slot="input">
                    <input type="text" v-model="post.image">
                    <image-upload :image="post.image" v-on:uploadImage="uploadImage"></image-upload>
                </div>
            </form-group>
            <form-group>
                <template slot="label">seo描述</template>
                <textarea type="text" slot="input" placeholder="标题" v-model="post.meta_description" maxlength="200"></textarea>
            </form-group>
            <form-group>
                <template slot="label">正文</template>
                <div slot="input" class="markdown">
                    <button class="btn btn-small btn-main" @click="preview = !preview">{{preview ? '编辑' : '预览'}}</button>
                    <textarea v-model="post.markdown" @keydown.ctrl.83.stop.prevent="updatePost"></textarea>
                    <vue-markdown :markdown="post.markdown" v-show="preview"></vue-markdown>
                </div>
            </form-group>
            <form-group>
                <template slot="label">标签</template>
                <tag-input slot="input" :tags="post.tags" v-on:addTag="addTag"></tag-input>
            </form-group>
            <div class="handle">
                <button class="btn btn-large btn-main" @click="updatePost">保存</button>
                <button class="btn btn-large btn-main" v-if="post.status == 'draft'" @click="publish">正式发布</button>
                <button class="btn btn-large btn-main" v-if="post.status == 'offline'" @click="publish">重新发布</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '~plugins/axios'

import FormGroup from '../../components/FormGroup'
import TagInput from '../../components/TagInput'
import ImageUpload from '../../components/ImageUpload'
import VueMarkdown from '../../components/VueMarkdown'

export default {
    layout: 'admin',
    async asyncData({ error }) {
        let [pageRes, countRes] = await Promise.all([
            axios.get('/api/post/page/0?scope=published'),
            axios.get('/api/post/count/published'),
        ])
        return {
            posts: pageRes.data.list,
            count: countRes.data.result
        }
    },
    data() {
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
    },
    mounted() {
        this.setPost(0);
    },
    components: {
        FormGroup,
        TagInput,
        VueMarkdown,
        ImageUpload
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
        setPost(index) {
            if (isNaN(index)) {
                console.error('the id is required')
                return false;
            }
            axios.get('/api/post/detail/' + this.posts[index].id).then((res) => {
                this.currIndex = index;
                this.post = res.data.list[0];
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
        },
        offline(index) {
            axios.post('/api/post/update', {
                post: {
                    id: this.posts[index].id,
                    status: 'offline'
                }
            }).then((res) => {
                posts[index].status = 'offline';
                //alert(res.data.message)
            }).catch((err) => {
                alert(err)
            });
        }
    }
}

</script>

<style>
.admin-main {
    position: fixed;
    top: 80px;
    left: 150px;
    right: 0;
    bottom: 0;
    padding: 50px;
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: rgba(100, 100, 100, 0.2);
    box-shadow: 0 0 6px rgba(100, 100, 100, 0.2);
}

::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(100, 100, 100, 0.6);
}

.article-list {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 360px;
    background: #f5f5f5;
    overflow-y: auto;
    padding: 20px 10px;
}

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

article .handle {
    text-align: right;
    padding-top: 10px;
}

article .handle a {
    margin: 0 5px;
}

.post {
    position: absolute;
    top: 0;
    right: 0;
    left: 360px;
    bottom: 0;
    padding: 20px;
    overflow-y: auto;
}

.post .handle {
    padding: 20px 0 0 100px;
}

.post .handle .btn {
    margin-right: 10px;
}

.markdown {
    position: relative;
    width: 100%;
}

.markdown .btn {
    box-shadow: 0 0 3px rgba(100, 100, 100, 0.8);
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 100;
    padding: 5px 10px;
}

.markdown textarea {
    padding: 5px 15px;
    display: block;
    height: 500px !important;
    width: 100%;
    border: 1px solid #ddd;
    resize: none;
}

.markdown textarea:focus {
    border-color: rgb(51, 204, 250);
}

.markdown>div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 99;
    overflow-y: auto;
    background: #f2f2f2;
    transition: width ease cubic-bezier(0.075, 0.82, 0.165, 1);
    padding: 10px 20px;
}
</style>
