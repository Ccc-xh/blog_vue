<template>
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo my-style"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
        <el-menu-item index="2" @click="ManagerBlog(1)">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title" >文章管理</span>
        </el-menu-item>

        <el-menu-item index="3" @click="ManagerBlog(2)">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title" >文章编辑</span>
        </el-menu-item>

        <el-menu-item index="4" @click="ManagerBlog(3)">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title"  >分类管理</span>
        </el-menu-item>

        <el-menu-item index="5" @click="ManagerBlog(4)">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title" >评论管理</span>
        </el-menu-item>

        <el-menu-item index="6" @click="ManagerBlog(5)">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title" >网站留言</span>
        </el-menu-item>

        <el-menu-item index="7" @click="ManagerBlog(6)">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title" >浏览统计</span>
        </el-menu-item>
        <!-- <el-menu-item index="7">
           <i class="el-icon-menu"></i> 
          <span slot="title">浏览统计</span>
        </el-menu-item> -->
    </el-menu>
  </el-col>
</template>
<script>
import $ from "jquery";
export default {
  name: "leftTable",
  data() {
    return {
      // windowHeight: $(".big_box_md").height()
    };
  },
  mounted() {
    // this.windowHeight = $('.big_box_md').height();
    // var heg = this.windowHeight + 'px';
    // var that = this;
    // setInterval(function() {
    //   that.windowHeight = $(".big_box_md").height();
    //   $(".el-col").css("height", that.windowHeight + "px");
    //   $(".el-menu-vertical-demo").css("height", that.windowHeight + "px");
    // }, 1000);
  },
  watch: {},
  methods: {
      ManagerBlog(key){
        switch (key) {
          case 1: //博客管理列表
            this.$router.push({path:'/edit_blog/blogs'})
            break;
          case 2: //文章编辑
            this.$router.push({path:'/edit_blog/editor'})
        }
      }

  }
};
</script>
<style scoped>
.el-col {
  float: left;
  width: 150px;
  min-height:600px;
}
.my-style{
   
}
</style>
