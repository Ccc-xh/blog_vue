<template>
  <div>
      <el-timeline >
     <transition-group mode="out-in">
      <el-timeline-item
        v-for="(item, index) in data.slice(
          (currpage - 1) * eachpage,
          currpage * eachpage
        )"
        :key="index"
        :icon="icon"
        :type="type"
        :color="doltColor"
        :size="size"
        :timestamp="item.publishDate"
      >
        <a @click.prevent="linkToXl(item.articleId)">{{ item.articleTitle }}</a>
      </el-timeline-item>
     </transition-group>
    </el-timeline>
    <div class="myPage">
      <span v-if="currpage > 1" @click="currpage--" style="cursor: pointer;"><< 上一页</span>
      
      <span v-if="currpage < pagesum" @click="currpage++" style="cursor: pointer;">下一页>></span>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { sorts, tags } from "@/api/templates.js";
export default {
  name: "flLine",
  data() {
    return {
      doltColor: "#908d87",
      type: "info",
      color: "#0bbd87",
      icon: "",
      size: "large",
      data: [],
      pagesum:'', //总页数
      currpage: 1, //当前页数
      eachpage:8//每页行数
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
    }
  },
  mounted() {
    if (this.$route.query.type == 1) {
      sorts({
        sortName: this.$route.query.sortName
      }).then(res => {
        this.data = res.data.data;
         this.pagesum = Math.ceil(this.data.length/this.eachpage)
      });
    } else if (this.$route.query.type == 2) {
      tags({ tagsId: this.$route.query.tagsId }).then(res => {
        this.data = res.data.data;
         this.pagesum = Math.ceil(this.data.length/this.eachpage)
      });
    }
    
     
  },
  watch: {
    $route: function(newValue) {
      if (newValue.query.type == 1) {
        //表示分类栏的请求
        sorts({
          sortName: newValue.query.sortName
        })
          .then(res => {
            this.data = res.data.data;
          })
          .catch(er => {
           
          });
      }
      if (newValue.query.type == 2) {
        //表示标签的请求
        tags({ tagsId: newValue.query.tagsId }).then(res => {
          this.data = res.data.data;
        });
      }
    }
  }
};
</script>
<style scoped>
.am-list {
  margin-bottom: 0px !important;
}

a {
  color: #614e4e;
  padding: 4px 0px !important;
  cursor: pointer !important;
}
.el-timeline {
  padding-left: 20px;
}

.el-timeline-item__node--normal {
  background-color: red;
}

.el-card {
  border: 0px;
}

.el-timeline-item__node--normal {
  background-color: #080809 !important;
}

.el-timeline-item__tail {
  border-left: 2px solid #8a7e7e !important;
}
 .myPage{
    width: 100%;
    text-align: center;
    color:rgb(144, 141, 135);
     margin-top:10px;
  }

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
