<template>
  <div class="md_box">
    <el-form ref="form" :model="form" label-width="80px">
      <input
        type="text"
        placeholder="请输入标题"
        class="BlogTitle"
        v-model="blogName"
      />

      <mavon-editor
        v-model="content"
        ref="md"
        @change="change"
        class="md"
        style="overflow: scroll;"
        :toolbars="toolbarsValue"
        :ishljs = "true"
       

        
      />

      <el-form-item label="文章标签">
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
          effect="plain"
          :type="type"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisibleTag"
          v-model="inputValueTag"
          ref="saveTagInputTag"
          size="small"
          @keyup.enter.native="handleInputConfirmTag"
          @blur="handleInputConfirmTag"
        >
        </el-input>
        <el-button class="button-new-tag" size="small" @click="showInputTag"
          >+ 添加标签</el-button
        >
      </el-form-item>

      <el-form-item label="文章专栏">
        <el-tag
          :key="tag"
          v-for="tag in dynamicSort"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
          effect="plain"
          :type="type"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisibleSort"
          v-model="inputValueSort"
          ref="saveTagInputSort"
          size="small"
          @keyup.enter.native="handleInputConfirmSort"
          @blur="handleInputConfirmSort"
        >
        </el-input>
        <el-button class="button-new-tag" size="small" @click="showInputSort"
          >+ 新建专栏</el-button
        >

        <!-- <div
          style="margin-top: 20px; border: 1px solid #908d87; width: 400px;padding: 10px;"
        >
          <el-checkbox-group v-model="checkboxGroup1" size="small">
            <el-checkbox label="JAVA" border></el-checkbox>
            <el-checkbox label="LINUX" border></el-checkbox>
            <el-checkbox label="SPRING" border></el-checkbox>
            <el-checkbox label="DOCKER" border></el-checkbox>
            <el-checkbox label="ZooKeeper" border></el-checkbox>
           
          </el-checkbox-group>
        </div> -->
      </el-form-item>

      <el-form-item label="文章图片">
        <div style="width:40%">
          <el-input placeholder="请输入内容" v-model="imgsrc">
            <template slot="prepend">Http://</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="文章链接">
        <div style="width:40%">
          <el-input placeholder="请输入内容" v-model="articleUrl">
            <template slot="prepend">Http://</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="作品类型">
        <select id="select" v-model="blogType">
          <option value="0">请选择</option>
          <option value="1">技术博客</option>
          <option value="2">生活杂记</option>
          <option value="3">程序人生</option>
        </select>
      </el-form-item>
      <el-form-item label="文章类型">
        <select id="select" v-model="selectValue">
          <option value="0">请选择</option>
          <option value="1">原创</option>
          <option value="2">转载</option>
        </select>
      </el-form-item>
    <el-form-item label="是否置顶">
        <select id="select" v-model="isTop">
          <option value="-1">请选择</option>
          <option value="1">置顶</option>
          <option value="0">不置顶</option>
        </select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布博客</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { isLogin, insertBlog, editorBlog,articleInfo } from "@/api/templates.js";

export default {
  name: "markDown",
  data() {
    return {
      content: "",
      html: "",
      type: "info",
      blogName: "",
      imgsrc:"",
      id: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      dynamicTags: [],
      dynamicSort: [],
      inputVisibleTag: true,
      inputVisibleSort: true,
      inputValueTag: "",
      inputValueSort: "",
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: [],
      selectValue: '0',
      blogType:'0',
      articleUrl:'',
      isTop:'-1',
      toolbarsValue: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: false, // 保存（触发events中的save事件)
                
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            },
    };
  },
  mounted() {
    //管理通过编辑初始化信息
    if (this.$route.query.articleId != undefined) {
      this.id = this.$route.query.articleId
      var startMsg = ''
       
      articleInfo({contentId:this.$route.query.articleId}).then(res=>{
        startMsg =  res.data.data
        this.blogName = startMsg.articleTitle;
        this.content = startMsg.articleMdContent;
        this.inputValueSort = startMsg.sortName;
        this.inputValueTag = startMsg.tagsName;
        this.selectValue = startMsg.isOriginal;
        this.imgsrc = startMsg.articleImg,
        this.blogType = startMsg.sortFId,
        this.articleUrl = startMsg.articleUrl,
        this.isTop = startMsg.topFlag
         
      })
    }
  },
  methods: {
    change(value, render) {
      //render为md解析后的html
      this.html = render;
      this.mdhtml = value;
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
    onSubmit() {
      var id = this.id;
      var format = {
        articleId: id,
        author: localStorage.getItem("userName"),
        articleTitle: this.blogName,
        articleContent: this.html,
        articleMdContent:this.mdhtml,
        publishDate: this.formatDate(),
        isOriginal: this.selectValue,
        sortName: this.dynamicSort[0],
        tagsName: this.dynamicTags[0],
        articleImg: this.imgsrc,
        sortFId:this.blogType,
        articleUrl:this.articleUrl,
        topFlag:this.isTop
      };
     
      var bean = JSON.stringify(format);
      if (id == '') {
        insertBlog(bean)
          .then(res => {
            if (res.data.no == 1) {
              this.$message({
                title:'信息',
                message:res.data.data,
                type:'success'
              })
              this.$router.go(0);
            }
          })
          .catch(error => {
          });
      } else {
        editorBlog(bean, { type: 1 })
          .then(res => {
            if (res.data.no == 1) {
             this.$message({
                title:'信息',
                message:res.data.data,
                type:'success'
              })
              this.$router.go(0);
            }
          })
          .catch(error => {
            this.$alert({
              content:'更新失败',
              duration:3
            })
          });
      }
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInputTag() {
      this.inputVisibleTag = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInputTag.$refs.input.focus();
      });
    },
    showInputSort() {
      this.inputVisibleSort = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInputSort.$refs.input.focus();
      });
    },

    handleInputConfirmTag() {
      let inputValueTag = this.inputValueTag;
      if (inputValueTag) {
        this.dynamicTags.push(inputValueTag);
      }
      this.inputVisibleTag = false;
      this.inputValueTag = "";
    },
    handleInputConfirmSort() {
      let inputValueSort = this.inputValueSort;
      if (inputValueSort) {
        this.dynamicSort.push(inputValueSort);
      }
      this.inputVisibleSort = false;
      this.inputValueSort = "";
    }
  },
  components: {
    mavonEditor,
    insertBlog
  }
};
</script>
<style scoped>
.md {
  min-height: 500px;
  width: 100%;
  float: left;
}

.md_box {
  /* width: 1200px !important; */
  float: left;
}

.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.el-checkbox.is-bordered.is-checked {
  border-color: #908d87 !important;
}

.el-checkbox__inner {
  background-color: #908d87 !important;
  border-color: #908d87 !important;
}
.is-checked {
  border-color: #908d87 !important;
  color: #908d87 !important;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #908d87 !important;
}
.el-checkbox {
  margin: 0px;
  margin-left: 10px !important;
}
.el-checkbox__label {
  color: #908d87 !important;
}
#select {
  width: 150px;
  height: 25px;
  border-radius: 4px;
  background-color: rgba(144, 141, 135, 0.1);
  color: #a7a4a4;
}
.BlogTitle {
  width: 100%;
  height: 35px;
  padding: 2px 4px;
  border: 1px solid #908d90;
  margin-bottom: 3px;
  border-radius: 5px;
  color: #a7a4a4;
  font-size: 16px;
}
</style>
