<template>
    <div>
        <div class="tags">
            <label v-for="tag in tags">{{tag}}</label>
        </div>
        <input type="text" @keyup.enter.stop.prevent="handleEnter" v-model="tag">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tag:''
            }
        },
        props:{
            tags:{
                type:Array
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
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 10px;
    background: rgba(100, 100, 100, 0.12);
    border-radius: 2px;
    color: rgba(0, 0, 0, .54);
    margin: 5px 10px 5px 0;
}
input {
    height: 36px;
    border: 1px solid #ccc;
    width: 100%;
}

input {
    text-indent: 15px;
}

input:focus {
    border-color: rgb(51, 204, 250);
}
</style>
