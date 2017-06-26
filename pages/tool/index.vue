<template>
    <div class="tools container">
        <template v-for="tool in tools">
            <div class="card" :style="{backgroundImage:'url('+tool.poster+')'}">
                <p>{{tool.name}}</p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: `在线工具`
        }
    },
    data() {
        return {
            tools: [{
                poster: '',
                name: 'test'
            }]
        }
    }
}
</script>

<style scoped>
.tools {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 200px;
    height: 260px;
    border-radius: 3px;
    box-shadow: 0 0 6px rgba(100, 100, 100, 0.4);
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.card p {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
}
</style>
