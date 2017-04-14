<template>
  <ul class="bottom-nav">
    <router-link to="/index" tag="li" active-class="active">首页</router-link>
    <router-link to="/detailall" tag="li" active-class="active">全部商品</router-link>
    <router-link to="/stroll" tag="li" active-class="active">闲逛</router-link>
    <router-link to="/cart" tag="li" active-class="active">购物车</router-link>
    <router-link to="/account" tag="li" active-class="active">账户中心</router-link>
  </ul>
</template>
<script>
export default {
  name: 'bottom-nav'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom-nav{
  width: 7.3rem;
  padding: 0 0.1rem;
  height: 1rem;
  line-height: 1rem;
  background: #fff;
  border-top: 0.02rem solid #ddd;
  position: fixed;
  bottom: 0;
  z-index: 2;
}
.bottom-nav li{
  display: block;
  width: 20%;
  height: 100%;
  float: left;
  font-size: 12px;
  text-align: center;
}
.active{
  color: #0096ff;
}
</style>
