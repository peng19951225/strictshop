<template>
  <div id="list-body-moods">
    <p class="list-body-moods-title">
      <router-link to="/special" tag="span">
        精选专题&nbsp;&nbsp;
        <i class="el-icon-video-play"></i>
      </router-link>
    </p>
    <div class="moods_div">
      <div v-for="(v,i) in moods">
        <img :src="v.pic" alt />
        <p class="moods_p1" v-html="v.title"></p>
        <p class="moods_p2" v-html="v.descript"></p>
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
      moods: []
    };
  },
  created() {
    // this.$axios.get("https://api.it120.cc/small4/cms/news/list").then(res => {
    //   console.log(res.data.data);
    //   this.moods = res.data.data;
    // });
    _product.moodslist().then(res=>{
      this.moods = res.data.data;
    })
  }
};
</script>

<style lang="scss">
#list-body-moods {
  width: 100%;
  height: 8rem;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 16px solid #f5f5f5;
  box-sizing: border-box;
  .list-body-moods-title {
    height: 0.9rem;
    font-size: 0.35rem;
    line-height: 0.9rem;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 10px;
  }
  .moods_div {
    display: flex;
    overflow: auto;
    >div {
      padding: 10px;
      img {
        width: 6rem;
        height: 4rem;
      }
    }
    .moods_p1{
        font-size: 14px;
        margin:10px 0;
    }
    .moods_p2{
        font-size: 10px;
        color: #afaeae;
    }
  }
}
</style>