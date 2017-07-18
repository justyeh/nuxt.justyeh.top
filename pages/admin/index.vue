<template>
    <div>
        <transition name="fade">
            <keep-alive>
                <component :ref="currView" :is="currView" :postId="editPostId" v-on:updateView="updateView" v-on:editPost="editPost" v-on:postSaved="postSaved" v-on:postUpdated="postUpdated"></component>
            </keep-alive>
        </transition>
        <notifications  position="bottom left" :duration="600" ></notifications>
    </div>
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
            this.$notify({
               type:'error',
                title: '测试',
                text: 'notification测试'
            });
            this.currView = view
        },
        editPost(editPostId) {
            this.updateView('EditPost')
            this.editPostId = editPostId
        },
        postSaved() {
            this.currView = 'PostList'
            this.$nextTick(() => {
                this.$refs['PostList'].refreshComponent(false)
                document.querySelector('.main').scrollTop = 0
            })
        },
        postUpdated() {
            this.currView = 'PostList'
            this.$nextTick(() => {
                this.$refs['PostList'].refreshComponent(true)
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
