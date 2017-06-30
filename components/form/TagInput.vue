<template>
    <div>
        {{tags}}
        <div class="tags">
            <label class="btn btn-small btn-default" v-for="tag in tags" :key="tag.id">{{tag.name}}</label>
        </div>
        <input type="text" @keyup.enter.stop.prevent="handleEnter" v-model="pageTag">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pageTag:''
            }
        },
        props:{
            tags:{
                type:Array
            }
        },
        watch:{
            tags(val){
                this.tags = val
            }
        },
        methods:{
            handleEnter(){
                if(this.tags.indexOf(this.tag) > -1){
                    alert("请不要添加重复的标签");
                    return;
                }
                this.$emit('addTag',this.tag);
                this.tag = ''
            }
        }
    }
</script>

<style scoped>
.tag-input {
    margin: 10px 0;
    display: flex;
}
label{
    height: 26px;
    line-height: 26px;
    padding: 0 10px;
    margin: 5px 10px 5px 0;
}
input {
    height: 36px;
    border: 1px solid #ccc;
    width: 100%;
    text-indent: 15px;
}
input:focus {
    border-color: rgb(51, 204, 250);
}
</style>
