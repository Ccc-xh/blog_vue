<template>

    <article id="timeLine" >
        <div class="cat am-g">
          <time-line class="am-u-sm-12 am-u-lg-8"></time-line>
         <div id="big_right" class="am-u-sm-12 am-u-lg-4  ">
           <right-fl class="right"> </right-fl>
           <right-friends-url class="right"></right-friends-url>
         </div>
        </div>
    </article>
</template>
<script>
import timeLine from '../time_line'
import rightFl from '../right_fl'
import rightFriendsUrl from '../right_FriendsUrl'
export default {
    name:'blogDiary',
    data(){
        return{
          flLineParam:''
        }
    },
    methods:{
     
    },
    components:{
        timeLine,rightFl,rightFriendsUrl
    }
}
</script>
<style >

#timeLine{
  overflow:hidden !important;
  margin-top:20px;
}
#timeLine #big_right{
  float: left;
  /* margin-left:15px; */
  padding: 10px;;
}
#timeLine .el-timeline-item__tail{
border-left:2px solid #908d87 !important;
}
 #timeLine .el-timeline-item {
  border: 0px !important;
  padding-bottom:12px
}
.el-timeline {
    padding-left: 20px;
    height: 420px;
  }
  .cat{
    max-width:1200px;
    margin:0px auto;
    overflow:hidden;
  }
 .right{
   margin:auto auto;
   width:80%;
 }
</style>
