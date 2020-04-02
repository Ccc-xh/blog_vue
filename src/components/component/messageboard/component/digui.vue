<template>
  <div class="box_cat">
    <div v-for="(item, index) in data" style="padding:2.5px 15px;" >
      <div>
        <a>{{ item.name }}</a> 回复 <a>{{ item.fname }}</a> :
        {{ item.message }}
      </div>
      <span>
        {{ item.time }}
        <span style="margin-left:5px;">
            <i class="am-icon-comment-o" style="color:gray"></i>
        <a href="#" @click.prevent="btn(index)" style="margin-left:5px;color:gray">回复</a>
        </span>
      </span>
      <div class="btn_box">
        <div>
          <div class="mix_input_box" v-show="info.flag && info.index === index">
            <div></div>
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4 }"
             
              v-model="info.textarea"
            >
                废旧塑料的开发商的李开复没收到
            </el-input>
           <div style="margin-top:5px;">
            <el-button type="info" @click="replyMessage(item.id)"
            >发表评论</el-button
          >
          <el-button type="info" @click="reserMess(index)">取消</el-button>
           </div>
          </div>
        </div>
      </div>
      <my-tree v-bind:list="item.children"></my-tree>
      
    </div>
    
  </div>
</template>
<script>
import { message } from "@/api/templates.js";
export default {
  name: "myTree",
  data() {
    return {
      data: "",
      info: {
        flag: false,
        index: 0,
        textarea: "",
        name: "",
        time: 0,
        username: ""
      }
    };
  },
  methods: {
    btn(index) {
      this.info.flag = !this.info.flag;
      this.info.index = index;
      let userName = localStorage.getItem("userName");
      if (userName == null || userName == 'null') {
         this.$router.push({path:'/login'})
        } else {
         
        }
    },
    reserMess(index) {
    this.info.flag = !this.info.flag;
  },
  replyMessage(ev) {
    if (this.info.textarea.length == 0) {
      this.$message({
                title:'信息',
                message:'请发表您的看法!',
                type:'warning'
              })
      return false;
    } else {
      var format = {
        time: this.formatDate(),
        name: localStorage.getItem("userName"),
        message: this.info.textarea,
        fid: ev
      };
      var bean = JSON.stringify(format);
      message(bean, { type: 1 }).then(res => {
        this.$router.go(0);
      });
    }
  },
  formatDate: function() {
    let date = new Date();
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? "0" + MM : MM;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    let h = date.getHours();
    h = h < 10 ? "0" + h : h;
    let m = date.getMinutes();
    m = m < 10 ? "0" + m : m;
    let s = date.getSeconds();
    s = s < 10 ? "0" + s : s;
    return y + "-" + MM + "-" + d + " " + h + ":" + m;
  },
  },
  
  props: ["list"],
  mounted() {
    this.data = this.list;
  }
};
</script>
<style scoped>
.box_cat{
    color:black;
}
a{
    font-size: 15px;
    color:#868686;
}
a:hover{
    color:#37316b !important;
}
.mix_input_box {
  padding: 20px;
  width: 850px;
  transition: all 1s ease;
  animation: show 1s ease;
}
.mix_input_box button {
  margin-top: 10px;
}
@keyframes show {
  0% {
    opacity: 0;
    transform: translateY(170px);
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
