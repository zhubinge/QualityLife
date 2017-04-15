<template>
<div class="home">
	<home-top></home-top>
    <router-view class="child-view"></router-view>
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
