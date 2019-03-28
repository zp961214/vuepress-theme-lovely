export default function Config(siteData) {
    const { themeConfig } = siteData;
    let { nav } = themeConfig;
    if (Array.isArray[nav] && Array.length > 0) return;
    else {
        themeConfig.nav = [...nav, { text: '首页', link: '/' }, { text: '归档', link: '/archives/' }, { text: '分类', link: '/categories/', hide: true }];
    }
}
