<template>
    <div>
        <article v-for="(post, index) in posts" :key="post.id" :class="{curr:currPostIndex==index}">
            <a href="javascript:;" @click="handlePostClick(index)">{{ post.title }}</a>
            <div class="handle">
                <a href="javascript:;" class="btn btn-small btn-danger" @click="offline(index)" v-if="post.status != 'offline'">下线</a>
                <nuxt-link target="_blank" class="btn btn-small btn-main" :to="'/post/'+post.id">预览</nuxt-link>
            </div>
        </article>
        <vue-page :total="count" :page="page" model="button" v-on:pageChange="pageChange" class="vue-page"></vue-page>
    </div>
</template>

<script>
import axios from '~plugins/axios'
import VuePage from '~components/VuePage'

export default{
    data(){
        return {
            posts:[],
            currPostIndex:0,
            count:0,
            page:0
        }
    },
    created(){
        this.getPageList(0)
        axios.get('/api/post/count/all').then(res=>{
             this.count= res.data.result
         })
       /* axios.all([
            axios.get('/api/post/page/0?scope=published'),
            axios.get('/api/post/count/published'),
        ]).then( (posRes,countRes) => {
             this.posts = posRes.data.list;
             this.count= countRes.data.result
        }).catch( error => {
            alert(error)
        })*/
      /*  [pageRes, countRes] = await Promise.all([
            axios.get('/api/post/page/0?scope=published'),
            axios.get('/api/post/count/published'),
        ])*/
       
    },
    components:{
        VuePage
    },
    methods:{
        pageChange(page){
            this.currPostIndex = 0
            this.page = page
            this.getPageList(page)
        },
        getPageList(page){
             axios.get(`/api/post/page/${page}`).then(res=>{
                this.posts = res.data.list;
                this.$emit('currPostChange',this.posts[0].id)
            })
        },
        handlePostClick(index) {
            this.currPostIndex = index
           this.$emit('currPostChange',this.posts[index].id)
        },
        offline(index) {
           axios.post('/api/post/update',{
                post: {
                    id: this.posts[index].id,
                    status: 'offline'
                }
            }).then((res) => {
                posts[index].status = 'offline';
            }).catch((err) => {
                alert(err)
            });
        }
    }
}
</script>

<style scoped>
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
.vue-page{
    padding-top:20px;
}
</style>
