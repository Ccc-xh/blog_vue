<template>
  <div class="lbt_box">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in data.slice(0,3)" :key="index" v-if="item.topFlag == 1" >
        <img v-bind:src="item.articleImg" class="lbimg" @click="linkToXl(item.articleId)">
        <div class="img_desc" v-if="data">{{ item.articleTitle }}</div>
      </el-carousel-item>
    </el-carousel>
    <div class="lbt_bottom_img_box am-g" >
      <div class="left_bottom_img am-u-sm-12 am-u-lg-6"  :title="data[3].articleTitle" v-if="data"   style="cursor: pointer;"  @click="linkToXl(data[3].articleId)"> 
        <img :src="data[3].articleImg" >
        <div class="img_line">
        </div>
      </div>
      <div class="right_bottom_img am-u-sm-12 am-u-lg-6" :title="data[4].articleTitle" v-if="data"  style="cursor: pointer;" @click="linkToXl(data[4].articleId)">
        <img :src="data[4].articleImg" v-if="data" >
        <div class="img_line"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
export default {
  name: "lbt",
  data(){
    return{
      
      data:''
    }
  },
  methods:{
    linkToXl(ev){
          this.$router.push({path: "/content_xl", query: { contentId: ev }})
      },
  },
  props:['pictureContent'],
  mounted() {
    setTimeout(() => {
      this.data = this.pictureContent
    }, 500);
    $('.el-carousel__container').attr('class','lbbox');
    $('.el-carousel__indicators').remove();
  },
  
};
</script>
<style scoped>

  .lbt_box{
    margin-bottom: 15px;
    margin-left:auto;
    margin-right:auto;
  }
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  
}
.el-carousel{
    /* width:750px ; */
    height:380px;
    
}
.el-carousel__item{
  /* height:450px !important; */
}
.img_desc{
  position: absolute;
  bottom:0px;
  left: 0px;
  opacity: 0;
  color: white;
  width:100%;
  height: 50px;
  line-height: 30px;
  background-color: #1c2327;
  text-align:center;
  margin: 0px;
  font-size: 18px;
  padding: 8px ;
  transition: opacity 1s ease;
  
}
.el-carousel__item:hover > .img_desc{
  opacity: 0.7
  
}
/* .lbt_box{
  float: left;
} */
.lbt_bottom_img_box{
  overflow: hidden;
  margin-top: 15px;
  padding:0px 18px;
  
}
.lbt_bottom_img_box div{
  float: left;
}
.lbt_bottom_img_box div img{
  width:100%; 
  height:200px;
}
.right_bottom_img{
  /* margin-left: 30px; */
  position: relative;
  box-shadow: 0 2px 4px #554547, 0 0 6px #5b3e42;
  padding:0px !important;
}
.left_bottom_img{
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 4px #554547, 0 0 6px #5b3e42;
  padding:0px !important;

}
.img_line{
  width: 90%;
  height: 180px;
  position: absolute;
  border: 1px solid #fff;
  bottom: 0px;
  /* margin-left:5%;
  margin-right:5%; */
  margin:10px 5%;
  transition: all 1s ease;
}
.lbt_bottom_img_box div:hover > .img_line{
  transform:scale(0.7) ;
}
ul{
  display: none !important;
}
.lbbox{
  overflow:hidden;
  width:100%;
}
.lbimg{
  width: 100%;
  height: 100%; 
  cursor: pointer; 
}
</style>
