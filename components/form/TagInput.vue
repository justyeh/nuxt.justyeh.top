<template>
    <div>
        <div class="tags">
            <div class="btn btn-small btn-default" v-for="(tag,index) in selfTags" :key="tag.id">
                <span>{{tag.name}}</span>
                <i class="fa fa-trash-o" @click="delPostTag(index)"></i>
            </div>
        </div>
        <div class="tagInput">
            <input maxlength="50" type="text" @input="tagInput" @keyup.up.stop.prevent="currIndexChange('up')" @keyup.down.stop.prevent="currIndexChange('down')" @keyup.enter.stop.prevent="tagEnter" v-model="tag">
            <ul>
                <li :class="{curr:index === currIndex}" v-for="(tag,index) in autoComplete" :key="tag.id" @click="tagEnter(index)">{{tag.name}}</li>
                <template v-if="autoComplete.length == 0 && tag.length > 0">
                    <li class="curr" @click="addNewTag">将
                        <span>{{tag}}</span>添加到Tag表中</li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['tags'],
    data() {
        return {
            tag: '',
            currIndex: -1,
            autoComplete: [],
            selfTags: [],
        }
    },
    watch: {
        tags(val) {
            this.selfTags = val
        }
    },
    methods: {
        tagInput() {
            if (this.tag.trim() == '') {
                this.autoComplete = []
                return
            }
            axios.get(`/api/tag/search/${this.tag}`).then(res => {
                let data = res.data;
                if (data.code !== 200) {
                    console.error(data.message)
                }
                this.currIndex = -1;
                this.autoComplete = data.list
            })
        },
        tagEnter(index) {
            //为空不处理
            if (this.tag.trim() === '') {
                return;
            }

            //如果是点击的,if(index)不能判断是否有index参数，vue默认会传一个Event参数
            if (typeof index === 'number') {
                this.currIndex = index;
                this.tag = this.autoComplete[index].name
            }

            //autoComplete不为空，没有选中项时无效
            if (this.currIndex < 0 && this.autoComplete.length > 0) {
                return;
            }

            //防止添加重复Tag
            if (this.tags.filter(tag => tag.name === this.tag).length > 0) {
                alert("请不要添加重复的标签");
                return;
            }

            //区分添加已有的还是新的
            if (this.autoComplete.length > 0) {
                this.addPostTag()
            } else {
                this.addNewTag()
            }
        },
        currIndexChange(direction) {
            if (direction === 'up' && this.currIndex > 0) {
                this.currIndex--
            }
            if (direction === 'down' && this.currIndex < this.autoComplete.length - 1) {
                this.currIndex++
            }

            if (this.autoComplete.length > 0) {
                this.tag = this.autoComplete[this.currIndex].name
            }
        },
        delPostTag(index) {
            this.$emit("delTag", index)
        },
        addPostTag(newTagId) {
            this.$emit("addTag", {
                id: newTagId || this.autoComplete[this.currIndex].id,
                name: this.tag
            })
            this.autoComplete = []
            this.tag = ''
        },
        addNewTag() {
            axios.post('/api/tag/add', {
                tagName: this.tag
            }).then(res => {
                if (res.data.code !== 200) {
                    console.error(data.message)
                }
                this.addPostTag(res.data.insertId)
            })
        }
    }
}
</script>

<style scoped>
.tag-input {
    margin: 10px 0;
    display: flex;
}

.tags div {
    height: 26px;
    line-height: 26px;
    padding: 0 10px;
    margin: 5px 10px 5px 0;
}

i {
    color: rgb(255, 64, 129);
    cursor: pointer;
    margin-left: 5px;
}

.tagInput {
    position: relative;
}

ul {
    position: absolute;
    top: 38px;
    left: 0;
    width: 100%;
    z-index: 110;
    box-shadow: 0 0 6px rgba(100, 100, 100, 0.45);
    border-radius: 3px;
    overflow: hidden;
    background: #fff;
}

li {
    height: 30px;
    line-height: 30px;
    padding-left: 15px;
    cursor: pointer;
}

li span {
    color: #1b8afa;
}

li:hover,
li.curr {
    background: rgba(100, 100, 100, 0.1)
}

input {
    height: 36px;
    border: 1px solid #ccc;
    width: 100%;
    text-indent: 15px;
}

input:focus {
    border-color: rgb(51, 204, 250);
}
</style>
