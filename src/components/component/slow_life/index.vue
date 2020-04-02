<template>
  <article >
    <div class="box_big am-g">  
        <div class="cat am-u-sm-12 am-u-lg-8">
      <div class="left_big am-animation-fade">
        <lbt :pictureContent="pictureContent"></lbt>
        <left-text :pictureContent="pictureContent"></left-text>
      </div>
    </div>
    <div class="right_big am-animation-fade cat am-u-sm-12 am-u-lg-4">
      <right-top :pictureContent="pictureContent"></right-top>
      <right-bottom :pictureContent="pictureContent"></right-bottom>
    </div>
    </div>
  </article>
</template>
<script>
import lbt from "./component/lunbt";
import leftText from "./component/left_text";
import rightTop from "./component/right_img";
import rightBottom from "./component/right_bottom";
import { simpArticleInfo } from "@/api/templates.js";
export default {
  name: "slowLife",
  data() {
    return {
      pictureContent: []
    };
  },
  mounted() {
    simpArticleInfo({ blogTypeId: 3, topFlag: 1 }).then(res => {
      this.pictureContent = res.data.data;
    });
  },
  components: {
    lbt,
    leftText,
    rightTop,
    rightBottom
  }
};
</script>
<style scoped>
.left_big {
  overflow: hidden;
  /* float:left; */
}

.right_big {
  float: left !important;
  overflow: hidden;
  padding: 10px;
}
.cat {
  overflow: hidden;
  /* max-width: 1195px; */
  /* margin: 0px auto; */
}
.box_big{
    overflow: hidden;
    max-width: 1300px;
    /* margin: auto ; */
}
</style>
