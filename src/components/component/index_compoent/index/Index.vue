<template>
    <article  >
      <div class="am-g " >
        
      <div id="left_big" class="am-u-sm-12 am-u-lg-3 am-hide-md-down behind" >
        <id-card  ></id-card>
        <new-content ></new-content>
        <internet></internet>
      </div>
      <div id="center_big" class="am-u-sm-12 am-u-lg-9">
        <content-view ></content-view>
      </div>
      <div id="right_big" class="am-u-sm-12 am-u-lg-2">
        <right-top></right-top>
        <right-img></right-img>
      </div>
      </div>
    </article>
</template>

<script>
import idCard from "../Index_IDCard";
import newContent from "../NewContent";
import contentView from "../ContentViews";
import rightImg from "../Right";
import rightTop from '../rightTop'
import internet from '../internet'
export default {
  name: "index",
  data() {
    return {
     
    };
  },
  components: {
    idCard,
    newContent,
    contentView,
    rightImg,
    rightTop,
    internet,
  },
  mounted() {
  },
  watch: {
  },
};
</script>

<style scoped>
article {
  overflow: hidden;
  width:auto;
  margin:20px auto;
  /* padding:0px 20px; */

}
#left_big {
  overflow: hidden;
  float: left;
  /* padding: 10px auto; */
  padding:5px;
  max-width:325px;
  margin-bottom:-12
}
#center_big {
  float: left;
  max-width:780px;
  padding: 10px;
}
#right_big {
  padding: 10px;
  float:left
}
.am-g{
  margin:auto;
  max-width:1460px;
}
.am-u-lg-2{
  min-width:22%;
}
</style>
