<template>
  <div id="list-boss">
      <div class="list-headslogo" v-show="this.flag">
          <img src="../../assets/logo.png" alt="">
      </div>
    <Listlb></Listlb>
    <Listmenu></Listmenu>
    <Listbody></Listbody>
    <Listfoot></Listfoot>
  </div>
</template>

<script>
import Listfoot from "./list-foot";
import Listlb from "./list-lb";
import Listmenu from "./list-menu";
import Listbody from "./list-body";
export default {
  data() {
    return {
      scroll: "",
      flag:false
    };
  },
  components: {
    Listfoot,
    Listlb,
    Listmenu,
    Listbody
  },
  methods: {
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    //   console.log(this.scroll);
      if(this.scroll >=400){
          this.flag = true
      }else{
          this.flag = false
      }
      // console.log(this.flag)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  }
};
</script>

<style lang="scss">
#list-boss {
  width: 100%;
  height: 100%;
  position: relative;
  .list-headslogo{
      position: fixed;
      background: white;
      top: 0;
      width: 100%;
      height: 1rem;
      z-index: 1999;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
          width: auto;
          height: 70%;
      }
  }
}
</style>