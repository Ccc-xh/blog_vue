<template>
<div>
  <div class="search_big">
     <div class="am-g">
 
  <div class="am-u-lg-6">
    <div class="am-input-group am-input-group-primary">
      <span class="am-input-group-btn">
        <button class="am-btn am-btn-primary-my" type="button"><span class="am-icon-search"></span></button>
      </span>
      <input type="text" class="am-form-field" placeholder="关键字..." v-model="search">
    </div>
  </div>
</div>
</div>
  <div class="big_box">
    <div class="big_cat" v-for="(item,index) in (data || '')" :key="index" v-if="item.linkName.toLowerCase().includes(search.toLowerCase())">
      <div class="font">
        <a :href="item.linkUrl" target="_blank">
          <h3><img src="../../../../assets/csdn.png" />{{item.linkName}}</h3>
          <p>{{item.linkDesc}}</p>
          <span></span>
        </a>
      </div>
      <div class="after">
        <a :href="item.linkUrl" target="_blank">
          <img src="../../../../assets/csdn.png" />
          <h3>{{item.linkName}}</h3>
          <p>{{item.linkUrl}}</p>
        </a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {link} from '@/api/templates.js'
export default {
  name: "links",
  data(){
    return{
      data:'',
      search:''
    }
  },
  methods:{

  },
  mounted() {
    link().then(res=>{
      this.data = res.data.data
    })
  },
};
</script>
<style scoped>
.big_box {
  overflow: hidden;
  padding-top: 2px;
  
}
.am-animation-slide-top{
  max-width:1200px;
  margin: 20px auto;
}
.font,
.after {
  width: 100%;
  height: 150px;
}

.big_cat {
  position: relative;
  padding: 1px;
  min-width: 280px;
  height: 155px;
  float: left;
  margin-left: 10px;
  margin-bottom: 7px;
}
/*使正反面在同一位置*/
.font,
.after {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s;
  backface-visibility: hidden; /*这个属性至关重要，当元素不面向屏幕时不可见，不然的话上面的div翻转180度后还是覆盖在下面的div上*/
  padding: 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.font {
  z-index: 2;
}
.after {
  transform: rotateY(180deg);
  background-color: green;
}
.big_cat:hover > .font {
  transform: rotateY(180deg);
}
.big_cat:hover > .after {
  transform: rotateY(0deg);
}
.font h3 {
  color: gray;
  font-size: 18px;
  width: 240px;
  float: right;
  text-align: center;
}
.font a {
  display: block;
  width: 240px;
  height: 110px;
}
.font p {
  color: gray;
  clear: both;
}
.font img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.after {
  text-align: center;
  background-color: #908d87;
}
.after img {
  width: 50px;
  height: 50px;
}
.after h3 {
  margin: 0px;
  margin: 10px 0px;
  font-size: 18px;
  color: white;
}
.after p {
  margin: 0px;
  color: white;
  font-size: 15px;
}
.search_big{
    width: 800px;
    height: 100px;
    margin: auto;
    text-align: center;
}
.am-g{
    width: 500px;
    display: inline-block;
    margin-top: 25px;
}
.am-u-lg-6{
    width: 100%;
    
}
.am-btn{
    border-color: #908d87 !important;
}
.am-form-field{
    border-color: #908d87!important;
}
.am-btn-primary-my{
    background-color: #908d87;
    border-color: #908d87;
    color: white;
}
.am-form-field:focus{
    border-color: #908d87 !important;
}
</style>
