<template>
    <transition name="modal">
        <div class="modal" v-show="isModalShow">
            <div class="main">
                <div class="title">
                    <p>{{title}}</p>
                    <i class="fa fa-close" @click="close"></i>
                </div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        title: [String, Number],
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isModalShow: this.show
        }
    },
    watch: {
        show() {
            this.isModalShow = this.show
        }
    },
    methods: {
        close() {
            this.isModalShow = !this.isModalShow
            this.$emit('update:show', this.isModalShow)
        }
    }
}
</script>

<style scoped>
.modal {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity .3s ease;
}

.main {
    background: #fff;
    border-radius: 3px;
    overflow: hidden;
    min-width: 400px;
    box-shadow: 2px 3px 20px rgba(0, 0, 0, 0.3);
}

.title {
    background: #f1f2f3;
    color: #222;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

i {
    cursor: pointer
}

.content {
    padding: 20px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
