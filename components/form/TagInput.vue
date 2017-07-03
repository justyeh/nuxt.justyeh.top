<template>
    <div>
        <div class="tags">
            <div class="btn btn-small btn-default" v-for="(tag,index) in tags" :key="tag.id">
                <span>{{tag.name}}</span>
                <i class="fa fa-trash-o" @click="delPostTag(index)"></i>
            </div>
        </div>
        <div class="tagInput">
            <input type="text" @input="tagInput" @keyup.up.stop.prevent="currIndexChange('up')" @keyup.down.stop.prevent="currIndexChange('down')" @keyup.enter.stop.prevent="tagEnter" v-model="tag">
            <ul>
                <li :class="{curr:index === currIndex}" v-for="(tag,index) in autoComplete" :key="tag.id" @click="tagEnter(index)">{{tag.name}}</li>
                <template v-if="autoComplete.length == 0 && tag.length > 0">
                    <li @click="addNewTag">将{{tag}}添加到Tag表中</li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from '~plugins/axios'

export default {
    data() {
        return {
            tag: '',
            currIndex: 0,
            autoComplete: []
        }
    },
    props: {
        tags: {
            type: Array
        },
        postId: {}
    },
    watch: {
        tags(val) {
            this.tags = val
        }
    },
    methods: {
        delPostTag(index) {
            axios.post("/api/post/tag/del", {
                postTagId: this.tags[index].postTagId
            }).then(res => {
                if (res.data.code !== 200) {
                    console.error(res.data.message);
                    return false
                }
                this.tags.splice(index, 1);
            }).catch((err) => {
                alert(err)
            });
        },
        tagEnter(index) {
            //为空不处理
            if (this.tag.trim() === '') {
                return;
            }
            //防止添加重复Tag
            if (this.tags.filter(tag => tag.name === this.autoComplete[this.currIndex].name).length > 0) {
                alert("请不要添加重复的标签");
                return;
            }

            //如果是点击的,if(index)不行，vue默认会传一个Event参数
            if (typeof index === 'Number') {
                this.currIndex = index;
            }

            //区分添加已有的还是新的
            if (this.autoComplete.length > 0) {
                this.addPostTag()
            } else {
                this.addNewTag()
                /* this.addNewTag(insertId => {
                     this.addPostTag(insertId)
                 })*/
            }
        },
        addPostTag(newTagId) {
            let insertTtagId = newTagId || this.autoComplete[this.currIndex].id;
            console.log(insertTtagId)
            axios.post('/api/post/tag/add', {
                postTag: {
                    postId: this.postId,
                    tagId: insertTtagId
                }
            }).then(res => {
                if (res.data.code !== 200) {
                    console.error(data.message)
                }
                this.tags.push({
                    postTagId: res.data.insertId,
                    tagId: insertTtagId,
                    name: this.autoComplete[this.currIndex].name
                })
                this.autoComplete = [];
                this.tag = ''
            });
        },
        addNewTag() {
            axios.post('/api/tag/add', {
                tagNme: this.tag
            }).then(res => {
                if (res.data.code !== 200) {
                    console.error(data.message)
                }
                this.addPostTag(res.data.insertId)
            })
        },
        currIndexChange(direction) {
            if (direction === 'up' && this.currIndex > 0) {
                this.currIndex--
            }
            if (direction === 'down' && this.currIndex < this.autoComplete.length - 1) {
                this.currIndex++
            }
        },
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
                this.currIndex = 0
                this.autoComplete = data.list
            })
        },
        addTag() {
            axios.post(`/api/tag/add`, {
                tagName: this.tag
            }).then(res => {
                let data = res.data;
                if (data.code !== 200) {
                    console.error(data.message)
                }
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
