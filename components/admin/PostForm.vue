<template>
    <div>
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
</template>

<script>
import FormGroup from '~components/form/FormGroup'
import TagInput from '~components/form/TagInput'
import ImageUpload from '~components/form/ImageUpload'
import VueMarkdown from '~components/form/VueMarkdown'

export default {
    components: {
        FormGroup,
        TagInput,
        VueMarkdown,
        ImageUpload
    }
}
</script>

<style>
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
