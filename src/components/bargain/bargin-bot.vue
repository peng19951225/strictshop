<template>
  <div class="barginxqy-boss">
    <div class="barginxqy-lb-boss">
      <ul class="barginxqy-lb" :style="{right:this.imglet+'px'}">
        <li v-for="(v,i) in list.pics">
          <img :src="v.pic" alt />
        </li>
        <li>
            <img :src="this.list.pics[indexs].pic" alt="">
        </li>
      </ul>
    </div>

    <div class="barginxqy-type">
      <span>商品介绍</span>
      <span>商品评价</span>
    </div>
    <div>
      <div class="barginxqy-html" v-html="this.list.content"></div>
    </div>
  </div>
</template>

<script>
import Product from "../../services/list-service.js";
const _product = new Product();
export default {
  data() {
    return {
      list: [],
      imglet: 0,
      timer: "",
      indexs: 0,
    };
  },
  methods: {
    myleft() {
      if (this.imglet >= this.list.pics.length * 400) {
        this.imglet = 0;
      } else {
        this.imglet += 430;
      }
    }
  },
  mounted() {
    this.timer = setInterval(this.myleft, 900);
  },
  created() {
    _product.barginUrl(this.$route.params.id).then(res => {
      this.list = res.data.data;
      console.log(this.list);
    });
  }
};
</script>

<style lang="scss">
.barginxqy-boss {
  height: auto;
  font-size: 20px;
  .barginxqy-lb-boss {
    width: 100%;
    height: 7.8rem;
    overflow: hidden;
    display: flex;
    position: relative;
    .barginxqy-lb {
      width: 100%;
      height: 100%;
      display: flex;
      list-style: none;
      position: absolute;
    }
  }

  .barginxqy-type {
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 50%;
      display: inline-block;
      text-align: center;
    }
  }
  .barginxqy-html {
    p {
      width: 100% !important;
      height: auto;
      padding: 10px;
      box-sizing: border-box;
    }
    span{
        color: #999999;
        font-size: 13px;
    }
    img {
      width: 100% !important;
      height: 80% !important;
    }
  }
}
</style>