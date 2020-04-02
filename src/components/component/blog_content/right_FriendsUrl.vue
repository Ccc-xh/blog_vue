<template>
  <div id="right_ban">
    <div class="div_title_box">
      <div class="div_title">
        <h2>我的标签</h2>
      </div>
    </div>
    <div class="tags_box">
      <div class="wrapper">
        <a
          v-for="(item, index) in data"
          ref="cc"
          v-cloak
          @click="tagsContents(item.tagsId)"
          style="opacity: 0;height:25px;"
          >{{ item.tagsName }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { tags } from "@/api/templates.js";
export default {
  name: "rightFriendsUrl",
  data() {
    return {
      data: [
        ''
      ]
    };
  },
  methods: {
    tagsContents(ev) {
      this.$router.push({
        path: "/blog_diary/fl",
        query: { tagsId: ev, type: 2 }
      });
    }
  },
  beforeCreate() {
    tags().then(res => {
      this.data = res.data.data;
      
    });

    setTimeout(() => {
        this.$nextTick(() => {
      let divs = this.$refs.cc;
      for (let i = 0; i < divs.length; i++) {
        if (i % 3 == 0) {
          divs[i].className = "tag3";
           divs[i].style.bottom = 25 + 'px';
        }
        if (i % 3 == 1) {
          divs[i].className = "tag1";
          divs[i].style.bottom = 19 +'px';
        }
        if (i % 3 == 2) {
          divs[i].className = "tag2";
          divs[i].style.bottom = 15 +'px';
        }
        if (i % 4 == 3) {
          divs[i].className = "tag4";
          divs[i].style.bottom = 10 + 'px';
        }
         if(i * 25+divs[i].offsetWidth>280){
            divs[i].style.left = i * Math.random()*20 + "px";
           
         }else{
           divs[i].style.left = i * 20 + "px";
         }
      }
    });
    }, 1000);
  }
};
</script>
<style scoped>
#right_ban {
  margin-bottom: 15px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.div_title_box {
  background-color: #908d87 !important;
  height: 42px;
  color: white;
}

.div_title {
  background-color: #5f5f5f;
  width: 40%;
  transition: all 1s ease;
}

.div_title_box:hover > .div_title {
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

/* ---------------------- */
.tags_box {
  /* width: 280px; */
  height: 250px;
  position: relative;
}

.indexA {
  position: absolute;
  transition: all;
  top: 0px;
}

body {
  background: #09c;
}

/* #div1 {
    height: 250px;
    width: 250px;
    position: relative;
    margin: 10px auto;
  }

  #div1 a {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #fff;
    font-weight: bold;
    padding: 3px 6px;
  } */

.wrapper {
  position: relative;
  height: 250px;
  /* width: 280px; */
  overflow: hidden;
}

.wrapper a {
  position: absolute;

  animation-play-state: running;
  display: inline-block;
}

a {
  cursor: pointer;
  opacity: 0.5;
  
}

.tag1 {
  color: #999;
  font-size: 16px;
  font-weight: 500;
  animation: myshow1 9s infinite;
  top: 10px;
  position:absolute !important;
}

.tag2 {
  font-size: 18px;
  font-weight: 600;
  color: black;
  animation: myshow2 10.2s infinite;
  top: 15px;
  position:absolute  !important;
}

.tag3 {
  font-size: 20px;
  font-weight: 800;
  color: #5f5f5f;
  animation: myshow3 11s infinite;
  top: 20px;
  position:absolute  !important;
}
.tag4 {
  font-size: 20px;
  font-weight: 800;
  color: #908d87 ;
  animation: myshow4 11.8s infinite;
  top: 20px;
  position:absolute  !important;
}
.wrapper a:hover {
  animation-play-state: paused !important;
  opacity: 2 !important;
}

/* @keyframes myshow {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  100% {
    transform: translateY(0px);
    opacity: 0;
  }
} */

@keyframes myshow1 {
  0% {
    transform: translateY(170px);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  100% {
    transform: translateY(-5px);
    opacity: 0;
  }
}

@keyframes myshow2 {
  0% {
    transform: translateY(180px);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  100% {
    transform: translateY(2px);
    opacity: 0;
  }
}

@keyframes myshow3 {
  0% {
    transform: translateY(190px);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  100% {
    transform: translateY(8px);
    opacity: 0;
  }
}

@keyframes myshow4 {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  100% {
    transform: translateY(15px);
    opacity: 0;
  }
  
}
</style>
