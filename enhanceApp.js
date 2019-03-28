import VueProgressBar from 'vuepress-progressbar';
import routerConfig from '@theme/config/router';
import sidteDataConfig from '@theme/config/siteData';

export default ({ Vue, router, siteData }) => {
    Vue.use(VueProgressBar, {
        color: 'rgb(143, 255, 199)',
        failedColor: 'red',
        thickness: '2px'
    });

    routerConfig(router, Vue);
    sidteDataConfig(siteData);
};
