<template>
  <div v-if="data" class="box">
    <div class="am-panel am-panel-default am-my-left-style">
      <div class="am-panel-hd">
        <img
          :src="img"
          alt="..."
          class="am-img-thumbnail am-circle"
          style="width:120px !important ;height:130px !important"
        />
        <div class="user-description">
          <span>{{ data.data.personalBrief }}</span>
        </div>
        <ul class="am-list">
          <li>
            <a
              ><i class="am-icon-home am-icon-fw"></i> 昵称 :
              {{ data.data.nickName }}</a
            >
          </li>
          <li>
            <a>
              <i class="am-icon-book am-icon-fw"></i> 职业 :
              {{ data.data.job }}</a
            >
          </li>
          <li>
            <a
              ><i class="am-icon-pencil am-icon-fw"></i> 邮箱 :
              {{ data.data.email }}</a
            >
          </li>
          <li>
            <a
              ><i class="am-icon-home am-icon-fw"></i> 现居地 :
              {{ data.data.live }}</a
            >
          </li>
          <li></li>
        </ul>
        <hr class="line" />
        <div class="footer">
          <el-button @click="drawer = true" type="primary" class="focusMe" >
            扫描二维码关注我
          </el-button>
           <el-drawer
      :visible.sync="drawer"
      :with-header="false"
      direction="ltr"
      size="19%"
      custom-class="drw"
    >
      <div class="drw_box">
        <h3>
          人生在世,应无所住;
          如果年轻,追着风走;<br>
          如果相信,跟着爱走;
          如果可以,随着心走;<br>
          如果留恋,带着梦走;<br>
          如果没有如果,也不该停留<br>
        </h3>
        <hr style="margin:8px 0px;">
        <h3>
          很抱歉,<br>
          以这样方式认识你<br>
          但是我仍然不想错过你
          </h3>
          <div class="lx_box">
            <img src="@/assets/wx.jpg">
            <span style="display:block">微信</span>
          </div>
          <div  class="lx_box">
          <img src="@/assets/qq.jpg">
           <span style="display:block">QQ</span>
        </div>
       
        </div>
    </el-drawer>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import { TestIdCard } from "@/api/templates.js";
export default {
  name: "idCard",
  data() {
    return {
      data: "",
      img: require("../../../../public/logo.jpg"),
      drawer: false
    };
  },
  methods: {},
  props: ["userinfo"],
  mounted() {
    TestIdCard({ username: "wodyiyi" }).then(res => {
      this.data = res.data;
    });
  },
  watch: {}
};
</script>

<style scoped>
.box {
  overflow: hidden;
  border-radius: 8px;
  margin: 5px 5px 10px 5px;
  max-width: 320px;
}
img {
  margin-top: 10px;
}
.am-panel-hd {
  padding: 0px !important;
  text-align: center;
  background-color: #908d87 !important;
  border: 0px;
}
.am-my-left-style {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0px;
  margin-bottom:5px;
}

.user-description {
  margin-top: 15px;
  height: 120px;
  background-color: #5f5f5f;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-description > span {
  display: block;
  height: 50px;
  padding: 10px 0px 10px 0px;
  color: white;
}
.am-list {
  margin: 0px !important;
}
a:hover {
  color: #1d3043 !important;
}
.am-list > li {
  background-color: #908d87 !important;
  text-align: left;
  border: #908d87 !important;
}
.am-list > li > a {
  padding: 2px 0px 2px 2px !important;
  font-size: 14px;
}
.line {
  margin: 2px 0px 2px 0px;
}
a {
  color: #d0d2d4 !important;
  line-height: 20px;
}
.footer {
  height: 60px;
  line-height: 60px;
}
.focusMe {
  background-color: #5f5f5f;
  border: 0px;
  height: 40px !important;
  padding: 0px !important;
  width: 160px;
  font-size: 17px;
}
.drw_box {
  background-color: #5f5f5f ;
  height:100%;
  padding:15px;
  line-height:30px;
  color:#d9d9d9;
}
.drw_box h3{
  margin:0px;
  text-align:center;
}
.lx_box img{
  width:200px;
  height:200px;
}

</style>
