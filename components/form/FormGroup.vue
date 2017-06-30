<template>
    <div class="form-group">
        <div class="form-label">
            <slot name="label">标签</slot>：</div>
        <div class="form-input">
            <slot name="input">
                <input type="text">
            </slot>
        </div>
    </div>
</template>

<style scoped>
.form-group {
    margin: 10px 0;
    display: flex;
}

.form-label {
    width: 100px;
    padding-right: 10px;
    color: #222;
    line-height: 36px;
    text-align: right;
}
.form-input {
    flex: 1;
}

.form-input input,
.form-input textarea,
.form-input select {
    display: block;
    height: 36px;
    border: 1px solid #ccc;
    width: 100%;
}

.form-input input {
    text-indent: 15px;
}

.form-input textarea {
    padding: 5px 15px;
    resize: none;
    height: 120px;
}

.form-input input:focus,
.form-input textarea:focus,
.form-input select:focus {
    border-color: rgb(51, 204, 250);
}
</style>
