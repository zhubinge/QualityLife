<template>
	<header class="home-top">
  <div class="one">
    <h2 class="l">Quality Life</h2>
    <a href="/search">搜索</a>
  </div>
<!--     <input type="text" class="two" placeholder="搜索商家、商品" onfocus="this.placeholder=''" onblur="this.placeholder='搜索商家、商品'"/> -->
    <div class="two">
      <ul class="twoul">
        <router-link to="/index/home" tag="li" active-class="active" class="l">首页</router-link>
        <router-link to="/index/newdetail" tag="li" active-class="active" class="l">新品</router-link>
        <router-link to="/index/household" tag="li" active-class="active" class="l">家务</router-link>
        <router-link to="/index/kitchen" tag="li" active-class="active" class="l">下厨</router-link>
        <router-link to="/index/life" tag="li" active-class="active" class="l">家居服</router-link>
        <router-link to="/index/decorate" tag="li" active-class="active" class="l">生活</router-link>
        <router-link to="/index/bedding" tag="li" active-class="active" class="l">软装</router-link>
        <router-link to="/index/travel" tag="li" active-class="active" class="l">床品</router-link>
        <router-link to="/index/know" tag="li" active-class="active" class="l">工作和旅行</router-link>
        <router-link to="/index/know" tag="li" active-class="active" class="l">了解angleVC</router-link> 
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: 'home-top',
  data () {
    return {
    }
  },
  components: {
  },
  beforeCreate () {
    fetch('static/json/shop_page.json')
      .then(response => response.json())
      .then(data => {
        this.items_shopList = data.home_shopList
        this.carousels = data.home_carousels
      })
  }
}
</script>
<style scoped>
header.home-top{
  width: 100%;
  color: #fff;
  text-align: center;
  overflow: hidden;
  border-bottom: 0.04rem solid #ccc;
}
.home-top .one{
  width: 6.9rem;
  height: 1rem;
  line-height: 1rem;
  background: #ffda75;
  padding: 0 0.3rem;
}
.home-top .one h2{
  width: 4.9rem;
  height: 100%;
  padding-left: 1rem;
}
.home-top .one a{
  display: inline-block;
  width: 1rem;
  height: 100%;
  color: #fff;
}
.home-top .two{
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: scroll;
  background: #fff;
}
.home-top .two .twoul{
  width: 21rem;
}
.home-top .two .twoul li{
  width: 1.1rem;
  height: 0.9rem;
  line-height: 1rem;
  padding: 0 0.2rem;
}
.home-top .two .twoul li:nth-child(9),.home-top .two .twoul li:nth-child(10){
  width: 2rem;
}
li{
  color: #3e3e3e;
}
.active{
  color: #ffda75;
  border-bottom: 0.1rem solid #ffda75;
}
/*.home-top input.two{
  width: 100%;
  height: 0.7rem;
  border-radius: 0.35rem;
  text-indent: 1em;
  text-align: center;
  margin: 0.2rem 0;
}
::-webkit-input-placeholder {
  text-align: center;
  color: #666;
 }
::-moz-placeholder {
  text-align: center;
  color: #666;
}
:-ms-input-placeholder { 
  text-align: center;
  color: #666;
}
input:-moz-placeholder {
  text-align: center;
  color: #666;
}*/
</style>
