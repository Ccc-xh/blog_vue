<template>
  <div id="big_box">
    <div class="block">
      <div class="box_text">
        能留下来的，都值得去珍藏
      </div>
      <router-view ></router-view>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { articleInfo } from "@/api/templates.js";
export default {
  name: "timeLine",
  data() {
    return {
     data:'',
    };
  },
  methods: {
  },
  mounted() {
  }
  ,
  watch: {
  },
};
</script>
<style scoped>
#big_box {
  padding: 10px;
  overflow: hidden;
  float: left;
  min-height: 500px;
  max-width: 850px;

}

.box_text {
  background: repeating-linear-gradient(
    45deg,
    #908d87,
    #908d87 15px,
    #5f5f5f 0,
    #908d87 30px
  ) !important;
  color: white !important;
  font-weight: 500;
  font-size: 20px;
  height: 60px;
  line-height: 60px;
  padding-left: 10px;
  margin-bottom: 25px;
  vertical-align: middle;
}

.block {
  margin: 0 auto;
  box-shadow:0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  
  min-height:550px;
  border-radius:8px;

}
.am-list {
  margin-bottom: 0px !important;
}

a {
  color: #908d87;
  padding: 4px 0px !important;
  cursor: pointer !important;
}

.el-timeline {
  padding-left: 20px;
}

.el-timeline-item__node--normal {
  background-color: #908d87;
}
.el-card {
  border: 0px;
}
.el-timeline-item__node--normal {
  background-color: #908d87 !important;
}
.el-timeline-item__tail {
  border-left: 2px solid #8a7e7e !important;
}

</style>
