<template>
  <div class="right_bottom_big">
    <div class="title">
      <h2>随机文章</h2>
    </div>
    <div class="top_img">
      <img :src="data[0].articleImg" v-if="data" />
      <div class="over" @click="linkToXl(data[0].articleId)" style="cursor: pointer;"></div>
      <div class="over_title">
        <span v-if="data">{{data[0].publishDate}}</span>
        <h3 v-if="data">{{data[0].articleTitle}}</h3>
      </div>
    </div>
    <div class="text_box">
      <div class="text_icon" v-for="item in data.slice(1,5)" :key="item.articleId" @click="linkToXl(item.articleId)">
        <div class="div_img">
          <img :src="item.articleImg" />
        </div>
        <a href="#"
          >{{item.articleTitle}}</a
        >
        <span>{{item.publishDate}}</span>
      </div>

     
    </div>
  </div>
</template>
<script>
import { simpArticleInfo } from "@/api/templates.js";
export default {
  name: "rightBottom",
  data() {
    return {
      data: ""
    };
  },
  methods: {
    linkToXl(ev) {
      this.$router.push({
        path: "/content_xl",
        query: {
          contentId: ev
        }
      });
    },
    LinkToFl(ev) {
      this.$router.push({
        path: "/blog_diary/fl",
        query: {
          sortName: ev,
          type: 1
        }
      });
    }
  },
  mounted() {
    simpArticleInfo({
      blogTypeId: 3,
      randomFlag:1
    }).then(res => {
      this.data = res.data.data;
    });
  }
};
</script>
<style scoped>
.right_bottom_big {
  margin-top: 35px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 25px;
}

.over {
  width: 340px;
  height: 200px;
  background-color: black;
  opacity: 0.4;
  position: absolute;
  bottom: 15px;
  transition: all 0.7s ease;
}

.over:hover {
  opacity: 0.7;
}

.right_bottom_big:hover h2::after {
  width: 100%;
}
.title h2::after {
  content: "";
  border-bottom: 2px solid black;
  left: 1px;
  width: 50px;
  height: 3px;
  bottom: -5px;
  position: absolute;
  transition: all 2s ease;
}

h3 {
  margin: 0px;
  font-size: 15px;
  color: #fff;
  height: 25px;
  line-height: 25px;
  font-weight: 300;
}

.over_title {
  position: absolute;
  left: 20px;
  bottom: 15px;
  width: 340px;
  height: 100px;
  padding: 20px;
}

.over_title span {
  color: #ccc;
  font-size: 12px;
  margin-bottom: 5px;
}

h2 {
  margin: 0px;
  color: #282828;
  font-size: 18px;
  font-weight: 600;
}

/* .cat{
      box-shadow: 0 2px 4px #554547, 0 0 6px #5b3e42;

} */
.title {
  position: relative;
}

.top_img {
  position: relative;
}



.top_img img {
  width: 340px;
  height: 200px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.text_box img {
  width: 100px;
  height: 75px;
  transition: all 1s ease;
}

.text_box :hover > img {
  transform: scale(1.15);
}

.text_box div {
  height: 75px;
}

.text_icon {
  margin-bottom: 10px;
}

.text_icon a {
  display: block;
  float: left;
  width: 210px;
  -webkit-box-orient: vertical;
  height: 40px;
  line-height: 20px;
  text-overflow: ellipsis;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #48494d;
}

.div_img {
  float: left;
  margin-right: 10px;
  overflow: hidden;
}

.text_icon span {
  display: block;
  margin-top: 20px;
  width: 100px;
  color: #7d7c7c;
  float: left;
}
</style>
