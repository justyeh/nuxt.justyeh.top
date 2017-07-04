<template>
    <div>
        <page-header title="编辑博文">
            <button slot="handle" class="btn btn-main" @click="returnList">回列表</button>
        </page-header>
        <form-group>
            <template slot="label">标题</template>
            <input type="text" slot="input" placeholder="标题" v-model="post.title">
        </form-group>
        <form-group>
            <template slot="label">海报</template>
            <div slot="input">
                <input type="text" v-model="post.image">
                <image-upload :image="post.image"></image-upload>
            </div>
        </form-group>
        <form-group>
            <template slot="label">标签</template>
            <tag-input slot="input" :tags="post.tags" :postId="post.id"></tag-input>
        </form-group>
        <form-group>
            <template slot="label">简介</template>
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
        <div class="btn-group">
            <button class="btn btn-large btn-main" @click="updatePost">更新博客</button>
        </div>
    </div>
</template>

<script>
import axios from '~plugins/axios'
import { deepCopy } from '../../util/assist'

import FormGroup from '~components/form/FormGroup'
import TagInput from '~components/form/TagInput'
import ImageUpload from '~components/form/ImageUpload'
import VueMarkdown from '~components/form/VueMarkdown'
import PageHeader from '~components/admin/PageHeader'

export default {
    props: ['postId'],
    data() {
        return {
            post: {
                id: '',
                title: '',
                images: '',
                meta_description: '',
                markdown: '',
                tags: []
            },
            preview: false,
        }
    },
    components: {
        FormGroup,
        TagInput,
        VueMarkdown,
        ImageUpload,
        PageHeader
    },
    created() {
        this.setPost(this.postId)
    },
    watch: {
        postId(val) {
            this.setPost(parseInt(val))
        }
    },
    methods: {
        returnList() {
            this.$emit('updateView', 'PostList')
        },
        updatePost() {
            let tempPost = deepCopy(this.post);
            delete tempPost.tags
            axios.post('/api/post/update', {
                post: tempPost
            }).then((res) => {
                if (res.data.code !== 200) {
                    console.error(res.data.message)
                    return false;
                }
                this.$emit('postFormUpdated', this.post)
            }).catch((err) => {
                alert(err)
            });
        },
        setPost(postId) {
            if (isNaN(postId)) {
                return false;
            }
            axios.get(`/api/post/detail/${postId}`).then((res) => {
                this.post = res.data.list[0];
            }).catch((err) => {
                alert(err)
            });
        },
        addNewPost() {
            axios.post('/api/post/add', {
                post: this.post
            }).then((res) => {
                if (res.data.code !== 200) {
                    console.error(res.data.message)
                    return false;
                }
            }).catch((err) => {
                alert(err)
            });
        }
    }
}
</script>

<style scoped>
.btn-group {
    padding: 40px 0 60px 60px;
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
