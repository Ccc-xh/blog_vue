<template>
  <div id="mddile" v-if="data">
    <div
      class="am-panel am-panel-default am-animation-slide-top"
      v-for="(item, index) in (data[0] || '')"
      :key="item.articleId"
    >
      <div
        class="am-panel-hd my-panel-style"
        style="border-radius: 8px 8px 0px 0px;"
      >
        <h1 class="am-panel-title am-text-truncate">{{ item.articleTitle }}</h1>
      </div>
      <div class="am-panel-tag">
        <span>
          <i class="am-icon-user am-icon-sm "> 作者 :</i>
          <span href="#" class="author"> {{ item.author }} </span>
          <span> | </span>
        </span>
        <span>
          <i class="am-icon-calendar-o am-icon-sm "> 发表于 </i>
          <time title="发表于"> {{ item.publishDate }}</time>
          <span> | </span>
        </span>
        <span>
          <i class="am-icon-folder-o am-icon-sm "> 分类 : </i>
          <a href="#" @click.prevent="LinkToFl(item.sortName)">
            {{ item.sortName }}
          </a>
          <span> | </span>
        </span>
        <span>
          <span class="wzlb" v-if="item.isOriginal == 1">
            原创
          </span>
          <span class="wzlb" v-if="item.isOriginal == 2">
            转载
          </span>
        </span>
      </div>
      <hr style="height:3px;border:none;border-top:3px double #908d87;" />
      <div class="am-panel-bd">
        <p class="am-monospace ">{{ HTMLDecode(item.articleContent) }}</p>
      </div>
      <div
        class="am-panel-footer my-panel-style"
        style="border-radius: 0px 0px 8px 8px;"
      >
        <div class="foot_btm">
          <button
            type="button"
            class="am-btn am-btn-default am-radius am-hover"
            @click="linkToXl(item.articleId)"
          >
            阅读全部
          </button>
        </div>
      </div>
    </div>
    <ul class="am-pagination">
      <li>
        <a
          v-if="currpage > 1"
          @click="currpage--"
          style="margin:0px 5px 0px 0px"
          >&laquo; 上一页</a
        >
      </li>
      <li>
       <span>{{currpage}}</span>
      </li>
      <li>
        <a
          v-if="currpage < pagesum"
          @click="currpage++"
          style="margin:0px 0px 0px 5px"
          >下一页 &raquo;</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { articleInfo } from "@/api/templates.js";
export default {
  name: "contentView",
  data() {
    return {
      data:[],
      pagesum: "", //总页数
      currpage: 1, //当前页数
      eachpage: 4 //每页行数
    };
  },
  beforeCreat() {},
  mounted() {
    articleInfo({ topFlag: 1 ,startPage:0,endPage:4}).then(res => {
      this.data.push(res.data.data.result);
      this.pagesum = Math.ceil(res.data.data.count / this.eachpage);
    });
  },
  methods: {
    linkToXl(ev) {
      this.$router.push({ path: "/content_xl", query: { contentId: ev } });
    },
    LinkToFl(ev) {
      this.$router.push({
        path: "/blog_diary/fl",
        query: { sortName: ev, type: 1 }
      });
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
  watch: {
    currpage: function(newValue, oldValue) {
        
        var epage = (newValue-1)*this.eachpage
    
        articleInfo({ topFlag: 1,startPage:epage,endPage:this.eachpage }).then(res => {

        // this.data = res.data.data.result;
        this.data = [];
        this.$set(this.data,0,res.data.data.result)
        this.$forceUpdate()
      });
    }
  }
};
</script>
<style scoped>
#images {
  overflow: hidden;
}
.am-panel-default {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  height: 320px;
}
.my-panel-style {
  background-color: #908d87 !important;
  color: white;
  border-bottom: 2px solid #908d87;
  height: 57px;
  line-height: 40px;
}
.author {
  margin: 0px !important;
}
.am-panel-bd {
  padding-top: 0px;
}

.am-panel-tag {
  margin-top: 15px;
}

hr {
  margin: 12px 0px 12px 0px;
}

.am-panel-title {
  font-size: 25px;
  color: white !important;
}

.am-panel-tag span {
  margin-left: 5px;
  color: #999;
}

a {
  color: #2a2a2a;
}

p {
  -webkit-box-orient: vertical;
  height: 127px;
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  margin-bottom: 0px;
}
.am-hover {
  transition: background-color 1s ease;
  height: 40px;
  font-size: 16px;
}
.am-hover:hover {
  color: white;
  background-color: #908d87;
}
.foot_btm div {
  position: absolute;
}
.foot_btm {
  position: relative;
  width: 88px;
  height: 34px;
}
.wzlb {
  margin-left: 0px !important;
  background-color: #7cba59;
  color: white !important;
  width: 30px;
  padding: 0px 2px;
  height: 100%;
  border-radius: 4px;
}
.am-pagination {
  margin: 0px;
  text-align: center;
  padding: 5px 0px;
}
</style>
