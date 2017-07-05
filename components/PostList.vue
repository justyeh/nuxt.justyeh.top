<template>
    <transition-group name="list" tag="section">
        <article v-for="(post, index) in posts" :key="post.id">
            <div class="poster" v-if="post.image" :style="{backgroundImage:'url('+post.image+')'}"></div>
            <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
            <div class="desc">{{post.meta_description}}</div>
            <div class="tags" v-if="post.tags && post.tags.length>0">
                <router-link class="btn btn-small btn-default" :to="`/tag/${tag.tagId}`" v-for="tag in post.tags" :key="tag.tagId">{{tag.name}}</router-link>
            </div>
        </article>
    </transition-group>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
article {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 25px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, 0.15);
    margin-bottom: 40px;
}

article .poster {
    background: rgba(38, 50, 56, 0.95) no-repeat center / cover;
    height: 480px;
    width: 100%;
    transition: all ease-in 0.5s;
}

article>a {
    color: #333;
    font-size: 24px;
    line-height: 36px;
    margin: 10px 20px 5px 20px;
    display: inline-block;
}

article a:hover {
    text-decoration: underline;
}

article .desc {
    padding: 0 20px 10px 20px;
    font-size: 16px;
    line-height: 24px;
    color: #555;
}

article .tags {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 0 0 0 20px;
}

article .tags a {
    margin: 20px 10px 20px 0;
    padding: 3px 10px;
    text-decoration: none;
}

.list-enter-active,
.list-leave-active {
    opacity: 0;
    transform: translateY(0);
    animation: fade-in 0.2s ease-in forwards;
    animation-delay: 0.3s;
}

.list-enter,
.list-leave-active {
    animation: fade-out 0.3s ease-in forwards;
}

@keyframes fade-in {
    0% {
        display: none;
        opacity: 0;
    }
    5% {
        display: black;
        opacity: 0;
        transform: translateY(3000px)
    }
    100% {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes fade-out {
    0% {
        display: block;
        opacity: 1;
    }
    100% {
        display: none;
        opacity: 0;
    }
}

@media screen and (max-width: 1400px) {
    article .poster {
        height: 420px;
    }
}

@media screen and (max-width: 1200px) {
    article .poster {
        height: 360px;
    }
}

@media screen and (max-width: 960px) {
    article {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.26);
        margin-bottom: 20px;
    }
    article .poster {
        height: 200px;
    }
    article>a {
        margin: 10px 10px 5px 10px;
        font-size: 18px;
        line-height: 26px;
        color: #3084bb;
    }
    article .desc {
        font-size: 14px;
        line-height: 20px;
        padding: 0 10px 5px 10px;
        color: #666;
    }
    article .tags {
        padding-left: 10px;
    }
    article .tags a {
        margin: 10px 10px 10px 0;
    }
}

@media screen and (max-width: 640px) {
    article .poster {
        height: 160px;
    }
}

@media screen and (max-width: 480px) {
    article .poster {
        height: 130px;
    }
}
</style>
