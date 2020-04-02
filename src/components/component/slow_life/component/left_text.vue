<template>
  <div class="text_big">
    <div class="am-panel am-panel-default " v-for="(item,index) in (data[0] || '').slice(0,5)">
      <div class="am-panel-hd my-panel-style">
        <h1 class="am-panel-title" @click="linkToXl(item.articleId)" style="cursor: pointer;">{{item.articleTitle}}</h1>
      </div>
      <div class="am-panel-tag am-g">
        <div class="img_div am-u-sm-3">
          <!--  -->
          <img :src="item.articleImg"  style="width:100%;height:100%;"/>
        </div>
        <div class="am-panel-bd am-u-sm-9" >
          <p class="am-monospace "  @click="linkToXl(item.articleId)" style="cursor: pointer">
            {{HTMLDecode(item.articleContent)}}
          </p>
          <div class="text_info">
            <span><i class="am-icon-user am-icon-sm "> {{item.author}} </i></span>
            <span><i class="am-icon-calendar-o am-icon-sm "> {{item.publishDate}} </i></span>
            <span><i class="am-icon-folder-o am-icon-sm " style="cursor: pointer; color:#5f5f5f"
                @click="LinkToFl(item.sortName)"> 慢生活 </i></span>
            <span v-if="item.isOriginal == 1" class="wzlb">原创</span>
            <span v-if="item.isOriginal == 2" class="wzlb">转载</span>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import {
    articleInfo
  } from '@/api/templates.js'
  export default {
    name: "leftText",
    data() {
      return {
        data: []
      }
    },
    methods: {
      linkToXl(ev) {
        this.$router.push({
          path: "/content_xl",
          query: {
            contentId: ev
          }
        })
      },
      LinkToFl(ev) {
        this.$router.push({
          path: '/blog_diary/fl',
          query: {
            sortName: ev,
            type: 1
          }
        })
      },
      //html反转text
    HTMLDecode(text) {
      var temp = document.createElement("div");
      temp.innerHTML = text;
      var out = temp.innerText || temp.textContent;
      temp = null;
      return out;
    },
    //text转义html
    HTMLEncode(html) {
      var temp = document.createElement("div");
      temp.textContent != null
        ? (temp.textContent = html)
        : (temp.innerText = html);
      var output = temp.innerHTML;
      temp = null;
      return output;
    }
    },
    mounted() {
      articleInfo({
        blogTypeId: 3
      }).then(res => {
        this.data.push(res.data.data.result)
      })
    },

  };
</script>

<style scoped>
  .text_big {
    float: left;
    /* padding: 10px; */
    /* width: 770px; */
  }

  .my-panel-style {
    background: repeating-linear-gradient(45deg,
        #908d87,
        #908d87 15px,
        #5f5f5f 0,
        #908d87 30px) !important;
    color: white;
    border: 0px;
    border-radius: 5px;
  }

  .am-panel-default {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 5px;
  }

  .am-panel-hd {
    height: 38.4px;
    padding-left: 7.5px;
  }

  .am-panel-title {
    font-size: 17px;
    color: white;
    letter-spacing: 1px;
  }

  .am-panel-tag {
    overflow: hidden;
    margin: 10px 5px;
    position: relative;
  }

  .am-panel-bd {
    float: left;
    height: 112px;
    padding:0px;
    position: relative;
   
  }

  p {
    -webkit-box-orient: vertical;
    height: 60px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    margin-bottom: 0px;
  }

  .img_div {
    float: left;
    overflow: hidden;
    height: 112px;
  }
  .img_div img{
    transition: all 1s ease;
  }
  .img_div:hover > img {
    transform: scale(1.1);
  }
  .text_info {
    height: 42px;
    line-height: 42px;
    margin-top: 19px;
    color:#999;
    
  }

  .text_info span {
    margin-right: 11px;
  }
  .wzlb{
  margin-left:0px !important;
  background-color:#7cba59;
  color:white !important;
  width:37px !important;
  padding:0px 2px;
  height:100%;
  border-radius:4px;
}
</style>