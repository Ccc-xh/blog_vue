<template>
    <article class="am-article">
        <link href="https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css" rel="stylesheet" />
        <div class="cat">
            <div class="am-article-hd">
                <h1 class="am-article-title">{{ data.articleTitle }}</h1>
                <div class="am-article-meta">
                    <span><i class="am-icon-user am-icon-sm "> {{ data.author }} </i></span>
                    <span><i class="am-icon-calendar-o am-icon-sm ">
                            {{ data.publishDate }}
                        </i></span>
                    <span><i class="am-icon-folder-o am-icon-sm ">
                            {{ data.sortName }}
                        </i></span>
                    <span v-if="data.isOriginal == 1" class="wzlb">原创</span>
                    <span v-if="data.isOriginal == 2" class="wzlb">转载</span>
                </div>
            </div>
            <div class="titleSlot">只要你欢喜,每一秒都是豆蔻年华</div>
            <div class="am-article-bd  am-article-lead">
                <p class="markdown-body  " v-html="data.articleContent" v-highlight></p>
                <div class="content-footer">
                    <p >本文作者:{{ data.author }}</p>
                    <p>版权声明：本文为博主原创文章，遵循<a href="https://creativecommons.org/licenses/by/3.0/cn/">CC 4.0 BY-SA </a>
                        版权协议，转载请附上原文出处链接和本声明</p>
                        <p>本文链接:<a :href="data.articleUrl">{{data.articleUrl}}</a></p>
                </div>
            </div>

        </div>
    </article>
</template>
<script>
    import hljs from "highlight.js";
    import {
        articleInfo
    } from "@/api/templates.js";
    export default {
        name: "contentXl",
        data() {
            return {
                contentId: "",
                data: ""
            };
        },
        methods: {},
        mounted() {
            var contentId = this.$route.query.contentId;
            articleInfo({
                    contentId: this.$route.query.contentId
                }).then(res => {
                    this.data = res.data.data;
                    
                }),
                hljs.highlightCode();
        }
    };
</script>
<style scoped>
    .am-article {
        margin: 0 auto;
        margin-top: 30px;
    }

    h1 {
        text-align: center;
    }

    .am-article-meta {
        text-align: center;
        margin-bottom: 10px;
    }

    .am-article-meta span {
        display: inline-block;
        width: 100px;
        margin-right: 5px;
    }

    .am-article-lead {
        font-size: 15px !important;
        padding: 10px;
        line-height: 25px;
        background: rgba(249, 249, 249, 0.4) !important;
        position: relative;
    }

    .cat {
        max-width: 800px;
        margin: auto auto;
    }

    .wzlb {
        margin-left: 0px !important;
        background-color: #7cba59;
        color: white !important;
        width: 37px !important;
        padding: 0px 2px;
        height: 100%;
        border-radius: 4px;
    }

    .hljs {
        font-size: 100% !important;
    }

    pre {
        font-size: 100% !important;
    }

    .titleSlot {
        background: rgba(174, 217, 211, 1);
        height: 50px;
        border-radius: 2px;
        border-left: 3px solid #8a6262;
        text-align: center;
        font-size: 24px;
        line-height: 50px;
        margin: 30px 0px;
        padding: 0px 20px;
        font-family: "STXingkai";
    }

    .content-footer {
        position: relative;
        bottom: 0px;
        border-left: 3px solid red;
        background:#dcdcdc;
        padding-left: 5px;
    }
    .content-footer p{
        margin: 0px;
    }
</style>