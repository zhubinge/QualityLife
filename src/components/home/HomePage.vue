<template>
<div>
  <home-page-carousels></home-page-carousels>
  <home-page-list></home-page-list>
</div>
</template>
<script>
import HomePageCarousels from './com/HomePageCarousels'
import HomePageList from './com/HomePageList'
export default {
  name: 'home-page',
  components:{
    HomePageCarousels,
    HomePageList
  }
}
</script>
<style scoped>
div{
  width: 100%;
  background: #f4f4f4;
}
</style>
