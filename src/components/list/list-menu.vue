<template>
  <div id="list-menu-box">
    <div>
      <router-link to="/sigin" tag="p">
        <img src="../../../static/cd1.png" alt />
        <span>签到</span>
      </router-link>
       <router-link to="/gift" tag="p">
        <img src="../../../static/cd2.png" alt />
        <span>礼券</span>
      </router-link>
      <router-link to="/bargain" tag="p">
        <img src="../../../static/cd3.png" alt />
        <span>砍价</span>
     </router-link>
     <router-link to="/special" tag="p">
        <img src="../../../static/cd4.png" alt />
        <span>专栏</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#list-menu-box {
    width: 100%;
    height: 1.5rem;
    position: relative;
    border-bottom: 16px solid #F5F5F5;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px 30px 0 0;
    position: absolute;
    background: white;
    top: -40px;
    z-index: 999;
    align-items: center;
    p {
      width: 25%;
      height: 100%;
      font-size: 16px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      img {
        width: 1rem;
        height: 1rem;
        height: auto;
      }
    }
  }
}
</style>