<template>
  <div >
    <Top></Top>
    <transition mode="out-in">
      <router-view class="middle" style="min-height:600px;"></router-view>
    </transition>
    <foot></foot>
  </div>
</template>

<script>
import Top from "./command/Top";
import router from "../router";
import xt from '../../service/xt.js'
import foot from './command/footer'

export default {
  name: "index",
  data() {
    return {
      windowHeigh:document.body.scrollWidth
    };
  },
  router,
  components: {
    Top,foot
  },
  mounted() {
  },
};
</script>
<style >
article {
  overflow: hidden;
  /* width: 1450px; */
  /* padding-left: 15px; */
  margin: 20px auto;
  margin-bottom:0px;
  /* margin-top:20px; */
}
#left_big {
  overflow: hidden;
  float: left;
  padding: 10px;
}
#right_big {
  float: left;
  padding: 10px;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateZ(100px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

</style>
