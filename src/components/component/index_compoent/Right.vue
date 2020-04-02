<template>
  <div id="right_img">
    <div class="div_title_box">
      <div class="div_title">
        <h2>藏心阁</h2>
      </div>
    </div>
    <div class="img_div">
      <img src="../../../assets/4.jpg" />
      <div class="img_title">终会走过这条遥远的道路</div>
    </div>

    <div class="img_div">
      <img src="../../../assets/3.jpg" />
      <div class="img_title">这一路上</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "right"
};
</script>
<style scoped>
#right_img {
  max-width: 100%;
  margin:0 auto;
  background-color:rgba(0,0,0,0);
  box-shadow:0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}
img {
  max-width: 100%;
  max-height: 80%;
}
img {
  cursor: pointer;
  transition: all 0.6s;
}
img:hover {
  transform: scale(1.2);
}
.img_div {
  position: relative;
  overflow: hidden;
  margin-bottom: 15px;
  
}
.img_title {
  position: absolute;
  bottom: 0px;
  left: 1px;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0.8;
  font-size: 16px;
  color: #fff;
  min-width: 100%;
  padding: 10px 20px 10px 20px;
  line-height: 1.5;
  font: 15px "Microsoft YaHei", Arial, Helvetica, sans-serif;
  margin: 0px;
  height: 40px;
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
</style>
