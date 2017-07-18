<template>
    <div class="tags">
        <page-header title="创建新博文"></page-header>
        <table>
            <thead>
                <tr>
                    <th style="width:10%">序号</th>
                    <th style="width:30%">名称</th>
                    <th style="width:15%">关联的文章</th>
                    <th style="width:20%">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tag,index) in tags" :key="tag.id">
                    <td class="text-center">{{index+1}}</td>
                    <td>{{tag.name}}</td>
                    <td class="text-center">
                        <span v-if="tag.postNum==0" class="empty">{{tag.postNum}}</span>
                        <span v-else @click="showPost(tag.id)">{{tag.postNum}}</span>
                    </td>
                    <td class="text-center">
                        <button class="btn btn-danger btn-small" @click="delTag">删除</button>
                        <button class="btn btn-main btn-small" @click="bindEditTag(index)">编辑</button>
                    </td>
                </tr>
            </tbody>
        </table>
    
        <modal :show.sync="editTagModalShow" title="编辑Tag">
            <div slot="content">
                <form-group>
                    <template slot="label">名称</template>
                    <input type="text" slot="input" v-model="editTag.name">
                </form-group>
                <div class="btn-group">
                    <button class="btn btn-default" @click="editTagModalShow = false">取消</button>
                    <button class="btn btn-main" @click="updateTag">提交</button>
                </div>
            </div>
        </modal>
    
        <modal :show.sync="delTagModalShow" title="删除Tag" class="del-modal">
            <div slot="content">
                <p class="msg">确认删除该Tag吗？</p>
                <div class="btn-group">
                    <button class="btn btn-danger" @click="delTag">删除</button>
                    <button class="btn btn-main" @click="delTagModalShow = false">取消</button>
                </div>
            </div>
        </modal>
    
        <modal :show.sync="postsShow" title="Post列表" class="post-modal">
            <div slot="content">
                <div v-for="(post,index) in posts" :key="post.id" class="list">
                    <p>{{index+1}}</p>
                    <a :href="`/post/${post.id}`" target="_blank">{{post.title}}</a>
                </div>
                <div class="btn-group">
                    <button class="btn btn-default btn-small" @click="postsShow = false">关闭</button>
                </div>
            </div>
        </modal>
        <notifications  position="bottom left" :duration="600" ></notifications>
    </div>
</template>


<script>
import axios from 'axios'

import PageHeader from '~components/admin/PageHeader'
import Modal from '~components/Modal'
import FormGroup from '~components/form/FormGroup'

export default {
    async asyncData() {
        let tagsRes = await axios.get('/api/tag/list')
        return {
            tags: tagsRes.data.list
        }
    },
    layout: 'admin',
    data() {
        return {
            editTagModalShow: false,
            delTagModalShow: false,
            postsShow: false,
            editTag: {
                id: null,
                name: ''
            },
            posts: []
        }
    },
    components: {
        PageHeader,
        Modal,
        FormGroup
    },
    methods: {
        bindEditTag(index) {
            this.editTag = this.tags[index]
            this.editTagModalShow = true
        },
        updateTag() {
            axios.post('/api/tag/update', editTag).then(res => {
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
        delTag() {
           this.$notify({
               type:'error',
                title: '测试',
                text: 'notification测试'
            });
            /*this.$notify({
               type:'success',
                title: '测试',
                text: 'notification测试'
            });*/
            

            //this.delTagModalShow = true
        },
        async showPost(tagId) {
            let postsRes = await axios.get(`/api/post/list/${tagId}`)
            this.posts = postsRes.data.list
            this.postsShow = true
        }
    }
}
</script>

<style scoped>
.tags {
    padding-bottom: 50px;
}

table {
    width: 100%;
    margin-top: 20px;
}

thead {
    background: #f1f2f3;
}

td,
th {
    border: 1px solid #e1e2e3;
    vertical-align: middle;
}

th {
    height: 40px;
}

td {
    padding: 10px 8px;
}

td span {
    display: inline-block;
    color: #fff;
    background: #607d8b;
    width: 26px;
    font-size: 12px;
    border-radius: 2px;
    cursor: pointer;
}

td span.empty {
    background: #f9a825;
    cursor: default;
}

.modal .btn-group {
    padding-top: 10px;
    text-align: center;
}

.del-modal p.msg {
    padding: 10px 0;
}

.post-modal .btn-group {
    text-align: right;
}

.post-modal .list {
    display: flex;
    padding-bottom: 5px;
}

.post-modal .list p {
    width: 20px;
    color: #666;
}

td button {
    margin: 0 10px;
}
</style>
