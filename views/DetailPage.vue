<template>
    <div id="DetailPage">
        <app-container>
            <h1 class="title">{{ this.$page.title }}</h1>
            <Content></Content>
            <div id="disqus_thread" slot="footer"></div>
        </app-container>
    </div>
</template>

<script>
import DisqusJS from 'disqusjs';
import animate from '@theme/assets/js/animate.js';

export default {
    name: 'DetailPage',
    data() {
        return {
            affix: false,
            activeCurrent: -1,
            sectionActive: '文章目录'
        };
    },
    computed: {
        headers() {
            return this.$page.headers;
        },

        headers_ele() {
            return this.headers ? this.headers.map(v => this.getScrollTag(v.slug).el.offsetTop - 60) : null;
        },
        is_menu_show() {
            return this.headers && this.sectionActive === '文章目录';
        },

        is_asideInfo_show() {
            return !this.headers || this.sectionActive === '文章站点';
        },

        DisqusJS() {
            return this.$site.themeConfig.DisqusJS;
        }
    },
    methods: {
        getScrollTag(id, Selector = '#') {
            const el = document.querySelector(Selector + id);
            const docScrollTag = document.body.scrollTop ? document.body : document.documentElement;
            return { el, docScrollTag };
        },

        scrollToView(id, Selector, offset = 0) {
            const { el, docScrollTag } = this.getScrollTag(id, Selector);
            animate(docScrollTag, { scrollTop: el.offsetTop - offset });
        }
    },

    mounted() {
        if (this.DisqusJS) {
            const { origin, pathname, search } = document.location;
            const url = origin + pathname + search;
            new DisqusJS({ ...this.DisqusJS, identifier: url, url });
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollHandle);
    }
};
</script>
<style lang="scss" scoped>
#DetailPage {
    .title {
        font-size: 25px;
        text-align: center;
        margin-bottom: 18px;
    }
    #disqus_thread {
        padding: 40px;
        box-sizing: border-box;
    }
}
</style>
<style lang="scss">
#DetailPage {
    img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        max-width: 400px;
    }
}
</style>
<style src="disqusjs/dist/disqusjs.css"></style>
