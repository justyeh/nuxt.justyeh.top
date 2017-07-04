<template>
    <div class="page">
        <div :class="{cards:true,small:isSmall}">
            <div :class="{card:true,curr:currIndex == index && isSmall}" v-for="(tool,index) in tools" :key="tool.name" @click="setCurrentView(index,tool.component)">
                <div :style="{backgroundImage:'url('+tool.logo+')'}"></div>
                <p>{{tool.name}}</p>
            </div>
        </div>
        <div class="view" v-show="isSmall">
            <i class="fa fa-close" @click="isSmall = false"></i>
            <transition name="component-fade" mode="out-in">
                <component :is="currentView"></component>
            </transition>
        </div>
    </div>
</template>

<script>
import MaterialDesignColor from '~components/tools/MaterialDesignColor'
import CssBeautify from '~components/tools/CssBeautify'

export default {
    head() {
        return {
            title: `在线工具`
        }
    },
    data() {
        return {
            tools: [{
                logo: '/tools/material-design-color-logo.jpg',
                name: 'Material Design Color',
                component: 'MaterialDesignColor'
            }, {
                logo: '/tools/css-beautify.jpg',
                name: 'Css Beautify',
                component: 'CssBeautify'
            }],
            currentView: '',
            isSmall: false,
            currIndex: 0
        }
    },
    components: {
        MaterialDesignColor,
        CssBeautify
    },
    methods: {
        setCurrentView(index, component) {
            this.currIndex = index;
            this.currentView = component;
            this.isSmall = true;
        }
    }
}
</script>

<style scoped>
.page {
    width: 100%;
    box-shadow: none;
    padding: 0;
    margin: 0;
}

.cards {
    padding: 20px 100px;
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 200px;
    border-radius: 3px;
    box-shadow: 0 0 6px rgba(100, 100, 100, 0.4);
    overflow: hidden;
    cursor: pointer;
    transition: all ease-in 0.1s;
    margin: 20px 20px 20px 0;
}

.card.curr,
.card:hover {
    box-shadow: 0 0 10px rgba(100, 100, 100, 1);
}

.card div {
    background: no-repeat center / cover;
    height: 200px;
    transition: all ease-in 0.1s;
}

.card p {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    background: #fff;
    width: 100%;
    text-align: center;
    transition: all ease-in 0.1s;
}

.cards.small .card {
    width: 250px;
    display: flex;
    align-items: center;
}

.cards.small .card div {
    width: 50px;
    height: 50px;
    border-radius: 3px;
}

.cards.small .card p {
    text-align: center;
    flex: 1;
}

.view {
    background: #f7f8fa;
    padding: 50px 100px;
    position: relative;
}

.view i {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 30px;
    right: 30px;
    color: #666;
    font-size: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2)
}

.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity .3s ease;
}

.component-fade-enter,
.component-fade-leave-active {
    opacity: 0;
}

@media screen and (max-width: 960px) {
    .cards {
        padding: 10px;
        background: #fff;
    }
    .card {
        width: 120px;
        margin: 10px 10px 10px 0;
    }
    .card div {
        height: 120px;
    }
    .view {
        padding: 40px 10px;
    }
    .view i {
        top: 5px;
        right: 5px;
    }
}
</style>
