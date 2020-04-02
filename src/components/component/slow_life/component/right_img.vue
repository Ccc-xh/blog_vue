<template>
  <div class="right_top_img">
    <div class="top_img">
      <div
        class="img1"
        :style="{ background: 'url(' + data[5].articleImg + ')' }"
        v-if="data"
        @click="linkToXl(data[5].articleId)"
      >
        <div class="over"></div>
        <div class="img_title">
          <h3>{{ data[5].articleTitle }}</h3>
        </div>
      </div>
      <div
        class="img2"
        :style="{ background: 'url(' + data[6].articleImg + ')' }"
        v-if="data"
        @click="linkToXl(data[6].articleId)"
      >
        <div class="over"></div>
        <div class="img_title">
          <h3>{{ data[6].articleTitle }}</h3>
        </div>
      </div>
    </div>
    <div
      class="left_bottom_img"
      :title="data[7].articleTitle"
      v-if="data"
      @click="linkToXl(data[7].articleId)"
    >
      <img :src="data[7].articleImg" v-if="data" />
      <div class="img_line">
        <!-- <button>点击查看</button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rightTop",
  data() {
    return {
      data: ""
    };
  },
  methods: {
    linkToXl(ev) {
      this.$router.push({ path: "/content_xl", query: { contentId: ev } });
    }
  },
  props: ["pictureContent"],
  mounted() {
    setTimeout(() => {
      this.data = this.pictureContent;
    }, 500);
  }
};
</script>
<style scoped>
.right_top_img {
  width: 100%;
  margin-bottom: 15px;
}
img {
  width: 100%;
}

.img_title {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.right_top_img div {
  cursor: pointer;
}
h3 {
  line-height: 20px;
  color: #fff;
  height: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
}
.top_img div:hover > .over {
  opacity: 0;
}
.over {
  width: 100%;
  height: 185px;
  background-color: black;
  opacity: 0.3;
  transition: all 0.5s ease;
}

.img1 {
  margin-bottom: 5px;
  width: 100%;
  height: 185px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  position: relative;
}
.img2 {
  margin-top: 5px;
  margin-bottom: 15px;
  width: 100%;
  height: 185px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  position: relative;
}

.lbt_bottom_img_box {
  overflow: hidden;
  margin-top: 15px;
}

.lbt_bottom_img_box div {
  float: left;
}

.lbt_bottom_img_box div img {
  width: 100%;
  height: 200px;
}

.left_bottom_img {
  position: relative;
  overflow: hidden;
  margin-top: 20px;
}

.left_bottom_img img {
  height: 200px;
}

.img_line {
  width: 90%;
  height: 160px;
  position: absolute;
  border: 1px solid #fff;
  bottom: 0px;
  margin:0px 5%;
  margin-bottom: 20px;
  transition: all 1s ease;
}

.left_bottom_img:hover > .img_line {
  transform: scale(0.7);
}

.img_desc {
  position: absolute;
  top: 200px;
  left: 0px;
  opacity: 0;
  color: white;
  background-color: #1c2327;
  margin: 0px;
  font-size: 18px;
  padding: 8px;
  transition: opacity 1s ease;
}

.el-carousel__item:hover > .img_desc {
  opacity: 0.7;
}
</style>
