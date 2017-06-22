<template>
    <div class="admin-main">
        <div class="article-list">
            <article v-for="(post, index) in posts">
                <a href="javascript:;" @click="updatePost(index)">{{ post.title }}</a>
                <div class="handle">
                    <nuxt-link class="del" :to="'/post/update/'+post.id">删除</nuxt-link>
                    <nuxt-link target="_blank" class="view" :to="'/post/'+post.id">查看</nuxt-link>
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
                <image-upload slot="input" :iamge="post.images" v-on:uploadImage="uploadImage"></image-upload>
            </form-group>
            <form-group>
                <template slot="label">seo描述</template>
                <input type="text" slot="input" placeholder="标题" v-model="post.meta_description">
            </form-group>
            <form-group>
                <template slot="label">正文</template>
                <yeh-markdown slot="input" class="yeh-markdown-theme" :markdown="post.markdown"></yeh-markdown>
            </form-group>
            <form-group>
                <template slot="label">标签</template>
                <tag-input slot="input" :tags="tags" v-on:addTag="addTag"></tag-input>
            </form-group>
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
            index:0
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
               this.tags.push(tag);
            }).catch((error) => {
                alert(error.message)
            });
        },
        uploadImage(image){
            axios.post('/upload/image', {
                image: image
            }).then((res) => {
                this.post.images = res.data.images;
            }).catch(function (error) {
                alert(err)
            });
        },
        setPost(postId){
            axios.get('/api/post/'+postId).then((res) => {
                 console.log('line98:' + this.index++)
                this.post = res.data.list[0];
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
}
article .handle {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
}
article .handle a{
   margin: 0 5px;
   display: inline-block;
   padding: 3px 6px;
   color: #fff;
   background: rgb(38, 50, 56);
   border-radius: 3px;
   font-size: 14px;
}
article .handle a.del{
    background: rgb(255, 64, 129);
}
article .handle a.view{
    background: rgb(51, 204, 250);
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

</style>
