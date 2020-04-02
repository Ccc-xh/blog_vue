<template>
    <div class="top_div">
        <h2>
            <p>遇贵人先立业,</p>
            <p>遇良人先成家,</p>
            <p>无贵人而先自立,</p>
            <p>无良人而先修身,</p>
            <p>人贤自遇贵人,</p>
           <p>人德自遇良人。</p>
        </h2>
        <div class="footer-cont">Welcome to my blog<br>
            <br>
            <p>努力做最好的自己</p>
            <p> 你终会将生存过成生活  </p>  
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'rightTop'
    }
</script>
<style scoped>
    .top_div {
        max-width: 100%;
        min-width: 270px;
        min-height: 400px;
        margin: 0px auto 20px auto;
        padding: 30px 20px;
        background-color: #908d87;
        box-shadow:0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
        border-radius:8px;

    }
    
    h2 {
        color: rgba(255,255,255,0.7);
        font-family: '微软雅黑';
        font-weight: 500;
        text-align: center;
        font-size: 15px;
    }
    p{
        height:20px;
        margin-top: 0px;
    }
    .footer-cont{
        color: rgba(69, 25, 0, 0.7);
        font-family: '微软雅黑';
        text-align: center;
        font-weight: 600;
        font-size: 15px;
    }
    span{
        display: block;
        margin-top: 10px;
    }
</style>