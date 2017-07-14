<template>
    <div>
        <page-header title="编辑博文">
            <button slot="handle" class="btn btn-main" @click="returnList">回列表</button>
        </page-header>
        <form-group>
            <template slot="label">标题</template>
            <input type="text" slot="input" placeholder="标题" v-model="post.title" maxlength="100">
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
            <tag-input slot="input" :tags="post.tags" v-on:delTag="delTag" v-on:addTag="addTag"></tag-input>
        </form-group>
        <form-group>
            <template slot="label">简介</template>
            <textarea type="text" slot="input" placeholder="标题" v-model="post.meta_description" maxlength="200"></textarea>
        </form-group>
        <form-group>
            <template slot="label">正文</template>
            <div slot="input" class="markdown">
                <button class="btn btn-small btn-main" @click="preview = !preview">{{preview ? '编辑' : '预览'}}</button>
                <textarea v-model="post.markdown" @keydown.ctrl.83.stop.prevent="updateMarkdown"></textarea>
                <vue-markdown :markdown="previewMarkdown" v-show="preview"></vue-markdown>
            </div>
        </form-group>
        <div class="btn-group">
            <button class="btn btn-large btn-main" @click="updatePost">更新博客</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
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
                title: '',
                images: '',
                meta_description: '',
                markdown: '',
                tags: [],
                updated: null
            },
            preview: false,
            previewMarkdown: ''
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
            this.setPost(val)
        },
        preview() {
            if (this.preview) {
                this.previewMarkdown = this.post.markdown
            }
        }
    },
    methods: {
        returnList() {
            this.$emit('updateView', 'PostList')
        },
        addTag(tag) {
            axios.post('/api/post/tag/add', {
                postTag: {
                    postId: this.postId,
                    tagId: tag.id
                }
            }).then(res => {
                if (res.data.code !== 200) {
                    console.error(data.message)
                }
                this.post.tags.push({
                    postTagId: res.data.insertId,
                    tagId: tag.id,
                    name: tag.name
                })
            });
        },
        delTag(index) {
            axios.post("/api/post/tag/del", {
                postTagId: this.post.tags[index].postTagId
            }).then(res => {
                if (res.data.code !== 200) {
                    console.error(res.data.message);
                    return false
                }
                this.post.tags.splice(index, 1);
            }).catch((err) => {
                alert(err)
            });
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
                this.$emit('postUpdated', this.post)
            }).catch((err) => {
                alert(err)
            });
        },
        updateMarkdown() {
            let tempPost = {
                id: this.post.id,
                markdown: this.post.markdown
            }
            axios.post('/api/post/update', {
                post: tempPost
            }).then((res) => {
                if (res.data.code !== 200) {
                    console.error(res.data.message)
                    return false;
                }
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
