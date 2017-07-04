<template>
    <div class="img-uploader">
        <div v-if="image" :style="{backgroundImage: 'url(' + image + ')'}"></div>
        <!--<input @change="handleChange" type="file" accept="image/gif,image/jpeg,image/png, image/jpg">-->
    </div>
</template>

<script>
export default {
    props:['image'],
    methods: {
        handleChange(event) {
            let _input = event.target,
                _file = event.target.files[0],
                isImg = true;

            if (!/image\/\w+/.test(_file.type)) {// 检查是否为图像类型
                alert('请确保文件类型为图像类型');
                isImg = false;
            }

            if (_file.size > 1024 * 1024 * 2) {		// 检查大小
                alert('图片的大小限制为2M');
                isImg = false;
            }

            if (!isImg) {
                //清空input的值
                /* if (_input.outerHTML) {
                     _input.outerHTML = _input.outerHTML;
                 } else {
                     _input.value = "";
                 }*/
                this.image = '';
                return false;
            }

            // 将文件以Data URL形式进行读入页面
            var reader = new FileReader();
            reader.readAsDataURL(_file);
            reader.onload = e => {
                this.image = e.target.result;
                this.$emit('uploadImage',this.image);
            }
        }
    }
}
</script>

<style scoped>
.img-uploader {
    display: block;
    width: 100%;
    height: 120px;
    position: relative;
    border: 1px solid #ddd;
}

.img-uploader div {
    width: 100%;
    height: 100%;
    background: no-repeat center / cover;
}

.img-uploader input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
}
.img-uploader input:focus{
    border-color: rgb(51, 204, 250);
}
</style>
