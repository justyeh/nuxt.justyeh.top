<template>
    <div>
        <template v-if="pageAll > 1">
            <template v-if="model == 'link'">
                <nuxt-link :class="{disable:pageNow == 1}" :to="prevPage">&larr;Prev</nuxt-link>
                <nuxt-link :class="{disable:pageNow >= pageAll-1}" :to="nextPage">Next&rarr;</nuxt-link>
            </template>
            <template v-else>
                <button :class="{disable:pageNow == 0}" @click="prev">&larr;Prev</button>
                <button :class="{disable:pageNow >= pageAll-1}" @click="next">Next&rarr;</button>
            </template>
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
            type: Number,
            default: 0
        },
        model: {
            required: true
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
    computed: {
        pageAll() {
            return Math.ceil(this.total / ApiCfg.pageSize)
        },
        prevPage() {
            return this.path + (this.pageNow > 1 ? this.pageNow - 1 : 1)
        },
        nextPage() {
            return this.path + (this.pageNow < this.pageAll - 1 ? this.pageNow + 1 : this.pageAll - 1)
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
            if (this.pageNow >= this.pageAll - 1) {
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

button,
a {
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

:not(.disable):hover {
    border-color: rgb(51, 204, 250);
    color: rgb(51, 204, 250);
}

@media screen and (max-width: 960px) {
    div {
        padding: 0 10px;
    }
    button,
    a {
        padding: 5px 8px;
    }
}
</style>
