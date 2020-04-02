<template>
  <div class="am-panel my-panel-style" id="newContent">
    <div class="am-panel-hd">
      <h3 class="am-panel-title">网站信息</h3>
    </div>
    <div class="spans">
      <p class="p">
        <i class="am-icon-calendar site-default-icon"></i>
        <span style="margin-left:5px;">建站时间:2020-03-31</span>
      </p>
      <p class="p">
        <i class="am-icon-book site-default-icon"></i>
        <span style="margin-left:5px;">文章总数: {{counts.fileCounts}}</span>
      </p>
      <p class="p">
        <i class="am-icon-tags site-default-icon"></i>
        <span style="margin-left:5px;">专栏数: {{counts.zlCounts}}</span>
      </p>
      <p class="p">
        <i class="am-icon-book site-default-icon"></i>
        <span style="margin-left:5px;">标签: {{counts.tagsCounts}}</span>
      </p>
      <p class="p">
        <i class="am-icon-commenting-o site-default-icon"></i>
        <span style="margin-left:5px;">留言数: {{counts.messageCounts}}</span>
      </p>
       <!-- <p class="p">
        <i class="am-icon-commenting-o site-default-icon"></i>
        <span style="margin-left:5px;">网站访问量: {{counts.cnzzCounts}}</span>
      </p> -->
      <p class="p">
        <i class="am-icon-hourglass-half site-default-icon"></i>
        <span style="margin-left:5px;">运营天数:{{toFromTime}}</span>
      </p>
    </div>
    <div class="am-panel-hd" style="height:38.89px">
      
    </div>
  </div>
</template>

<script>
import { simpArticleInfo ,getCounts} from "@/api/templates.js";
export default {
  name: "internet",
  data() {
    return {
      data: [""],
      toFromTime:'',
      counts:''
    };
  },
  methods: {},
  beforeCreate() {

     setInterval(() => {
      //建站时间时间
      var setInter = new Date(2020,2,31);
	    //获取当前时间
      var today = new Date();
      var timeold = (today.getTime() - setInter.getTime()); //总豪秒数
	    var secondsold = Math.floor(timeold / 1000);          //总秒数
	    var e_daysold = timeold / (24 * 60 * 60 * 1000);
      var daysold = Math.floor(e_daysold);                 //相差天数
	    var e_hrsold = (e_daysold - daysold) * 24;
	    var hrsold = Math.floor(e_hrsold);                   //相差小时数
	    var e_minsold = (e_hrsold - hrsold) * 60;
	    var minsold= Math.floor(e_minsold)                   //相差分钟数
      var seconds = Math.floor((e_minsold - minsold) * 60);  //相差秒数
      var times = today.getTime() - setInter.getTime();
      this.toFromTime = daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
    }, 1000);
  },
  mounted() {
    simpArticleInfo().then(res => {
      this.data = res.data;
      this.pagesum = Math.ceil(this.data.data.length / this.eachpage);
    }),
    getCounts().then(res=>{
      this.counts = res.data.data
    })
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
  margin-top: 15px;
}
.my-panel-style {
  background-color: #908d87 !important;
  color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0px;
}
.spans {
  background-color: #fff;
  color: black;
  padding: 20px 0px 20px 30px;
  text-align: left;

  max-height: 260px;
}
.p {
  margin: 0px 0px 10px 0px;
  /* max-width: 205px; */
  font-size: 15px;
}
.am-panel-title {
  font-size: 16px;
}
</style>
