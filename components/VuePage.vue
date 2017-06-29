<template>
    <div>
        <template v-if="total != 0">
            <button :class="{disable:pageNow == 0}" @click="prev">&larr;Prev</button>
            <button :class="{disable:pageNow >= pageAll-1}" @click="next">Next&rarr;</button>
        </template>
    </div>
</template>

<script>
let ApiCfg = require('../util/api.config')

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
    data() {
        return {
            pageNow: this.page,
        }
    },
    watch: {
        page(val) {
            this.pageNow = val
        },
        pageNow(val) {
            this.$emit('pageChange', this.pageNow)
        }
    },
    computed:{
        pageAll(){
            return Math.ceil(this.total/ApiCfg.pageSize)
        }
    },
    methods: {
        prev() {
            if (this.pageNow == 0) {
                return false;
            }
            this.pageNow--;
        },
        next() {
            if (this.pageNow >= this.total - 1) {
                return false;
            }
            this.pageNow++;
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
