const path = require('path');
const resolve = (...arg) => path.resolve(...arg);
module.exports = (options, ctx) => ({
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
