<template>
  <div class="big_box_md ">
    <left-table class="bannerList"></left-table>
    <!-- <mark-down></mark-down> -->
    <transition mode="out-in">
      <router-view class="routerConent"></router-view>
    </transition>
  </div>
</template>
<script>
import leftTable from "./component/leftTable";
import markDown from "./component/markdown";
import { isLogin ,login} from "@/api/templates.js";
export default {
  name: "editBlog",
  data() {
    return {
      content: "",
      html: ""
    };
  },
  mounted() {},
  methods: {
    change(value, render) {
      //render为md解析后的html
      this.html = render;
    },
    submit() {
     
    }
  },
  components: {
    markDown,
    leftTable
  }
};
</script>
<style scoped>
.big_box_md {
  overflow: hidden;
  margin: 0 auto;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateZ(50px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
.bannerList{
  width:10%;
}
.routerConent{
  width:90%;
}
</style>
