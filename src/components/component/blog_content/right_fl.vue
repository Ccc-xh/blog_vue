<template>
  <div id="right_ban">
    <div class="div_title_box">
      <div class="div_title">
        <h2>分类</h2>
      </div>
    </div>
    <div class="div_fl">
      <ul class="fl_ul"  >
        <li v-for="(data,index) in data" :Key="index"  @click.prevent="linkToLine(data.sortName)">
          <span class="num_id" >{{index+1}}</span>
          <a >{{data.sortName}} ({{data.count}})</a>
          <span class="fl_icon" > 》</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {sorts} from '@/api/templates.js'
  export default {
    name: "rightFl",
    data(){
      return{
        data:''
      }
    },
    methods:{
      linkToLine(ev){
          this.$router.push({path:'/blog_diary/fl',query:{sortName:ev,type:1}})
      }
    },
    mounted() {
        sorts().then(res=>{
            this.data = res.data.data
        }).catch(er=>{
         
        })
        
    },
  watch: {
  
  },
  };
</script>
<style scoped>
  #right_ban {
    margin-bottom: 15px;
    box-shadow:0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
   
  }

  .div_title_box {
    background-color: #908d87 !important;
    height: 42px;
    color: white;
  }

  .div_title {
    background-color: #5f5f5f;
    width: 30%;
    transition: all 1s ease;
  }

  .div_title_box:hover >.div_title {
    width: 50%;
    background-color: #5f5f5f;
  }

  h2 {
    margin: 0px 0px 0px 10px;
    font-size: 20px;
    font-weight: 400;
    height: 42px;
    line-height: 42px;
  }

  .fl_ul {
    list-style-type: none;
    padding-left: 0px;
    background-color: #dadada;
  }

  .fl_ul li {
    height: 40px;
    border-bottom: 1px solid #908d87;
    margin-bottom: 1px;
    cursor: pointer;
  }
  .fl_ul li:hover > .fl_icon{
    margin-right: 1px;
  }
  .fl_ul li:hover > a{
    color: white;
  }
  .fl_ul li a {
    font-size: 16px;
    color: #555;
    line-height: 40px;
    height: 40px;
    margin-left: 20px;
  }

  .num_id {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    background-color: #908d87;
    ;
    color: white;
    width: 45px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .fl_icon{
    float: right;
    font-size: 16px;
    line-height: 40px;
    margin-right: 10px;
    transition:  margin-right 1s ease;
  }
</style>