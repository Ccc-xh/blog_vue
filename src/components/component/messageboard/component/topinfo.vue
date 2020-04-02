<template>
  <div class="top_title">
    <h1>留言板</h1>
    <h2>
      海内存知己,天涯若比邻
    </h2>
    <div style="height:40px;">
    </div>
    <div class="input_box" >
      <el-input 
         v-if="!flag"
         type="textarea"
        :autosize="{ minRows: 4, maxRows: 4 }"
        :placeholder="placeholder" 
         v-model="messageInfo"
        :disabled="flag"
        >
      </el-input>
      <div  class="msg-input" v-if="flag">
        请 <a @click="Login()">登录</a> 后再留言
      </div>
      <el-button type="info" @click="messageAxios">畅言一下</el-button>
    </div>
  </div>
</template>
<script>
import { message } from "@/api/templates.js"
export default {
  name: "topInfo",
  data() {
    return {
      messageInfo: "",
      time: 0,
      flag:true,
      placeholder:'登录 后才能留言哦',
    };
  },
  methods: {
    messageAxios() {
      if ((this.messageInfo.length == 0) ) {
        this.$message({
          title:'提示',
          message:"请发表您的看法",
          type:"error"
        })
        return false;
      } else {
        var format = {
          time: this.formatDate(),
          name: localStorage.getItem("userName"),
          message: this.messageInfo
        };
        var bean = JSON.stringify(format);
        
        message(bean, { type: 1 }).then(res => {
         this.$router.go(0)
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
    Login(){
      if(this.flag == true){
        this.$router.push({path:'/login'})
      }else{
        return false;
      }
    }
  },
  mounted() {
    let userName = localStorage.getItem("userName");
    if(userName != null && userName != 'null'){
      this.flag = false;
      this.placeholder = '请输入内容'
    }
  }
};
</script>
<style scoped>
.msg-input{
  min-height: 96px; 
  height:96px ;
  width:100%;
  background-color:#F5F7FA;
  border-color:#E4E7ED;
  cursor: pointer;
  color:#C0C4CC;
  font-size: 16px;
  line-height: 96px;
}
h1 {
  font-family: "STXingkai";
  font-size: 60px;
  width: 350px;
  margin: auto auto;
  font-weight: 600;
  
}

h2 {
  font-family: "STXingkai";
  font-size: 35px;
  width: 450px;
  margin: auto auto;
}

.top_title {
  text-align: center;
  overflow: hidden;
   background:rgba(255,255,255,1);
}

.input_box {
  padding: 0px 20px;
  /* overflow: hidden; */
}

.el-button {
  float: left;
  margin-top: 8px;
}

.el-textarea__inner {
  height: 115px !important;
}

element.style {
  height: 115px !important;
}
.name {
  width: 200px;
  float: left;
  margin-left: 20px;
}
.warn {
  display: block;
  height: 40px;
  line-height: 40px;
  float: left;
  margin-left: 10px;
  color: red;
}

</style>
