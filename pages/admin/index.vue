<template>
    <transition name="fade">
        <keep-alive>
            <component :ref="currView" :is="currView" :postId="editPostId" v-on:updateView="updateView" v-on:editPost="editPost" v-on:refreshPostList="refreshPostList"></component>
        </keep-alive>
    </transition>
</template>

<script>
import PostList from '~components/admin/PostList'
import EditPost from '~components/admin/EditPost'
import NewPost from '~components/admin/NewPost'

export default {
    layout: 'admin',
    data() {
        return {
            currView: 'PostList',
            editPostId: null
        }
    },
    components: {
        PostList,
        EditPost,
        NewPost
    },
    methods: {
        updateView(view) {
            this.currView = view
        },
        editPost(postId) {
            this.updateView('EditPost');
            this.editPostId = postId
        },
        refreshPostList() {
            this.currView = 'PostList'
            this.$nextTick(() => {
                this.$refs['PostList'].refreshComponent();
                document.querySelector('.main').scrollTop = 0
            })
        }
    }
}

</script>

<style scoped>
.post-form {
    position: absolute;
    top: 0;
    right: 0;
    left: 360px;
    bottom: 0;
    padding: 20px;
    overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
