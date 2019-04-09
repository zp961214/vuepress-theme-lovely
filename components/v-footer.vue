<template>
    <div class="v-footer">
        <div class="contaienr">
            <p><span>© 2019 valor</span> | <a :href="ncSa" target="_blank">CC BY-NC-SA 4.0</a></p>
            <p>Powered by <a :href="Vuepress" target="_blank">VuePress</a>| Theme By valor</p>
            <p>Deployed on ubuntu server | Made with by valor</p>
            <p>博客已运行 {{ date }} 天 (๑╹ヮ╹๑)ﾉ,{{ observerCount }}人查看过此博客</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { differenceInCalendarDays } from 'date-fns';
export default {
    name: 'v-footer',
    data() {
        return {
            observerCount: null,
            date: null,
            ncSa: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh',
            Vuepress: 'https://vuepress.vuejs.org/'
        };
    },

    computed: {},

    mounted() {
        this.getCount();
        this.date = differenceInCalendarDays(new Date(), new Date('2019-01-13'));
    },

    methods: {
        async getCount() {
            const b = `http://izp.me/blog`;
            const { data } = await axios.get(b + '/observer');
            this.observerCount = data.count;
        }
    }
};
</script>
<style lang="scss" scoped>
.v-footer {
    width: 100%;
    padding: 10px 0 20px;
    color: #99a2aa;
    font-size: 12px;
    background: #f6f9fa;
    text-align: center;
    .contaienr {
        margin: 0 auto;
    }
}
</style>
