<template>
    <div v-if="!closed" :class="wrapClasses" transition="fade">
        <span :class="iconClasses" v-if="showIcon">
            <slot name="icon">
                <Icon :type="iconType"></Icon>
            </slot>
        </span>
        <span :class="messageClasses"><slot></slot></span>
        <span :class="descClasses" v-el:desc><slot name="desc"></slot></span>
        <a :class="closeClasses" v-if="closable" @click="close">
            <slot name="close">
                <Icon type="ios-close-empty"></Icon>
            </slot>
        </a>
    </div>
</template>
<script>
   
</script>