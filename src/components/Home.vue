<template>
  <div class="home">
    <mt-loadmore class="mint-loadmore-top" slot="top">
    hhhhhhh
    </mt-loadmore>
    <home-top></home-top>
    <mt-loadmore :top-method="loadTop" 
      :bottom-method="loadBottom" 
      :bottom-all-loaded="allLoaded" 
      ref="loadmore">
      <router-view class="child-view"></router-view>
    </mt-loadmore>
  	<bottom-nav></bottom-nav>
  </div>
</template>
<script>
import HomeTop from './home/HomeTop'
import BottomNav from './BottomNav'
export default {
  name: 'home',
  components:{
    HomeTop,
    BottomNav
  }
}
</script>
<style scoped>
.home{
	width: 7.5rem;
	height: 100%;
	background: #fff;
}
</style>
