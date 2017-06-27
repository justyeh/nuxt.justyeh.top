<template>
    <div>
        <button :class="{disable:myPage == 0}" @click="prev">&larr;Prev</button>
        <button :class="{disable:myPage >= total-1}" @click="next">Next&rarr;</button>
    </div>
</template>

<script>
export default {
    props: {
        total: {
            type: Number
        },
        page: {
            type: Number
        },
        path: {}
    },
    data(){
        return {
            myPage : 0
        }
    },
    watch:{
        page(val){
            this.myPage = val
        },
        myPage(val){
            this.$emit('pageChange', this.myPage)
        }
    },
    methods: {
        prev() {
            if (this.myPage == 0) {
                return false;
            }
            this.myPage--;
        },
        next() {
            if (this.myPage >= this.total - 1) {
                return false;
            }
            this.myPage++;
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: space-between;
}

button {
    display: inline-block;
    padding: 8px 10px;
    border: 1px solid #666;
    border-radius: 3px;
    text-align: center;
    color: #666;
    background: #fff;
}

.disable {
    cursor: not-allowed;
    color: #ddd;
    border-color: #ddd;
}

button:not(.disable):hover {
    border-color: rgb(51, 204, 250);
    color: rgb(51, 204, 250);
}
</style>
