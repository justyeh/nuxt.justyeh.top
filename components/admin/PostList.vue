<template>
    <div>
        <article v-for="(post, index) in posts" :key="post.id">
            <a href="javascript:;" @click="setPost(index)">{{ post.title }}</a>
            <div class="handle">
                <a href="javascript:;" class="btn btn-small btn-danger" @click="offline(index)" v-if="post.status != 'offline'">下线</a>
                <nuxt-link target="_blank" class="btn btn-small btn-main" :to="'/post/'+post.id">预览</nuxt-link>
            </div>
        </article>
        <vue-page :total="count" :page="page" model="button" v-on:pageChange="pageChange"></vue-page>
    </div>
</template>

<script>
import axios from '~plugins/axios'
import VuePage from '~components/VuePage'

export default{
    data(){
        return {
            posts:[],
            count:0,
            page:0
        }
    },
    created(){
        this.setPageList(0)
        /* axios.get('/api/post/page/0').then(res=>{
             this.posts = res.data.list;
         })
         axios.get('/api/post/count/all').then(res=>{
             this.count= res.data.result
         })*/
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
            this.page = page
            this.setPageList(page)
        },
        setPageList(page){
             axios.get('/api/post/page/0').then(res=>{
                this.posts = res.data.list;
            })
        },
        setPost(index) {
           if (isNaN(index)) {
                console.error('the id is required')
                return false;
            }
            axios.get('/api/post/detail/' + this.posts[index].id).then((res) => {
                this.currIndex = index;
                this.post = res.data.list[0];
            }).catch((err) => {
                alert(err)
            });
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
</style>
