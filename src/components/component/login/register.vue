<template>
  <div style="min-height: 539px;">
    <h1>我想带着你去你想去的地方,那里有山河,那里有湖海</h1>
    <el-form label-width="100px" :rules="rules" :model="info" ref="info">
      <el-form-item label="昵称" prop="nickName">
        <el-input type="text" v-model="info.nickName"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="info.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="info.password"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <div class="am-g" style="padding: 0px;">
          <div class="am-u-sm-8" style="padding: 0px;">
            <el-input type="text" v-model="info.phone"></el-input>
          </div>
          <div class="am-u-sm-4" style="padding: 0px;">
            <el-button
              type="primary"
              :loading="flag"
              style="margin-left:8px;width:95%"
              @click="getNum()"
              >{{ count }}
            </el-button>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input
          type="text"
          v-model="num"
          style="max-width:267px;float:left"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="register('info')">注 册</el-button>
      <el-button @click="resetForm('info')">重 置</el-button>
    </el-form>
  </div>
</template>

<script>
import { getNum, register } from "@/api/templates.js";
export default {
  data() {
    return {
      flag: false,
      num: "",
      num1: "",
      info: {
        username: "",
        password: "",
        phone: "",
        nickName: ""
      },
      count: "获取验证码",
      rules: {
        nickName: [
          {
            required: true,
            message: "请输入昵称",
            trigger: "blur"
          },
          {
            min: 4,
            max: 10,
            message: "汉字、字母、数字的组合",
            trigger: "blur",
            pattern: /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/
          }
        ],
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 4,
            max: 10,
            message: "长度在6到10个字符",
            trigger: "blur",
            pattern: /^[A-Za-z0-9]{4,15}$/
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 10,
            message: "长度在6到10个字符",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入正确的手机号",
            trigger: "blur",
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/
          }
        ]
      }
    };
  },

  methods: {
    getNum() {
      //获取验证码
      if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.info.phone)) {
        this.$message({
          title:'提示',
          message:'请输入手机号码!',
          type:'warning'
        })
        return false;
      } else {
        getNum({ phone: "86" + this.info.phone }).then(res => {
          this.num1 = res.data.data.phone;
        });
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.flag = true;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.flag = false;
              this.count = "获取验证码";
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
      }
    },
    register(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
         if(this.num != this.num1){
            this.$message({
              title:'错误',
              message:'请输入正确的验证码!',
              type:'error'
            })
         }else{
            register(this.info).then(res => {
            console.log(res.data)
            if (res.data.no == 1) {
              this.$message({
                title:'信息',
                message:res.data.data,
                type:'success'
              })
              this.num1 = "";
              this.num = "";
              this.resetForm('info')
            }else{
              this.$message({
                title:'信息',
                message:res.data.data,
                type:'error'
              })
            }
          });
         }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.el-form {
  text-align: center;
  display: block;
  max-width: 500px;
  margin: 40px auto;
}

h1 {
  text-align: center;
  margin: 0px;
  margin-top: 5%;
  font-size: 33px;
  font-family: "STXingkai";
}
</style>
