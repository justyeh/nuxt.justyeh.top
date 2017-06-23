<template>
    <div class="markdown">
        <div class="preview" @click="preview = !preview">{{preview ? '编辑' : '预览'}}</div>
        <textarea placeholder="正文" v-model="markdown">{{markdown}}</textarea>
        <markdown-view :markdown="markdown" v-show="preview" class="html"></markdown-view>
    </div>
</template>

<script>
import MarkdownEditor from './MarkdownEditor'

export default {
    props: ['markdown'],
    components:{
        MarkdownEditor
    },
    data() {
        return {
            preview: false
        }
    }
}
</script>
<style scoped>

.markdown {
    position: relative;
    height: 500px;
    width: 100%;
}

.markdown .preview {
    width: 40px;
    height: 30px;
    line-height: 30px;
    box-shadow: 0 0 3px rgba(100, 100, 100, 0.4);
    background: #e2e2e2;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 100;
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
    color: #1b8afa;
}

.markdown textarea {
    padding: 5px 15px;
    display: block;
    height: 100%;
    width: 100%;
    border: 1px solid #ddd;
    resize: none;
}

.markdown textarea:focus {
    border-color: rgb(51, 204, 250);
}

.markdown .html {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 99;
    overflow-y: auto;
    background: #f2f2f2;
    transition: width ease cubic-bezier(0.075, 0.82, 0.165, 1);
    padding:10px 20px;
}

.markdown>div.show {
    width: 100%;
}
</style>
