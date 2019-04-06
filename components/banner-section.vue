<template>
    <section class="banner-section" :style="bannerSection">
        <div class="site-banner-author">
            <img alt="avatar" class="avatar tada" :src="picUrl" />
            <div class="site-banner-desc">
                <span :key="i" v-for="(text, i) in bannerText"> {{ text }} </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'banner-section',
    data() {
        return {};
    },
    computed: {
        bannerSection() {
            const bannerPic = this.$site.themeConfig && this.$site.themeConfig.bannerPic;
            if (bannerPic) return { background: `url(${this.$withBase(bannerPic)})` };
            return null;
        },

        bannerText() {
            const bannertext = this.$site.themeConfig && this.$site.themeConfig.bannertext;
            console.log(bannertext);
            if (Array.isArray(bannertext)) return bannertext;
            return ['你好呀'];
        },
        picUrl() {
            const avatar = this.$site.themeConfig && this.$site.themeConfig.avatar;
            if (avatar) return this.$withBase(avatar);
            else return require('../images/head.jpg');
        }
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
@keyframes tada {
    0% {
        -webkit-transform: scale(1);
    }

    10%,
    20% {
        -webkit-transform: scale(0.9) rotate(-3deg);
    }

    30%,
    50%,
    70%,
    90% {
        -webkit-transform: scale(1.1) rotate(3deg);
    }

    40%,
    60%,
    80% {
        -webkit-transform: scale(1.1) rotate(-3deg);
    }

    100% {
        -webkit-transform: scale(1) rotate(0);
    }
}
.banner-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background: #3eaf7c;
    .site-banner-author {
        width: 50%;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.67);
        box-sizing: border-box;
        padding: 10px 20px;
        margin-top: 16%;
        .avatar {
            display: block;
            width: 100px;
            border-radius: 50%;
            margin-bottom: 20px;
            &:hover {
                animation: tada 1s ease 0.1s 1;
            }
        }
        .site-banner-desc {
            span {
                font-size: 16px;
                font-weight: 700;
                &:nth-of-type(odd) {
                    color: #00a7e0;
                }
                &:nth-of-type(even) {
                    color: #ff3f1a;
                }
            }
        }
    }
}

@media screen and (max-width: 1216px) and (min-width: 800px) {
    .banner-section {
        .site-banner-author {
            width: 60%;
        }
    }
}
@media screen and(max-width: 900px) {
    .banner-section {
        .site-banner-author {
            width: 80%;
        }
    }
}
</style>
