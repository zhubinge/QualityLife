<template>
<div>
	<home-top></home-top>
    <router-view class="child-view"></router-view>
	<bottom-nav></bottom-nav>
</div>
</template>
<script>
import HomeTop from './home/HomeTop'
import BottomNav from './BottomNav'
export default {
  name: 'stroll',
  components:{
    HomeTop,
    BottomNav
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
