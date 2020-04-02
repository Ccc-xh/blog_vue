<template>
    <div class="article">
        <div class="board">
<top-info ></top-info>
        <hr style="height: 3px; border-top: 3px double rgb(144, 141, 135); border-right: none; border-bottom: none; border-left: none; border-image: initial;">
        <board-info ></board-info>
        </div>
        
    </div>
</template>
<script>
import topInfo from './component/topinfo'
import boardInfo from './component/messageinfo'
export default {
    name:'messageBoard',
    components:{
        topInfo,boardInfo
    }
}
</script>
<style scoped>
    .board{
        max-width:1000px;
        margin:0px auto;
       background:rgba(255,255,255,1);
        /* min-height: 600px; */
        padding-bottom:20px;
    }
</style>