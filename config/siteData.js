export default function Config(siteData) {
    const { themeConfig } = siteData;
    let { nav, useDefaultNav } = themeConfig;
    let DefaultNav = [{ text: '首页', link: '/' }, { text: '归档', link: '/archives/' }, { text: '分类', link: '/categories/', hide: true }];
    if (useDefaultNav === false) DefaultNav = [];
    themeConfig.nav = [...nav, ...DefaultNav];
}
