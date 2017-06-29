<template>
    <div class="css">
        <textarea v-model="css"></textarea>
        <div class="btn-group">
            <button class="btn btn-default" @click="CSSdecode(css)">格式化</button>
            <button class="btn btn-main" @click="CSSencode(css)">压缩</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            css: ''
        }
    },
    watch: {
        css(val) {
            this.css = val
        }
    },
    methods: {
        CSSencode(code) {
            code = code.replace(/\r\n/ig, '');
            code = code.replace(/(\s){2,}/ig, '$1');
            code = code.replace(/\t/ig, '');
            code = code.replace(/\n\}/ig, '\}');
            code = code.replace(/\n\{\s*/ig, '\{');
            code = code.replace(/(\S)\s*\}/ig, '$1\}');
            code = code.replace(/(\S)\s*\{/ig, '$1\{');
            code = code.replace(/\{\s*(\S)/ig, '\{$1');
            this.css = code;
        },
        CSSdecode(code) {
            code = code.replace(/(\s){2,}/ig, '$1');
            code = code.replace(/(\S)\s*\{/ig, '$1 {');
            code = code.replace(/\*\/(.[^\}\{]*)}/ig, '\*\/\n$1}');
            code = code.replace(/\/\*/ig, '\n\/\*');
            code = code.replace(/;\s*(\S)/ig, ';\n\t$1');
            code = code.replace(/\}\s*(\S)/ig, '\}\n$1');
            code = code.replace(/\n\s*\}/ig, '\n\}');
            code = code.replace(/\{\s*(\S)/ig, '\{\n\t$1');
            code = code.replace(/(\S)\s*\*\//ig, '$1\*\/');
            code = code.replace(/\*\/\s*([^\}\{]\S)/ig, '\*\/\n\t$1');
            code = code.replace(/(\S)\}/ig, '$1\n\}');
            code = code.replace(/(\n){2,}/ig, '\n');
            code = code.replace(/:/ig, ':');
            code = code.replace(/  /ig, ' ');
            this.css = code;
        }
    }
}
</script>

<style scoped>
textarea{
    display: block;
    width: 100%;
    min-height: 300px;
    resize:vertical;
    border: 1px solid #ccc;
    padding: 0 5px;
    margin-bottom: 20px;
}
textarea:focus{
    border-color: rgb(51, 204, 250);
}
</style>

