import decodeUriComponent from 'decode-uri-component';
import animate from '@theme/assets/js/animate.js';

export default {
    computed: {
        items() {
            const is_post = new RegExp(`^/post/(.*)/.*`);
            const post = this.$site.pages.filter(v => is_post.test(v.path)).sort((a, b) => b.lastUpdated - a.lastUpdated);
            return post.map(v => ((v.classify = decodeUriComponent(v.path.replace(is_post, '$1'))), v));
        },

        classifyObj() {
            return this.items.reduce((prev, current) => {
                const { classify } = current;
                if (!prev[classify]) prev[classify] = 1;
                else prev[classify] += 1;
                return prev;
            }, {});
        },

        classifyCount() {
            return Object.keys(this.classifyObj).length;
        },

        logCount() {
            return this.items.length || 0;
        }
    },
    methods: {
        scrollToView(id, Selector, offset = 0) {
            const { el, docScrollTag } = this.getScrollTag(id, Selector);
            animate(docScrollTag, { scrollTop: el.offsetTop - offset });
        },
        getScrollTag(id, Selector = '#') {
            const el = document.querySelector(Selector + id);
            const docScrollTag = document.body.scrollTop ? document.body : document.documentElement;
            return { el, docScrollTag };
        }
    }
};
