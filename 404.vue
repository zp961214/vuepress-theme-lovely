<template>
    <div class="theme-container">
        <div class="content">
            <h1>404</h1>
            <blockquote>
                {{ getMsg() }}
                <p>笑问迷路的你</p>
                <p>今日可否如意</p>
                <p>然则何故至此</p>
                <p>冤家路窄是你</p>
                <p>筚路蓝缕如你</p>
                <p>今生会否得意</p>
                <p>生前身后名利</p>
                <p>痴儿不悟是你</p>
                <p>耗尽百年运气</p>
                <p>今朝邂逅与你</p>
                <p>唯有丹心遥寄</p>
                <p>头也不回是你</p>
            </blockquote>

            <router-link to="/">Take me home.</router-link>
        </div>
    </div>
</template>

<script>
const msgs = [`There's nothing here.`, `How did we get here?`, `That's a Four-Oh-Four.`, `Looks like we've got some broken links.`];

export default {
    methods: {
        getMsg() {
            return msgs[Math.floor(Math.random() * msgs.length)];
        }
    }
};
</script>

<style src="./styles/theme.scss" lang="scss"></style>
<style lang="scss" scoped>
.content {
    box-sizing: border-box;
    padding-left: 10%;
}
</style>
