<template>
    <div class="admin-main">
        <div class="article-list">
            <article v-for="(post, index) in posts">
                <a href="javascript:;" @click="setPost(post.id)">{{ post.title }}</a>
                <div class="handle">
                    <nuxt-link class="btn btn-small btn-danger" :to="'/post/update/'+post.id">删除</nuxt-link>
                    <nuxt-link target="_blank" class="btn btn-small btn-main" :to="'/post/'+post.id">查看</nuxt-link>
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
                <textarea type="text" slot="input" placeholder="标题" v-model="post.meta_description"></textarea>
            </form-group>
            <form-group>
                <template slot="label">正文</template>
                <yeh-markdown slot="input" class="yeh-markdown-theme" :markdown="post.markdown"></yeh-markdown>
            </form-group>
            <form-group>
                <template slot="label">标签</template>
                <tag-input slot="input" :tags="tags" v-on:addTag="addTag"></tag-input>
            </form-group>
            <div class="handle">
                <button class="btn btn-large btn-main" @click="updatePost">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '~plugins/axios'

import FormGroup from '../../components/FormGroup'
import TagInput from '../../components/TagInput'
import ImageUpload from '../../components/ImageUpload'
import YehMarkdown from '../../components/YehMarkdown'

export default {
    layout: 'admin',
    async asyncData({ error }) {
        return axios.get('/api/post/').then((res) => {
            return { posts: res.data.list }
        }).catch((err) => {
            error({ statusCode: 404, message: err.message })
        });
    },
    data(){
        return{
            post:{
                title:'',
                images:'',
                meta_description:'',
                markdown:'',
            },
            tags:['js','css'],
        }
    },
    created(){
        this.setPost(this.posts[0].id);
    },
    components:{
        FormGroup,
        TagInput,
        YehMarkdown,
        ImageUpload
    },
    methods:{
        addTag(tag){
            this.tags.push(tag);
            axios.get('api/tag/add/'+tag).then((res) => {
               this.tags.push(tag)
            }).catch((error) => {
                alert(error)
            });
        },
        uploadImage(image){
            axios.post('/api/upload/image', {
                image: image
            }).then((res) => {
                this.post.images = res.data.images
            }).catch((err) => {
                alert(err)
            });
        },
        setPost(postId){
            axios.get('/api/post/'+postId).then((res) => {
                this.post = res.data.list[0]
            }).catch((err) => {
                alert(err)
            });
        },
        updatePost(){
            axios.post('/api/post/update', {
                post:this.post
            }).then((res) => {
                alert(res.data.message)
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
article{
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}
article a{
    margin-bottom: 10px;
    color:#333;
    font-size:16px;
}
article .handle {
    text-align:right;
    padding-top: 10px;
}
article .handle a{
   margin: 0 5px;
}
.post{
    position: absolute;
    top: 0;
    right: 0;
    left: 360px;
    bottom: 0;
    padding: 20px;
    overflow-y: auto;
}
.post .handle{
    padding: 20px 0 0 100px;
}
</style>
