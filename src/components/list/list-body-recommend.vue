<template>
  <div id="list-body-recommend">
    <p class="list-body-recommend-title">
      <router-link to="/" tag="span">
        人气推荐&nbsp;&nbsp;
        <i class="el-icon-video-play"></i>
      </router-link>
    </p>
    <div class="recommend_div">
      <div v-for="(v,i) in barginlist" v-if="v.id !== 99756 && v.id !== 99761">
        <router-link :to='"/bargain/"+v.id' tag="span">
        <img :src="v.pic" alt />
        <p class="recommend_p1">{{v.name}}</p>
        <!-- <p class="recommend_p2">{{v.characteristic}}</p> -->
        <p class="recommend_p3">￥{{v.pingtuanPrice}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../../services/list-service.js'
const _product = new Product()
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
    //      this.list = res.data.data.goodsMap;
    //     // console.log(this.barginlist);
    //   });
    

    _product.recommendlist().then(res=>{
        console.log(res)
        this.barginlist = res.data.data.goodsMap;
    })

  }
};
</script>

<style lang="scss">
#list-body-recommend {
  width: 100%;
  height: auto;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 16px solid #f5f5f5;
  box-sizing: border-box;
  margin-bottom: 1rem;
  .list-body-recommend-title {
    width: 100;
    height: 0.9rem;
    font-size: 0.35rem;
    line-height: 0.9rem;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 10px;
  }
  .recommend_div {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    div {
      width: 49%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      box-sizing: border-box;
      padding: 10px;
      img{
          width: 98%;
          height: 75%;
      }
      .recommend_p1 {
          font-size: 14px;
      }
      .recommend_p2 {
          font-size: 12px;
      }
      .recommend_p3 {
          font-size: 13px;
          color: red;
          font-weight: 600;
          padding: 10px 0;
      }
    }
  }
}
</style>