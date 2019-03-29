const path = require('path');
const resolve = (...arg) => path.resolve(...arg);
/**
 * @param options
 * @param ctx
 */
module.exports = () => ({
    alias() {
        return {
            '@theme': resolve(__dirname, 'theme')
        };
    },
    plugins: {
        '@vuepress/clean-urls': {},
        '@vuepress/medium-zoom': {},
        '@vuepress/nprogress': {},
        '@vuepress/search': {
            searchMaxSuggestions: 10
        },
        '@vuepress/google-analytics': {
            ga: 'UA-126621569-1'
        }
    }
});
