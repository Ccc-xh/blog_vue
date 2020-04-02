<template>
  <div class="am-topbar am-topbar-inverse am-g">
    <!-- <el-row :gutter="10" type="flex" justify="start "> -->
      <div class="am-u-sm-3">
        <h1 class="am-topbar-brand ">
          <a>Ccc的个人博客 </a>
        </h1>
      </div>
      <div class="am-u-sm-9">
        <div  v-if="ulFlag">
        <div style="overflow:hidden;float:left">
          <ul class="am-nav am-nav-pills am-topbar-nav ">
            <li>
             
              <router-link to="/index"> <i class="am-icon-home "> 首页</i> </router-link>
              <em></em>
            </li>
            <li>
            
              <router-link to="/blog_diary"><i class=" am-icon-th "> 分类</i></router-link>
              <em></em>
            </li>
            <li>
              <router-link to="/slow_life"><i class="am-icon-code"> 程序人生</i></router-link>
              <em></em>
            </li>
            <li>
              
              <router-link to="/friendship_links"> <i class="am-icon-street-view"> 邻居</i></router-link>
              <em></em>
            </li>
            <li>
              
              <router-link to="/about_me"><i class="am-icon-user"> 关于我</i></router-link>
              <em></em>
            </li>
            <li>
              
              <router-link to="/message_board"><i class="am-icon-commenting"> 留言</i></router-link>
              <em></em>
            </li>
          </ul>
        </div>
        <div class="btmm" v-if="flag">
          <button class=" am-btn-primary1 am-btn-sm"  @click="registry()">
            注册
          </button>
          <button class=" am-btn-primary1 am-btn-sm" @click="login()">
            登录
          </button>
        </div>
      </div>
      <div  v-if="ulFlag">
        

        <div class="btmm" v-if="!flag">
          <el-col :span="25">
            <el-dropdown>
              <span class="el-dropdown-link">
                {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人主页</el-dropdown-item>
                <el-dropdown-item>消息</el-dropdown-item>
                <el-dropdown-item>反馈</el-dropdown-item>
                <el-dropdown-item><span @click="logout()">退出登录</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </div>
        <button class=" am-btn-primary1 am-btn-sm" @click="edit()" >
          <i class="am-icon-paint-brush"> 文章管理</i>
        </button>
      </div>
      <div  v-if="!ulFlag" class="changeTab">
        <div>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="am-icon-navicon el-icon--right el-icon--right1"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="am-icon-home">
                <router-link to="/index">首页</router-link>
              </el-dropdown-item>
              <el-dropdown-item icon="am-icon-th">
                <router-link to="/blog_diary">分类</router-link>
              </el-dropdown-item>
              <el-dropdown-item icon="am-icon-code">
                <router-link to="/slow_life">程序人生</router-link>
              </el-dropdown-item>
              <el-dropdown-item icon="am-icon-street-view">
                <router-link to="/friendship_links">邻居</router-link>
              </el-dropdown-item>
              <el-dropdown-item icon="am-icon-user">
                <router-link to="/about_me">关于我</router-link>
              </el-dropdown-item>
              <el-dropdown-item icon="am-icon-comment">
                <router-link to="/message_board">留言</router-link>
              </el-dropdown-item>
               <el-dropdown-item icon="am-icon-edit">
               <span  @click="edit()" class="changebtn">
              文章管理
            </span>
              </el-dropdown-item>
              <el-dropdown-item icon="am-icon-internet-explorer" v-if="flag">
                <div class="btmm1" >
                  <a  @click="login()" class="changebtn">
                    登录
                  </a>
                </div>
              </el-dropdown-item>
              <el-dropdown-item icon="am-icon-registered" v-if="flag">
                <div class="btmm1" >
                  <a  @click="registry()" class="changebtn">
                    注册
                  </a>
                </div>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check" v-if="!flag">
                <div class="btmm1" >
                  <el-col :span="25">
                    <el-dropdown class="changecat">
                      <span class="el-dropdown-link changelk">
                        {{username}}<i class="el-icon-arrow-down el-icon--right add-icon"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人主页</el-dropdown-item>
                        <el-dropdown-item>消息</el-dropdown-item>
                        <el-dropdown-item>反馈</el-dropdown-item>
                        <el-dropdown-item><span @click="logout()">退出登录</span></el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      </div>
    <!-- </el-row> -->
  </div>
</template>
<script>
  import {
    logout,isLogin
  } from '@/api/templates.js'
  export default {
    name: "Top",
    data() {
      return {
        data: "",
        flag: false,
        username: '',
        isFirstLogin:true,//是否第一次进入
        screenWidth: document.body.clientWidth,
        ulFlag: true
      };
    },
    mounted() {
      // 监听窗口大小
      if(document.body.clientWidth<1010){
         this.ulFlag = false;
      }else{
        this.ulFlag = true;
      }
      const that = this
      window.onresize = () => {
        return (() => {
          that.screenWidth = document.body.clientWidth
        })()
      }
       isLogin().then(res=>{
       const username = localStorage.getItem('userName')
       //判断是否身份过期，==null的话就是没有登录过
       if(username != null){
          if(res.data.no === -2 ){
          this.$confirm('身份信息失效请重新登录!','提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(()=>{
            this.$router.push({path:'/login'})
          })
          if(this.flag == false && this.isFirstLogin == true ){
            this.logout();
          }
        }
       }
        // -2 未登录
        
      })
    },
    methods: {
      edit() {
        this.$router.push({
          path: "/edit_blog"
        });
      },
      login() {
        this.$router.push({
          path: "/login"
        });
      },
      registry(){
          this.$router.push({path:'/register'})
      },
      logout() {
        localStorage.removeItem('Authorization')
        localStorage.removeItem('userName')
        logout().then(res => {
          this.flag = true;
          this.isFirstLogin = false;
          // this.$router.go(0)
          this.$forceUpdate()
        }).catch(er => {

        })
      }
    },
    watch: {
      $route: function (newValue) {
        let userName = localStorage.getItem("userName");

        if (userName != null && userName != 'null') {
          this.flag = false;
          this.username = userName
        } else {
          this.flag = true;
        }
      },
      screenWidth(val) {
        if (val < 1010) {
          this.ulFlag = false;
        } else {
          this.ulFlag = true;
        }
      }
    }
  };
</script>
<style scoped>
  .am-topbar-inverse {
    background-color: #908d87 !important;
    border-color: #908d87;
    margin-bottom: 0px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    max-height: 51px;
    overflow: hidden;
  }
  .am-topbar-inverse div{
    max-height:51px;
  }
  .am-topbar-fixed-top {
    position: relative !important;
  }

  .am-topbar-inverse .am-topbar-nav>li>a:after {
    width: 0%;
    border-bottom: 0px;
  }

  .doc-topbar-collapse {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }

  .am-topbar-inverse .am-topbar-nav>li>a {
    color: rgba(255, 255, 255, 0.7);
    margin: auto 0px;
  }

  .am-topbar-nav {
    font-size: 16px;
    /* width: 640px; */
  }

  .am-topbar-nav li a {
    margin: 0px 5px;
  }

  .am-topbar-nav li em {
    position: absolute;
    left: 50%;
    bottom: 0;
    /* margin: 0 -75px;  */
    transform: translate(-50%);
  }

  .am-topbar-nav li:hover em {
    animation: test 1s ease;
    border-bottom: 1.5px solid white;
    width: 100%;
  }

  @keyframes test {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  .am-topbar-right {
    float: left !important;
    margin-left: 350px;
  }

  .am-btn-sm {
    background-color: #908d87 !important;
    width: 100px;
    height: 50px;
    float: right;
    font-size: 1.6rem !important;
    margin-right: 5px;
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid #908d87 !important;
  }

  .am-topbar-brand {
    font-size: larger !important;
    max-width: 225px;
    ;
    min-width: 183px;
    ;
    margin: 0 auto;
    float: left !important;
    padding: 0px 18px;

  }
  .btmm{
    float: right;
    min-width: 175px;;
    height: 50px;
    border: 1px;
    /* margin-right: 15px; */
    line-height: 50px;
  }
  .btmm button{
    width:50px;
    float:left;
  }
  .btmm1{
    float: right;
    width: 244px;
    height: 36px;
    border: 1px;
    /* margin-right: 15px; */
    line-height: 36px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .demonstration {
    display: block;
    color: #fff;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .changeTab {
    float: right !important;

  }
 .el-icon--right1{
   font-size: 40px;
   margin-right: 10px;
   margin-top: 5px;
   /* margin-top: 10px; */
 }
 .changelk{
   color:rgb(14,144,210);
   max-width: 100%;
 }
 .changebtn{
   color:rgb(14,144,210);
 }
 .changecat{
   width:303px;
   height: 36px;
   vertical-align: baseline;
   
 }
 .add-icon{
   font-size: 15px;
 }
 .el-dropdown-menu__item a{
   width:90%;
   display:inline-block;
 }

</style>