<template>
  <app-container id="home">
    <post-item
      :content="content"
      :key="content.key"
      class="post-item"
      v-for="content in currentItems"
    />
    <div class="pagetion-wrapper">
      <pagination
        :current-page="currNum"
        :page-size="pageSize"
        :total="total"
        @current-change="currentChange"
        layout="prev, pager, next"
      />
    </div>
  </app-container>
</template>

<script>
import axios from 'axios';
import decodeUriComponent from 'decode-uri-component';
import postItem from '@theme/components/post-item';
import pagination from '@theme/components/pagination';
export default {
    name: 'app-home',

    components: {
        postItem,
        pagination
    },

    data() {
        return {
            currNum: 1,
            pageSize: 5,
            items: []
        };
    },

    computed: {
        total() {
            return this.items.length || 0;
        },

        currentItems() {
            const { items, currNum, pageSize } = this;
            const start = (currNum - 1) * pageSize;
            return items.slice(start, start + pageSize);
        }
    },

    methods: {
        handlerClick(link) {
            this.$router.push(link);
        },

        currentChange(e) {
            this.scrollToView('page-main', '.');
            setTimeout(() => (this.currNum = e), 500);
        },

        getItems() {
            const is_post = new RegExp(`^/post/(.*)/.*`);
            const getTime = time => new Date(time.replace(/\-/g, '/')).getTime();

            const post = this.$site.pages
                .filter(v => is_post.test(v.path))
                .sort((a, b) => (getTime(b.frontmatter.date) || getTime(b.lastUpdated)) - getTime(a.frontmatter.date || getTime(a.lastUpdated)))
                .map(v => ((v.classify = decodeUriComponent(v.path.replace(is_post, '$1'))), v));
            this.items = post;
        }
    },
    created() {
        this.getItems();
    },

    async mounted() {
        const { data: res } = await axios.get('http://izp.me/blog/post');
        const data = res.result;
        this.$site.pages.forEach(v => {
            if (v.title) {
                const index = data.findIndex(ele => ele[v.title]);
                this.$set(v, 'count', data[index][v.title]);
            }
        });
    }
};
</script>

<style lang="scss" scoped>
$asideWidth: 285px;
.post {
    box-sizing: border-box;
    .container {
        width: 1200px;
        margin: 0 auto;
        &::after {
            content: '';
            display: block;
            clear: both;
        }
        .wrapper-container {
            .post-container {
                float: left;
                max-width: 800px;
                padding: 0 35px;
                box-sizing: border-box;
                width: calc(100% - #{$asideWidth});
            }
            .site-info {
                float: left;
                width: $asideWidth;
                .post-aside {
                    position: static;
                    left: unset;
                    top: 0;
                    right: 0;
                    height: max-content;
                    box-sizing: border-box;
                    transform: translate(0, 0);
                }
                .affix {
                    position: fixed;
                    top: 20px;
                    right: unset;
                    left: unset;
                }
            }
        }
    }
}
@media screen and (max-width: 1216px) {
    .post {
        box-sizing: border-box;
        .container {
            width: auto;
            margin: 0 auto;
            .wrapper-container {
                .post-container {
                    padding: 0;
                    width: 100%;
                    .post-item {
                        padding: 40px 20px;
                    }
                }
            }
        }
        .site-info {
            display: none;
        }
    }
}
@media screen and (max-width: 1216px) and (min-width: 800px) {
    .post {
        box-sizing: border-box;
        .container {
            width: 800px;
            margin: 0 auto;
        }
    }
}
</style>
<style lang="scss">
#home .app-container-wrapper {
    padding: 0px;
    background: unset;
    overflow-x: unset;
}
.pagetion-wrapper {
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    box-sizing: border-box;
    li {
        background: #fff;
        color: #97dffd;
        border-radius: 5px;
        border: 1px solid #97dffd;
        margin: 0 10px;
        padding: 0 11px;
    }
    .el-pagination button:disabled {
        display: none;
    }
}
</style>
