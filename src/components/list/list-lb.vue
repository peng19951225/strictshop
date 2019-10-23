<template>
  <div>
    <swiper :options="swiperOption" class="list-lb-swiper">
      <swiper-slide v-for="(v,i) in lbarr">
        <img :src="v.picUrl" alt />
      </swiper-slide>
      
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
      },
      lbarr: []
    };
  },
  created() {
    this.$axios.get("https://api.it120.cc/small4/banner/list").then(res => {
      console.log(res.data.data);
      this.lbarr = res.data.data;
    });
  }
};
</script>
<style lang="scss">
.list-lb-swiper {
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
}
</style>