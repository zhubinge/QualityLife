<template>
  <ul class="bottom-nav">
    <router-link to="/index/home" tag="li" active-class="active">
      <i class="iconfont">&#xe600;</i>
      <span>首页</span>
    </router-link>
    <router-link to="/detail/all" tag="li" active-class="active">
      <i class="iconfont">&#xe75b;</i>
      <span>全部商品</span>
    </router-link>
    <router-link to="/stroll" tag="li" active-class="active">
      <i class="iconfont">&#xe627;</i>
      <span>闲逛</span>
    </router-link>
    <router-link to="/cart" tag="li" active-class="active">
      <i class="iconfont">&#xe60d;</i>
      <span>购物车</span>
    </router-link>
    <router-link to="/mine" tag="li" active-class="active">
      <i class="iconfont">&#xe636;</i>
      <span>我的</span>
    </router-link>
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
  width: 7.5rem;
  height: 1rem;
  border-top: 0.02rem solid #ddd;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background: #fff;
}
.bottom-nav li{
  display: block;
  width: 20%;
  height: 100%;
  float: left;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 0.1rem;
  text-align: center;
  font-size: 12px;
  color: #ffda75;
}
.bottom-nav li i{
  display: block;
  width: 100%;
  height: 50%;
  line-height: 0.5rem;
}
.bottom-nav li i{
  font-size: 24px;
}
.bottom-nav li.active{
  color: #fff;
  background: #ffda75;
}
</style>
