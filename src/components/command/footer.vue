<template>
  <div class="foot am-topbar-bottom">
    <div class="info_cat">
      <span>
        ©2020-2021 Ccc的个人博客 -
        <i class="am-icon-coffee"></i> 陈叙含 版权所有
      </span>
    </div>
    <div class="icp_info_cat">
      <a href="http://beian.miit.gov.cn">赣ICP备20002403号</a>
    </div>
    <div class="ga_info_cat">
      <img src="@/assets//balog.png" />
      <a>赣公网备案xxxxxxxxxxx号</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {};
  }
};
</script>
<style scoped>
.foot {
  width: 100%;
  height: 95px;
  background-color: #908d87;
  text-align: center;
  /* position: absolute;
  bottom:0px; */
}
.info_cat {
  font-size: 17px;
  padding-top: 10px;
  color: black;
}
.icp_info_cat a {
  font-size: 16px;
  color: black;
}
.foot div {
  max-width: 380px;
  margin: auto;
}
.ga_info_cat {
  height: 20px;
  vertical-align: baseline;
  line-height: 20px;
}
.ga_info_cat a {
  display: inline-block;
  height: 20px;
  margin-left: 5px;
  color: black;
  font-size: 16px;
}
</style>
