<template>
    <div class="page">
        <h1>{{tag.name}}</h1>
        <article v-for="post in posts" :key="post.id">
            <div class="poster" v-if="post.image">
                <div :style="{backgroundImage:'url('+post.image+')'}"></div>
            </div>
            <div class="info">
                <nuxt-link :to="`/post/${post.id}`">{{post.title}}</nuxt-link>
                <div class="desc">{{post.meta_description}}</div>
            </div>
        </article>
    </div>
</template>

<script>
import axios from 'axios'
import PostList from '~components/PostList'

export default {
    validate({ params }) {
        return /^\d+$/.test(params.id)
    },
    async asyncData({ params, error }) {
        let [postRes, tagRes] = await Promise.all([
            axios.get(`/api/post/list/${params.id}?`),
            axios.get(`/api/tag/detail/${params.id}?`)
        ]).catch(err => {
            error({ statusCode: 400, message: err })
        })
        
        if (tagRes.data.list.length == 0) {
            error({ statusCode: 404, message: 'Not Found This Tag' });
        }
        return {
            posts: postRes.data.list,
            tag: tagRes.data.list
        }
    },
    head() {
        return {
            title: this.tag.name,
        }
    },
    components: {
        PostList,
    }
}
</script>

<style scoped>
.page {
    padding: 20px;
}

h1 {
    color: #3084bb;
    padding-bottom: 20px;
}

.page>p {
    font-size: 16px;
    line-height: 24px;
    padding: 5px 0 10px 0;
}

article {
    display: flex;
    margin-bottom: 20px;
    border-bottom: solid 1px #e5e5e5;
    padding: 10px 5px;
    transition: all ease-out 0.8s;
}

.info {
    padding: 0 10px;
    flex: 1;
}

a {
    color: #222;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
}

a:hover {
    text-decoration: underline;
}

.desc {
    color: #666;
    font-size: 16px;
    line-height: 24px;
}

.poster {
    width: 200px;
    height: 120px;
    overflow: hidden
}

.poster div {
    width: 100%;
    height: 100%;
    background: rgba(38, 50, 56, 0.95) no-repeat center / cover;
    transition: all ease 1.2s;
}

article:hover {
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.6);
}

article:hover .poster div {
    transform: scale(1.1)
}


@media screen and (max-width: 960px) {
    .page {
        padding: 10px;
    }
    article {
        display: block;
    }
    .poster {
        width: 100%;
        height: 160px;
    }
    .info {
        padding: 0;
    }
    a {
        display: inline-block;
        font-size: 18px;
        line-height: 26px;
        color: #3084bb;
        margin: 5px 0;
    }
    .desc {
        font-size: 14px;
        line-height: 20px;
        color: #666;
    }
}
</style>
