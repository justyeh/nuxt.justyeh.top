<template>
    <div class="tags">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>名称</th>
                    <th>描述</th>
                    <th>关联的文章</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tag in tags" :key="tag.id">
                    <td>{{tag.id}}</td>
                    <td><input type="text" v-model="tag.name"></td>
                    <td><textarea v-model="tag.description"></textarea></td>
                    <td></td>
                    <td>
                        <a href=""></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    layout: 'admin'
}
</script>

<style scoped>
.tags {
    display: flex;
    height: 100%
}
</style>
