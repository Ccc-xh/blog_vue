<template>
  <article>
    <links class="am-animation-slide-top"></links>
  </article>
</template>
<script>
import links from "./component/friendslinks.vue";

export default {
  name: "friendsLinks",
  data() {
    return {};
  },
  components: {
    links,
  }
};
</script>
<style scoped>
.search_div {
  overflow: hidden;
}
article{
  min-height:570px;;
}
</style>
