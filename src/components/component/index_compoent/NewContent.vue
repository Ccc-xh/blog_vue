<template>
  <div class="am-panel my-panel-style" id="newContent">
    <div class="am-panel-hd">
      <h3 class="am-panel-title">最近更新</h3>
    </div>
    <ul class="am-list">
      <li
        v-for="(item, index) in (data.data || '').slice(
          (currpage - 1) * eachpage,
          currpage * eachpage
        )"
        :key="item.articleId"
      >
        <router-link
          :to="{ path: '/content_xl', query: { contentId: item.articleId } }"
          class="am-text-truncate"
        >
          {{ item.articleTitle }}
        </router-link>
      </li>
    </ul>
    <ul class="am-pagination">
      <li>
        <!-- style="cursor: pointer;margin-right:5px" -->
      <a
        v-if="currpage > 1"
        @click="currpage--"
        style="margin:0px 5px 0px 0px"
        >&laquo; 上一页</a
      >
      <!-- <span>{{currpage}}</span>/<span>{{pagesum}}</span> -->
       </li>
       <li>
         <!-- style="cursor: pointer;margin-left:5px" -->
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
import { simpArticleInfo } from "@/api/templates.js";
export default {
  name: "newContent",
  data() {
    return {
      data: [""],
      pagesum: "", //总页数
      currpage: 1, //当前页数
      eachpage: 6 //每页行数
    };
  },
  methods: {},
  mounted() {
    simpArticleInfo().then(res => {
      this.data = res.data;
      this.pagesum = Math.ceil(this.data.data.length / this.eachpage);
    });
  },
  watch: {}
};
</script>
<style scoped>
#newContent {
  clear: both;
  max-width: 305px;
  margin: 0px auto;
  background-color: #908d87;
  border-radius: 8px;
}
.my-panel-style {
  background-color: #908d87 !important;
  color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0px;
}
.am-list {
  margin-top: 0px !important;
}
.am-list > li {
  display: block;
  transition: background-color 2s ease;
}
.am-list > li:hover {
  background-color: #908d87;
}
#title {
  padding-top: 6px;
  margin-left: 10px;
  width: 64px;
  transition: all 0.8s ease;
}
#title span {
  font-size: 16px;
  color: black;
}
a {
  font-size: 14px;
  color: rgba(42, 42, 42, 1);
}
.am-panel-hd {
  height: 38.4px;
  padding-left: 7.5px;
}
.am-panel-title {
  font-size: 16px;
}
.am-pagination{
    margin:0px;
    text-align: center;
    padding:5px 0px;
}
</style>
