<template>
  <div id="list-body-bargin">
    <p class="list-body-bargin-title">
      <router-link to="/bargain" tag="span">
        全民砍价&nbsp;&nbsp;
        <i class="el-icon-video-play"></i>
      </router-link>
    </p>
    <div v-for="(v,i) in barginlist" v-if="v.categoryId !== 15119" class="list-body-bargin-box">
      <router-link :to="'/bargain/'+v.id" tag="div" class="list-body-bargin-box_div">
        <img :src="v.pic" alt />
        <div>
          <p class="bargin-box_til">{{v.name}}</p>
          <p class="bargin-box_til2">{{v.characteristic}}</p>

          <div>
            <p>
              <font color="red">{{v.pingtuanPrice}}</font>

              <br />现价
            </p>
            <p>
              {{v.originalPrice}}
              <br />原价
            </p>
            <p>
              {{v.minScore}}
              <br />限量
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Product from "../../services/list-service.js";
const _product = new Product();
export default {
  data() {
    return {
      barginlist: []
    };
  },
  created() {
    // this.$axios
    //   .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
    //   .then(res => {
    //     // console.log(res.data.data.goodsMap);
    //
    //     // console.log(this.barginlist);
    //   });
    _product.barginlist().then(res => {
      this.barginlist = res.data.data.goodsMap;
    });
  }
};
</script>

<style lang="scss">
#list-body-bargin {
  width: 100%;
  height: 9.5rem;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 16px solid #f5f5f5;
  .list-body-bargin-title {
    height: 0.9rem;
    font-size: 0.35rem;
    line-height: 0.9rem;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 10px;
  }
  .list-body-bargin-box {
    width: 100%;
    height: 2.5rem;

    .list-body-bargin-box_div {
      width: 100%;
      height: 90%;
      display: flex;
      font-size: 12px;
      align-items: center;
      padding: 4px 0;
      border-bottom: 1px solid #dfdfdf;
      > img {
        width: 2.2rem;
        height: auto;
        border-radius: 5px;
      }
      > div {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 10px;
        .bargin-box_til {
          font-size: 0.3rem;
        }
        .bargin-box_til2 {
          font-size: 0.25rem;
          color: rgb(187, 187, 187);
        }
        > div {
          display: flex;
          justify-content: space-around;
          > p {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>