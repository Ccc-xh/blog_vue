<template>
 <div style="min-height:539px">
  <h1>在等待的日子里,刻度读书,谦卑做人,
   
    养得深根,日后才能枝叶繁盛</h1>
  <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="username">
      <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
    </el-form-item>
      <el-button type="primary" @click="login('loginForm')">登 录</el-button>
      <el-button @click="resetForm('loginForm')">重 置</el-button>
  </el-form>

  
  
 </div>
</template>


<script>
import { mapMutations } from 'vuex';
import {login} from '@/api/templates.js'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userToken: '',
        rules: {
          
        }
    };
  },
 
  methods: {
    ...mapMutations(['changeLogin','changeUser']),

     resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login () {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        this.$message({
          title:'警告',
          message:"用户名或密码不能为空",
          type:'warning'
        })
      } else {
       
        login(_this.loginForm).then(res => {
          if(res.data.no == 0){
          this.$message({
          title:'警告',
          message:res.data.data,
          type:'warning'
        })
          }else{
            // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: res.data.data.token });
          _this.changeUser({ userName: res.data.data.name });
          _this.$router.push('/index');
          }
         
        }).catch(error => {
          this.$message({
          title:'警告',
          message:"用户名或密码错误！",
          type:'error'
        })
        });
      }
    }
  }
};
</script>
<style scoped>
 .el-form{
   text-align: center;
   display: block;
   max-width: 500px;
   margin: 40px auto;
 }
 h1{
   text-align: center;
   margin: 0px;
  margin-top: 5%;
  font-size: 33px;
  font-family: "STXingkai";
 }
</style>