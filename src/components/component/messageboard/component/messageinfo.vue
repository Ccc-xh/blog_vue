<template>
  <div>
    <div
      class="am-comment "
      v-for="(item, index) in data || ''"
      :key="index"
    >
      <a href="#">
        <img
          :src="img"
          alt=""
          class="am-comment-avatar"
          width="48"
          height="48"
        />
      </a>

      <div class="am-comment-main">
        <header class="am-comment-hd">
          <!--<h3 class="am-comment-title">评论标题</h3>-->
          <div class="am-comment-meta">
            <a class="am-comment-author">{{ item.name }}</a>
            评论于
            <time datetime="item.time" title="item.time">{{ item.time }}</time>
          </div>
        </header>

        <div class="am-comment-bd">
          {{ item.message }}
        </div>
        <div style="padding-left:15px;font-size:15px">
           <i class="am-icon-comment-o" style="color:gray"></i>
          <a href="#" @click.prevent="btn(index)" style="margin-left:5px;color:gray">回复</a>
        </div>

        <my-tree v-bind:list="item.children"></my-tree>
        <div class="btn_box">
          <div>
            <div
              class="mix_input_box"
              v-show="info.flag && info.index === index"
            >
              <div></div>
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 4 }"
                placeholder="请输入内容"
                v-model="info.textarea"
              >
              </el-input>
              <el-button type="info" @click="replyMessage(item.id)"
                >畅言一下</el-button
              >
              <el-button type="info" @click="reserMess(index)">取消</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { message } from "@/api/templates.js";
import myTree from "./digui";
export default {
  name: "boardInfo",
  data() {
    return {
      username: "",
      info: {
        flag: false,
        index: 0,
        textarea: "",
        name: "",
        time: 0,
        username: ""
      },
      data: "",
      img: require("../../../../../public/message.jpg")
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
    getTree(treeData, parentId, fname) {
      var treeArr = [];
      for (var i = 0; i < treeData.length; i++) {
        var node = treeData[i];
        if (node.fid == parentId) {
          var newNode = {
            id: node.id,
            name: node.name,
            message: node.message,
            fid: node.fid,
            time: node.time,
            fname: fname,
            children: this.getTree(treeData, node.id, node.name)
          };
          treeArr.push(newNode);
        }
      }
      return treeArr;
    },

    replyMessage(ev) {
      if (this.info.textarea.length == 0) {
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
    }
  },
  mounted() {
    message().then(res => {
      this.data = this.getTree(res.data.data, 0, res.data.data[0].name);
    });
  },
  components: {
    myTree
  }
};
</script>
<style scoped>
.am-comment {
  margin-top: 0 !important;
  margin-bottom: 15px;
}
.am-comment-bd {
  color: gray;
}
.am-comment {
  padding: 0px 10px;
}
.btn_box {
  padding-left: 15px;
  padding-bottom: 6px;
}
.btn_box a {
  color: #999;
}
.btn_box a:hover {
  color: red;
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
.name {
  color: red;
}
a:hover{
    color:#37316b !important;
}
</style>
