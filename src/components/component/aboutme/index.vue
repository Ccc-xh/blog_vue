<template>
    <div class="my_box">
        <div class="cat">
            <div class="my_info">
            <h1>关于本站</h1>
            <p>网站结构</p>
            <p>前端:基于webpack4.x搭建的Vue+Amaze UI和Element UI</p>
            <p>后端:springboot+mybatis+shiro+redis</p>
            <p>服务器:腾讯云</p>
            <br>
            <span style="color:green">个人水平有限，大佬路过多多批评指正!</span>
            <hr>
        </div>
       <div class="my_info">
           <h1>个人信息</h1>
           <p>《断头往后》里说的:“那时候还太年轻,不知道所有命运馈赠送的礼物,早已在暗中标好了价格.”</p>
           <p>建站的初衷是想用来勉励自己不断的学习,哪怕是在某个最无助,最迷惘的时刻能够提醒着自己至少还是一名小小的站长！
               <br>喜欢胡歌说过的一句话,人活着不仅仅是为了生存,就像云在青天水在瓶。
           </p>
            <p> 人生在世,应无所住;如果年轻,追着风走;如果相信,跟着爱走;如果可以,随着心走;如果留恋,带着梦走;如果没有如果,也不该停留。
                博主出生于96年,我喜欢这个年代,喜欢这个生肖,喜欢上天给予的一切,我们成长的这个年代经历了没有wifi的童年,我很庆幸这个时代出生的我们虽然谈不上
                是承前启后的一代,但确也见证了祖国由弱变强的过程,因为如此才会更加的珍惜生活,方知生活的艰辛。<br>
                我祝福所有正在奋斗你们,终会有一天把生存过成生活!<br>
                我相信一切都是最好的安排，就如你我于此相遇
                便注定了今生的缘分.
            </p>
            <br>
            <p>如有招待不周可以通过以下方式联系到我:</p>
            <p>邮箱:<span style="font-weight:600">chenxh0428@163.com</span> |<span style="font-weight:600"> 820297495@qq.com</span>(QQ同号)</p>
           <hr>
       </div>
       <div class="my_info">
        <h1>特别说明</h1>
        <p>本站所有内容仅代表个人观点,与任何组织或个人无关。</p>
        <p>本站内容仅供学习交流，请勿用于任何形式商业行为。</p>
        <p>对于本站原创文章，如需转载使用，请务必注明文章作者和来源.</p>
        <p>本网站如无意中侵犯了某些组织或个人的知识产权，请来信或来电告之，本网站将立即予以删除。</p>
        <hr>
    </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'aboutMe'
}
</script>
<style scoped>

h1{
    border-left: 2px solid green;;
    padding-left: 15px;
    font-size: 23px;
    font-weight: 600;
}
a{
    cursor: pointer;
}
p{
    margin: 15px 0px 0px 0px;
    font-size: 16px;
    color: #403f3f;
}
.my_internet span{
    display: block;
    margin-top: 15px;
}
hr{
    border: 1px dashed #E7E7E7;
    margin: 20px auto;
}
.cat{
    max-width: 900px;
    margin: auto;
    background:rgba(255,255,255,0.3);
    padding:20px 15px;
    margin-top:20px;
}
</style>