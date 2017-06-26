<template>
    <div class="tools">
        <div :class="{cards:true,small:isSmall}">
            <template v-for="(tool,index) in tools">
                <div :class="{card:true,curr:currIndex == index && isSmall}" @click="setCurrentView(tool.component)">
                    <div :style="{backgroundImage:'url('+tool.logo+')'}"></div>
                    <p>{{tool.name}}</p>
                </div>
            </template>
        </div>
        <div class="view" v-show="isSmall">
            <component :is="currentView"></component>
        </div>
    </div>
</template>

<script>
import MaterialDesignColor from '../../components/tools/MaterialDesignColor'

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
            }],
            currentView: '',
            isSmall: false,
            currIndex: 0
        }
    },
    components: {
        MaterialDesignColor
    },
    methods: {
        setCurrentView(component) {
            this.currentView = component;
            this.isSmall = true;
        }
    }
}
</script>

<style scoped>
.cards {
    padding: 20px;
}
.card {
    width: 200px;
    border-radius: 3px;
    box-shadow: 0 0 6px rgba(100, 100, 100, 0.4);
    overflow: hidden;
    cursor: pointer;
    transition: all ease-in 0.1s;
}

.card.curr,
.card:hover {
    box-shadow: 0 0 10px rgba(100, 100, 100, 0.8);
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
    padding: 50px;
}
</style>
