<template>
  <div id="app">

  <!-- <List></List> -->

  <router-view></router-view>
  </div>
</template>

<script>
import List from './components/list/list'
export default {
  name: "App",
  data() {
    return {
      swiperOption: {
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true // 允许点击小圆点跳转
        // },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components:{
    List
  }
};
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%
}
#app{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
